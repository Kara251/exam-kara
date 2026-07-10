var localeApi = window.ExamKaraLocale;
var currentLocale = localeApi.getLocale();
var manifestState = {
  anime: {
    synced: true,
    href: "/tests/anime-summer-2026/"
  },
  galgame: {
    synced: true,
    href: "/tests/galgame-test/"
  },
  human: {
    synced: true,
    href: "/tests/human-challenge/"
  }
};
var HERO_TYPEWRITER_LINES = [
  "测试，人格，喜爱。",
  "分享，共鸣。",
  "Vanitas Vanitatum Et Omnia Vanitas.",
  "学园 × 青春 × 物语",
  "Where All Miracles Begin.",
  "保护孩子们做梦的权利。",
  "找寻，寻找，找寻。"
];
var heroTypewriterState = {
  queue: [],
  phrase: "",
  timer: 0,
  resizeFrame: 0,
  running: false
};
var reducedMotionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;

var SITE_COPY = {
  tc: {
    pageTitle: "EXAM KARA",
    metaDescription: "EXAM KARA 的互動測驗首頁，集中收納目前已開放與待加入的測驗頁。",
    ogDescription: "把已開放與即將加入的互動測驗集中在同一個首頁。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "LIVE TESTS", "SUMMER 2026"],
    marqueeBottom: ["ANIME GUIDE 2026", "性格診断テスト", "SUMMER LINEUP", "EXAM KARA", "LIVE TESTS"],
    heroRailLeft: "試験案內",
    heroRailRight: "exam.kara251.com",
    heroTag: "号外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 測驗索引 ✧",
    heroCopyTag: "-- 測驗集合 --",
    heroCopy: "先從已開放的測驗裡挑一頁開始，之後上線的新測驗也都會收在這裡。",
    heroPrimaryAction: "查看測驗",
    heroSecondaryAction: "進入動漫測驗",
    heroHomeAction: "返回主頁",
    heroSecondaryPrefix: "進入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "CURRENT LINEUP: ANIME + GALGAME + HUMAN",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動測驗集合",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "目前開放",
    sectionNote: "現在能玩的測驗都在這裡，之後新頁面也會繼續往下加。",
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
      galgame: {
        title: "GalGame 命定路線測驗",
        cta: "GalGame 測驗",
        description: "15 道問題，對照路線口味、節奏偏好與承受度，幫你找到更適合補的作品。",
        note: "收錄 43 部作品，各附路線說明與封面圖。"
      }
    }
  },
  sc: {
    pageTitle: "EXAM KARA",
    metaDescription: "Kara 的互动测验首页，集中展示目前可用与准备中的测试页。",
    ogDescription: "集中展示目前可用与准备中的互动测试页。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "LIVE TESTS", "SUMMER 2026"],
    marqueeBottom: ["ANIME GUIDE 2026", "性格诊断テスト", "SUMMER LINEUP", "EXAM KARA", "LIVE TESTS"],
    heroRailLeft: "试验导览",
    heroRailRight: "exam.kara251.com",
    heroTag: "号外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 测验索引 ✧",
    heroCopyTag: "-- 测验集合 --",
    heroCopy: "先从已开放的测验里挑一页开始，之后上线的新测验也都会收在这里。",
    heroPrimaryAction: "查看测验",
    heroSecondaryAction: "进入动漫测验",
    heroHomeAction: "返回主页",
    heroSecondaryPrefix: "进入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "CURRENT LINEUP: ANIME + GALGAME + HUMAN",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互动测验集合",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "目前开放",
    sectionNote: "现在能玩的测验都在这里，之后新页面也会继续往下加。",
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
      galgame: {
        title: "GalGame 命定路线测验",
        cta: "GalGame 测验",
        description: "15 道问题，按路线口味、节奏偏好和承受度，帮你找到更适合补的作品。",
        note: "收录 43 部作品，各附路线说明与封面图。"
      }
    }
  },
  hx: {
    pageTitle: "EXAM KARA",
    metaDescription: "EXAM KARA の互動測驗首頁，把而家能玩同準備開坑の測驗頁壹次打包收編。",
    ogDescription: "已開放同待開坑の互動測驗，統統收進同一個首頁。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "LIVE TESTS", "SUMMER 2026"],
    marqueeBottom: ["ANIME GUIDE 2026", "本命番診斷テスト", "SUMMER LINEUP", "EXAM KARA", "夏番開坑惹"],
    heroRailLeft: "試題導航",
    heroRailRight: "exam.kara251.com",
    heroTag: "號外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 測驗索引 ✧",
    heroCopyTag: "-- 測驗合集 --",
    heroCopy: "先從已開著の測驗裡挑壹頁開刷，後面新開の測驗也都會陸續收進這裡。",
    heroPrimaryAction: "先看試題",
    heroSecondaryAction: "進夏番測驗",
    heroHomeAction: "返主頁",
    heroSecondaryPrefix: "進入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "CURRENT LINEUP: ANIME + GALGAME + HUMAN",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動測驗合集",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "而家能玩の測驗",
    sectionNote: "能玩の頁面都收在這裡，後面新測驗也會繼續補進來。",
    routeLabel: "ROUTE",
    sourceLabel: "SEASON",
    openTest: "進去開測",
    comingSoon: "蹲個開坑",
    statusLive: "LIVE",
    statusPending: "PENDING",
    statusWaiting: "WAITING",
    unavailableNote: "這個試題暫時離線惹，坑位先留著。",
    tests: {
      anime: {
        title: "2026 夏番性格測驗",
        cta: "夏番測驗",
        description: "15道題，對照伱の追番電波揪出本季本命番。附推坑理由同避雷提醒。",
        note: "2026夏番收錄已補滿，動畫電影也算進去惹。"
      },
      galgame: {
        title: "GalGame 本命路線測驗",
        cta: "GalGame 測驗",
        description: "15道題，按路線口味、節奏偏好同承受度，幫伱找到更想肝下去の作品。",
        note: "收惹 43 部作品，每部都帶埋路線說明同封面。"
      }
    }
  },
  wy: {
    pageTitle: "EXAM KARA",
    metaDescription: "EXAM KARA 諸測總目也，今所開放與後將納入之頁，悉聚於此。",
    ogDescription: "諸互動測頁，凡既成與將成者，咸收一首頁之內。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "LIVE TESTS", "SUMMER 2026"],
    marqueeBottom: ["ANIME GUIDE 2026", "性格診断テスト", "SUMMER LINEUP", "EXAM KARA", "夏番本命之卜"],
    heroRailLeft: "試牘總目",
    heroRailRight: "exam.kara251.com",
    heroTag: "號外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 試頁總目 ✧",
    heroCopyTag: "-- 試頁總覽 --",
    heroCopy: "今可先擇已開之試而入，後續新試亦將續錄於此。",
    heroPrimaryAction: "覽其諸試",
    heroSecondaryAction: "入夏番試",
    heroHomeAction: "返主頁",
    heroSecondaryPrefix: "入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "CURRENT LINEUP: ANIME + GALGAME + HUMAN",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動測驗總錄",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "今已開放之頁",
    sectionNote: "今可遊之試皆列於此，後續新頁亦將續補之。",
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
      galgame: {
        title: "GalGame 命定路線試",
        cta: "GalGame 試",
        description: "十五題，以辨路線所好、節奏偏向與承受，推更契汝心之作。",
        note: "收錄四十三部作品，各附路線與封面。"
      }
    }
  },
  en: {
    pageTitle: "EXAM KARA",
    metaDescription: "The EXAM KARA index, collecting live and in-progress interactive tests under one home page.",
    ogDescription: "A single home page for live and upcoming interactive tests.",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "LIVE TESTS", "SUMMER 2026"],
    marqueeBottom: ["ANIME GUIDE 2026", "PERSONALITY TEST", "SUMMER LINEUP", "EXAM KARA", "LIVE TESTS"],
    heroRailLeft: "TEST INDEX",
    heroRailRight: "exam.kara251.com",
    heroTag: "EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "EXAM KARA x TEST INDEX",
    heroCopyTag: "-- TEST CATALOG --",
    heroCopy: "Start from whichever live test fits your mood. New tests will keep landing here.",
    heroPrimaryAction: "Browse Tests",
    heroSecondaryAction: "Anime Test",
    heroHomeAction: "Back to Home",
    heroSecondaryPrefix: "Open ",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "CURRENT LINEUP: ANIME + GALGAME + HUMAN",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "test collection",
    heroSparkle: "ARCHIVE MODE",
    sectionKicker: "TEST INDEX",
    sectionTitle: "Live Now",
    sectionNote: "Everything playable right now sits here, and new tests will be added underneath.",
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
      galgame: {
        title: "GalGame Route Match",
        cta: "GalGame Test",
        description: "15 questions on route taste, pacing, and tolerance to find a better-fit visual novel.",
        note: "43 titles, each with route details and a cover image."
      }
    }
  },
  yue: {
    pageTitle: "EXAM KARA",
    metaDescription: "EXAM KARA 嘅互動測驗首頁，集中收埋而家開放緊同之後會加落去嘅測驗頁。",
    ogDescription: "而家用到同稍後加入嘅互動測驗，都放返喺同一個首頁。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "LIVE TESTS", "SUMMER 2026"],
    marqueeBottom: ["ANIME GUIDE 2026", "性格診断テスト", "SUMMER LINEUP", "EXAM KARA", "夏番本命"],
    heroRailLeft: "試頁索引",
    heroRailRight: "exam.kara251.com",
    heroTag: "號外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "✧ EXAM KARA × 試題索引 ✧",
    heroCopyTag: "-- 測驗集合 --",
    heroCopy: "先喺已開放嘅測驗入面揀一頁開始，之後新上線嗰啲都會繼續收埋喺度。",
    heroPrimaryAction: "睇測驗",
    heroSecondaryAction: "入夏番測驗",
    heroHomeAction: "返主頁",
    heroSecondaryPrefix: "入",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "CURRENT LINEUP: ANIME + GALGAME + HUMAN",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "互動測驗集合",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "而家開放緊",
    sectionNote: "而家玩得到嘅測驗都喺度，之後新頁都會繼續加落去。",
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
      galgame: {
        title: "GalGame 命定路線測驗",
        cta: "GalGame 測驗",
        description: "15題，由路線口味、節奏偏好同承受度入手，幫你搵到更啱補嘅作品。",
        note: "收錄咗 43 部作品，每部都附路線說明同封面圖。"
      }
    }
  },
  ja: {
    pageTitle: "EXAM KARA",
    metaDescription: "EXAM KARA のテスト一覧ページ。公開中と準備中のインタラクティブ企画を一か所に集約します。",
    ogDescription: "公開中と今後追加予定のインタラクティブテストをまとめたトップページ。",
    marqueeTop: ["EXAM KARA", "TEST INDEX", "ANIME PERSONALITY", "LIVE TESTS", "SUMMER 2026"],
    marqueeBottom: ["ANIME GUIDE 2026", "性格診断テスト", "SUMMER LINEUP", "EXAM KARA", "夏番命定"],
    heroRailLeft: "試験案内",
    heroRailRight: "exam.kara251.com",
    heroTag: "号外 EXTRA",
    heroDate: "VOL. 01 -- EXAM INDEX",
    heroMixedLine: "EXAM KARA × テスト索引",
    heroCopyTag: "-- テスト一覧 --",
    heroCopy: "まずは公開中のテストから。今後の追加分もこのページに順次まとまります。",
    heroPrimaryAction: "テストを見る",
    heroSecondaryAction: "アニメ診断へ",
    heroHomeAction: "ホームへ戻る",
    heroSecondaryPrefix: "",
    heroMetaDomain: "DOMAIN: exam.kara251.com",
    heroMetaRoute: "CURRENT LINEUP: ANIME + GALGAME + HUMAN",
    heroFooterPrimary: "INTERACTIVE TEST INDEX",
    heroFooterSecondary: "テスト一覧",
    heroSparkle: "☆ﾟ.*･｡ﾟ",
    sectionKicker: "TEST INDEX",
    sectionTitle: "公開中のテスト",
    sectionNote: "いま遊べるテストをここにまとめています。追加分も順次ここへ入ります。",
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
      galgame: {
        title: "GalGame 命定ルート診断",
        cta: "GalGame診断へ",
        description: "15問でルートの好みとテンポを測り、今の自分に合う一本を探します。",
        note: "43作品収録。各ルートの詳細とカバー画像付き。"
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
    gateNote: "之後加入的測驗，都能在右上角切換語言。",
    gateToast: "右上角可隨時切換語言",
    repoExamLabel: "GitHub",
    repoAnimeLabel: "GitHub"
  },
  sc: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先选择语言",
    gateSubtitle: "选好后进入首页，右上角也能随时切换。",
    gateNote: "之后加入的测验，都能在右上角切换语言。",
    gateToast: "右上角可随时切换语言",
    repoExamLabel: "GitHub",
    repoAnimeLabel: "GitHub"
  },
  hx: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先揀伱想看の語言版本",
    gateSubtitle: "選完就直達首頁，右上角那顆語言鍵之後想咋切都阔以。",
    gateNote: "後面新開の測驗，右上角一樣能切語言，卟用重找。",
    gateToast: "右上角隨時都能切語言",
    repoExamLabel: "GitHub",
    repoAnimeLabel: "GitHub"
  },
  wy: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "請先擇其言",
    gateSubtitle: "既擇其言，乃入首頁；右上角亦可隨時更易。",
    gateNote: "後來諸測，皆可由右上角更語。",
    gateToast: "右上角可隨時易語",
    repoExamLabel: "GitHub",
    repoAnimeLabel: "GitHub"
  },
  en: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "Choose Your Language",
    gateSubtitle: "Once you enter, the language switch stays in the top-right corner.",
    gateNote: "New tests added later will have the same language switch.",
    gateToast: "Language switch is in the top-right corner",
    repoExamLabel: "GitHub",
    repoAnimeLabel: "GitHub"
  },
  yue: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先揀語言",
    gateSubtitle: "揀完就會入首頁，右上角之後都可以隨時轉。",
    gateNote: "之後加嘅測驗，都可以喺右上角轉語言。",
    gateToast: "右上角可以隨時轉語言",
    repoExamLabel: "GitHub",
    repoAnimeLabel: "GitHub"
  },
  ja: {
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先に言語を選んでください",
    gateSubtitle: "入った後も、右上の言語メニューからいつでも切り替えられます。",
    gateNote: "この先追加されるテストも、右上の同じ言語メニューを使います。",
    gateToast: "言語切替は右上にあります",
    repoExamLabel: "GitHub",
    repoAnimeLabel: "GitHub"
  }
};

Object.keys(SITE_COPY_EXTENSIONS).forEach(function (locale) {
  Object.assign(SITE_COPY[locale], SITE_COPY_EXTENSIONS[locale]);
});

var HUMAN_TEST_COPY = {
  tc: {
    title: "你能闖過幾個人機測試",
    cta: "人機闖關",
    description: "從老式英文字母驗證碼一路闖到拖拽、軌跡與反爬挑戰，看看你能走到第幾層。",
    note: "文字題只使用英文字母，結果會記錄本輪通關表現。"
  },
  sc: {
    title: "你能闯过几个人机测试",
    cta: "人机闯关",
    description: "从老式英文字母验证码一路闯到拖拽、轨迹与反爬挑战，看看你能走到第几层。",
    note: "文字题只使用英文字母，结果会记录本轮通关表现。"
  },
  hx: {
    title: "伱能闖過幾個人機測試",
    cta: "人機闖關",
    description: "從老派英文字母驗證碼一路闖到拖拽、軌跡同反爬挑戰，看伱能衝到第幾層。",
    note: "文字題只用英文字母，結果會記錄伱這輪の通關表現。"
  },
  wy: {
    title: "汝可過幾重人機之試",
    cta: "人機關",
    description: "自舊式英字驗證而起，歷拖拽、行跡與反爬諸關，觀汝可至幾重。",
    note: "凡文字之題皆用英字，終局記此輪通關之績。"
  },
  en: {
    title: "Human Challenge Tower",
    cta: "Human Challenge",
    description: "Start with old-school letter checks, then push through drag, trace, and anti-bot challenges.",
    note: "Text puzzles use A-Z letters only. Your result records this run."
  },
  yue: {
    title: "你過到幾多人機測試",
    cta: "人機闖關",
    description: "由舊式英文字母驗證碼開始，闖過拖拽、軌跡同反爬挑戰，睇你行到第幾層。",
    note: "文字題只用英文字母，結果會記低你今輪通關表現。"
  },
  ja: {
    title: "人間判定チャレンジ",
    cta: "人間判定へ",
    description: "昔ながらの英字チェックから、ドラッグ、軌跡、反ボット系の挑戦へ進みます。",
    note: "文字問題は英字のみ。この一回の突破記録を結果に残します。"
  }
};

function currentCopy() {
  return SITE_COPY[currentLocale] || SITE_COPY.tc;
}

var gateToastTimer = 0;

function segmentText(text) {
  if (window.Intl && typeof window.Intl.Segmenter === "function") {
    return Array.from(new window.Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(text), function (part) {
      return part.segment;
    });
  }

  return Array.from(text);
}

function shuffleItems(items) {
  var clone = items.slice();
  var index;
  var swapIndex;
  var nextValue;

  for (index = clone.length - 1; index > 0; index -= 1) {
    swapIndex = Math.floor(Math.random() * (index + 1));
    nextValue = clone[index];
    clone[index] = clone[swapIndex];
    clone[swapIndex] = nextValue;
  }

  return clone;
}

function nextHeroTypewriterLine() {
  var nextLine;

  if (heroTypewriterState.queue.length === 0) {
    heroTypewriterState.queue = shuffleItems(HERO_TYPEWRITER_LINES);

    if (
      heroTypewriterState.queue.length > 1 &&
      heroTypewriterState.queue[0] === heroTypewriterState.phrase
    ) {
      nextLine = heroTypewriterState.queue[0];
      heroTypewriterState.queue[0] = heroTypewriterState.queue[heroTypewriterState.queue.length - 1];
      heroTypewriterState.queue[heroTypewriterState.queue.length - 1] = nextLine;
    }
  }

  nextLine = heroTypewriterState.queue.shift() || HERO_TYPEWRITER_LINES[0];
  heroTypewriterState.phrase = nextLine;
  return nextLine;
}

function setHeroTypewriterAccessibleText(text) {
  var a11yNode = document.getElementById("hero-typewriter-a11y");

  if (a11yNode) {
    a11yNode.textContent = text;
  }
}

function setHeroTypewriterVisibleText(text) {
  var textNode = document.getElementById("hero-typewriter-text");

  if (textNode) {
    textNode.textContent = text;
  }
}

function fitHeroTypewriter(text) {
  var heading = document.getElementById("hero-typewriter-heading");
  var measure = document.getElementById("hero-typewriter-measure");
  var availableWidth;
  var minSize = 14;
  var maxSize = 84;
  var bestSize = minSize;
  var low;
  var high;
  var mid;

  if (!heading || !measure || !text) {
    return;
  }

  availableWidth = (heading.parentElement ? heading.parentElement.clientWidth : heading.clientWidth) - 24;

  if (availableWidth <= 0) {
    return;
  }

  measure.textContent = text;
  low = minSize;
  high = maxSize;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    measure.style.fontSize = mid + "px";

    if (measure.scrollWidth <= availableWidth) {
      bestSize = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  heading.style.setProperty("--hero-type-size", bestSize + "px");
}

function queueHeroTypewriterFit() {
  window.cancelAnimationFrame(heroTypewriterState.resizeFrame);
  heroTypewriterState.resizeFrame = window.requestAnimationFrame(function () {
    fitHeroTypewriter(heroTypewriterState.phrase || HERO_TYPEWRITER_LINES[0]);
  });
}

function scheduleHeroTypewriter(callback, delay) {
  window.clearTimeout(heroTypewriterState.timer);
  heroTypewriterState.timer = window.setTimeout(callback, delay);
}

function runReducedMotionHeroTypewriter() {
  var nextLine = nextHeroTypewriterLine();

  fitHeroTypewriter(nextLine);
  setHeroTypewriterAccessibleText(nextLine);
  setHeroTypewriterVisibleText(nextLine);
  scheduleHeroTypewriter(runReducedMotionHeroTypewriter, 2600);
}

function runHeroTypewriterCycle() {
  var nextLine = nextHeroTypewriterLine();
  var segments = segmentText(nextLine);
  var visibleCount = 0;

  fitHeroTypewriter(nextLine);
  setHeroTypewriterAccessibleText(nextLine);
  setHeroTypewriterVisibleText("");

  function typeForward() {
    visibleCount += 1;
    setHeroTypewriterVisibleText(segments.slice(0, visibleCount).join(""));

    if (visibleCount < segments.length) {
      scheduleHeroTypewriter(typeForward, 78 + Math.floor(Math.random() * 44));
      return;
    }

    scheduleHeroTypewriter(typeBackward, 1380 + Math.floor(Math.random() * 420));
  }

  function typeBackward() {
    visibleCount -= 1;
    setHeroTypewriterVisibleText(segments.slice(0, visibleCount).join(""));

    if (visibleCount > 0) {
      scheduleHeroTypewriter(typeBackward, 36 + Math.floor(Math.random() * 24));
      return;
    }

    scheduleHeroTypewriter(startHeroTypewriterLoop, 260 + Math.floor(Math.random() * 160));
  }

  scheduleHeroTypewriter(typeForward, 120);
}

function startHeroTypewriterLoop() {
  window.clearTimeout(heroTypewriterState.timer);

  if (reducedMotionQuery && reducedMotionQuery.matches) {
    runReducedMotionHeroTypewriter();
    return;
  }

  runHeroTypewriterCycle();
}

function initHeroTypewriter() {
  var heading = document.getElementById("hero-typewriter-heading");

  if (!heading) {
    return;
  }

  if (heroTypewriterState.running) {
    queueHeroTypewriterFit();
    return;
  }

  heroTypewriterState.running = true;
  fitHeroTypewriter(heroTypewriterState.phrase || HERO_TYPEWRITER_LINES[0]);
  startHeroTypewriterLoop();

  if (window.ResizeObserver) {
    new window.ResizeObserver(queueHeroTypewriterFit).observe(heading.parentElement || heading);
  } else {
    window.addEventListener("resize", queueHeroTypewriterFit);
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(queueHeroTypewriterFit);
  }

  if (reducedMotionQuery) {
    if (typeof reducedMotionQuery.addEventListener === "function") {
      reducedMotionQuery.addEventListener("change", startHeroTypewriterLoop);
    } else if (typeof reducedMotionQuery.addListener === "function") {
      reducedMotionQuery.addListener(startHeroTypewriterLoop);
    }
  }
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
  var animeLive = manifestState.anime && manifestState.anime.synced;
  var galgameLive = manifestState.galgame && manifestState.galgame.synced;
  var humanLive = manifestState.human && manifestState.human.synced;
  var humanCopy = HUMAN_TEST_COPY[currentLocale] || HUMAN_TEST_COPY.sc;

  return [
    {
      title: copy.tests.anime.title,
      href: animeLive ? manifestState.anime.href : "",
      route: "/tests/anime-summer-2026/",
      source: "2026.07 / TV + FILM",
      repoHref: "https://github.com/Kara251/exam-kara",
      repoName: "github.com/Kara251/exam-kara",
      status: animeLive ? "live" : "pending",
      statusLabel: animeLive ? copy.statusLive : copy.statusWaiting,
      cta: copy.tests.anime.cta,
      description: copy.tests.anime.description,
      note: animeLive ? copy.tests.anime.note : copy.unavailableNote
    },
    {
      title: copy.tests.galgame.title,
      href: galgameLive ? manifestState.galgame.href : "",
      route: "/tests/galgame-test/",
      source: "VN / GALGAME / RESULT LIBRARY",
      repoHref: "https://github.com/Kara251/exam-kara",
      repoName: "github.com/Kara251/exam-kara",
      status: galgameLive ? "live" : "pending",
      statusLabel: galgameLive ? copy.statusLive : copy.statusWaiting,
      cta: copy.tests.galgame.cta,
      description: copy.tests.galgame.description,
      note: galgameLive ? copy.tests.galgame.note : copy.unavailableNote
    },
    {
      title: humanCopy.title,
      href: humanLive ? manifestState.human.href : "",
      route: "/tests/human-challenge/",
      source: "CAPTCHA / TRACE / BOT CHALLENGE",
      repoHref: "https://github.com/Kara251/exam-kara",
      repoName: "github.com/Kara251/exam-kara",
      status: humanLive ? "live" : "pending",
      statusLabel: humanLive ? copy.statusLive : copy.statusWaiting,
      cta: humanCopy.cta,
      description: humanCopy.description,
      note: humanLive ? humanCopy.note : copy.unavailableNote
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
  queueHeroTypewriterFit();
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
  }, 2600);
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
    window.setTimeout(closeLanguageGate, 360);
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
  }, 1360);
}

function selectGateLocale(localeCode, button) {
  var originRect = button ? button.getBoundingClientRect() : null;
  var label = button ? button.textContent : "";

  currentLocale = localeApi.setLocale(localeCode);
  applyLocale();
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
  return false;
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
    var syncedGalgame = manifest.tests.find(function (test) {
      return test.slug === "galgame-test";
    });
    var syncedHuman = manifest.tests.find(function (test) {
      return test.slug === "human-challenge";
    });

    if (!syncedAnime && !syncedGalgame && !syncedHuman) {
      return;
    }

    manifestState = {
      anime: {
        synced: !!(syncedAnime && syncedAnime.synced),
        href: (syncedAnime && syncedAnime.href) || "/tests/anime-summer-2026/"
      },
      galgame: {
        synced: !!(syncedGalgame && syncedGalgame.synced),
        href: (syncedGalgame && syncedGalgame.href) || "/tests/galgame-test/"
      },
      human: {
        synced: !!(syncedHuman && syncedHuman.synced),
        href: (syncedHuman && syncedHuman.href) || "/tests/human-challenge/"
      }
    };
  } catch {}
}

function init() {
  initLanguageSelect();
  applyLocale();
  initHeroTypewriter();
  initLanguageGate(localeApi.shouldShowLanguageGate());
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
