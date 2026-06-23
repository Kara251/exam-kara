var localeApi = window.ExamKaraLocale;
var currentLocale = localeApi.getLocale();
var manifestState = {
  synced: true,
  href: "/tests/anime-summer-2026/"
};

var SITE_COPY = {
  tc: {
    pageTitle: "EXAM KARA",
    metaDescription: "EXAM KARA 的互動測驗首頁，集中收納目前已開放與待加入的測驗頁。",
    ogDescription: "把已開放與即將加入的互動測驗集中在同一個首頁。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["ANIME GUIDE 2026", "性格診断テスト", "SUMMER LINEUP", "EXAM KARA", "EDITORIAL LAB"],
    heroRailLeft: "試験案內",
    heroRailRight: "exam.kara251.com",
    heroTag: "号外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 測驗索引 ✧",
    heroCopyTag: "-- 測驗集合 --",
    heroCopy: "從動漫人格測驗開始——把每一個做起來有點瘋的互動企劃，都收進這裡。",
    heroPrimaryAction: "查看測驗",
    heroSecondaryAction: "進入動漫測驗",
    heroSecondaryPrefix: "進入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "CURRENT SEASON: SUMMER 2026",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動企劃集合",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "目前開放與即將上線",
    sectionNote: "每個測驗都有自己的視覺語言，但共享同一種編輯腔調。",
    routeLabel: "ROUTE",
    sourceLabel: "SEASON",
    openTest: "進入測驗",
    comingSoon: "敬請期待",
    statusLive: "LIVE",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "這個測驗目前暫時離線，連結保留中。",
    tests: {
      anime: {
        title: "2026 夏季番性格測驗",
        cta: "夏番測驗",
        description: "15道問題，對照追番性格找到你的本季命定番。附推薦理由與避雷提醒。",
        note: "2026夏季新番收錄完整，含動畫電影。"
      },
      next: {
        title: "下一個測驗",
        description: "下一個測驗正在企劃中——什麼主題讓你最想點進來？",
        note: "歡迎提案，告訴我你最想做什麼測驗。"
      }
    }
  },
  sc: {
    pageTitle: "EXAM KARA",
    metaDescription: "Kara 的互动测验首页，集中展示目前可用与准备中的测试页。",
    ogDescription: "集中展示目前可用与准备中的互动测试页。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["ANIME GUIDE 2026", "性格诊断テスト", "SUMMER LINEUP", "EXAM KARA", "EDITORIAL LAB"],
    heroRailLeft: "试验导览",
    heroRailRight: "exam.kara251.com",
    heroTag: "号外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 测验索引 ✧",
    heroCopyTag: "-- 测验集合 --",
    heroCopy: "从动漫人格测验开始——把每一个做起来有点疯的互动企划，都收进这里。",
    heroPrimaryAction: "查看测验",
    heroSecondaryAction: "进入动漫测验",
    heroSecondaryPrefix: "进入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "CURRENT SEASON: SUMMER 2026",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互动企划集合",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "目前开放与即将上线",
    sectionNote: "每个测验都有自己的视觉语言，但共享同一种编辑腔调。",
    routeLabel: "ROUTE",
    sourceLabel: "SEASON",
    openTest: "进入测验",
    comingSoon: "敬请期待",
    statusLive: "LIVE",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "这个测验目前暂时离线，连结保留中。",
    tests: {
      anime: {
        title: "2026 夏季番性格测验",
        cta: "夏番测验",
        description: "15道问题，对照追番性格找到你的本季命定番。附推荐理由与避雷提醒。",
        note: "2026夏季新番收录完整，含动画电影。"
      },
      next: {
        title: "下一个测验",
        description: "下一个测验正在企划中——什么主题让你最想点进来？",
        note: "欢迎提案，告诉我你最想做什么测验。"
      }
    }
  },
  hx: {
    pageTitle: "EXAM KARA",
    metaDescription: "EXAM KARA の互動測驗首頁，把而家能玩同準備開坑の測驗頁壹次收編。",
    ogDescription: "已開放同待開坑の互動測驗，統統塞進同一個首頁。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["ANIME GUIDE 2026", "本命番診斷テスト", "SUMMER LINEUP", "EXAM KARA", "夏番開坑惹"],
    heroRailLeft: "試験導航",
    heroRailRight: "exam.kara251.com",
    heroTag: "號外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 試題索引 ✧",
    heroCopyTag: "-- 試題合集 --",
    heroCopy: "夏番診斷先開局——把每壹個整起來有丶瘋の互動企劃，莪都要塞進這裡。(゜∀゜)",
    heroPrimaryAction: "瞅壹瞅試題",
    heroSecondaryAction: "進入夏番測驗",
    heroSecondaryPrefix: "進入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "CURRENT SEASON: SUMMER 2026",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "夏番本命企劃集",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "而家阔以玩同待開坑の頁面",
    sectionNote: "每個試題都有自巳の視覺語言，卟過莪們共享壹種編集腔調。",
    routeLabel: "ROUTE",
    sourceLabel: "SEASON",
    openTest: "進去試試",
    comingSoon: "等等ㄇ",
    statusLive: "LIVE",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "這個試題暫時離線惹，坑位留著の。",
    tests: {
      anime: {
        title: "2026 夏番性格測驗",
        cta: "夏番測驗",
        description: "15道題，對照伱の追番性格揪出本季本命番。附推坑理由和避雷提醒の。",
        note: "2026夏番收錄完整惹，含動畫電影。"
      },
      next: {
        title: "下壹個試題坑",
        description: "下壹個測驗莪在企劃中——虾米主題讓伱最想點進來ㄇ？",
        note: "歡迎提案，告訴莪伱最想測虾米。"
      }
    }
  },
  wy: {
    pageTitle: "EXAM KARA",
    metaDescription: "EXAM KARA 諸測總目也，今所開放與後將納入之頁，悉聚於此。",
    ogDescription: "諸互動測頁，凡既成與將成者，咸收一首頁之內。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["ANIME GUIDE 2026", "性格診断テスト", "SUMMER LINEUP", "EXAM KARA", "夏番本命之卜"],
    heroRailLeft: "試牘總目",
    heroRailRight: "exam.kara251.com",
    heroTag: "號外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 試頁總目 ✧",
    heroCopyTag: "-- 試頁總覽 --",
    heroCopy: "以夏番性格試為首——凡做來有些瘋魔之互動企劃，皆聚於此。",
    heroPrimaryAction: "覽其諸試",
    heroSecondaryAction: "入夏番試",
    heroSecondaryPrefix: "入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "CURRENT SEASON: SUMMER 2026",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動企劃總錄",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "今已開放與尚待上線之頁",
    sectionNote: "諸試各有其面目，然皆循一脈編輯之氣。",
    routeLabel: "ROUTE",
    sourceLabel: "SEASON",
    openTest: "入此試",
    comingSoon: "俟之",
    statusLive: "LIVE",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "此試暫時下線，路由姑存。",
    tests: {
      anime: {
        title: "二〇二六夏番性格試",
        cta: "夏番試",
        description: "十五題以測性格，據此推本季最合汝意之命定番。附推薦之由與避雷之示。",
        note: "二〇二六夏番收錄完備，動畫電影亦納其中。"
      },
      next: {
        title: "後續試頁",
        description: "他日新試，尚在謀劃之中——何題讓汝最欲一試？",
        note: "歡迎提案，告知汝最欲問之測題。"
      }
    }
  },
  en: {
    pageTitle: "EXAM KARA",
    metaDescription: "The EXAM KARA index, collecting live and in-progress interactive tests under one home page.",
    ogDescription: "A single home page for live and upcoming interactive tests.",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["ANIME GUIDE 2026", "PERSONALITY TEST", "SUMMER LINEUP", "EXAM KARA", "EDITORIAL LAB"],
    heroRailLeft: "TEST INDEX",
    heroRailRight: "exam.kara251.com",
    heroTag: "EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "EXAM KARA x TEST INDEX",
    heroCopyTag: "-- TEST CATALOG --",
    heroCopy: "Starting with the anime personality test — collecting every slightly unhinged interactive project in one place.",
    heroPrimaryAction: "Browse Tests",
    heroSecondaryAction: "Anime Test",
    heroSecondaryPrefix: "Open ",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "CURRENT SEASON: SUMMER 2026",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "interactive projects",
    heroSparkle: "ARCHIVE MODE",
    sectionKicker: "TEST INDEX",
    sectionTitle: "Live Now and Coming Next",
    sectionNote: "Each test has its own visual language, but they share the same editorial tone.",
    routeLabel: "ROUTE",
    sourceLabel: "SEASON",
    openTest: "Open Test",
    comingSoon: "Coming Soon",
    statusLive: "LIVE",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "This test is temporarily offline. The link is reserved.",
    tests: {
      anime: {
        title: "Summer 2026 Anime Match",
        cta: "Anime Test",
        description: "15 questions matched to your watching habits. Finds your fated pick for the season, with reasons and skip warnings.",
        note: "Full 2026 summer lineup, including films."
      },
      next: {
        title: "Next Test",
        description: "Something new is in the works — what topic would make you click in first?",
        note: "Pitches welcome. What should the next test be about?"
      }
    }
  },
  yue: {
    pageTitle: "EXAM KARA",
    metaDescription: "EXAM KARA 嘅互動測驗首頁，集中收埋而家開放緊同之後會加落去嘅測驗頁。",
    ogDescription: "而家用到同稍後加入嘅互動測驗，都放返喺同一個首頁。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["ANIME GUIDE 2026", "性格診断テスト", "SUMMER LINEUP", "EXAM KARA", "夏番本命"],
    heroRailLeft: "試頁索引",
    heroRailRight: "exam.kara251.com",
    heroTag: "號外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 試題索引 ✧",
    heroCopyTag: "-- 測驗集合 --",
    heroCopy: "由夏番人格測驗開始——每一個搞起來有少少癲嘅互動企劃，都收埋喺度。",
    heroPrimaryAction: "睇測驗",
    heroSecondaryAction: "入夏番測驗",
    heroSecondaryPrefix: "入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "CURRENT SEASON: SUMMER 2026",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動企劃集合",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "而家開放同即將上線",
    sectionNote: "每個測驗都有佢自己嘅視覺語言，但係共享同一種編輯腔調。",
    routeLabel: "ROUTE",
    sourceLabel: "SEASON",
    openTest: "入去測",
    comingSoon: "敬請期待",
    statusLive: "LIVE",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "呢個測驗暫時離線，連結先留住。",
    tests: {
      anime: {
        title: "2026 夏季番性格測驗",
        cta: "夏番測驗",
        description: "15題對照你嘅追番性格，搵出今季命定番。附推薦理由同避雷提醒。",
        note: "2026夏番收錄完整，包括動畫電影。"
      },
      next: {
        title: "下一個測驗",
        description: "下一個測驗喺企劃緊——乜嘢主題最想令你即刻入嚟？",
        note: "歡迎提案，話俾我知你最想做乜測驗。"
      }
    }
  },
  ja: {
    pageTitle: "EXAM KARA",
    metaDescription: "EXAM KARA のテスト一覧ページ。公開中と準備中のインタラクティブ企画を一か所に集約します。",
    ogDescription: "公開中と今後追加予定のインタラクティブテストをまとめたトップページ。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["ANIME GUIDE 2026", "性格診断テスト", "SUMMER LINEUP", "EXAM KARA", "夏番命定"],
    heroRailLeft: "試験案内",
    heroRailRight: "exam.kara251.com",
    heroTag: "号外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "EXAM KARA × テスト索引",
    heroCopyTag: "-- テスト一覧 --",
    heroCopy: "アニメ性格診断から始まる——ちょっと頭のおかしいインタラクティブ企画を、ここに全部集めています。",
    heroPrimaryAction: "テストを見る",
    heroSecondaryAction: "アニメ診断へ",
    heroSecondaryPrefix: "",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "CURRENT SEASON: SUMMER 2026",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "インタラクティブ企画集",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "公開中と近日公開予定",
    sectionNote: "それぞれのテストに独自のビジュアルがあって、でも同じ編集トーンで統一されています。",
    routeLabel: "ROUTE",
    sourceLabel: "SEASON",
    openTest: "開く",
    comingSoon: "準備中",
    statusLive: "LIVE",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "このテストは一時的にオフラインです。リンクは確保されています。",
    tests: {
      anime: {
        title: "2026 夏アニメ性格診断",
        cta: "夏アニメ診断へ",
        description: "15問で追いかけるアニメの傾向を診断——今期の運命の一本を、推薦理由と地雷情報つきでお届け。",
        note: "2026夏アニメ全収録。劇場版も含みます。"
      },
      next: {
        title: "次のテスト",
        description: "次の企画、準備中です——どんなテーマなら一番やってみたいですか？",
        note: "アイデアがあれば教えてください。"
      }
    }
  }
};

var SITE_COPY_EXTENSIONS = {
  tc: {
    heroMixedLine: "✧ EXAM KARA × 測驗索引 ✧",
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先選擇語言",
    gateSubtitle: "選好後會進入首頁，右上角也能隨時切換。",
    gateNote: "後續新增的測驗頁，都會沿用右上角這個語言入口。",
    gateToast: "右上角可隨時切換語言",
    repoExamLabel: "EXAM 主站",
    repoAnimeLabel: "夏番測驗原始倉庫"
  },
  sc: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先选择语言",
    gateSubtitle: "选好后进入首页，右上角也能随时切换。",
    gateNote: "后续新增的测验页，也都会沿用右上角这个语言入口。",
    gateToast: "右上角可随时切换语言",
    repoExamLabel: "EXAM 主站",
    repoAnimeLabel: "夏番测验原始仓库"
  },
  hx: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先揀壹下語言版本",
    gateSubtitle: "選完就進首頁，右上角那顆語言鍵之後也能隨便切。",
    gateNote: "往後新測驗也都會掛同壹個語言入口，伱不用每次到處找。",
    gateToast: "右上角還能隨時換語言",
    repoExamLabel: "EXAM 主站",
    repoAnimeLabel: "夏番測驗本體倉庫"
  },
  wy: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "請先擇其言",
    gateSubtitle: "既擇其言，乃入首頁；右上角亦可隨時更易。",
    gateNote: "後來諸測，亦皆循右上角此語言入口而轉換之。",
    gateToast: "右上角可隨時易語",
    repoExamLabel: "EXAM 主站庫",
    repoAnimeLabel: "夏番試源庫"
  },
  en: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "Choose Your Language",
    gateSubtitle: "Once you enter, the language switch stays in the top-right corner.",
    gateNote: "Future tests on this domain will keep using that same top-right language control.",
    gateToast: "Language stays in the top-right corner",
    repoExamLabel: "EXAM Home Repo",
    repoAnimeLabel: "Anime Test Repo"
  },
  yue: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先揀語言",
    gateSubtitle: "揀完就會入首頁，右上角之後都可以隨時轉。",
    gateNote: "遲啲再加新測驗，都一樣會用返右上角呢個語言入口。",
    gateToast: "右上角可以隨時轉語言",
    repoExamLabel: "EXAM 主站",
    repoAnimeLabel: "夏番測驗原始倉庫"
  },
  ja: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先に言語を選んでください",
    gateSubtitle: "入った後も、右上の言語メニューからいつでも切り替えられます。",
    gateNote: "この先追加されるテストも、右上の同じ言語メニューを使います。",
    gateToast: "言語切替は右上にあります",
    repoExamLabel: "EXAM本体",
    repoAnimeLabel: "夏アニメ診断元リポジトリ"
  }
};

Object.keys(SITE_COPY_EXTENSIONS).forEach(function (locale) {
  Object.assign(SITE_COPY[locale], SITE_COPY_EXTENSIONS[locale]);
});

function currentCopy() {
  return SITE_COPY[currentLocale] || SITE_COPY.tc;
}

var gateToastTimer = 0;

function setMeta(copy) {
  document.title = copy.pageTitle;
  document.documentElement.lang = localeApi.getConfig(currentLocale).htmlLang;
  document.body.dataset.locale = currentLocale;
  document.body.dataset.script = localeApi.getConfig(currentLocale).script;

  document.querySelector('meta[name="description"]').setAttribute("content", copy.metaDescription);
  document.querySelector('meta[property="og:title"]').setAttribute("content", copy.pageTitle);
  document.querySelector('meta[property="og:description"]').setAttribute("content", copy.ogDescription);
}

function renderTextMarquee(trackId, items) {
  var track = document.getElementById(trackId);

  track.innerHTML = "";
  items.concat(items).forEach(function (itemText) {
    var item = document.createElement("span");
    item.className = "marquee-item";
    item.textContent = itemText;
    track.appendChild(item);
  });

  requestAnimationFrame(function () {
    track.style.setProperty("--loop-shift", track.scrollWidth / 2 + "px");
  });
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
    button.className = "lang-gate-button" + (locale.code === currentLocale ? " is-current" : "");
    button.textContent = locale.label;
    button.setAttribute("aria-pressed", locale.code === currentLocale ? "true" : "false");
    button.addEventListener("click", function () {
      selectGateLocale(locale.code, button);
    });
    container.appendChild(button);
  });
}

function applyStaticCopy(copy) {
  setMeta(copy);

  document.querySelectorAll("[data-copy]").forEach(function (element) {
    var key = element.getAttribute("data-copy");
    if (copy[key]) {
      element.textContent = copy[key];
    }
  });

  renderTextMarquee("marquee-top-track", copy.marqueeTop);
  renderTextMarquee("marquee-bottom-track", copy.marqueeBottom);
  renderLanguageGateButtons();
}

function buildTests(copy) {
  var animeLive = manifestState.synced;

  return [
    {
      title: copy.tests.anime.title,
      href: animeLive ? manifestState.href : "",
      route: "/tests/anime-summer-2026/",
      source: "2026.07 / TV + FILM",
      repoHref: "https://github.com/Kara251/26July-Anime-Test",
      repoName: "Kara251/26July-Anime-Test",
      status: animeLive ? "live" : "pending",
      statusLabel: animeLive ? copy.statusLive : copy.statusWaiting,
      cta: copy.tests.anime.cta,
      description: copy.tests.anime.description,
      note: animeLive ? copy.tests.anime.note : copy.unavailableNote
    },
    {
      title: copy.tests.next.title,
      href: "",
      route: "/tests/<next-slug>/",
      source: "coming soon",
      status: "pending",
      statusLabel: copy.statusPending,
      cta: "",
      description: copy.tests.next.description,
      note: copy.tests.next.note
    }
  ];
}

function appendTextBlock(parent, className, text) {
  var element = document.createElement("p");
  element.className = className;
  element.textContent = text;
  parent.appendChild(element);
  return element;
}

function getRandomLiveTest(tests) {
  var liveTests = tests.filter(function (test) {
    return !!test.href;
  });

  if (liveTests.length === 0) {
    return null;
  }

  return liveTests[Math.floor(Math.random() * liveTests.length)];
}

function buildHeroActionLabel(copy, test) {
  if (!test) {
    return copy.heroSecondaryAction;
  }

  if (currentLocale === "ja" && test.cta) {
    return test.cta;
  }

  return (copy.heroSecondaryPrefix || "") + (test.cta || test.title);
}

function updateHeroAction(copy, tests) {
  var action = document.getElementById("hero-random-action");
  var randomTest = getRandomLiveTest(tests);

  if (!action) {
    return;
  }

  if (!randomTest) {
    action.href = "#tests";
    action.textContent = copy.comingSoon;
    return;
  }

  action.href = randomTest.href;
  action.textContent = buildHeroActionLabel(copy, randomTest);
}

function createTestItem(copy, test) {
  var item = document.createElement("article");
  var primary = document.createElement("div");
  var status = document.createElement("span");
  var title = document.createElement("h3");
  var meta = document.createElement("div");
  var repoLink;
  var action = document.createElement("div");
  var actionNode;

  item.className = "test-item";
  primary.className = "test-primary";
  meta.className = "test-meta";
  action.className = "test-action";

  status.className = "test-status " + (test.status === "live" ? "test-status-live" : "test-status-pending");
  status.textContent = test.statusLabel;

  title.className = "test-title";
  title.textContent = test.title;

  primary.appendChild(status);
  primary.appendChild(title);
  appendTextBlock(primary, "test-description", test.description);

  appendTextBlock(meta, "test-route", copy.routeLabel + ": " + test.route);
  appendTextBlock(meta, "test-source", copy.sourceLabel + ": " + test.source);
  appendTextBlock(meta, "test-note", test.note);

  if (test.repoHref && test.repoName) {
    repoLink = document.createElement("a");
    repoLink.className = "test-repo-link";
    repoLink.href = test.repoHref;
    repoLink.target = "_blank";
    repoLink.rel = "noreferrer";
    repoLink.textContent = "GitHub: " + test.repoName;
    meta.appendChild(repoLink);
  }

  if (test.href) {
    actionNode = document.createElement("a");
    actionNode.className = "test-link";
    actionNode.href = test.href;
    actionNode.textContent = copy.openTest;
  } else {
    actionNode = document.createElement("span");
    actionNode.className = "test-link-muted";
    actionNode.textContent = copy.comingSoon;
  }

  action.appendChild(actionNode);
  item.appendChild(primary);
  item.appendChild(meta);
  item.appendChild(action);

  return item;
}

function renderTests() {
  var copy = currentCopy();
  var testList = document.getElementById("test-list");
  var tests = buildTests(copy);

  testList.innerHTML = "";
  tests.forEach(function (test) {
    testList.appendChild(createTestItem(copy, test));
  });
  updateHeroAction(copy, tests);
}

function applyLocale() {
  var copy = currentCopy();

  applyStaticCopy(copy);
  renderTests();
  document.getElementById("lang-select").value = currentLocale;
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

  currentLocale = localeApi.setLocale(localeCode);
  applyLocale();
  animateGateGuide(originRect, label);
}

function initLanguageGate() {
  var gate = document.getElementById("lang-gate");

  if (!gate) {
    return;
  }

  document.body.classList.add("lang-gate-open");
}

function initLanguageSelect() {
  var select = document.getElementById("lang-select");

  localeApi.locales.forEach(function (locale) {
    var option = document.createElement("option");
    option.value = locale.code;
    option.textContent = locale.label;
    select.appendChild(option);
  });

  select.value = currentLocale;
  select.addEventListener("change", function () {
    currentLocale = localeApi.setLocale(select.value);
    applyLocale();
  });
}

async function loadManifestState() {
  try {
    var response = await fetch("/tests-manifest.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Manifest request failed");
    }

    var manifest = await response.json();
    var syncedAnime = manifest.tests.find(function (test) {
      return test.slug === "anime-summer-2026";
    });

    if (!syncedAnime) {
      return;
    }

    manifestState = {
      synced: !!syncedAnime.synced,
      href: syncedAnime.href || "/tests/anime-summer-2026/"
    };
  } catch {}
}

function init() {
  initLanguageSelect();
  applyLocale();
  initLanguageGate();
  loadManifestState().then(renderTests);
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
