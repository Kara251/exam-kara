(function () {
  var localeApi = window.ExamKaraLocale;
  var i18n = window.ExamKaraGalI18n;
  var quizData = window.GALGAME_TEST_DATA;
  var lang = localeApi.getLocale();
  var current = 0;
  var scores = {};
  var history = [];
  var questionSet = [];
  var lastRanking = [];
  var works = [];
  var worksByScene = {};
  var libraryMeans = {};
  var sceneIndex = 0;
  var currentSceneKey = quizData.sceneOrder[0];
  var currentSpotlightWork = null;
  var worksLoadError = null;
  var sceneTimer = 0;
  var gateToastTimer = 0;
  var homeScrollHintTimer = 0;
  var exportCache = { key: "", blob: null };
  var previewObjectUrl = "";
  var scenePickOffsets = {};
  var questionCount = Math.min(quizData.questionCount || quizData.questions.length, quizData.questions.length);

  var pageHome = document.getElementById("page-home");
  var pageQuiz = document.getElementById("page-quiz");
  var pageResult = document.getElementById("page-result");
  var progressText = document.getElementById("progress-text");
  var progressFill = document.getElementById("progress-fill");
  var quizBody = document.getElementById("quiz-body");
  var quizQuestion = document.getElementById("quiz-question");
  var quizOptions = document.getElementById("quiz-options");
  var btnPrev = document.getElementById("btn-prev");
  var btnStart = document.getElementById("btn-start");
  var btnShare = document.getElementById("btn-share");
  var btnPreview = document.getElementById("btn-preview");
  var btnRetry = document.getElementById("btn-retry");
  var langSelect = document.getElementById("lang-select");
  var homeScrollHint = document.getElementById("home-scroll-hint");
  var issueDateTargets = document.querySelectorAll("[data-issue-date]");
  var worksReadyPromise;

  quizData.questions.forEach(function (question, questionIndex) {
    var baselines = {};

    question.__index = questionIndex;

    quizData.traits.forEach(function (trait) {
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

      quizData.traits.forEach(function (trait) {
        var key = trait.id;
        var value = (option.scores[key] || 0) - baselines[key];

        if (Math.abs(value) > 0.0001) {
          deltaScores[key] = value;
        }
      });

      option.__deltaScores = deltaScores;
    });
  });

  function ui() {
    return i18n.getUi(lang);
  }

  function t(value) {
    return i18n.pick(value, lang);
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function pad(number) {
    return number < 10 ? "0" + number : String(number);
  }

  function segmentText(text) {
    if (window.Intl && typeof window.Intl.Segmenter === "function") {
      return Array.from(
        new window.Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(text),
        function (part) {
          return part.segment;
        }
      );
    }

    return Array.from(text);
  }

  function setAnimatedText(node, text) {
    if (!node) {
      return;
    }

    node.textContent = "";
    segmentText(text).forEach(function (glyph, index) {
      var span = document.createElement("span");
      span.className = "glyph";
      span.style.animationDelay = index * 0.03 + "s";
      span.textContent = glyph;
      node.appendChild(span);
    });
  }

  function shuffle(items) {
    var list = items.slice();
    var index;
    var swapIndex;
    var temp;

    for (index = list.length - 1; index > 0; index -= 1) {
      swapIndex = Math.floor(Math.random() * (index + 1));
      temp = list[index];
      list[index] = list[swapIndex];
      list[swapIndex] = temp;
    }

    return list;
  }

  function getTraitMeta(id) {
    return quizData.traits.find(function (trait) {
      return trait.id === id;
    });
  }

  function getLocalizedTraitLabel(id) {
    var trait = getTraitMeta(id);
    return trait ? t(trait.label) : id;
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

  function applyStaticCopy() {
    var strings = ui();

    document.querySelectorAll("[data-ui]").forEach(function (node) {
      var key = node.getAttribute("data-ui");
      if (strings[key]) {
        if (node.id === "quiz-question" || node.id === "result-game-name") {
          setAnimatedText(node, strings[key]);
        } else {
          node.textContent = strings[key];
        }
      }
    });
  }

  function setIssueDateLabels() {
    var date = new Date();
    var label = [date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDate())].join(".");

    issueDateTargets.forEach(function (target) {
      target.textContent = label;
    });
  }

  function resetScores() {
    scores = {};

    quizData.traits.forEach(function (trait) {
      scores[trait.id] = 0;
    });
  }

  function triggerAnims(page) {
    var nodes = page.querySelectorAll(".anim");

    nodes.forEach(function (node) {
      node.classList.remove("anim-in");
    });

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        nodes.forEach(function (node) {
          node.classList.add("anim-in");
        });
      });
    });
  }

  function showPage(page) {
    [pageHome, pageQuiz, pageResult].forEach(function (entry) {
      entry.classList.remove("active");
    });

    page.classList.add("active");
    window.scrollTo(0, 0);
    triggerAnims(page);
    updateHomeScrollHint({ immediate: page === pageHome });
  }

  function canShowHomeScrollHint() {
    var scrollRoot = document.scrollingElement || document.documentElement;

    return Boolean(
      homeScrollHint &&
      pageHome.classList.contains("active") &&
      !document.body.classList.contains("lang-gate-open") &&
      window.innerWidth <= 860 &&
      window.scrollY < 20 &&
      scrollRoot.scrollHeight - window.innerHeight > 88
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

    if (immediate) {
      homeScrollHint.classList.add("is-mobile-visible");
      return;
    }

    homeScrollHintTimer = window.setTimeout(function () {
      if (canShowHomeScrollHint()) {
        homeScrollHint.classList.add("is-mobile-visible");
      }
    }, 560);
  }

  function setPosterTrack(trackId, list) {
    var track = document.getElementById(trackId);
    var covers = list.slice();
    var html = "";
    var baseItemWidth = 100;

    if (!track || covers.length === 0) {
      return;
    }

    while (covers.length < 12) {
      covers = covers.concat(list);
    }

    covers = covers.slice(0, Math.max(12, list.length));

    covers.forEach(function (item) {
      html += '<div class="poster-item"><img src="' + item.coverSrc + '" alt=""></div>';
    });

    html += html;
    track.innerHTML = html;
    track.style.setProperty("--loop-shift", "-" + covers.length * baseItemWidth + "px");
  }

  function barrierScore(label) {
    if (!label) {
      return 3;
    }

    if (label.indexOf("低中") !== -1) {
      return 2;
    }

    if (label.indexOf("中高") !== -1) {
      return 4;
    }

    if (label.indexOf("低") !== -1) {
      return 1;
    }

    if (label.indexOf("高") !== -1) {
      return 5;
    }

    return 3;
  }

  function lengthScore(label) {
    var matches = String(label || "").match(/\d+/g);
    var value = 24;

    if (matches && matches.length) {
      value = matches.reduce(function (sum, entry) {
        return sum + Number(entry);
      }, 0) / matches.length;
    }

    if (value <= 10) {
      return 1;
    }

    if (value <= 25) {
      return 2;
    }

    if (value <= 45) {
      return 3;
    }

    if (value <= 70) {
      return 4;
    }

    return 5;
  }

  function deriveScene(work) {
    var vector = work.vector || {};
    var corpus = [
      work.type || "",
      work.suitable_personality || "",
      work.tone || "",
      (work.tags || []).join(" ")
    ].join(" ");

    if ((vector.horror || 0) >= 4 || (vector.adult_risk || 0) >= 4 || /哥特|猎奇|心理恐怖|黑暗|昭和侦探|克苏鲁/.test(corpus)) {
      return "cathedral";
    }

    if ((vector.sci_fi || 0) >= 4 || (vector.mystery || 0) >= 4 || /科幻|时间|赛博|悬疑|密室|真相|并行世界/.test(corpus)) {
      return "signal";
    }

    if ((vector.fantasy || 0) >= 4 || (vector.action || 0) >= 4 || (vector.gameplay || 0) >= 4 || /魔术|奇幻|战争|机甲|武士|圣杯|战国|征服/.test(corpus)) {
      return "forge";
    }

    if (((vector.slice_of_life || 0) >= 4 && (vector.tearjerker || 0) >= 4) || /夏日|离岛|治愈|机器人少女|滑翔机|天空/.test(corpus)) {
      return "shore";
    }

    if (((vector.romance || 0) >= 4 && (vector.comedy || 0) >= 3) || /废萌|恋爱喜剧|咖啡馆|大小姐|甜/.test(corpus)) {
      return "parade";
    }

    if (((vector.romance || 0) >= 4 && (vector.tearjerker || 0) >= 3) || /泣系|家庭|冬季|音乐|三角恋|校园恋爱/.test(corpus)) {
      return "petal";
    }

    if (/历史|雨|文学|音乐学院|近代|哲学|舞台/.test(corpus)) {
      return "archive";
    }

    if ((vector.slice_of_life || 0) >= 3) {
      return "shore";
    }

    if ((vector.comedy || 0) >= 3) {
      return "parade";
    }

    if ((vector.romance || 0) >= 3) {
      return "petal";
    }

    return "archive";
  }

  function buildLibraryMeans() {
    quizData.traits.forEach(function (trait) {
      var total = 0;

      works.forEach(function (work) {
        total += work.vector[trait.id] || 0;
      });

      libraryMeans[trait.id] = total / Math.max(1, works.length);
    });
  }

  function buildWorksByScene() {
    worksByScene = {};
    scenePickOffsets = {};

    quizData.sceneOrder.forEach(function (scene) {
      worksByScene[scene] = [];
      scenePickOffsets[scene] = 0;
    });

    works.forEach(function (work) {
      if (!worksByScene[work.scene]) {
        worksByScene[work.scene] = [];
        scenePickOffsets[work.scene] = 0;
      }

      worksByScene[work.scene].push(work);
    });

    Object.keys(worksByScene).forEach(function (scene) {
      worksByScene[scene] = shuffle(worksByScene[scene]);
    });
  }

  function enhanceWork(raw, index) {
    return {
      id: raw.id,
      __index: index,
      title_cn: raw.title_cn,
      title_original: raw.title_original,
      recommended_entry: raw.recommended_entry,
      type: raw.type,
      tags: raw.tags || [],
      suitable_personality: raw.suitable_personality,
      tone: raw.tone,
      entry_barrier: raw.entry_barrier,
      estimated_length: raw.estimated_length,
      r18_status: raw.r18_status,
      r18_level: raw.r18_level || 0,
      adult_gate_recommended: raw.adult_gate_recommended,
      version_note: raw.version_note,
      vector: raw.vector || {},
      coverSrc: "results/" + raw.cover_file,
      scene: deriveScene(raw),
      entryScore: barrierScore(raw.entry_barrier),
      lengthScore: lengthScore(raw.estimated_length)
    };
  }

  async function loadWorks() {
    var response;
    var payload;

    try {
      response = await fetch("results/galgame_personality_vectors.json?ts=" + Date.now(), {
        cache: "no-store"
      });

      if (!response.ok) {
        throw new Error("Library request failed");
      }

      payload = await response.json();
      works = payload.map(enhanceWork);
      buildLibraryMeans();
      buildWorksByScene();

      if (!currentSpotlightWork) {
        currentSpotlightWork = getSceneSpotlight(currentSceneKey, true);
      }

      applyScene(currentSceneKey, currentSpotlightWork);
      updateHomeScrollHint({ immediate: true });
    } catch (error) {
      worksLoadError = error;
      console.error(error);
      document.getElementById("home-spotlight-name").textContent = "Library unavailable";
      document.getElementById("home-spotlight-note").textContent = ui().pageDescription;
    }
  }

  function getSceneSpotlight(sceneKey, advance) {
    var list = worksByScene[sceneKey] || works;
    var pointer;

    if (!list || list.length === 0) {
      return null;
    }

    pointer = scenePickOffsets[sceneKey] || 0;

    if (advance) {
      scenePickOffsets[sceneKey] = (pointer + 1) % list.length;
    }

    return list[pointer % list.length];
  }

  function localizedSceneMeta(sceneKey) {
    var meta = quizData.sceneMeta[sceneKey] || quizData.sceneMeta.signal;

    return {
      label: t(meta.label),
      deck: t(meta.deck),
      note: t(meta.note),
      layout: meta.layout
    };
  }

  function localizedPrimaryTitle(work) {
    if (!work) {
      return "";
    }

    if (lang === "en" || lang === "ja") {
      return work.title_original || work.title_cn;
    }

    return work.title_cn || work.title_original;
  }

  function localizedSecondaryTitle(work) {
    if (!work) {
      return "";
    }

    if (lang === "en" || lang === "ja") {
      return work.title_cn || "";
    }

    return work.title_original || "";
  }

  function buildHomeSpotlightNote(work, sceneKey) {
    var scene = localizedSceneMeta(sceneKey);
    var traitLabel = getLocalizedTraitLabel(topTraitsFromWork(work, 1)[0]);
    var tc = localizedPrimaryTitle(work) + " 這一掛更偏 " + scene.label + "，也很容易先勾到你對 " + traitLabel + " 的反應。";
    var en = localizedPrimaryTitle(work) + " sits firmly in the " + scene.label.toLowerCase() + " lane, and usually lands first if your radar is up for " + traitLabel.toLowerCase() + ".";
    var ja = localizedPrimaryTitle(work) + " は " + scene.label + " 側の象徴で、今回は " + traitLabel + " へ先に反応する人ほど触れやすい一本です。";

    return t({ tc: tc, en: en, ja: ja });
  }

  function topTraitsFromWork(work, count) {
    return quizData.traits
      .slice()
      .sort(function (left, right) {
        return (work.vector[right.id] || 0) - (work.vector[left.id] || 0);
      })
      .slice(0, count || 3)
      .map(function (trait) {
        return trait.id;
      });
  }

  function applyScene(sceneKey, spotlight) {
    var scene = localizedSceneMeta(sceneKey);
    var posterWorks;
    var coverSet;
    var quizCover = document.getElementById("quiz-scene-cover");

    currentSceneKey = sceneKey;
    currentSpotlightWork = spotlight || currentSpotlightWork || getSceneSpotlight(sceneKey, true);

    document.body.dataset.scene = sceneKey;
    document.body.dataset.layout = scene.layout;

    document.getElementById("home-band-text").textContent = scene.label;
    document.getElementById("quiz-band-text").textContent = ui().quizRoute;
    document.getElementById("result-band-text").textContent = ui().resultRoute;
    document.getElementById("home-scene-label").textContent = scene.label;
    document.getElementById("home-scene-deck").textContent = scene.deck;
    document.getElementById("home-scene-note").textContent = scene.note;
    document.getElementById("home-watermark").textContent = scene.label;
    document.getElementById("quiz-scene-label").textContent = scene.label;
    document.getElementById("quiz-scene-note").textContent = scene.note;

    if (currentSpotlightWork) {
      document.getElementById("home-spotlight-name").textContent = localizedPrimaryTitle(currentSpotlightWork);
      document.getElementById("home-spotlight-note").textContent = buildHomeSpotlightNote(currentSpotlightWork, sceneKey);
      setCoverImage("home-cover-a", currentSpotlightWork.coverSrc, localizedPrimaryTitle(currentSpotlightWork));
      coverSet = pickPosterWorks(sceneKey, 3, currentSpotlightWork);
      setCoverImage("home-cover-b", coverSet[1] ? coverSet[1].coverSrc : currentSpotlightWork.coverSrc, coverSet[1] ? localizedPrimaryTitle(coverSet[1]) : localizedPrimaryTitle(currentSpotlightWork));
      setCoverImage("home-cover-c", coverSet[2] ? coverSet[2].coverSrc : currentSpotlightWork.coverSrc, coverSet[2] ? localizedPrimaryTitle(coverSet[2]) : localizedPrimaryTitle(currentSpotlightWork));
      if (quizCover) {
        setCoverImage("quiz-scene-cover", currentSpotlightWork.coverSrc, localizedPrimaryTitle(currentSpotlightWork));
      }
    }

    posterWorks = pickPosterWorks(sceneKey, 12, currentSpotlightWork);
    setPosterTrack("poster-track-home", posterWorks);
    setPosterTrack("poster-track-quiz", posterWorks.slice().reverse());
  }

  function setCoverImage(id, src, alt) {
    var image = document.getElementById(id);

    if (!image) {
      return;
    }

    image.src = src || "";
    image.alt = alt || "";
  }

  function pickPosterWorks(sceneKey, count, anchorWork) {
    var list = (worksByScene[sceneKey] || works).slice();
    var result = [];

    if (anchorWork) {
      result.push(anchorWork);
      list = list.filter(function (work) {
        return work.id !== anchorWork.id;
      });
    }

    result = result.concat(list).slice(0, count || 12);
    return result;
  }

  function stopSceneCycle() {
    window.clearInterval(sceneTimer);
    sceneTimer = 0;
  }

  function startSceneCycle() {
    stopSceneCycle();

    if (!works.length) {
      return;
    }

    applyScene(quizData.sceneOrder[sceneIndex], getSceneSpotlight(quizData.sceneOrder[sceneIndex], true));

    sceneTimer = window.setInterval(function () {
      sceneIndex = (sceneIndex + 1) % quizData.sceneOrder.length;
      applyScene(quizData.sceneOrder[sceneIndex], getSceneSpotlight(quizData.sceneOrder[sceneIndex], true));
    }, 8200);
  }

  function buildQuestionSet() {
    return shuffle(quizData.questions).slice(0, questionCount).map(function (question) {
      return {
        id: question.id,
        __index: question.__index,
        text: question.text,
        options: shuffle(question.options.slice())
      };
    });
  }

  function scoreForScene(sceneKey) {
    var value = 0;

    if (sceneKey === "signal") {
      value = scores.mystery * 1.25 + scores.sci_fi * 1.25 + scores.gameplay * 0.35;
    } else if (sceneKey === "petal") {
      value = scores.romance * 1.2 + scores.tearjerker * 0.8;
    } else if (sceneKey === "cathedral") {
      value = scores.horror * 1.25 + scores.adult_risk * 0.95 + scores.mystery * 0.25;
    } else if (sceneKey === "forge") {
      value = scores.fantasy * 1.12 + scores.action * 1.06 + scores.gameplay * 0.48 + scores.length * 0.24;
    } else if (sceneKey === "parade") {
      value = scores.comedy * 1.25 + scores.romance * 0.42 + scores.slice_of_life * 0.18;
    } else if (sceneKey === "shore") {
      value = scores.slice_of_life * 1.25 + scores.tearjerker * 0.68 - scores.adult_risk * 0.24;
    } else if (sceneKey === "archive") {
      value = scores.entry_barrier * 0.82 + scores.length * 0.56 + scores.tearjerker * 0.34 + scores.mystery * 0.24;
    }

    return value;
  }

  function preferredScene() {
    var bestScene = currentSceneKey;
    var bestScore = -Infinity;

    quizData.sceneOrder.forEach(function (sceneKey) {
      var value = scoreForScene(sceneKey);

      if (value > bestScore) {
        bestScore = value;
        bestScene = sceneKey;
      }
    });

    return bestScene;
  }

  function profileLevel(id, max) {
    return clamp(2 + (scores[id] || 0), 0, max);
  }

  function buildRanking() {
    var sceneKey = preferredScene();
    var adultPref = profileLevel("adult_risk", 4);
    var barrierPref = profileLevel("entry_barrier", 5);
    var lengthPref = profileLevel("length", 5);

    return works
      .map(function (work) {
        var total = 0;
        var contributions = {};
        var barrierGap;
        var lengthGap;

        quizData.traits.forEach(function (trait) {
          var pref = scores[trait.id] || 0;
          var mean = libraryMeans[trait.id] || 0;
          var diff = (work.vector[trait.id] || 0) - mean;
          var piece = pref * diff * (trait.weight || 1);

          contributions[trait.id] = piece;
          total += piece;
        });

        total += work.scene === sceneKey ? 1.25 : 0;

        if (adultPref < 1.2 && work.r18_level >= 3) {
          total -= (work.r18_level - 2.2) * 2.6;
        }

        if (adultPref < 0.8 && String(work.adult_gate_recommended || "").trim() === "是") {
          total -= 2.2;
        }

        barrierGap = work.entryScore - barrierPref;
        if (barrierGap > 0.6) {
          total -= barrierGap * 1.18;
        }

        lengthGap = work.lengthScore - lengthPref;
        if (lengthGap > 0.8) {
          total -= lengthGap * 0.88;
        }

        total += ((work.__index % 7) - 3) * 0.02;

        return {
          work: work,
          score: total,
          contributions: contributions
        };
      })
      .sort(function (left, right) {
        return right.score - left.score;
      });
  }

  function buildProfileTraits(count) {
    return quizData.traits
      .slice()
      .sort(function (left, right) {
        return (scores[right.id] || 0) - (scores[left.id] || 0);
      })
      .slice(0, count || 3)
      .map(function (trait) {
        return trait.id;
      });
  }

  function buildPositiveReason(entry) {
    var traits = Object.keys(entry.contributions)
      .filter(function (id) {
        return entry.contributions[id] > 0;
      })
      .sort(function (left, right) {
        return entry.contributions[right] - entry.contributions[left];
      })
      .slice(0, 2)
      .map(getLocalizedTraitLabel);
    var scene = localizedSceneMeta(entry.work.scene).label;
    var tc;
    var en;
    var ja;

    if (traits.length < 2) {
      traits = [scene];
    }

    tc = "同樣會咬住 " + traits.join("、") + "，只是整體更偏 " + scene + "。";
    en = "It also leans into " + traits.join(" and ") + ", just from a more " + scene.toLowerCase() + " angle.";
    ja = traits.join("・") + " にも触れつつ、全体は " + scene + " 側へ寄った一本です。";

    return t({ tc: tc, en: en, ja: ja });
  }

  function buildNegativeReason(entry) {
    var traits = Object.keys(entry.contributions)
      .filter(function (id) {
        return entry.contributions[id] < 0;
      })
      .sort(function (left, right) {
        return entry.contributions[left] - entry.contributions[right];
      })
      .slice(0, 2)
      .map(getLocalizedTraitLabel);
    var scene = localizedSceneMeta(entry.work.scene).label;
    var tc;
    var en;
    var ja;

    if (traits.length < 2) {
      traits = [scene];
    }

    tc = "它更往 " + traits.join("、") + " 那邊走，和你這輪的手感剛好錯開。";
    en = "It pulls harder toward " + traits.join(" and ") + ", which runs against this round's lean.";
    ja = traits.join("・") + " 側へ強く振れていて、今回の手触りとは少し逆向きです。";

    return t({ tc: tc, en: en, ja: ja });
  }

  function buildResultDescription(entry) {
    var work = entry.work;
    var topTraits = buildProfileTraits(3).map(getLocalizedTraitLabel);
    var scene = localizedSceneMeta(work.scene).label;
    var tc = localizedPrimaryTitle(work) + " 會衝到最前面，是因為你這輪明顯偏向 " + topTraits.join("、") + " 這幾種力道，整體氣味也和 " + scene + " 這一掛對得很準。它未必最輕鬆，但很容易直接咬住你現在想補的那種後勁。";
    var en = localizedPrimaryTitle(work) + " rises because this round pushed you toward " + topTraits.join(", ") + " and a distinctly " + scene.toLowerCase() + " kind of route. It is not always the lightest pick, but it lands very close to what you seem ready for right now.";
    var ja = "今回は " + topTraits.join("・") + " が強く、全体の気配も " + scene + " にかなり寄っていました。" + localizedPrimaryTitle(work) + " は、その傾きにまっすぐ噛み合う一本です。軽さよりも、いま欲しい手触りを優先してくるタイプです。";

    return t({ tc: tc, en: en, ja: ja });
  }

  function buildTraitDistribution() {
    return quizData.traits
      .map(function (trait) {
        return {
          trait: trait,
          level: clamp(((2.5 + (scores[trait.id] || 0)) / 5) * 100, 0, 100)
        };
      })
      .sort(function (left, right) {
        return right.level - left.level;
      })
      .slice(0, 6);
  }

  function renderTraits() {
    var container = document.getElementById("result-traits");

    container.innerHTML = "";

    buildTraitDistribution().forEach(function (entry) {
      var row = document.createElement("div");
      var label = document.createElement("span");
      var bar = document.createElement("div");
      var fill = document.createElement("div");
      var value = document.createElement("span");

      row.className = "trait-row";
      label.className = "trait-label";
      bar.className = "trait-bar";
      fill.className = "trait-fill";
      value.className = "trait-value";

      label.textContent = t(entry.trait.label);
      value.textContent = Math.round(entry.level);
      fill.style.background = entry.trait.color;

      bar.appendChild(fill);
      row.appendChild(label);
      row.appendChild(bar);
      row.appendChild(value);
      container.appendChild(row);

      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          fill.style.width = entry.level + "%";
        });
      });
    });
  }

  function renderSection(listId, entries, negative) {
    var container = document.getElementById(listId);

    container.innerHTML = "";

    entries.forEach(function (entry) {
      var item = document.createElement("div");
      var name = document.createElement("div");
      var why = document.createElement("div");

      item.className = "result-section-item";
      name.className = "result-section-item-name";
      why.className = "result-section-item-why";

      name.textContent = localizedPrimaryTitle(entry.work);
      why.textContent = negative ? buildNegativeReason(entry) : buildPositiveReason(entry);

      item.appendChild(name);
      item.appendChild(why);
      container.appendChild(item);
    });
  }

  function renderQRCode() {
    var container = document.getElementById("result-qr-code");
    var label = document.getElementById("result-qr-url");
    var publicUrl = quizData.publicUrl.replace(/^https?:\/\//, "");

    if (label) {
      label.textContent = publicUrl;
    }

    if (!container || !window.QRCode) {
      return;
    }

    container.innerHTML = "";

    new window.QRCode(container, {
      text: quizData.publicUrl,
      width: 102,
      height: 102,
      colorDark: "#191919",
      colorLight: "#FFFFFF",
      correctLevel: window.QRCode.CorrectLevel.M
    });
  }

  function renderResult() {
    var ranking = buildRanking();
    var top = ranking[0];
    var alternatives;
    var avoids;
    var scene;
    var subtitle;

    if (!top) {
      return;
    }

    lastRanking = ranking;
    scene = localizedSceneMeta(top.work.scene);
    subtitle = localizedSecondaryTitle(top.work);

    stopSceneCycle();
    applyScene(top.work.scene, top.work);
    showPage(pageResult);

    document.getElementById("result-band-text").textContent = ui().resultRoute;
    document.getElementById("result-scene-chip").textContent = scene.label;
    document.getElementById("result-game-name").textContent = localizedPrimaryTitle(top.work);
    document.getElementById("result-game-original").textContent = subtitle;
    document.getElementById("result-entry").textContent = top.work.recommended_entry || "—";
    document.getElementById("result-length").textContent = top.work.estimated_length || "—";
    document.getElementById("result-content").textContent = i18n.getContentLevelLabel(lang, top.work.r18_level) + " / " + i18n.getAdultGateLabel(lang, top.work);
    document.getElementById("result-description").textContent = buildResultDescription(top);
    document.getElementById("result-qr-url").textContent = quizData.publicUrl.replace(/^https?:\/\//, "");

    setCoverImage("result-img", top.work.coverSrc, localizedPrimaryTitle(top.work));
    renderTraits();

    document.getElementById("result-keywords").innerHTML = "";
    (top.work.tags || []).slice(0, 5).forEach(function (tag) {
      var chip = document.createElement("span");
      chip.textContent = "#" + tag;
      document.getElementById("result-keywords").appendChild(chip);
    });

    alternatives = ranking.slice(1, 6).filter(function (entry) {
      return entry.work.id !== top.work.id;
    }).slice(0, 3);

    avoids = ranking.slice().reverse().filter(function (entry) {
      return entry.work.id !== top.work.id;
    }).slice(0, 2);

    renderSection("alt-list", alternatives, false);
    renderSection("avoid-list", avoids, true);
    setPosterTrack("poster-track-result", pickPosterWorks(top.work.scene, 12, top.work));
    renderQRCode();
    exportCache = { key: "", blob: null };
  }

  function renderQuestion() {
    var question = questionSet[current];
    var letters = ["A", "B", "C", "D"];

    progressText.textContent = pad(current + 1) + " / " + pad(questionCount);
    progressFill.style.width = current / questionCount * 100 + "%";
    btnPrev.disabled = current === 0;

    setAnimatedText(quizQuestion, t(question.text));
    quizOptions.innerHTML = "";

    question.options.forEach(function (option, index) {
      var button = document.createElement("button");
      button.className = "quiz-option";
      button.type = "button";
      button.textContent = letters[index] + ". " + t(option.text);
      button.addEventListener("click", function () {
        selectOption(index);
      });
      quizOptions.appendChild(button);
    });
  }

  function refreshSceneFromScores() {
    var sceneKey = preferredScene();
    var spotlight = getSceneSpotlight(sceneKey, false) || currentSpotlightWork;

    applyScene(sceneKey, spotlight);
  }

  function selectOption(index) {
    var question = questionSet[current];
    var option = question.options[index];
    var buttons = quizOptions.querySelectorAll(".quiz-option");

    history.push({
      questionIndex: current,
      optionIndex: index,
      scores: Object.assign({}, option.__deltaScores)
    });

    Object.keys(option.__deltaScores).forEach(function (key) {
      scores[key] += option.__deltaScores[key];
    });

    buttons.forEach(function (button) {
      button.disabled = true;
    });

    if (buttons[index]) {
      buttons[index].classList.add("selected");
    }

    refreshSceneFromScores();

    window.setTimeout(function () {
      current += 1;

      if (current < questionCount) {
        quizBody.classList.add("is-transitioning");
        window.setTimeout(function () {
          renderQuestion();
          quizBody.classList.remove("is-transitioning");
        }, 260);
      } else {
        progressFill.style.width = "100%";
        window.setTimeout(renderResult, 420);
      }
    }, 320);
  }

  function goBack() {
    var last = history.pop();

    if (!last) {
      return;
    }

    Object.keys(last.scores).forEach(function (key) {
      scores[key] -= last.scores[key];
    });

    current = last.questionIndex;
    refreshSceneFromScores();
    renderQuestion();
  }

  function startQuiz() {
    stopSceneCycle();
    btnStart.disabled = true;

    worksReadyPromise
      .then(function () {
        if (!works.length) {
          throw worksLoadError || new Error("No galgame library available");
        }

        current = 0;
        history = [];
        lastRanking = [];
        resetScores();
        questionSet = buildQuestionSet();
        exportCache = { key: "", blob: null };
        showPage(pageQuiz);
        refreshSceneFromScores();
        renderQuestion();
      })
      .catch(function () {
        alert(ui().pageDescription);
      })
      .finally(function () {
        btnStart.disabled = false;
      });
  }

  function retry() {
    current = 0;
    history = [];
    lastRanking = [];
    exportCache = { key: "", blob: null };
    showPage(pageHome);
    startSceneCycle();
  }

  function cloneResultCard() {
    var original = document.getElementById("result-card");
    var stage = document.createElement("div");
    var clone = original.cloneNode(true);

    stage.style.position = "fixed";
    stage.style.left = "-99999px";
    stage.style.top = "0";
    stage.style.pointerEvents = "none";
    stage.style.zIndex = "-1";
    stage.style.width = "1120px";
    stage.appendChild(clone);
    document.body.appendChild(stage);

    clone.classList.add("is-exporting");
    clone.querySelectorAll("[data-export-hidden='true']").forEach(function (node) {
      node.remove();
    });
    clone.querySelectorAll(".poster-band-result").forEach(function (node) {
      node.remove();
    });

    return { stage: stage, clone: clone };
  }

  function waitForImages(root) {
    return Promise.all(
      Array.prototype.slice.call(root.querySelectorAll("img")).map(function (image) {
        return new Promise(function (resolve) {
          if (image.complete) {
            resolve();
            return;
          }

          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
        });
      })
    );
  }

  function resultSignature() {
    return [
      lang,
      lastRanking[0] ? lastRanking[0].work.id : "",
      history.length,
      preferredScene()
    ].join("|");
  }

  function buildPosterBlob() {
    var signature = resultSignature();
    var cloneBundle;

    if (exportCache.key === signature && exportCache.blob) {
      return Promise.resolve(exportCache.blob);
    }

    cloneBundle = cloneResultCard();

    return waitForImages(cloneBundle.clone)
      .then(function () {
        return window.html2canvas(cloneBundle.clone, {
          backgroundColor: "#F3EEE5",
          scale: 2,
          useCORS: true,
          logging: false
        });
      })
      .then(function (canvas) {
        return new Promise(function (resolve) {
          canvas.toBlob(function (blob) {
            resolve(blob);
          }, "image/png");
        });
      })
      .finally(function () {
        cloneBundle.stage.remove();
      })
      .then(function (blob) {
        exportCache = {
          key: signature,
          blob: blob
        };

        return blob;
      });
  }

  function shareResult() {
    var originalLabel = btnShare.textContent;

    btnShare.disabled = true;
    btnShare.textContent = ui().saveBusy;

    buildPosterBlob()
      .then(function (blob) {
        var url = window.URL.createObjectURL(blob);
        var anchor = document.createElement("a");

        anchor.href = url;
        anchor.download = "galgame-route-match.png";
        anchor.click();
        window.setTimeout(function () {
          window.URL.revokeObjectURL(url);
        }, 1000);
      })
      .catch(function () {
        alert(ui().saveFailed);
      })
      .finally(function () {
        btnShare.disabled = false;
        btnShare.textContent = originalLabel;
      });
  }

  function closeImagePreview() {
    var modal = document.getElementById("image-preview-modal");
    var image = document.getElementById("image-preview-image");

    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("image-preview-open");

    if (previewObjectUrl) {
      window.URL.revokeObjectURL(previewObjectUrl);
      previewObjectUrl = "";
    }

    image.removeAttribute("src");
  }

  function openImagePreview() {
    var modal = document.getElementById("image-preview-modal");
    var image = document.getElementById("image-preview-image");
    var originalLabel = btnPreview.textContent;

    btnPreview.disabled = true;
    btnPreview.textContent = ui().previewLoading;

    buildPosterBlob()
      .then(function (blob) {
        previewObjectUrl = window.URL.createObjectURL(blob);
        image.src = previewObjectUrl;
        image.alt = ui().previewTitle;
        modal.hidden = false;
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("image-preview-open");
      })
      .catch(function () {
        alert(ui().previewFailed);
      })
      .finally(function () {
        btnPreview.disabled = false;
        btnPreview.textContent = originalLabel;
      });
  }

  function showLanguageToast() {
    var toast = document.getElementById("lang-guide-toast");

    window.clearTimeout(gateToastTimer);
    toast.classList.add("is-visible");
    gateToastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2400);
  }

  function closeLanguageGate() {
    var gate = document.getElementById("lang-gate");

    gate.classList.add("is-hidden");
    document.body.classList.remove("lang-gate-open");
    triggerAnims(pageHome);
    startSceneCycle();
    updateHomeScrollHint({ immediate: true });
  }

  function animateGateGuide(originRect, label) {
    var gate = document.getElementById("lang-gate");
    var langControl = document.querySelector(".lang-control");
    var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!originRect || !langControl || prefersReducedMotion) {
      gate.classList.add("is-dismissing");
      showLanguageToast();
      window.setTimeout(closeLanguageGate, 420);
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

    window.requestAnimationFrame(function () {
      gate.classList.add("is-dismissing");
      chip.style.transform = "translate(calc(-50% + " + deltaX + "px), calc(-50% + " + deltaY + "px)) scale(0.76)";
      chip.style.opacity = "0.14";
      showLanguageToast();
    });

    window.setTimeout(function () {
      chip.remove();
      closeLanguageGate();
    }, 1320);
  }

  function renderLanguageGateButtons() {
    var container = document.getElementById("lang-gate-options");

    container.innerHTML = "";

    localeApi.locales.forEach(function (locale) {
      var button = document.createElement("button");

      button.type = "button";
      button.className = "lang-gate-button" + (locale.code === lang ? " is-current" : "");
      button.textContent = locale.label;
      button.addEventListener("click", function () {
        selectGateLocale(locale.code, button);
      });
      container.appendChild(button);
    });
  }

  function selectGateLocale(localeCode, button) {
    var originRect = button ? button.getBoundingClientRect() : null;
    var label = button ? button.textContent : "";

    lang = localeApi.setLocale(localeCode);
    applyLocale();
    animateGateGuide(originRect, label);
  }

  function initLanguageGate() {
    document.body.classList.add("lang-gate-open");
  }

  function initLanguageSelect() {
    localeApi.locales.forEach(function (locale) {
      var option = document.createElement("option");
      option.value = locale.code;
      option.textContent = locale.label;
      langSelect.appendChild(option);
    });

    langSelect.value = lang;
    langSelect.addEventListener("change", function () {
      lang = localeApi.setLocale(langSelect.value);
      applyLocale();
    });
  }

  function applyLocale() {
    setDocumentLocale();
    applyStaticCopy();
    renderLanguageGateButtons();
    langSelect.value = lang;

    if (works.length) {
      applyScene(currentSceneKey, currentSpotlightWork || getSceneSpotlight(currentSceneKey, false));
    }

    if (pageQuiz.classList.contains("active") && questionSet.length) {
      renderQuestion();
    }

    if (pageResult.classList.contains("active") && lastRanking.length) {
      renderResult();
    }
  }

  function init() {
    initLanguageSelect();
    initLanguageGate();
    resetScores();
    setIssueDateLabels();
    applyLocale();

    worksReadyPromise = loadWorks();

    btnStart.addEventListener("click", startQuiz);
    btnPrev.addEventListener("click", goBack);
    btnShare.addEventListener("click", shareResult);
    btnPreview.addEventListener("click", openImagePreview);
    btnRetry.addEventListener("click", retry);
    document.getElementById("image-preview-close").addEventListener("click", closeImagePreview);
    document.getElementById("image-preview-backdrop").addEventListener("click", closeImagePreview);
    window.addEventListener("resize", function () {
      updateHomeScrollHint();
    });
    window.addEventListener("scroll", function () {
      updateHomeScrollHint();
    }, { passive: true });
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
