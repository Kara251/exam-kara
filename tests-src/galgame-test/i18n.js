(function () {
  var marsApi = window.ExamKaraMarsConvert || null;

  function replaceAllPairs(text, pairs) {
    return pairs.slice().sort(function (left, right) {
      return right[0].length - left[0].length;
    }).reduce(function (result, pair) {
      return result.split(pair[0]).join(pair[1]);
    }, String(text || ""));
  }

  function toSC(text) {
    if (marsApi && marsApi.toSimplified) {
      return marsApi.toSimplified(text);
    }

    return replaceAllPairs(text, [
      ["這", "这"],
      ["個", "个"],
      ["為", "为"],
      ["與", "与"],
      ["頁", "页"],
      ["選", "选"],
      ["擇", "择"],
      ["測", "测"],
      ["驗", "验"],
      ["題", "题"],
      ["對", "对"],
      ["補", "补"],
      ["後", "后"],
      ["戰", "战"],
      ["鬥", "斗"],
      ["學", "学"],
      ["聲", "声"],
      ["靜", "静"],
      ["長", "长"],
      ["關", "关"],
      ["線", "线"],
      ["點", "点"],
      ["畫", "画"],
      ["會", "会"]
    ]);
  }

  function toMars(text) {
    var phrased = replaceAllPairs(text, [
      ["先選擇語言", "先揀語言版本"],
      ["選好後會進入測驗頁，右上角也能隨時切換。", "揀完就會慢慢進場，右上角那顆語言鍵也能隨時切。"],
      ["動態版面、開始頁、答題頁與結果頁都會跟著語言一起切換。", "動態版面、開場、答題同結果頁都會跟著伱揀の語言壹起變。"],
      ["從 100 道題池隨機抽出 15 題", "從 100 道題池亂數抽出 15 題"],
      ["從更大的題池隨機抽題", "從更大題池亂數抽題"],
      ["把路線口味、節奏偏好與內容承受度", "把路線口味、節奏偏好同承受度"],
      ["對成更適合你的命定作品", "對成更吃伱電波の本命作"],
      ["開始測驗", "開測"],
      ["更多測驗", "更多試題"],
      ["上一題", "上壹題"],
      ["保存結果圖", "存結果圖"],
      ["查看結果圖", "看結果圖"],
      ["再測一次", "再來壹把"],
      ["作品取向", "作品路數"],
      ["情緒底色", "情緒底色"],
      ["補法提醒", "補法備忘"],
      ["版本提醒", "版本避雷"],
      ["你 的 命 定 路 線", "伱 這 輪 の 本 命 路 線"],
      ["這輪很對你的還有", "這波也超對味の還有"],
      ["這輪可能卡住你的", "這波可能勸退伱の"],
      ["掃碼回到測驗", "掃碼返測驗頁"],
      ["GalGame 測驗頁倉庫", "GalGame 測驗頁倉庫"],
      ["如果", "淉真"],
      ["可以", "阔以"],
      ["不是", "卟4"],
      ["不要", "卟要"],
      ["喜歡", "稀飯"],
      ["開始", "開局"],
      ["真的", "尊嘟"],
      ["感覺", "趕腳"],
      ["一起", "壹起"],
      ["一個", "壹個"],
      ["什麼", "虾米"],
      ["怎麼", "肿么"]
    ]);
    var converted = marsApi && marsApi.toMarsFromTraditional
      ? marsApi.toMarsFromTraditional(phrased)
      : phrased;

    return replaceAllPairs(converted, [
      ["你", "伱"],
      ["妳", "伱"],
      ["我", "莪"],
      ["的", "の"],
      ["了", "惹"],
      ["嗎", "ㄇ"],
      ["吗", "ㄇ"],
      ["很", "超"],
      ["不", "卟"]
    ]);
  }

  function toWenyan(text) {
    return replaceAllPairs(text, [
      ["先選擇語言", "請先擇其言"],
      ["選好後會進入測驗頁，右上角也能隨時切換。", "既定其言，乃入測頁；右上角亦可隨時更易。"],
      ["動態版面、開始頁、答題頁與結果頁都會跟著語言一起切換。", "其版式、起頁、答頁與結果頁，皆隨所擇之言而改。"],
      ["從 100 道題池隨機抽出 15 題", "自百題之池隨機取十五題"],
      ["從更大的題池隨機抽題", "自更廣題池隨機取題"],
      ["把路線口味、節奏偏好與內容承受度", "以路線所好、節奏偏向與內容承受"],
      ["對成更適合你的命定作品", "推更契汝心之作"],
      ["開始測驗", "始試"],
      ["更多測驗", "諸試總覽"],
      ["上一題", "前題"],
      ["保存結果圖", "存其所得圖"],
      ["查看結果圖", "觀其所得圖"],
      ["再測一次", "復測"],
      ["作品取向", "作品所向"],
      ["情緒底色", "情緒底色"],
      ["補法提醒", "補法之示"],
      ["版本提醒", "版本之示"],
      ["你 的 命 定 路 線", "汝之命定路線"],
      ["這輪很對你的還有", "此輪尚有相契者"],
      ["這輪可能卡住你的", "此輪或相左者"],
      ["掃碼回到測驗", "掃碼可返測頁"],
      ["如果", "若"],
      ["可以", "可"],
      ["喜歡", "好"],
      ["想要", "所欲"],
      ["怎麼", "何如"],
      ["什麼", "何"],
      ["你", "汝"],
      ["我", "吾"],
      ["這輪", "此輪"]
    ]);
  }

  function toYue(text) {
    return replaceAllPairs(text, [
      ["先選擇語言", "先揀語言"],
      ["選好後會進入測驗頁，右上角也能隨時切換。", "揀完之後就會入測驗頁，右上角之後都可以隨時轉。"],
      ["動態版面、開始頁、答題頁與結果頁都會跟著語言一起切換。", "版面、開始頁、答題頁同結果頁都會跟住你揀嘅語言一齊轉。"],
      ["從 100 道題池隨機抽出 15 題", "由 100 道題池隨機抽出 15 題"],
      ["從更大的題池隨機抽題", "由更大題池隨機抽題"],
      ["把路線口味、節奏偏好與內容承受度", "由路線口味、節奏偏好同內容承受度"],
      ["對成更適合你的命定作品", "對到更啱你補嘅本命作品"],
      ["開始測驗", "開始測驗"],
      ["更多測驗", "更多測驗"],
      ["上一題", "上一題"],
      ["保存結果圖", "儲存結果圖"],
      ["查看結果圖", "查看結果圖"],
      ["再測一次", "再測一次"],
      ["作品取向", "作品路數"],
      ["情緒底色", "情緒底色"],
      ["補法提醒", "補法提醒"],
      ["版本提醒", "版本提醒"],
      ["這輪很對你的還有", "今輪都幾啱你嘅仲有"],
      ["這輪可能卡住你的", "今輪未必啱你嘅係"],
      ["掃碼回到測驗", "掃碼返去測驗"],
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
      ["結果", "結果"],
      ["你", "你"],
      ["我", "我"]
    ]);
  }

  var UI = {
    tc: {
      pageTitle: "GalGame 命定路線測驗",
      pageDescription: "從 100 道題池隨機抽出 15 題，把路線口味、節奏偏好與內容承受度對成更適合你的 GalGame。",
      ogTitle: "GalGame 命定路線測驗",
      ogDescription: "43 部作品結果池，從 100 題中隨機抽出 15 題，幫你找出這輪更該先補的一部。",
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "先選擇語言",
      gateSubtitle: "選好後會進入測驗頁，右上角也能隨時切換。",
      gateNote: "動態版面、開始頁、答題頁與結果頁都會跟著語言一起切換。",
      gateToast: "右上角可隨時切換語言",
      homeRoute: "GALGAME TEST FILE",
      homeTag: "号外 EXTRA",
      homeTitleA: "GalGame",
      homeTitleB: "命定路線",
      homeSubtitle: "從 100 道題池隨機抽出 15 題，把路線口味、節奏偏好與內容承受度對成更適合你的命定作品。",
      featureTag: "-- 路線導覽 --",
      spotlightLabel: "當前聚焦",
      repoLabel: "GalGame 測驗頁倉庫",
      start: "開始測驗 ▶",
      more: "更多測驗",
      scrollHint: "向下滑，下面還有輪播與結果線索",
      quizRoute: "QUESTION",
      prev: "上一題",
      resultRoute: "RESULT",
      resultLead: "你 這 輪 更 該 先 補",
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
      typeTitle: "作品取向",
      toneTitle: "情緒底色",
      entryAdviceTitle: "補法提醒",
      versionTitle: "版本提醒",
      previewTitle: "結果圖預覽",
      previewHint: "長按圖片即可保存到本地；在 QQ 內建瀏覽器裡也能直接自己儲存或轉發。",
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
      pageTitle: "GalGame route test",
      pageDescription: "15 questions are drawn from a 100-question pool to match your route taste, pacing, and tolerance with a sharper-fit visual novel.",
      ogTitle: "GalGame route test",
      ogDescription: "A 43-title result pool with 15 random draws from 100 questions and a sharper route match.",
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "Choose Your Language",
      gateSubtitle: "After you enter, the language switch stays in the top-right corner.",
      gateNote: "The animated layout, quiz flow, and result page all follow the language you pick here.",
      gateToast: "Language stays in the top-right corner",
      homeRoute: "GALGAME TEST FILE",
      homeTag: "EXTRA",
      homeTitleA: "GalGame",
      homeTitleB: "Route Test",
      homeSubtitle: "15 questions are drawn from a 100-question pool to line up your route taste, pacing, and content tolerance with a sharper match.",
      featureTag: "-- ROUTE DOSSIER --",
      spotlightLabel: "Spotlight",
      repoLabel: "Route page repository",
      start: "Start Quiz ▶",
      more: "More Tests",
      scrollHint: "Scroll down for the rotating covers and more clues",
      quizRoute: "QUESTION",
      prev: "Previous",
      resultRoute: "RESULT",
      resultLead: "START HERE THIS ROUND",
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
      typeTitle: "Profile",
      toneTitle: "Tone",
      entryAdviceTitle: "Entry note",
      versionTitle: "Version note",
      previewTitle: "Poster Preview",
      previewHint: "Long-press or save the image directly from the preview, then share it however you like.",
      previewClose: "Close",
      previewFailed: "Could not generate the poster preview.",
      saveFailed: "Could not save the poster. Please use a screenshot instead.",
      footer: "GalGame route test",
      topMatchLabel: "Top Match",
      resultPrefix: "Matched mood",
      resultKeepLabel: "Key preferences this round",
      worksLiveLabel: "43-title result pool"
    },
    ja: {
      pageTitle: "GalGame 命定ルート診断",
      pageDescription: "100問の設問プールから15問を引き、ルートの好み、テンポ、内容耐性を今の自分に合う一本へつなぎます。",
      ogTitle: "GalGame 命定ルート診断",
      ogDescription: "43作品プールと100問中15問のランダム出題で、今の気分に合う一本を引き当てる診断ページ。",
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "先に言語を選んでください",
      gateSubtitle: "入った後も、右上からいつでも言語を切り替えられます。",
      gateNote: "動くレイアウト、設問、結果画面まで、ここで選んだ言語に合わせて切り替わります。",
      gateToast: "言語切替は右上にあります",
      homeRoute: "GALGAME TEST FILE",
      homeTag: "号外 EXTRA",
      homeTitleA: "GalGame",
      homeTitleB: "命定ルート",
      homeSubtitle: "100問の設問プールから15問を引き、ルートの好み、読むテンポ、内容耐性を今の自分に合う一本へつなぎます。",
      featureTag: "-- ルート案内 --",
      spotlightLabel: "現在の焦点",
      repoLabel: "ルートページのリポジトリ",
      start: "診断開始 ▶",
      more: "もっと見る",
      scrollHint: "下へ。カバー帯と追加情報があります",
      quizRoute: "QUESTION",
      prev: "前の設問",
      resultRoute: "RESULT",
      resultLead: "今 回 ま ず 補 る べ き 一 本",
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
      typeTitle: "作品の型",
      toneTitle: "感情の底色",
      entryAdviceTitle: "入り方メモ",
      versionTitle: "版メモ",
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
