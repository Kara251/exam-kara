(function () {
  function replaceAllPairs(text, pairs) {
    return pairs.reduce(function (result, pair) {
      return result.split(pair[0]).join(pair[1]);
    }, text);
  }

  function toSC(text) {
    return replaceAllPairs(text, [
      ["這", "这"],
      ["個", "个"],
      ["為", "为"],
      ["與", "与"],
      ["開", "开"],
      ["關", "关"],
      ["頁", "页"],
      ["選", "选"],
      ["擇", "择"],
      ["測", "测"],
      ["驗", "验"],
      ["題", "题"],
      ["應", "应"],
      ["風", "风"],
      ["變", "变"],
      ["對", "对"],
      ["幫", "帮"],
      ["適", "适"],
      ["補", "补"],
      ["愛", "爱"],
      ["覺", "觉"],
      ["劇", "剧"],
      ["實", "实"],
      ["說", "说"],
      ["總", "总"],
      ["類", "类"],
      ["線", "线"],
      ["後", "后"],
      ["點", "点"],
      ["電", "电"],
      ["戰", "战"],
      ["鬥", "斗"],
      ["學", "学"],
      ["藝", "艺"],
      ["陰", "阴"],
      ["聲", "声"],
      ["靜", "静"],
      ["長", "长"],
      ["壓", "压"],
      ["雜", "杂"],
      ["續", "续"],
      ["種", "种"],
      ["體", "体"],
      ["圍", "围"],
      ["價", "价"],
      ["號", "号"],
      ["歲", "岁"],
      ["戲", "戏"],
      ["臺", "台"],
      ["麼", "么"],
      ["嗎", "吗"],
      ["裡", "里"],
      ["觸", "触"],
      ["門", "门"],
      ["聽", "听"],
      ["濃", "浓"],
      ["幾", "几"],
      ["驚", "惊"],
      ["歸", "归"],
      ["滿", "满"],
      ["讓", "让"],
      ["濕", "湿"],
      ["舊", "旧"],
      ["層", "层"],
      ["廣", "广"],
      ["會", "会"],
      ["畫", "画"],
      ["燈", "灯"],
      ["願", "愿"],
      ["極", "极"],
      ["歲", "岁"],
      ["點", "点"]
    ]);
  }

  function toMars(text) {
    return replaceAllPairs(text, [
      ["先選擇語言", "先揀語言版本"],
      ["選好後會進入測驗頁", "揀完就會直達測驗頁"],
      ["右上角也能隨時切換", "右上角那顆語言鍵隨時都能切"],
      ["開始測驗", "開局測驗"],
      ["更多測驗", "更多試題"],
      ["上一題", "上一題惹"],
      ["保存結果圖", "存結果圖"],
      ["查看結果圖", "看結果圖"],
      ["再測一次", "再來壹把"],
      ["你 的 命 定 路 線", "伱 の 本 命 路 線"],
      ["這輪很對你的還有", "這波也很對味の還有"],
      ["這輪可能卡住你的", "這波可能勸退伱の"],
      ["掃碼回到測驗", "掃碼回測驗頁"],
      ["封面與版面風格會隨題型與結果變化。", "封面跟版面風格會跟著題感同結果亂數切換。"],
      ["路線", "路線"],
      ["節奏", "節奏"],
      ["內容承受度", "承受度"],
      ["命定", "本命"],
      ["結果", "結果"],
      ["你", "伱"],
      ["我", "莪"],
      ["的", "の"],
      ["了", "惹"],
      ["嗎", "ㄇ"],
      ["很", "超"],
      ["可以", "阔以"],
      ["不是", "卟4"],
      ["不要", "卟要"],
      ["一個", "壹個"],
      ["什麼", "虾米"],
      ["怎麼", "肿么"],
      ["如果", "淉真"],
      ["朋友", "盆友"],
      ["喜歡", "稀飯"]
    ]);
  }

  function toWenyan(text) {
    return replaceAllPairs(text, [
      ["先選擇語言", "請先擇其言"],
      ["選好後會進入測驗頁", "既擇其言，乃入試頁"],
      ["右上角也能隨時切換", "右上角亦可隨時更易"],
      ["開始測驗", "始試"],
      ["更多測驗", "諸試總覽"],
      ["上一題", "前題"],
      ["保存結果圖", "存其所得圖"],
      ["查看結果圖", "觀其所得圖"],
      ["再測一次", "復測"],
      ["你 的 命 定 路 線", "汝之命定路線"],
      ["這輪很對你的還有", "此輪亦相契者尚有"],
      ["這輪可能卡住你的", "此輪或相左者"],
      ["掃碼回到測驗", "掃碼可返測頁"],
      ["路線", "路線"],
      ["節奏", "節奏"],
      ["內容承受度", "內容承受"],
      ["結果", "所得"],
      ["你", "汝"],
      ["我", "吾"],
      ["這輪", "此輪"],
      ["更多", "更多"],
      ["如果", "若"],
      ["可以", "可"],
      ["喜歡", "好"],
      ["想要", "所欲"],
      ["怎麼", "何如"],
      ["什麼", "何"]
    ]);
  }

  function toYue(text) {
    return replaceAllPairs(text, [
      ["先選擇語言", "先揀語言"],
      ["選好後會進入測驗頁", "揀完就會入測驗頁"],
      ["右上角也能隨時切換", "右上角之後都可以隨時轉"],
      ["開始測驗", "開始測驗"],
      ["更多測驗", "更多測驗"],
      ["上一題", "上一題"],
      ["保存結果圖", "儲存結果圖"],
      ["查看結果圖", "查看結果圖"],
      ["再測一次", "再測一次"],
      ["這輪很對你的還有", "今輪都幾啱你嘅仲有"],
      ["這輪可能卡住你的", "今輪未必啱你嘅係"],
      ["掃碼回到測驗", "掃碼返去測驗"],
      ["你", "你"],
      ["我", "我"],
      ["這裡", "呢度"],
      ["現在", "而家"],
      ["適合", "啱"],
      ["想要", "想要"],
      ["什麼", "乜嘢"],
      ["怎麼", "點樣"],
      ["如果", "如果"],
      ["可以", "可以"],
      ["只是", "只係"],
      ["還有", "仲有"],
      ["之後", "之後"],
      ["風格", "風格"],
      ["結果", "結果"]
    ]);
  }

  var UI = {
    tc: {
      pageTitle: "GalGame 命定路線測驗",
      pageDescription: "15道問題，從路線口味、節奏偏好到內容承受度，替你對上更適合補的 GalGame。",
      ogTitle: "GalGame 命定路線測驗",
      ogDescription: "43 部作品結果池，15 題把你推向更對味的那一部。",
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "先選擇語言",
      gateSubtitle: "選好後會進入測驗頁，右上角也能隨時切換。",
      gateNote: "動態版面、開始頁、答題頁與結果頁都會跟著語言一起切換。",
      gateToast: "右上角可隨時切換語言",
      homeRoute: "GALGAME ROUTE MATCH",
      homeTag: "号外 EXTRA",
      homeTitleA: "GalGame",
      homeTitleB: "命定路線",
      homeSubtitle: "15道題，把路線口味、節奏偏好與內容承受度對成一條更適合你的命定路線。",
      featureTag: "-- 作品取向 --",
      spotlightLabel: "當前聚焦",
      repoLabel: "GalGame 測驗原始倉庫",
      start: "開始測驗 ▶",
      more: "更多測驗",
      scrollHint: "向下滑看更多",
      quizRoute: "QUESTION",
      prev: "上一題",
      resultRoute: "RESULT",
      resultLead: "你 的 命 定 路 線",
      save: "保存結果圖",
      saveBusy: "保存中…",
      preview: "查看結果圖",
      previewLoading: "生成中…",
      retry: "再測一次",
      traitsTitle: "這輪特質分佈",
      altTitle: "這輪很對你的還有",
      avoidTitle: "這輪可能卡住你的",
      qrLabel: "掃碼回到測驗",
      entryLabel: "入口",
      lengthLabel: "篇幅",
      contentLabel: "內容",
      previewTitle: "結果圖預覽",
      previewHint: "長按圖片即可保存到本地，也能自己分享出去。",
      previewClose: "關閉",
      previewFailed: "結果圖生成失敗，請稍後再試。",
      saveFailed: "保存失敗，請改用系統截圖。",
      footer: "GalGame 命定路線測驗",
      topMatchLabel: "首推",
      resultPrefix: "命中傾向",
      resultKeepLabel: "本輪關鍵偏好",
      worksLiveLabel: "43 部作品結果池"
    },
    en: {
      pageTitle: "GalGame Route Match",
      pageDescription: "15 questions on route taste, pacing, and content tolerance to point you toward a better-fit visual novel.",
      ogTitle: "GalGame Route Match",
      ogDescription: "A 43-title result pool with shifting covers, layouts, and route moods.",
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "Choose Your Language",
      gateSubtitle: "After you enter, the language switch stays in the top-right corner.",
      gateNote: "The animated layout, quiz flow, and result page all follow the language you pick here.",
      gateToast: "Language stays in the top-right corner",
      homeRoute: "GALGAME ROUTE MATCH",
      homeTag: "EXTRA",
      homeTitleA: "GalGame",
      homeTitleB: "Route Match",
      homeSubtitle: "15 questions turn route taste, pacing, and content tolerance into a better-fit visual novel recommendation.",
      featureTag: "-- CURRENT MOOD --",
      spotlightLabel: "Spotlight",
      repoLabel: "GalGame test repository",
      start: "Start Quiz ▶",
      more: "More Tests",
      scrollHint: "Scroll for more",
      quizRoute: "QUESTION",
      prev: "Previous",
      resultRoute: "RESULT",
      resultLead: "YOUR MATCHED ROUTE",
      save: "Save Result Poster",
      saveBusy: "Saving…",
      preview: "Preview Poster",
      previewLoading: "Rendering…",
      retry: "Try Again",
      traitsTitle: "This Round's Trait Balance",
      altTitle: "Also Strong Fits",
      avoidTitle: "Likely Misses This Round",
      qrLabel: "Scan to reopen the test",
      entryLabel: "Entry",
      lengthLabel: "Length",
      contentLabel: "Content",
      previewTitle: "Poster Preview",
      previewHint: "Long-press or save the image directly from the preview.",
      previewClose: "Close",
      previewFailed: "Could not generate the poster preview.",
      saveFailed: "Could not save the poster. Please use a screenshot instead.",
      footer: "GalGame Route Match",
      topMatchLabel: "Top Match",
      resultPrefix: "Matched mood",
      resultKeepLabel: "Key preferences this round",
      worksLiveLabel: "43-title result pool"
    },
    ja: {
      pageTitle: "GalGame 命定ルート診断",
      pageDescription: "15問でルートの好み、テンポ、内容耐性を見て、相性のいいビジュアルノベルへ導きます。",
      ogTitle: "GalGame 命定ルート診断",
      ogDescription: "43作品プールから、今の気分に合う一本を引き当てる診断ページ。",
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "先に言語を選んでください",
      gateSubtitle: "入った後も、右上からいつでも言語を切り替えられます。",
      gateNote: "動くレイアウト、設問、結果画面まで、ここで選んだ言語に合わせて切り替わります。",
      gateToast: "言語切替は右上にあります",
      homeRoute: "GALGAME ROUTE MATCH",
      homeTag: "号外 EXTRA",
      homeTitleA: "GalGame",
      homeTitleB: "命定ルート",
      homeSubtitle: "15問で、ルートの好み、読むテンポ、内容耐性を今の自分に合う一本へつなぎます。",
      featureTag: "-- 現在の系統 --",
      spotlightLabel: "現在の焦点",
      repoLabel: "GalGame診断元リポジトリ",
      start: "診断開始 ▶",
      more: "もっと見る",
      scrollHint: "下へスクロール",
      quizRoute: "QUESTION",
      prev: "前の設問",
      resultRoute: "RESULT",
      resultLead: "今 の 命 定 ル ー ト",
      save: "結果画像を保存",
      saveBusy: "保存中…",
      preview: "結果画像を見る",
      previewLoading: "生成中…",
      retry: "もう一度",
      traitsTitle: "今回の特質バランス",
      altTitle: "今回かなり近い作品",
      avoidTitle: "今回ずれやすい作品",
      qrLabel: "診断ページへ戻る",
      entryLabel: "入口",
      lengthLabel: "尺",
      contentLabel: "内容",
      previewTitle: "結果画像プレビュー",
      previewHint: "画像を長押しして保存、またはそのまま共有できます。",
      previewClose: "閉じる",
      previewFailed: "結果画像を生成できませんでした。",
      saveFailed: "保存に失敗しました。端末のスクリーンショットを使ってください。",
      footer: "GalGame 命定ルート診断",
      topMatchLabel: "首位一致",
      resultPrefix: "命中傾向",
      resultKeepLabel: "今回強く出た好み",
      worksLiveLabel: "43作品結果プール"
    }
  };

  function pick(value, locale) {
    var targetLocale = locale || "tc";
    var base = "";

    if (value && typeof value === "object") {
      if (targetLocale === "en" && value.en) {
        return value.en;
      }

      if (targetLocale === "ja" && value.ja) {
        return value.ja;
      }

      if (targetLocale === "sc" && value.sc) {
        return value.sc;
      }

      base = value.tc || value.sc || value.en || value.ja || "";
    } else {
      base = value || "";
    }

    if (targetLocale === "sc") {
      return toSC(base);
    }

    if (targetLocale === "hx") {
      return toMars(base);
    }

    if (targetLocale === "wy") {
      return toWenyan(base);
    }

    if (targetLocale === "yue") {
      return toYue(base);
    }

    return base;
  }

  function getUi(locale) {
    var baseLocale = locale === "en" || locale === "ja" ? locale : "tc";
    var source = UI[baseLocale];
    var result = {};

    Object.keys(source).forEach(function (key) {
      if (baseLocale === locale) {
        result[key] = source[key];
      } else {
        result[key] = pick({ tc: UI.tc[key], en: UI.en[key], ja: UI.ja[key] }, locale);
      }
    });

    return result;
  }

  function contentLevelLabel(locale, level) {
    var labels = {
      tc: ["全年齡", "成熟題材", "版本差異", "成人向", "成人 / 高風險"],
      en: ["All ages", "Mature themes", "Version split", "Adult-oriented", "Adult / high-risk"],
      ja: ["全年齢", "成熟テーマ", "版差分あり", "成人向け", "成人 / 高リスク"]
    };
    var baseLocale = locale === "en" || locale === "ja" ? locale : "tc";
    var value = (labels[baseLocale] || labels.tc)[Math.max(0, Math.min(4, level || 0))];

    return pick({ tc: value, en: value, ja: value }, locale);
  }

  function adultGateLabel(locale, work) {
    var gate = work && String(work.adult_gate_recommended || "").trim() === "是";
    var base = gate
      ? {
          tc: "建議成人確認",
          en: "adult check advised",
          ja: "成人確認推奨"
        }
      : {
          tc: "可直接查看",
          en: "directly viewable",
          ja: "そのまま閲覧可"
        };

    return pick(base, locale);
  }

  window.ExamKaraGalI18n = {
    pick: pick,
    getUi: getUi,
    getContentLevelLabel: contentLevelLabel,
    getAdultGateLabel: adultGateLabel,
    toSC: toSC,
    toMars: toMars,
    toWenyan: toWenyan,
    toYue: toYue
  };
})();
