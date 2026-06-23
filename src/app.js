var localeApi = window.ExamKaraLocale;
var currentLocale = localeApi.getLocale();
var manifestState = {
  synced: true,
  href: "/tests/anime-summer-2026/"
};

var SITE_COPY = {
  tc: {
    pageTitle: "EXAM KARA",
    metaDescription: "Kara 的互動測試首頁，集中展示目前可用與準備中的測試頁。",
    ogDescription: "集中展示目前可用與準備中的互動測試頁。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["SUBROUTE READY", "CLOUDFLARE PAGES", "STATIC DEPLOY", "EXAM KARA"],
    heroRailLeft: "試験案內",
    heroRailRight: "exam.kara251.com",
    heroTag: "号外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 測試索引 ✧",
    heroCopyTag: "-- 測試集合 --",
    heroCopy: "把已完成與進行中的互動測試，集中掛在同一個首頁與同一個網域下。",
    heroPrimaryAction: "查看測試",
    heroSecondaryAction: "進入動漫測試",
    heroSecondaryPrefix: "進入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "ROUTE PATTERN: /tests/<slug>/",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動測試子路由首頁",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "目前可用與準備中的頁面",
    sectionNote: "版面與字體延續動漫測試的編輯感，讓後續新測試直接併進來。",
    routeLabel: "ROUTE",
    sourceLabel: "SOURCE",
    openTest: "打開測試",
    comingSoon: "敬請期待",
    statusLive: "SYNCED",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "目前找不到相鄰來源專案，子路由保留但不會開放入口。",
    tests: {
      anime: {
        title: "2026 夏季番性格測驗",
        cta: "夏番測驗",
        description: "沿用既有動漫測試的視覺與互動，掛進主站作為第一個測試頁。",
        note: "建置時會從相鄰目錄同步，不改動原始專案路徑。"
      },
      next: {
        title: "下一個測試位",
        description: "後續新的測試可以直接照這個路由規則併進來。",
        note: "首頁版型已預留，新增時只需要補一個子資料夾與一筆列表資料。"
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
    metaDescription: "Kara の互動測驗首頁，把而家能玩同準備開坑の試題頁一次收齊。",
    ogDescription: "把目前可玩同待開坑の互動測驗，全都收進同一站。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["SUBROUTE READY", "CLOUDFLARE PAGES", "STATIC DEPLOY", "EXAM KARA"],
    heroRailLeft: "試験導航",
    heroRailRight: "exam.kara251.com",
    heroTag: "號外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 試題索引 ✧",
    heroCopyTag: "-- 試題合集 --",
    heroCopy: "把已完結同施工中の互動測驗，集中掛喺同一個首頁；之後再開新坑也能直接塞進嚟。",
    heroPrimaryAction: "查看試題",
    heroSecondaryAction: "進入夏番測驗",
    heroSecondaryPrefix: "進入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "ROUTE PATTERN: /tests/<slug>/",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動試題子路由首頁",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "而家可玩同待開坑の頁面",
    sectionNote: "版面同字體延續夏番測驗嗰股編輯感，之後再塞新坑都唔會跳 tone。",
    routeLabel: "ROUTE",
    sourceLabel: "SOURCE",
    openTest: "打開試頁",
    comingSoon: "敬請等等",
    statusLive: "SYNCED",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "暫時搵唔到相鄰來源專案，子路由會先留住但唔開入口。",
    tests: {
      anime: {
        title: "2026 夏季番性格測驗",
        cta: "夏番測驗",
        description: "沿用原本夏番測驗嘅視覺同互動，掛入主站做第一個正式開坑嘅試題頁。",
        note: "建置時會從相鄰目錄同步，原始專案路徑先唔郁，方便後續繼續補完。"
      },
      next: {
        title: "下一個測驗坑位",
        description: "後續新測驗可以直接照呢個路由規則併進嚟，等主站一路開坑一路長大。",
        note: "首頁版型已留位，新增時補一個子資料夾同一筆列表資料就搞掂。"
      }
    }
  },
  wy: {
    pageTitle: "EXAM KARA",
    metaDescription: "Kara 試題首頁也，今可觀與將開坑之頁，皆聚於此。",
    ogDescription: "諸互動試頁，今已成與方備者，並收一域之中。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["SUBROUTE READY", "CLOUDFLARE PAGES", "STATIC DEPLOY", "EXAM KARA"],
    heroRailLeft: "試牘總目",
    heroRailRight: "exam.kara251.com",
    heroTag: "號外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 試頁總目 ✧",
    heroCopyTag: "-- 試頁總覽 --",
    heroCopy: "凡既成與方作之互動測頁，悉繫於一首頁、一網域之下；後有新坑，亦可徑納其中。",
    heroPrimaryAction: "觀諸試頁",
    heroSecondaryAction: "入夏番試",
    heroSecondaryPrefix: "入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "ROUTE PATTERN: /tests/<slug>/",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動試頁子路由首頁",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "今可觀與將啟之頁",
    sectionNote: "版式字體，皆承夏番試頁編輯之意，後來新試可徑併焉，不致失其調。",
    routeLabel: "ROUTE",
    sourceLabel: "SOURCE",
    openTest: "啟此測",
    comingSoon: "俟之",
    statusLive: "SYNCED",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "今未得相鄰源專案，故子路由姑存而不啟。",
    tests: {
      anime: {
        title: "二〇二六夏番性格試",
        cta: "夏番試",
        description: "仍用舊夏番試頁之視覺與互動，掛於主站，為首一開坑之測頁。",
        note: "建置之時，自相鄰目錄同步，不改其原專案路徑，以便後日續修。"
      },
      next: {
        title: "後續測頁位",
        description: "他日新測，皆可依此路由之例而併入，續開新坑而不亂其序。",
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
    metaDescription: "Kara 嘅互動測驗首頁，將而家玩得同準備開坑嘅試題頁一次過收齊。",
    ogDescription: "將而家可用同之後會上線嘅互動測驗集中喺同一個首頁。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "EDITORIAL LAB", "SUMMER 2026"],
    marqueeBottom: ["SUBROUTE READY", "CLOUDFLARE PAGES", "STATIC DEPLOY", "EXAM KARA"],
    heroRailLeft: "試頁索引",
    heroRailRight: "exam.kara251.com",
    heroTag: "號外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 試題索引 ✧",
    heroCopyTag: "-- 試題集合 --",
    heroCopy: "將做完同做緊嘅互動測驗集中掛喺同一個首頁同網域，之後再開新坑都可以直接拼入去。",
    heroPrimaryAction: "睇試題",
    heroSecondaryAction: "入夏番測驗",
    heroSecondaryPrefix: "入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "ROUTE PATTERN: /tests/<slug>/",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動測驗子路由首頁",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "而家可用同準備開坑嘅頁面",
    sectionNote: "版面同字體跟返夏番測驗嗰種編輯感，之後再加新測驗都可以直接拼入去。",
    routeLabel: "ROUTE",
    sourceLabel: "SOURCE",
    openTest: "打開測驗",
    comingSoon: "敬請期待",
    statusLive: "LIVE",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "暫時搵唔到隔籬來源專案，所以子路由會先留位，唔會開入口。",
    tests: {
      anime: {
        title: "2026 夏季番性格測驗",
        cta: "夏番測驗",
        description: "沿用原本夏番測驗嘅視覺同互動，掛入主站做第一個正式開坑嘅試題頁。",
        note: "建置時會由相鄰目錄同步，原本專案路徑唔會改，方便你後面繼續慢慢補完。"
      },
      next: {
        title: "下一個測驗位",
        description: "之後新測驗可以直接跟呢個路由規則加入，等成個站一路開坑一路長。",
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

function currentCopy() {
  return SITE_COPY[currentLocale] || SITE_COPY.tc;
}

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
