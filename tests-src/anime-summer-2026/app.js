(function () {
  var localeApi = window.ExamKaraLocale;
  var quizI18n = window.ExamKaraQuizI18n;
  var lang = localeApi.getLocale();
  var current = 0;
  var scores = {};
  var history = [];
  var questionSet = [];
  var lastRanking = null;
  var questionCount = Math.min(QUIZ_DATA.questionCount || 15, QUIZ_DATA.questions.length);
  var traitLookup = {};
  var TEST_PUBLIC_URL = "https://exam.kara251.com/tests/anime-summer-2026/";
  var exportCache = { key: "", blob: null };
  var previewObjectUrl = "";
  var motionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  var seenPages = {};

  function motionMs(ms) {
    return motionQuery && motionQuery.matches ? 0 : ms;
  }

  QUIZ_DATA.traits.forEach(function (trait) {
    traitLookup[trait.id] = trait;
  });

  QUIZ_DATA.questions.forEach(function (question, questionIndex) {
    var baselines = {};

    question.__index = questionIndex;

    QUIZ_DATA.traits.forEach(function (trait) {
      var total = 0;

      question.options.forEach(function (option) {
        total += option.scores[trait.id] || 0;
      });

      baselines[trait.id] = total / Math.max(question.options.length, 1);
    });

    question.__traitBaselines = baselines;
    question.options.forEach(function (option, optionIndex) {
      var deltaScores = {};

      option.__index = optionIndex;

      QUIZ_DATA.traits.forEach(function (trait) {
        var key = trait.id;
        var value = (option.scores[key] || 0) - baselines[key];

        if (Math.abs(value) > 0.0001) {
          deltaScores[key] = value;
        }
      });

      option.__deltaScores = deltaScores;
    });
  });

  var pageHome = document.getElementById("page-home");
  var pageQuiz = document.getElementById("page-quiz");
  var pageResult = document.getElementById("page-result");
  var progressText = document.getElementById("progress-text");
  var progressFill = document.getElementById("progress-fill");
  var quizBody = document.getElementById("quiz-body");
  var quizQuestion = document.getElementById("quiz-question");
  var quizOptions = document.getElementById("quiz-options");
  var btnPrev = document.getElementById("btn-prev");
  var langSelect = document.getElementById("lang-select");
  var homeScrollHint = document.getElementById("home-scroll-hint");
  var gateToastTimer = 0;
  var homeScrollHintTimer = 0;
  var marqueeTracks = Array.prototype.slice.call(document.querySelectorAll("[data-marquee-track]"));
  var issueDateTargets = document.querySelectorAll("[data-issue-date]");
  var traitPalette = ["#E8384F", "#1A8C7E", "#3F3934", "#7E776E", "#B9B1A5"];

  function ui() {
    return quizI18n.getUi(lang);
  }

  function localizeLooseText(text) {
    return quizI18n.localizeStyledText(lang, text);
  }

  function localizedQuestion(question) {
    return quizI18n.getQuestion(lang, question.__index, question.text);
  }

  function localizedOption(question, option) {
    return quizI18n.getOption(lang, question.__index, option.__index, option.text);
  }

  function localizedName(work) {
    return quizI18n.getPrimaryWorkName(lang, work);
  }

  function localizedSecondaryName(work) {
    return quizI18n.getSecondaryWorkName(lang, work);
  }

  function setDocumentLocale() {
    var config = localeApi.getConfig(lang);
    var strings = ui();

    document.documentElement.lang = config.htmlLang;
    document.body.dataset.locale = lang;
    document.body.dataset.script = config.script;
    document.title = strings.pageTitle;
    document.querySelector('meta[name="description"]').setAttribute("content", strings.pageDescription);
    document.querySelector('meta[property="og:title"]').setAttribute("content", strings.ogTitle);
    document.querySelector('meta[property="og:description"]').setAttribute("content", strings.ogDescription);
  }

  function setIssueDateLabels() {
    var date = new Date();
    var formatted = [
      date.getFullYear(),
      pad(date.getMonth() + 1),
      pad(date.getDate())
    ].join(".");

    issueDateTargets.forEach(function (target) {
      target.textContent = formatted;
    });
  }

  function pad(number) {
    return number < 10 ? "0" + number : "" + number;
  }

  function buildUrlFor(baseUrl) {
    var url = new URL(baseUrl, window.location.href);

    url.search = "";
    url.hash = "";
    return url.toString();
  }

  function syncCurrentUrl() {
    try {
      window.history.replaceState(
        null,
        "",
        buildUrlFor(window.location.pathname)
      );
    } catch {}
  }

  function shuffle(items) {
    var list = items.slice();
    var index;
    var temp;
    var swapIndex;

    for (index = list.length - 1; index > 0; index--) {
      swapIndex = Math.floor(Math.random() * (index + 1));
      temp = list[index];
      list[index] = list[swapIndex];
      list[swapIndex] = temp;
    }

    return list;
  }

  function resetScores() {
    scores = {};
    QUIZ_DATA.traits.forEach(function (trait) {
      scores[trait.id] = 0;
    });
  }

  function triggerAnims(page) {
    var elements = page.querySelectorAll(".anim");
    var chars = Array.prototype.slice.call(page.querySelectorAll(".char"));
    var pageKey = page.id || "page";

    // Full entrance choreography plays once per page per session;
    // repeat visits collapse to a quick uniform fade (.anim-quick).
    page.classList.toggle("anim-quick", Boolean(seenPages[pageKey]));
    seenPages[pageKey] = true;

    elements.forEach(function (element) {
      element.classList.remove("anim-in");
    });
    chars.forEach(function (char) {
      char.style.animation = "none";
    });
    void page.offsetHeight;

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        elements.forEach(function (element) {
          element.classList.add("anim-in");
        });
        chars.forEach(function (char) {
          char.style.animation = "";
        });
      });
    });
  }

  function schedulePageEntryCleanup(page) {
    window.clearTimeout(page.__entryTimer);
    page.__entryTimer = window.setTimeout(function () {
      page.classList.remove("page-entering");
    }, motionMs(1080));
  }

  function hideHomeScrollHint() {
    window.clearTimeout(homeScrollHintTimer);

    if (homeScrollHint) {
      homeScrollHint.classList.remove("is-mobile-visible");
    }
  }

  function canShowHomeScrollHint() {
    var scrollRoot = document.scrollingElement || document.documentElement;

    return Boolean(
      homeScrollHint &&
      pageHome &&
      pageHome.classList.contains("active") &&
      !document.body.classList.contains("lang-gate-open") &&
      window.innerWidth <= 860 &&
      window.scrollY < 18 &&
      scrollRoot.scrollHeight - window.innerHeight > 96
    );
  }

  function updateHomeScrollHint(options) {
    var immediate = Boolean(options && options.immediate);

    if (!homeScrollHint) {
      return;
    }

    window.clearTimeout(homeScrollHintTimer);

    if (!canShowHomeScrollHint()) {
      homeScrollHint.classList.remove("is-mobile-visible");
      return;
    }

    if (homeScrollHint.classList.contains("is-mobile-visible")) {
      return;
    }

    if (immediate) {
      homeScrollHint.classList.add("is-mobile-visible");
      return;
    }

    homeScrollHintTimer = window.setTimeout(function () {
      if (canShowHomeScrollHint()) {
        homeScrollHint.classList.add("is-mobile-visible");
      }
    }, 520);
  }

  function scheduleMarqueeRefresh() {
    requestAnimationFrame(function () {
      requestAnimationFrame(refreshMarqueeLayout);
    });
  }

  function showPage(page) {
    var leaving = [pageHome, pageQuiz, pageResult].find(function (p) {
      return p.classList.contains("active");
    });

    if (!leaving || leaving === page) {
      [pageHome, pageQuiz, pageResult].forEach(function (p) {
        p.classList.remove("active", "page-entering");
      });
      page.classList.add("active");
      page.classList.remove("page-entering");
      page.classList.add("page-entering");
      window.scrollTo(0, 0);
      triggerAnims(page);
      schedulePageEntryCleanup(page);
      scheduleMarqueeRefresh();
      updateHomeScrollHint();
      return;
    }

    if (page !== pageHome) {
      hideHomeScrollHint();
    }

    leaving.classList.add("page-leaving");

    window.setTimeout(function () {
      leaving.classList.remove("active", "page-leaving");
      page.classList.remove("page-entering");
      page.classList.add("active", "page-entering");
      window.scrollTo(0, 0);
      triggerAnims(page);
      schedulePageEntryCleanup(page);
      scheduleMarqueeRefresh();
      updateHomeScrollHint();
    }, motionMs(440));
  }

  function populateLanguageSelect() {
    localeApi.locales.forEach(function (locale) {
      var option = document.createElement("option");
      option.value = locale.code;
      option.textContent = locale.label;
      langSelect.appendChild(option);
    });
    langSelect.value = lang;
  }

  function renderLanguageGateButtons() {
    var container = document.getElementById("lang-gate-options");

    if (!container) {
      return;
    }

    container.innerHTML = "";

    localeApi.locales.forEach(function (locale) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "lang-gate-button" + (locale.code === lang ? " is-current" : "");
      button.textContent = locale.label;
      button.setAttribute("aria-pressed", locale.code === lang ? "true" : "false");
      button.addEventListener("click", function () {
        selectGateLocale(locale.code, button);
      });
      container.appendChild(button);
    });
  }

  function wrapStaticCharElements() {
    [
      { id: "home-title-primary", baseDelay: 260 },
      { id: "home-tag-text", baseDelay: 360 },
      { id: "home-feature-text", baseDelay: 520 },
      { id: "home-title-secondary", baseDelay: 340 },
      { id: "result-headline-text", baseDelay: 220 },
      { id: "result-traits-heading", baseDelay: 320 }
    ].forEach(function (item) {
      var element = document.getElementById(item.id);

      if (element) {
        wrapChars(element, item.baseDelay);
      }
    });
  }

  function applyStaticUi() {
    var strings = ui();

    setDocumentLocale();
    langSelect.value = lang;

    document.querySelectorAll("[data-i18n], [data-ui]").forEach(function (element) {
      var key = element.getAttribute("data-i18n") || element.getAttribute("data-ui");
      if (strings[key]) {
        element.textContent = strings[key];
      }
    });

    renderLanguageGateButtons();
    wrapStaticCharElements();
  }

  function applyLang() {
    applyStaticUi();

    if (pageQuiz.classList.contains("active")) {
      renderQuestion();
    }

    if (pageResult.classList.contains("active") && lastRanking) {
      renderResult(lastRanking);
    }

    updateHomeScrollHint({ immediate: true });
  }

  function updatePrevBtn() {
    btnPrev.disabled = current === 0;
  }

  function buildQuestionSet() {
    var buckets = {};
    var selected = [];
    var leftovers = [];

    QUIZ_DATA.questions.forEach(function (question) {
      if (!buckets[question.bucket]) {
        buckets[question.bucket] = [];
      }
      buckets[question.bucket].push(question);
    });

    Object.keys(buckets).forEach(function (bucket) {
      var local = shuffle(buckets[bucket]);
      if (local.length > 0) {
        selected.push(local[0]);
      }
      Array.prototype.push.apply(leftovers, local.slice(1));
    });

    if (selected.length < questionCount) {
      Array.prototype.push.apply(
        selected,
        shuffle(leftovers).slice(0, questionCount - selected.length)
      );
    }

    return shuffle(selected).slice(0, questionCount).map(function (question) {
      return Object.assign({}, question, {
        options: shuffle(question.options)
      });
    });
  }

  function buildMarqueeSequence() {
    var preferred = [];
    var seen = {};

    if (Array.isArray(QUIZ_DATA.marqueeIds)) {
      QUIZ_DATA.marqueeIds.forEach(function (id) {
        var work = QUIZ_DATA.works.find(function (entry) {
          return entry.id === id;
        });

        if (work && !seen[work.id]) {
          seen[work.id] = true;
          preferred.push(work);
        }
      });
    }

    return shuffle(preferred.concat(QUIZ_DATA.works.filter(function (work) {
      return !seen[work.id];
    }))).slice(0, Math.min(18, QUIZ_DATA.works.length));
  }

  function renderMarqueeItem(work) {
    var item = document.createElement("div");
    var image = document.createElement("img");

    item.className = "marquee-item";
    image.src = work.image;
    image.alt = "";
    image.loading = "eager";
    image.fetchPriority = "high";
    image.decoding = "async";
    item.appendChild(image);

    return item;
  }

  function updateMarqueeLoopWidth(track) {
    var loopLength = Number(track.dataset.loopLength || 0);
    var items = track.querySelectorAll(".marquee-item");
    var secondLoopFirst = items[loopLength];

    if (!loopLength || !secondLoopFirst) {
      return;
    }

    track.style.setProperty("--loop-shift", secondLoopFirst.offsetLeft + "px");
  }

  function refreshMarqueeLayout() {
    marqueeTracks.forEach(function (track) {
      if (track) {
        updateMarqueeLoopWidth(track);
      }
    });
  }

  function populateMarquees() {
    marqueeTracks.forEach(function (track) {
      var sequence;

      if (!track) {
        return;
      }

      sequence = buildMarqueeSequence();
      track.innerHTML = "";
      track.dataset.loopLength = String(sequence.length);
      sequence.concat(sequence).forEach(function (work) {
        track.appendChild(renderMarqueeItem(work));
      });
    });

    requestAnimationFrame(refreshMarqueeLayout);
  }

  function startQuiz() {
    closeImagePreview();
    current = 0;
    history = [];
    lastRanking = null;
    questionSet = buildQuestionSet();
    exportCache = { key: "", blob: null };
    resetScores();
    syncCurrentUrl();
    showPage(pageQuiz);
    renderQuestion();
  }

  function renderQuestion() {
    var question = questionSet[current];
    var labels = ["A", "B", "C", "D"];

    progressText.textContent = pad(current + 1) + " / " + pad(questionCount);
    progressFill.style.width = current / questionCount * 100 + "%";
    quizQuestion.textContent = localizedQuestion(question);
    quizOptions.innerHTML = "";
    updatePrevBtn();

    question.options.forEach(function (option, index) {
      var button = document.createElement("button");
      button.className = "quiz-option";
      button.style.setProperty("--i", index);
      button.textContent = labels[index] + ". " + localizedOption(question, option);
      button.addEventListener("click", function () {
        selectOption(index);
      });
      quizOptions.appendChild(button);
    });
  }

  function applyScores(delta) {
    Object.keys(delta).forEach(function (key) {
      scores[key] = (scores[key] || 0) + delta[key];
    });
  }

  function scoreDeltaForOption(question, option) {
    if (option && option.__deltaScores) {
      return option.__deltaScores;
    }

    return option ? option.scores : {};
  }

  function selectOption(index) {
    var question = questionSet[current];
    var option = question.options[index];
    var buttons = quizOptions.querySelectorAll(".quiz-option");
    var delta = scoreDeltaForOption(question, option);

    history.push({
      question: current,
      delta: Object.assign({}, delta)
    });

    applyScores(delta);

    buttons.forEach(function (button) {
      button.disabled = true;
    });
    buttons[index].classList.add("selected");

    setTimeout(function () {
      current += 1;
      if (current < questionCount) {
        quizBody.classList.add("exiting");
        setTimeout(function () {
          renderQuestion();
          quizBody.classList.remove("exiting");
          quizBody.classList.add("entering");
          void quizBody.offsetHeight;
          quizBody.classList.remove("entering");
        }, motionMs(380));
      } else {
        progressFill.style.width = "100%";
        setTimeout(showResult, motionMs(420));
      }
    }, motionMs(260));
  }

  function goBack() {
    var last;
    var reverseDelta = {};

    if (history.length === 0) {
      return;
    }

    last = history.pop();
    Object.keys(last.delta).forEach(function (key) {
      reverseDelta[key] = -last.delta[key];
    });

    applyScores(reverseDelta);
    current = last.question;
    quizBody.classList.add("entering");
    setTimeout(function () {
      renderQuestion();
      quizBody.classList.remove("entering");
    }, 180);
  }

  function compatibilityFor(work) {
    var raw = 0;
    var weightSum = 0;
    var matches = [];
    var clashes = [];

    QUIZ_DATA.traits.forEach(function (trait) {
      var userScore = scores[trait.id] || 0;
      var workWeight = work.traits[trait.id] || 0;
      var contribution = userScore * workWeight;

      raw += contribution;
      weightSum += Math.abs(workWeight);

      if (!userScore || !workWeight) {
        return;
      }

      if (contribution >= 0) {
        matches.push({
          key: trait.id,
          direction: workWeight > 0 ? 1 : -1,
          value: Math.abs(contribution)
        });
      } else {
        clashes.push({
          key: trait.id,
          direction: workWeight > 0 ? 1 : -1,
          value: Math.abs(contribution)
        });
      }
    });

    matches.sort(function (left, right) {
      return right.value - left.value;
    });
    clashes.sort(function (left, right) {
      return right.value - left.value;
    });

    return {
      work: work,
      raw: raw,
      score: raw / Math.max(weightSum, 1),
      matches: matches,
      clashes: clashes
    };
  }

  function buildRanking() {
    return QUIZ_DATA.works
      .map(compatibilityFor)
      .sort(function (left, right) {
        if (right.score !== left.score) {
          return right.score - left.score;
        }

        if (right.raw !== left.raw) {
          return right.raw - left.raw;
        }

        return left.work.id.localeCompare(right.work.id);
      });
  }

  function traitLabel(key, direction) {
    var trait = traitLookup[key];

    if (!trait) {
      return "";
    }

    return quizI18n.translateTrait(lang, direction > 0 ? trait.pos : trait.neg);
  }

  function topTraitLabels(entry, amount, mode) {
    var source = mode === "avoid" ? entry.clashes : entry.matches;

    return source.slice(0, amount).map(function (item) {
      return traitLabel(item.key, item.direction);
    }).filter(Boolean);
  }

  function buildReason(entry, mode) {
    var strings = ui();
    var phrases = topTraitLabels(entry, 3, mode);

    if (phrases.length === 0) {
      return mode === "good" ? strings.goodFallback : strings.avoidFallback;
    }

    if (mode === "good") {
      return strings.goodPrefix + quizI18n.joinList(lang, phrases) + strings.goodSuffix;
    }

    return strings.avoidPrefix + quizI18n.joinList(lang, phrases) + strings.avoidSuffix;
  }

  function buildLeadReason(entry) {
    var strings = ui();
    var phrases = topTraitLabels(entry, 3, "good");

    if (phrases.length === 0) {
      return "";
    }

    return strings.leadPrefix + quizI18n.joinList(lang, phrases) + strings.leadSuffix;
  }

  function buildTypeLabel(entry) {
    return quizI18n.getTypeLabel(lang, entry.work.typeName, topTraitLabels(entry, 2, "good"));
  }

  function buildResultDescription(entry) {
    var phrases = topTraitLabels(entry, 3, "good");
    var typeLabel = buildTypeLabel(entry);
    var title = localizedName(entry.work);

    if (lang === "tc") {
      if (phrases.length === 0) {
        return "《" + title + "》這種" + typeLabel + "，和你這一輪的電波最合拍。";
      }

      return "你這一輪明顯更偏好" + quizI18n.joinList(lang, phrases) + "，所以《" + title + "》這種" + typeLabel + "最容易正中你的口味。";
    }

    if (lang === "en") {
      if (phrases.length === 0) {
        return title + " comes out as the cleanest hit this round.";
      }

      return title + " lines up because you kept leaning toward " + quizI18n.joinList(lang, phrases) + ". Its " + typeLabel.toLowerCase() + " energy lands closest to your answers.";
    }

    if (lang === "ja") {
      if (phrases.length === 0) {
        return "今回いちばん綺麗に刺さったのは「" + title + "」でした。";
      }

      return "今回のあなたは " + quizI18n.joinList(lang, phrases) + " に強く寄っていました。だからこそ「" + title + "」の " + typeLabel + " がいちばんきれいに噛み合います。";
    }

    if (lang === "hx") {
      if (phrases.length === 0) {
        return "《" + title + "》這種" + typeLabel + "，基本就4伱這波一眼對電波の那掛。";
      }

      return "伱這波明顯更吃" + quizI18n.joinList(lang, phrases) + "，所以《" + title + "》這種" + typeLabel + "最容易跟伱同頻，基本一眼就能踩坑入坑。";
    }

    if (lang === "wy") {
      if (phrases.length === 0) {
        return "《" + title + "》之" + typeLabel + "，最與汝此輪氣味相契。";
      }

      return "汝此輪明顯偏好" + quizI18n.joinList(lang, phrases) + "，故《" + title + "》此種" + typeLabel + "最能相應，最宜先補。";
    }

    if (lang === "yue") {
      if (phrases.length === 0) {
        return "《" + title + "》呢種" + typeLabel + "，今輪同你個頻率最啱。";
      }

      return "你今輪明顯係食" + quizI18n.joinList(lang, phrases) + "，所以《" + title + "》呢種" + typeLabel + "最易中你口味。";
    }

    if (phrases.length === 0) {
      return localizeLooseText("這輪的你更貼近這種") + typeLabel + localizeLooseText("的頻率。");
    }

    return localizeLooseText("這輪的你更貼近這種") + typeLabel + localizeLooseText("的頻率。") + " " + localizeLooseText("你明顯偏好") + quizI18n.joinList(lang, phrases) + localizeLooseText("，所以它比其他作品更容易命中你。");
  }

  function renderKeywords(entry) {
    var container = document.getElementById("result-keywords");
    var phrases = topTraitLabels(entry, 4, "good");

    container.innerHTML = "";

    phrases.forEach(function (phrase) {
      var chip = document.createElement("span");
      chip.textContent = phrase;
      container.appendChild(chip);
    });
  }

  function renderList(containerId, entries, mode) {
    var container = document.getElementById(containerId);

    container.innerHTML = "";

    entries.forEach(function (entry) {
      var item = document.createElement("div");
      var title = document.createElement("div");
      var why = document.createElement("div");

      item.className = "result-section-item";
      title.className = "result-section-item-name";
      why.className = "result-section-item-why";

      title.textContent = (mode === "avoid" ? "× " : "") + localizedName(entry.work);
      why.textContent = buildReason(entry, mode === "avoid" ? "avoid" : "good");

      item.appendChild(title);
      item.appendChild(why);
      container.appendChild(item);
    });
  }

  function setCoverLayout(width, height) {
    var wrap = document.getElementById("result-img-wrap");
    var ratio;
    var mode;

    if (!wrap) {
      return;
    }

    if (!width || !height) {
      wrap.style.setProperty("--cover-ratio", "0.72");
      wrap.setAttribute("data-cover-mode", "portrait");
      return;
    }

    ratio = width / height;

    if (ratio >= 1.08) {
      mode = "landscape";
    } else if (ratio >= 0.92) {
      mode = "square";
    } else {
      mode = "portrait";
    }

    wrap.style.setProperty(
      "--cover-ratio",
      String(Math.max(0.68, Math.min(1.22, ratio)))
    );
    wrap.setAttribute("data-cover-mode", mode);
  }

  function setResultImage(work) {
    var image = document.getElementById("result-img");
    var wrap = document.getElementById("result-img-wrap");

    image.classList.remove("loaded");
    if (wrap) {
      wrap.style.setProperty("--cover-ratio", "0.72");
      wrap.setAttribute("data-cover-mode", "portrait");
    }
    image.alt = localizedName(work);
    image.onload = function () {
      setCoverLayout(image.naturalWidth, image.naturalHeight);
      image.classList.add("loaded");
    };
    image.onerror = function () {
      setCoverLayout(0, 0);
      image.classList.remove("loaded");
    };
    image.src = work.image;

    if (image.complete) {
      if (image.naturalWidth && image.naturalHeight) {
        setCoverLayout(image.naturalWidth, image.naturalHeight);
        image.classList.add("loaded");
      } else {
        setCoverLayout(0, 0);
      }
    }
  }

  function buildTestUrl() {
    return buildUrlFor(TEST_PUBLIC_URL);
  }

  function renderResultQr() {
    var qrContainer = document.getElementById("result-qr-code");
    var qrUrl = document.getElementById("result-qr-url");
    var publicUrl = buildTestUrl();

    if (qrUrl) {
      qrUrl.textContent = publicUrl.replace(/^https?:\/\//, "");
    }

    if (!qrContainer || !window.QRCode) {
      return;
    }

    qrContainer.innerHTML = "";

    new window.QRCode(qrContainer, {
      text: publicUrl,
      width: 112,
      height: 112,
      colorDark: "#1A1A1A",
      colorLight: "#FAF8F4",
      correctLevel: window.QRCode.CorrectLevel.M
    });
  }

  function wrapChars(el, baseDelayMs) {
    var text = el.textContent;
    var base = baseDelayMs || 0;

    el.setAttribute("aria-label", text);
    el.innerHTML = "";
    el.style.setProperty("--char-base", base + "ms");

    text.split("").forEach(function (ch, i) {
      if (ch === " ") {
        el.appendChild(document.createTextNode(" "));
        return;
      }
      var span = document.createElement("span");
      span.className = "char";
      span.setAttribute("aria-hidden", "true");
      span.style.setProperty("--ci", i);
      span.textContent = ch;
      el.appendChild(span);
    });
  }

  function buildTraitDistribution() {
    var maxima = {};
    var distribution = [];

    QUIZ_DATA.traits.forEach(function (trait) {
      maxima[trait.id] = 0;
    });

    questionSet.forEach(function (question) {
      QUIZ_DATA.traits.forEach(function (trait) {
        var best = 0;

        question.options.forEach(function (option) {
          best = Math.max(best, Math.abs(scoreDeltaForOption(question, option)[trait.id] || 0));
        });

        maxima[trait.id] += best;
      });
    });

    distribution = QUIZ_DATA.traits.map(function (trait) {
      var raw = scores[trait.id] || 0;
      var direction = raw >= 0 ? 1 : -1;
      var ceiling = maxima[trait.id] || 1;
      var percent = Math.round(Math.min(1, Math.abs(raw) / ceiling) * 100);

      return {
        id: trait.id,
        raw: raw,
        label: traitLabel(trait.id, direction),
        percent: percent,
        direction: direction
      };
    }).filter(function (item) {
      return item.percent > 0;
    }).sort(function (left, right) {
      return right.percent - left.percent;
    }).slice(0, 5);

    if (distribution.length === 0) {
      distribution = QUIZ_DATA.traits.slice(0, 4).map(function (trait) {
        return {
          id: trait.id,
          raw: 0,
          label: traitLabel(trait.id, 1),
          percent: 0,
          direction: 1
        };
      });
    }

    return distribution;
  }

  function renderTraitBars() {
    var container = document.getElementById("result-traits");
    var traitScores = buildTraitDistribution();

    if (!container) {
      return traitScores;
    }

    container.innerHTML = "";

    traitScores.forEach(function (t, i) {
      var color = traitPalette[i] || traitPalette[traitPalette.length - 1];
      var row = document.createElement("div");
      row.className = "trait-row";

      var label = document.createElement("div");
      label.className = "trait-label";
      label.textContent = t.label;

      var track = document.createElement("div");
      track.className = "trait-bar-track";

      var fill = document.createElement("div");
      fill.className = "trait-bar-fill";
      fill.style.width = t.percent + "%";
      fill.style.setProperty("--bar-d", (i * 0.1 + 0.28) + "s");
      fill.style.setProperty("--bar-color", color);

      var value = document.createElement("div");
      value.className = "trait-value";
      value.textContent = String(t.percent);
      value.style.setProperty("--bar-color", color);

      track.appendChild(fill);
      row.appendChild(label);
      row.appendChild(track);
      row.appendChild(value);
      container.appendChild(row);
    });

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        container.querySelectorAll(".trait-bar-fill").forEach(function (fill) {
          fill.classList.add("bar-in");
        });
      });
    });

    return traitScores.map(function (trait, index) {
      return Object.assign({}, trait, {
        color: traitPalette[index] || traitPalette[traitPalette.length - 1]
      });
    });
  }

  function setResultSideMarker(distribution) {
    var markerText = document.getElementById("result-side-marker-text");
    var marker = markerText ? markerText.parentElement : null;
    var dominant = distribution && distribution[0];
    var strings = ui();

    if (markerText) {
      markerText.textContent = dominant ? dominant.label : strings.traitsTitle;
    }

    if (marker) {
      marker.style.color = dominant ? dominant.color : "";
      marker.style.borderColor = dominant ? dominant.color : "";
    }
  }

  function renderResult(ranking) {
    var top = ranking[0];
    var recommendations = ranking.slice(1, 4);
    var avoids = ranking.slice(-3).reverse();
    var description = buildResultDescription(top);
    var leadReason = buildLeadReason(top);

    if (leadReason) {
      description += " " + leadReason;
    }

    setResultImage(top.work);

    var nameEl = document.getElementById("result-anime-name");
    nameEl.textContent = localizedName(top.work);
    wrapChars(nameEl, 300);

    document.getElementById("result-anime-romaji").textContent = localizedSecondaryName(top.work);
    document.getElementById("result-type-name").textContent = buildTypeLabel(top);
    document.getElementById("result-description").textContent = description;

    renderKeywords(top);
    setResultSideMarker(renderTraitBars());
    renderList("alt-list", recommendations, "good");
    renderList("avoid-list", avoids, "avoid");
    renderResultQr();
  }

  function showResult() {
    lastRanking = buildRanking();
    exportCache = { key: "", blob: null };
    renderResult(lastRanking);
    syncCurrentUrl();
    showPage(pageResult);
  }

  function restart() {
    closeImagePreview();
    lastRanking = null;
    exportCache = { key: "", blob: null };
    syncCurrentUrl();
    showPage(pageHome);
  }

  function waitForNextFrame() {
    return new Promise(function (resolve) {
      requestAnimationFrame(function () {
        requestAnimationFrame(resolve);
      });
    });
  }

  function waitForResultAssets() {
    return new Promise(function (resolve) {
      var image = document.getElementById("result-img");
      var settled = false;

      function done() {
        if (settled) {
          return;
        }

        settled = true;
        resolve();
      }

      if (!image || !image.src || image.complete) {
        window.setTimeout(done, 40);
        return;
      }

      image.addEventListener("load", done, { once: true });
      image.addEventListener("error", done, { once: true });
      window.setTimeout(done, 1200);
    });
  }

  function waitForFonts() {
    if (document.fonts && document.fonts.ready) {
      return document.fonts.ready.catch(function () {
        return undefined;
      });
    }

    return Promise.resolve();
  }

  function prepareExportClone(clonedDocument) {
    var clonedCard = clonedDocument.getElementById("result-card");
    var clonedImage = clonedDocument.getElementById("result-img");
    var clonedPlaceholder = clonedDocument.getElementById("result-img-ph");

    if (!clonedCard) {
      return;
    }

    clonedCard.classList.add("is-exporting");

    Array.prototype.slice.call(
      clonedCard.querySelectorAll("[data-export-hidden='true']")
    ).forEach(function (node) {
      node.remove();
    });

    Array.prototype.slice.call(
      clonedCard.querySelectorAll(".anim, .char, .trait-bar-fill")
    ).forEach(function (node) {
      node.style.animation = "none";
      node.style.transform = "none";
      node.style.opacity = "1";
    });

    Array.prototype.slice.call(
      clonedCard.querySelectorAll(".char")
    ).forEach(function (node) {
      node.style.display = "inline-block";
    });

    Array.prototype.slice.call(
      clonedCard.querySelectorAll(".trait-bar-fill")
    ).forEach(function (node) {
      node.style.clipPath = "inset(0 0 0 0)";
    });

    if (clonedImage) {
      clonedImage.classList.add("loaded");
      clonedImage.style.opacity = "1";
      clonedImage.style.animation = "none";
      clonedImage.style.transform = "none";
    }

    if (clonedPlaceholder && clonedImage && clonedImage.getAttribute("src")) {
      clonedPlaceholder.style.opacity = "0";
    }
  }

  function canvasToBlob(canvas) {
    return new Promise(function (resolve, reject) {
      if (!canvas) {
        reject(new Error("missing-canvas"));
        return;
      }

      if (canvas.toBlob) {
        canvas.toBlob(function (blob) {
          if (blob) {
            resolve(blob);
            return;
          }

          reject(new Error("empty-blob"));
        }, "image/png");
        return;
      }

      try {
        var dataUrl = canvas.toDataURL("image/png");
        var parts = dataUrl.split(",");
        var mime = parts[0].match(/data:(.*?);base64/)[1];
        var binary = window.atob(parts[1]);
        var length = binary.length;
        var bytes = new Uint8Array(length);
        var index;

        for (index = 0; index < length; index++) {
          bytes[index] = binary.charCodeAt(index);
        }

        resolve(new Blob([bytes], { type: mime }));
      } catch (error) {
        reject(error);
      }
    });
  }

  function captureResultBlob() {
    var card = document.getElementById("result-card");
    var cardRect = card.getBoundingClientRect();

    card.classList.add("is-exporting");
    return waitForNextFrame().then(function () {
      return waitForResultAssets();
    }).then(function () {
      return waitForFonts();
    }).then(function () {
      return waitForNextFrame();
    }).then(function () {
      return html2canvas(card, {
        backgroundColor: "#FAF8F4",
        scale: 2,
        useCORS: true,
        logging: false,
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
        width: Math.ceil(card.scrollWidth),
        height: Math.ceil(card.scrollHeight),
        windowWidth: Math.max(
          document.documentElement.clientWidth,
          Math.ceil(cardRect.width)
        ),
        windowHeight: Math.max(
          document.documentElement.clientHeight,
          Math.ceil(cardRect.height)
        ),
        onclone: prepareExportClone
      });
    }).then(canvasToBlob).finally(function () {
      card.classList.remove("is-exporting");
    });
  }

  function buildExportSignature() {
    var top = lastRanking && lastRanking[0];

    return [lang, top ? top.work.id : "", current, questionSet.length].join("|");
  }

  function getResultImageBlob() {
    var signature = buildExportSignature();

    if (exportCache.key === signature && exportCache.blob) {
      return Promise.resolve(exportCache.blob);
    }

    return captureResultBlob().then(function (blob) {
      exportCache = {
        key: signature,
        blob: blob
      };
      return blob;
    });
  }

  function downloadBlob(blob, filename) {
    var link = document.createElement("a");
    var objectUrl = window.URL.createObjectURL(blob);

    link.download = filename;
    link.href = objectUrl;
    link.click();

    window.setTimeout(function () {
      window.URL.revokeObjectURL(objectUrl);
    }, 1200);
  }

  function revokePreviewUrl() {
    if (!previewObjectUrl) {
      return;
    }

    window.URL.revokeObjectURL(previewObjectUrl);
    previewObjectUrl = "";
  }

  function closeImagePreview() {
    var modal = document.getElementById("image-preview-modal");
    var image = document.getElementById("image-preview-image");

    if (!modal) {
      return;
    }

    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("image-preview-open");

    if (image) {
      image.removeAttribute("src");
    }

    revokePreviewUrl();
  }

  function openImagePreview() {
    var button = document.getElementById("btn-preview");
    var modal = document.getElementById("image-preview-modal");
    var image = document.getElementById("image-preview-image");
    var strings = ui();
    var originalText = button ? button.textContent : "";

    if (!button || !modal || !image || button.disabled || !lastRanking) {
      return;
    }

    button.disabled = true;
    button.textContent = strings.previewLoading;

    getResultImageBlob().then(function (blob) {
      revokePreviewUrl();
      previewObjectUrl = window.URL.createObjectURL(blob);
      image.src = previewObjectUrl;
      image.alt = strings.previewTitle;
      modal.hidden = false;
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("image-preview-open");
    }).catch(function () {
      alert(strings.previewFailed);
    }).finally(function () {
      button.textContent = originalText;
      button.disabled = false;
    });
  }

  function shareResult() {
    var button = document.getElementById("btn-share");
    var strings = ui();
    var originalText = button.textContent;

    if (!button || button.disabled || !lastRanking) {
      return;
    }

    button.disabled = true;
    button.textContent = strings.shareSaving;

    getResultImageBlob().then(function (blob) {
      downloadBlob(blob, strings.downloadName);
    }).catch(function () {
      alert(strings.shareFailed);
    }).finally(function () {
      button.textContent = originalText;
      button.disabled = false;
    });
  }

  function onLocaleChange() {
    closeImagePreview();
    lang = localeApi.setLocale(langSelect.value);
    exportCache = { key: "", blob: null };
    applyLang();
    syncCurrentUrl();
  }

  function revealInitialPageFromLanguageGate() {
    if (!pageHome || !pageHome.classList.contains("active")) {
      return;
    }

    pageHome.classList.remove("page-entering");
    void pageHome.offsetHeight;

    requestAnimationFrame(function () {
      pageHome.classList.add("page-entering");
      triggerAnims(pageHome);
      schedulePageEntryCleanup(pageHome);
      scheduleMarqueeRefresh();
      updateHomeScrollHint();
    });
  }

  function closeLanguageGate() {
    var gate = document.getElementById("lang-gate");

    if (!gate) {
      return;
    }

    hideHomeScrollHint();
    gate.classList.add("is-hidden");
    document.body.classList.remove("lang-gate-open");
    window.setTimeout(revealInitialPageFromLanguageGate, 420);
  }

  function showLanguageToast() {
    var toast = document.getElementById("lang-guide-toast");
    var langControl = document.querySelector(".lang-control");

    if (!toast || !langControl) {
      return;
    }

    window.clearTimeout(gateToastTimer);
    toast.classList.add("is-visible");
    langControl.classList.add("is-guided");

    gateToastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
      langControl.classList.remove("is-guided");
    }, 3600);
  }

  function animateGateGuide(originRect, label) {
    var gate = document.getElementById("lang-gate");
    var langControl = document.querySelector(".lang-control");
    var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!gate || !langControl) {
      closeLanguageGate();
      return;
    }

    if (prefersReducedMotion || !originRect) {
      gate.classList.add("is-dismissing");
      showLanguageToast();
      window.setTimeout(closeLanguageGate, prefersReducedMotion ? 0 : 820);
      return;
    }

    var targetRect = langControl.getBoundingClientRect();
    var chip = document.createElement("div");
    var deltaX = targetRect.left + targetRect.width / 2 - (originRect.left + originRect.width / 2);
    var deltaY = targetRect.top + targetRect.height / 2 - (originRect.top + originRect.height / 2);

    chip.className = "lang-fly-chip";
    chip.textContent = label;
    chip.style.left = originRect.left + originRect.width / 2 + "px";
    chip.style.top = originRect.top + originRect.height / 2 + "px";
    document.body.appendChild(chip);

    requestAnimationFrame(function () {
      gate.classList.add("is-dismissing");
      chip.style.transform = "translate(calc(-50% + " + deltaX + "px), calc(-50% + " + deltaY + "px)) scale(0.76)";
      chip.style.opacity = "0.16";
      showLanguageToast();
    });

    window.setTimeout(function () {
      chip.remove();
      closeLanguageGate();
    }, 1160);
  }

  function selectGateLocale(localeCode, button) {
    var originRect = button ? button.getBoundingClientRect() : null;
    var label = button ? button.textContent : "";

    lang = localeApi.setLocale(localeCode);
    applyLang();
    animateGateGuide(originRect, label);
  }

  function initLanguageGate(shouldOpen) {
    var gate = document.getElementById("lang-gate");

    if (!gate) {
      return false;
    }

    if (shouldOpen) {
      gate.classList.remove("is-hidden", "is-dismissing");
      document.body.classList.add("lang-gate-open");
      return true;
    }

    gate.classList.add("is-hidden");
    document.body.classList.remove("lang-gate-open");
    revealInitialPageFromLanguageGate();
    return false;
  }

  function init() {
    document.getElementById("btn-start").addEventListener("click", startQuiz);
    document.getElementById("btn-retry").addEventListener("click", restart);
    document.getElementById("btn-share").addEventListener("click", shareResult);
    document.getElementById("btn-preview").addEventListener("click", openImagePreview);
    document.getElementById("image-preview-close").addEventListener("click", closeImagePreview);
    document.getElementById("image-preview-backdrop").addEventListener("click", closeImagePreview);
    btnPrev.addEventListener("click", goBack);
    langSelect.addEventListener("change", onLocaleChange);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeImagePreview();
      }
    });
    window.addEventListener("resize", function () {
      refreshMarqueeLayout();
      updateHomeScrollHint({ immediate: true });
    });
    window.addEventListener("scroll", updateHomeScrollHint, { passive: true });
    window.addEventListener("load", function () {
      refreshMarqueeLayout();
      updateHomeScrollHint({ immediate: true });
    });

    populateLanguageSelect();
    resetScores();
    setIssueDateLabels();
    applyLang();
    syncCurrentUrl();
    initLanguageGate(localeApi.shouldShowLanguageGate());
    populateMarquees();
    updateHomeScrollHint({ immediate: true });

    if (!document.getElementById("lang-gate")) {
      triggerAnims(pageHome);
      schedulePageEntryCleanup(pageHome);
    }
  }

  if (window.ExamKaraRuntime && window.ExamKaraRuntime.ensureFresh) {
    window.ExamKaraRuntime.ensureFresh().then(function (ready) {
      if (ready) {
        init();
      }
    });
  } else {
    init();
  }
})();
