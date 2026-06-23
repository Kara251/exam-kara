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
    marqueeBottom: ["SUBROUTE READY", "CLOUDFLARE PAGES", "STATIC DEPLOY", "EXAM KARA"],
    heroRailLeft: "試験案內",
    heroRailRight: "exam.kara251.com",
    heroTag: "号外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 測試索引 ✧",
    heroCopyTag: "-- 測驗首頁 --",
    heroCopy: "把已上線與準備中的互動測驗收進同一個首頁與同一個網域，後續新測驗也能依同一套路由接進來。",
    heroPrimaryAction: "查看測驗",
    heroSecondaryAction: "隨機進入測驗",
    heroSecondaryPrefix: "進入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "ROUTE PATTERN: /tests/<slug>/",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動測驗首頁",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "目前已開放與準備中的測驗頁",
    sectionNote: "首頁沿用夏番測驗的編排語氣，之後新增測驗也能自然併進來。",
    routeLabel: "ROUTE",
    sourceLabel: "SOURCE",
    openTest: "進入測驗",
    comingSoon: "敬請期待",
    statusLive: "SYNCED",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "目前找不到相鄰來源專案，子路由保留但不會開放入口。",
    tests: {
      anime: {
        title: "2026 夏季番性格測驗",
        cta: "夏番測驗",
        description: "沿用既有夏番測驗的視覺與互動，作為主站第一個正式掛上的測驗頁。",
        note: "建置時會自相鄰目錄同步，不改動原始專案路徑。"
      },
      next: {
        title: "下一個測驗欄位",
        description: "後續新增的測驗可以直接依照這套路由規則併進來。",
        note: "首頁版型已預留位置，新增時只需要補一個子資料夾與一筆列表資料。"
      }
    }
  },
  sc: {
    pageTitle: "EXAM KARA",
    metaDescription: "Kara 的互动测验首页，集中展示目前可用与准备中的测试页。",
    ogDescription: "集中展示目前可用与准备中的互动测试页。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["SUBROUTE READY", "CLOUDFLARE PAGES", "STATIC DEPLOY", "EXAM KARA"],
    heroRailLeft: "试验导览",
    heroRailRight: "exam.kara251.com",
    heroTag: "号外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 测验索引 ✧",
    heroCopyTag: "-- 测验集合 --",
    heroCopy: "把已完成与进行中的互动测验，集中挂在同一个首页与同一个网域下。",
    heroPrimaryAction: "查看测验",
    heroSecondaryAction: "进入动漫测验",
    heroSecondaryPrefix: "进入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "ROUTE PATTERN: /tests/<slug>/",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互动测验子路由首页",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "目前可用与准备中的页面",
    sectionNote: "版面与字体延续动漫测试的编辑感，让后续新测验直接并进来。",
    routeLabel: "ROUTE",
    sourceLabel: "SOURCE",
    openTest: "打开测验",
    comingSoon: "敬请期待",
    statusLive: "SYNCED",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "目前找不到相邻来源项目，子路由保留但不会开放入口。",
    tests: {
      anime: {
        title: "2026 夏季番性格测验",
        cta: "夏番测验",
        description: "沿用既有动漫测试的视觉与互动，挂进主站作为第一个测试页。",
        note: "构建时会从相邻目录同步，不改动原始项目路径。"
      },
      next: {
        title: "下一个测验位",
        description: "后续新的测验可以直接照这个路由规则并进来。",
        note: "首页版型已预留，新增时只需要补一个子文件夹与一笔列表资料。"
      }
    }
  },
  hx: {
    pageTitle: "EXAM KARA",
    metaDescription: "EXAM KARA の互動測驗首頁，把而家能玩同準備開坑の測驗頁壹次收編。",
    ogDescription: "已開放同待開坑の互動測驗，統統塞進同一個首頁。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["SUBROUTE READY", "CLOUDFLARE PAGES", "STATIC DEPLOY", "EXAM KARA"],
    heroRailLeft: "試験導航",
    heroRailRight: "exam.kara251.com",
    heroTag: "號外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 試題索引 ✧",
    heroCopyTag: "-- 試題總攬 --",
    heroCopy: "把已上線同施工中の互動測驗，全數收進同一個首頁同網域；之後再開新坑，也能順手併進來。",
    heroPrimaryAction: "查看試題",
    heroSecondaryAction: "隨機亂入壹份測驗",
    heroSecondaryPrefix: "進入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "ROUTE PATTERN: /tests/<slug>/",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動測驗總攬",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "而家可玩同待開坑の頁面",
    sectionNote: "版型延續夏番測驗那股編集感，之後新坑補進來也不會出戲。",
    routeLabel: "ROUTE",
    sourceLabel: "SOURCE",
    openTest: "進去試試",
    comingSoon: "敬請等等",
    statusLive: "SYNCED",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "暫時搵唔到相鄰來源專案，子路由會先留住但唔開入口。",
    tests: {
      anime: {
        title: "2026 夏季番性格測驗",
        cta: "夏番測驗",
        description: "沿用原本夏番測驗嘅視覺同互動，掛入主站做第一個正式開坑の測驗頁。",
        note: "建置時會從相鄰目錄同步，原始專案路徑先不動，後續補完也更順手。"
      },
      next: {
        title: "下一個測驗坑位",
        description: "後續新測驗可以直接照呢個路由規則併進嚟，讓主站一路開坑一路長大。",
        note: "首頁版型已留位，新增時補一個子資料夾同一筆列表資料就夠用。"
      }
    }
  },
  wy: {
    pageTitle: "EXAM KARA",
    metaDescription: "EXAM KARA 諸測總目也，今所開放與後將納入之頁，悉聚於此。",
    ogDescription: "諸互動測頁，凡既成與將成者，咸收一首頁之內。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["SUBROUTE READY", "CLOUDFLARE PAGES", "STATIC DEPLOY", "EXAM KARA"],
    heroRailLeft: "試牘總目",
    heroRailRight: "exam.kara251.com",
    heroTag: "號外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 試頁總目 ✧",
    heroCopyTag: "-- 測頁總目 --",
    heroCopy: "既上線與方備之互動測頁，皆收於一首頁、一網域之內；後有新試，亦可循此例而續納。",
    heroPrimaryAction: "覽其諸試",
    heroSecondaryAction: "隨機入一試",
    heroSecondaryPrefix: "入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "ROUTE PATTERN: /tests/<slug>/",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動測頁總目",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "今已開放與尚待納入之頁",
    sectionNote: "首頁語氣與編排皆承夏番試頁之意，後來新試亦可自然附入。",
    routeLabel: "ROUTE",
    sourceLabel: "SOURCE",
    openTest: "入此試",
    comingSoon: "俟之",
    statusLive: "SYNCED",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "今未得相鄰源專案，故子路由姑存而不啟。",
    tests: {
      anime: {
        title: "二〇二六夏番性格試",
        cta: "夏番試",
        description: "仍用舊夏番試頁之視覺與互動，掛於主站，為首一正式納入之測頁。",
        note: "建置之時，自相鄰目錄同步，不改其原專案路徑，以便後日續修。"
      },
      next: {
        title: "後續測頁位",
        description: "他日新測，皆可依此路由之例而併入，後續增補亦不亂其序。",
        note: "首頁版式已預其位，增設時但補一子夾與一條目而已。"
      }
    }
  },
  en: {
    pageTitle: "EXAM KARA",
    metaDescription: "The EXAM KARA index, collecting live and in-progress interactive tests under one home page.",
    ogDescription: "A single home page for live and upcoming interactive tests.",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["SUBROUTE READY", "CLOUDFLARE PAGES", "STATIC DEPLOY", "EXAM KARA"],
    heroRailLeft: "TEST INDEX",
    heroRailRight: "exam.kara251.com",
    heroTag: "EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "EXAM KARA x TEST INDEX",
    heroCopyTag: "-- TEST CATALOG --",
    heroCopy: "Live and in-progress interactive tests, gathered under one home page and one domain.",
    heroPrimaryAction: "Browse Tests",
    heroSecondaryAction: "Open Anime Test",
    heroSecondaryPrefix: "Open ",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "ROUTE PATTERN: /tests/<slug>/",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "subroute archive home",
    heroSparkle: "ARCHIVE MODE",
    sectionKicker: "TEST INDEX",
    sectionTitle: "Live Now and Coming Next",
    sectionNote: "The layout inherits the anime test's editorial tone, so new tests can slot in without changing the front page.",
    routeLabel: "ROUTE",
    sourceLabel: "SOURCE",
    openTest: "Open Test",
    comingSoon: "Coming Soon",
    statusLive: "LIVE",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "The sibling source project is missing right now, so the subroute stays reserved without a live entry point.",
    tests: {
      anime: {
        title: "Summer 2026 Anime Match Test",
        cta: "Anime Test",
        description: "The existing anime test visual style and interaction are preserved here as the first test linked into the main site.",
        note: "Builds sync from the sibling directory without changing the original project path."
      },
      next: {
        title: "Next Test Slot",
        description: "Future tests can be added directly under the same route pattern.",
        note: "The front page already has the layout reserved. Adding a new test only needs one subfolder and one list entry."
      }
    }
  },
  yue: {
    pageTitle: "EXAM KARA",
    metaDescription: "EXAM KARA 嘅互動測驗首頁，集中收埋而家開放緊同之後會加落去嘅測驗頁。",
    ogDescription: "而家用到同稍後加入嘅互動測驗，都放返喺同一個首頁。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["SUBROUTE READY", "CLOUDFLARE PAGES", "STATIC DEPLOY", "EXAM KARA"],
    heroRailLeft: "試頁索引",
    heroRailRight: "exam.kara251.com",
    heroTag: "號外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 試題索引 ✧",
    heroCopyTag: "-- 測驗首頁 --",
    heroCopy: "已經上線同準備緊嘅互動測驗，都會收埋喺同一個首頁同網域底下；之後有新測驗都可以照呢套路由加返入嚟。",
    heroPrimaryAction: "睇測驗",
    heroSecondaryAction: "隨機入一份測驗",
    heroSecondaryPrefix: "入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "ROUTE PATTERN: /tests/<slug>/",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動測驗首頁",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "而家已開放同準備加入嘅測驗頁",
    sectionNote: "首頁沿用夏番測驗嗰套編排口氣，之後再加新測驗都唔會突兀。",
    routeLabel: "ROUTE",
    sourceLabel: "SOURCE",
    openTest: "入去測",
    comingSoon: "敬請期待",
    statusLive: "LIVE",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "暫時搵唔到隔籬來源專案，所以子路由會先留位，唔會開入口。",
    tests: {
      anime: {
        title: "2026 夏季番性格測驗",
        cta: "夏番測驗",
        description: "沿用原本夏番測驗嘅視覺同互動，掛入主站做第一個正式上架嘅測驗頁。",
        note: "建置時會由相鄰目錄同步，原本專案路徑唔會改，方便你之後慢慢補完。"
      },
      next: {
        title: "下一個測驗位",
        description: "之後新測驗可以直接跟呢個路由規則加入，等成個站一路加一路長。",
        note: "首頁版型已經預留好，加新測驗時只要補一個子資料夾同一筆列表資料。"
      }
    }
  },
  ja: {
    pageTitle: "EXAM KARA",
    metaDescription: "EXAM KARA のテスト一覧ページ。公開中と準備中のインタラクティブ企画を一か所に集約します。",
    ogDescription: "公開中と今後追加予定のインタラクティブテストをまとめたトップページ。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["SUBROUTE READY", "CLOUDFLARE PAGES", "STATIC DEPLOY", "EXAM KARA"],
    heroRailLeft: "試験案内",
    heroRailRight: "exam.kara251.com",
    heroTag: "号外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "EXAM KARA × テスト索引",
    heroCopyTag: "-- テスト一覧 --",
    heroCopy: "公開済みと制作中のインタラクティブテストを、ひとつのトップページとひとつのドメインに集約します。",
    heroPrimaryAction: "テストを見る",
    heroSecondaryAction: "アニメ診断へ",
    heroSecondaryPrefix: "",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "ROUTE PATTERN: /tests/<slug>/",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "インタラクティブ診断アーカイブ",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "公開中と準備中のページ",
    sectionNote: "レイアウトと書体はアニメ診断のエディトリアル感を引き継ぎ、次のテストもそのまま追加できるようにしています。",
    routeLabel: "ROUTE",
    sourceLabel: "SOURCE",
    openTest: "開く",
    comingSoon: "準備中",
    statusLive: "LIVE",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "隣接するソースプロジェクトが見つからないため、このサブルートは予約されたまま入口を出していません。",
    tests: {
      anime: {
        title: "2026 夏アニメ相性診断",
        cta: "夏アニメ診断へ",
        description: "既存のアニメ診断のビジュアルと操作感を保ったまま、メインサイト最初のテストとして組み込みました。",
        note: "ビルド時に隣接ディレクトリから同期し、元のプロジェクトパスは変更しません。"
      },
      next: {
        title: "次のテスト枠",
        description: "今後の新しいテストも、このルート規則に沿ってそのまま追加できます。",
        note: "トップページの枠はすでに確保済みです。追加時はサブフォルダひとつと一覧データ一件で足ります。"
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
    gateToast: "右上角可隨時切換語言"
  },
  sc: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先选择语言",
    gateSubtitle: "选好后进入首页，右上角也能随时切换。",
    gateNote: "后续新增的测验页，也都会沿用右上角这个语言入口。",
    gateToast: "右上角可随时切换语言"
  },
  hx: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先揀壹下語言版本",
    gateSubtitle: "選完就進首頁，右上角那顆語言鍵之後也能隨便切。",
    gateNote: "往後新測驗也都會掛同壹個語言入口，伱不用每次到處找。",
    gateToast: "右上角還能隨時換語言"
  },
  wy: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "請先擇其言",
    gateSubtitle: "既擇其言，乃入首頁；右上角亦可隨時更易。",
    gateNote: "後來諸測，亦皆循右上角此語言入口而轉換之。",
    gateToast: "右上角可隨時易語"
  },
  en: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "Choose Your Language",
    gateSubtitle: "Once you enter, the language switch stays in the top-right corner.",
    gateNote: "Future tests on this domain will keep using that same top-right language control.",
    gateToast: "Language stays in the top-right corner"
  },
  yue: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先揀語言",
    gateSubtitle: "揀完就會入首頁，右上角之後都可以隨時轉。",
    gateNote: "遲啲再加新測驗，都一樣會用返右上角呢個語言入口。",
    gateToast: "右上角可以隨時轉語言"
  },
  ja: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先に言語を選んでください",
    gateSubtitle: "入った後も、右上の言語メニューからいつでも切り替えられます。",
    gateNote: "この先追加されるテストも、右上の同じ言語メニューを使います。",
    gateToast: "言語切替は右上にあります"
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
      source: "../26July-Anime-Test",
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
      source: "pending",
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
