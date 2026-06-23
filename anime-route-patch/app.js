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
  var TEST_SHARE_BASE_URL = "https://exam.kara251.com/tests/anime-summer-2026/";

  QUIZ_DATA.traits.forEach(function (trait) {
    traitLookup[trait.id] = trait;
  });

  QUIZ_DATA.questions.forEach(function (question, questionIndex) {
    question.__index = questionIndex;
    question.options.forEach(function (option, optionIndex) {
      option.__index = optionIndex;
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
  var gateToastTimer = 0;
  var marqueeTracks = [
    document.getElementById("marquee-top-track"),
    document.getElementById("marquee-bottom-track")
  ];

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

  function pad(number) {
    return number < 10 ? "0" + number : "" + number;
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
    elements.forEach(function (element) {
      element.classList.remove("anim-in");
    });
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        elements.forEach(function (element) {
          element.classList.add("anim-in");
        });
      });
    });
  }

  function showPage(page) {
    [pageHome, pageQuiz, pageResult].forEach(function (currentPage) {
      currentPage.classList.remove("active");
    });
    page.classList.add("active");
    window.scrollTo(0, 0);
    triggerAnims(page);
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
  }

  function applyLang() {
    applyStaticUi();

    if (pageQuiz.classList.contains("active")) {
      renderQuestion();
    }

    if (pageResult.classList.contains("active") && lastRanking) {
      renderResult(lastRanking);
    }
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
    return shuffle(QUIZ_DATA.works).slice(0, Math.min(18, QUIZ_DATA.works.length));
  }

  function renderMarqueeItem(work) {
    var item = document.createElement("div");
    var image = document.createElement("img");

    item.className = "marquee-item";
    image.src = work.image;
    image.alt = "";
    image.loading = "lazy";
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
    current = 0;
    history = [];
    lastRanking = null;
    questionSet = buildQuestionSet();
    resetScores();
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

  function selectOption(index) {
    var question = questionSet[current];
    var option = question.options[index];
    var buttons = quizOptions.querySelectorAll(".quiz-option");

    history.push({
      question: current,
      delta: Object.assign({}, option.scores)
    });

    applyScores(option.scores);

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
        }, 280);
      } else {
        progressFill.style.width = "100%";
        setTimeout(showResult, 350);
      }
    }, 300);
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
    }, 100);
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

  function setResultImage(work) {
    var image = document.getElementById("result-img");

    image.classList.remove("loaded");
    image.alt = localizedName(work);
    image.onload = function () {
      image.classList.add("loaded");
    };
    image.onerror = function () {
      image.classList.remove("loaded");
    };
    image.src = work.image;
  }

  function buildShareUrl() {
    var url = new URL(TEST_SHARE_BASE_URL);
    url.searchParams.set("lang", lang);
    return url.toString();
  }

  function renderResultQr() {
    var qrContainer = document.getElementById("result-qr-code");
    var qrUrl = document.getElementById("result-qr-url");
    var shareUrl = buildShareUrl();

    if (qrUrl) {
      qrUrl.textContent = shareUrl.replace(/^https?:\/\//, "");
    }

    if (!qrContainer || !window.QRCode) {
      return;
    }

    qrContainer.innerHTML = "";

    new window.QRCode(qrContainer, {
      text: shareUrl,
      width: 112,
      height: 112,
      colorDark: "#1A1A1A",
      colorLight: "#FAF8F4",
      correctLevel: window.QRCode.CorrectLevel.M
    });
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
    document.getElementById("result-anime-name").textContent = localizedName(top.work);
    document.getElementById("result-anime-romaji").textContent = localizedSecondaryName(top.work);
    document.getElementById("result-type-name").textContent = buildTypeLabel(top);
    document.getElementById("result-description").textContent = description;

    renderKeywords(top);
    renderList("alt-list", recommendations, "good");
    renderList("avoid-list", avoids, "avoid");
    renderResultQr();
  }

  function showResult() {
    lastRanking = buildRanking();
    renderResult(lastRanking);
    showPage(pageResult);
  }

  function restart() {
    showPage(pageHome);
  }

  function waitForNextFrame() {
    return new Promise(function (resolve) {
      requestAnimationFrame(function () {
        requestAnimationFrame(resolve);
      });
    });
  }

  function shareResult() {
    var card = document.getElementById("result-card");
    var button = document.getElementById("btn-share");
    var strings = ui();
    var originalText = button.textContent;

    button.textContent = strings.shareSaving;
    button.disabled = true;
    card.classList.add("is-exporting");

    waitForNextFrame().then(function () {
      return html2canvas(card, {
        backgroundColor: "#FAF8F4",
        scale: 2,
        useCORS: true
      });
    }).then(function (canvas) {
      var link = document.createElement("a");
      link.download = strings.downloadName;
      link.href = canvas.toDataURL("image/png");
      link.click();
    }).catch(function () {
      alert(strings.shareFailed);
    }).finally(function () {
      card.classList.remove("is-exporting");
      button.textContent = originalText;
      button.disabled = false;
    });
  }

  function onLocaleChange() {
    lang = localeApi.setLocale(langSelect.value);
    applyLang();
  }

  function closeLanguageGate() {
    var gate = document.getElementById("lang-gate");

    if (!gate) {
      return;
    }

    gate.classList.add("is-hidden");
    document.body.classList.remove("lang-gate-open");
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
    }, 1800);
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
      window.setTimeout(closeLanguageGate, 180);
      showLanguageToast();
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
    }, 720);
  }

  function selectGateLocale(localeCode, button) {
    var originRect = button ? button.getBoundingClientRect() : null;
    var label = button ? button.textContent : "";

    lang = localeApi.setLocale(localeCode);
    applyLang();
    animateGateGuide(originRect, label);
  }

  function initLanguageGate() {
    var gate = document.getElementById("lang-gate");

    if (!gate) {
      return;
    }

    document.body.classList.add("lang-gate-open");
  }

  function init() {
    document.getElementById("btn-start").addEventListener("click", startQuiz);
    document.getElementById("btn-retry").addEventListener("click", restart);
    document.getElementById("btn-share").addEventListener("click", shareResult);
    btnPrev.addEventListener("click", goBack);
    langSelect.addEventListener("change", onLocaleChange);
    window.addEventListener("resize", refreshMarqueeLayout);

    populateLanguageSelect();
    resetScores();
    applyLang();
    initLanguageGate();
    populateMarquees();
    triggerAnims(pageHome);
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
