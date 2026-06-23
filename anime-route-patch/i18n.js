(function () {
  function replaceAllPairs(text, pairs) {
    return pairs.slice().sort(function (left, right) {
      return right[0].length - left[0].length;
    }).reduce(function (result, pair) {
      return result.split(pair[0]).join(pair[1]);
    }, text);
  }

  function toTraditional(text) {
    return replaceAllPairs(text, [
      ["互動測試", "互動測驗"],
      ["測試頁", "測驗頁"],
      ["你該追哪部", "你該追哪部"],
      ["這陣子", "最近"],
      ["發消息", "傳訊息"],
      ["片單", "待看清單"],
      ["一部片", "一部作品"],
      ["補片", "補番"],
      ["社媒", "社群"],
      ["沙雕", "胡鬧"],
      ["高光", "亮點"],
      ["好入口", "好上手"],
      ["普通人共鳴", "平凡人共鳴"],
      ["新手友好度", "新手友善度"],
      ["看起來最溫柔耐看的", "看起來最耐看、也最溫柔的"],
      ["最適合邊看邊發消息的", "最適合邊看邊傳訊息的"],
      ["片單裡只能先留一部時，你通常保什麼？", "待看清單裡只能先留一部時，你通常會留哪部？"],
      ["如果情緒對味，我也願意補", "如果情緒對味，我也願意補番"],
      ["最好有我能拿來聊設定的東西", "最好有些能讓我拿來聊設定的東西"],
      ["最適合邊看邊發消息的", "最適合邊看邊傳訊息的"],
      ["國民動畫", "國民動畫"],
      ["社畜共鳴", "社畜共鳴"]
    ]);
  }

  function toMars(text) {
    return replaceAllPairs(text, [
      ["你第一反應通常是？", "伱第一反應通常4？"],
      ["最先被什麼抓住？", "最先會被啥戳到？"],
      ["看到『第二季／劇場版』這幾個字，你會？", "看到『第二季／劇場版』這幾個字，伱會？"],
      ["最期待哪一點？", "最期待哪個點？"],
      ["你通常保什麼？", "伱通常會保啥？"],
      ["哪種場面最讓你想看下去？", "哪種場面最容易把伱拽下去？"],
      ["你更想把自己丟進哪種場景？", "伱更想把自巳丟進哪種場景？"],
      ["你最容易代入哪類主角？", "伱最容易代入哪掛主角？"],
      ["你更喜歡作品怎麼『傷人』？", "伱更吃作品怎麼『刀人』？"],
      ["你更容易被哪種關係打動？", "伱更容易被哪種關係戳到？"],
      ["你追番時最常出現的姿態是？", "伱追番時最常見の狀態4？"],
      ["你對『角色廚』這件事的態度是？", "伱對『角色廚』這事啥態度？"],
      ["你更願意在哪種討論裡待久一點？", "伱更願意泡在哪種討論樓裡？"],
      ["如果這輪測完你真的去補番，你最希望那部作品能？", "淉真這波測完伱就去補番，伱最想那部作能整點啥？"],
      ["先挑最能讓人一口氣追下去的", "先挑那種能讓人壹口氣肝下去の"],
      ["先找能陪我慢慢進入狀態的", "先揪能陪莪慢慢入戲の"],
      ["先看設定、監督或演出是不是夠有趣", "先瞅設定、監督或演出夠不夠戳莪"],
      ["先找適合和朋友一起吐槽的", "先揪適合跟盆友壹起吐槽の"],
      ["戰鬥剪輯和爆點", "打鬥剪輯和爆點"],
      ["氣氛和關係張力", "氣氛跟關係拉扯"],
      ["世界觀關鍵詞", "世界觀關鍵詞"],
      ["畫風和鏡頭語言", "畫風跟鏡頭語言"],
      ["前作越多越興奮", "前作越多伱越上頭"],
      ["門檻太高就先放著", "門檻太高就先擱著"],
      ["只要朋友都在看，我就跟上", "只要盆友都在看，莪就跟上"],
      ["最好可以舒服地陪我一整季", "最好能舒舒服服陪莪壹整季"],
      ["最好玩得夠瘋夠好笑", "最好整得夠瘋夠好笑"],
      ["看起來最溫柔耐看的", "看起來最溫柔、最耐刷の"],
      ["最適合邊看邊發消息的", "最適合邊看邊發訊息の"],
      ["看起來就有故事的人", "看起來就背著一身故事の人"],
      ["夏季番", "夏番"],
      ["命定番", "本命番"],
      ["原創新作", "原創新番"],
      ["最好的情緒收束方式是", "最好の收尾姿勢是"],
      ["最好的情緒收束方式", "最好の收尾姿勢"],
      ["那部作品", "那部片"],
      ["補番門檻", "補番門檻"],
      ["劇場版", "劇場版"],
      ["看不懂先刷社媒解釋", "看不懂先刷社媒考據"],
      ["追番", "追番"],
      ["補番", "補番"],
      ["角色廚", "角色廚"],
      ["世界觀", "世界觀"],
      ["主角團", "主角團"],
      ["名場面", "名場面"],
      ["高光", "高光"],
      ["很適合", "超對味"],
      ["最適合", "最對味"],
      ["更適合", "更吃"],
      ["首推", "本命"],
      ["推薦", "推坑"],
      ["保存分享", "存圖分享"],
      ["更多測驗", "更多試題"],
      ["再測一次", "再來壹把"],
      ["這輪", "這波"],
      ["哪種", "哪掛"],
      ["什麼", "虾米"],
      ["怎麼", "肿么"],
      ["如果", "淉真"],
      ["可以", "阔以"],
      ["喜歡", "稀飯"],
      ["朋友", "盆友"],
      ["一起", "壹起"],
      ["真的", "尊嘟"],
      ["開始", "開局"],
      ["看起來", "看起來"],
      ["感覺", "趕腳"],
      ["很像", "超像"],
      ["有點", "有丶"],
      ["我更喜歡", "莪更吃"],
      ["我更在乎", "莪更在乎"],
      ["我寧可", "莪寧可"],
      ["我想", "莪想"],
      ["我會", "莪會"],
      ["讓我", "讓莪"],
      ["給我", "給莪"],
      ["看下去", "追下去"],
      ["先找", "先揪"],
      ["先看", "先瞅"],
      ["吐槽", "吐槽"],
      ["立刻", "立馬"],
      ["你", "伱"],
      ["我", "莪"],
      ["的", "の"],
      ["了", "惹"],
      ["嗎", "ㄇ"],
      ["很", "超"]
    ]);
  }

  function toWenyan(text) {
    return replaceAllPairs(text, [
      ["你第一反應通常是？", "汝首念常何如？"],
      ["最先被什麼抓住？", "最先為何所攝？"],
      ["看到『第二季／劇場版』這幾個字，你會？", "見此數字，汝將何如？"],
      ["最期待哪一點？", "所最望者何？"],
      ["你通常保什麼？", "汝常留何者？"],
      ["哪種場面最讓你想看下去？", "何等場面最使汝欲續觀？"],
      ["你更想把自己丟進哪種場景？", "汝更欲自投於何等場景？"],
      ["你最容易代入哪類主角？", "汝最易自況於何等主角？"],
      ["你更喜歡作品怎麼『傷人』？", "汝較喜其作何以傷人？"],
      ["你更容易被哪種關係打動？", "汝最易為何等關係所動？"],
      ["你追番時最常出現的姿態是？", "汝追番之時，常居何態？"],
      ["你對『角色廚』這件事的態度是？", "汝於『角色廚』一事，其意何如？"],
      ["你更願意在哪種討論裡待久一點？", "汝較願久留於何等議論之中？"],
      ["如果這輪測完你真的去補番，你最希望那部作品能？", "若此輪既畢而汝果真補番，最望彼作何如？"],
      ["先挑最能讓人一口氣追下去的", "先擇最能使人一氣續觀者"],
      ["先找能陪我慢慢進入狀態的", "先求能徐徐相伴者"],
      ["先看設定、監督或演出是不是夠有趣", "先觀其設定、監督與演出是否有可觀之趣"],
      ["先找適合和朋友一起吐槽的", "先求可與友共觀共笑者"],
      ["戰鬥剪輯和爆點", "戰鬥剪輯與爆點"],
      ["氣氛和關係張力", "氣氛與關係張力"],
      ["門檻太高就先放著", "若門檻太高，姑且置之"],
      ["只要朋友都在看，我就跟上", "友既皆觀，吾亦從之"],
      ["最好有一種誰也猜不到的衝擊", "最好有出人意表之衝擊"],
      ["最好可以舒服地陪我一整季", "最好能安然相伴一季"],
      ["最好玩得夠瘋夠好笑", "最好縱放而足發笑"],
      ["看起來最溫柔耐看的", "觀之最溫柔而耐看者"],
      ["最適合邊看邊發消息的", "最宜邊觀邊傳訊者"],
      ["夏季番", "夏番"],
      ["命定番", "命定之番"],
      ["原創新作", "原創新番"],
      ["最好的情緒收束方式是", "最佳之情緒收束何如"],
      ["最好的情緒收束方式", "最佳之情緒收束何如"],
      ["的態度是", "之態何如"],
      ["那部作品", "彼作"],
      ["劇場版", "劇場版"],
      ["補番門檻", "補番之限"],
      ["看不懂先刷社媒解釋", "未曉先閱社媒解釋"],
      ["追番", "追番"],
      ["補番", "補番"],
      ["角色廚", "偏角之癖"],
      ["世界觀", "世界之設"],
      ["名場面", "名場"],
      ["高光", "華彩"],
      ["首推", "首薦"],
      ["推薦", "薦"],
      ["你們", "汝等"],
      ["我更喜歡", "吾較好"],
      ["我更在乎", "吾尤在意"],
      ["我寧可", "吾寧"],
      ["我想", "吾欲"],
      ["我會", "吾將"],
      ["讓我", "使吾"],
      ["給我", "予吾"],
      ["看下去", "續觀"],
      ["先找", "先求"],
      ["先看", "先觀"],
      ["只要", "但使"],
      ["什麼", "何"],
      ["怎麼", "何如"],
      ["如果", "若"],
      ["可以", "可"],
      ["喜歡", "好"],
      ["朋友", "友"],
      ["一起", "共"],
      ["這輪", "此輪"],
      ["這個", "此"],
      ["那個", "彼"],
      ["這陣子", "近來"],
      ["哪種", "何種"],
      ["真的", "果真"],
      ["不要", "毋"],
      ["沒有", "無"],
      ["不是", "非"],
      ["看起來", "觀之若"],
      ["開始", "伊始"],
      ["覺得", "以為"],
      ["比較", "較"],
      ["適合", "相宜"],
      ["想", "欲"],
      ["看", "觀"],
      ["測驗", "測"],
      ["作品", "作"],
      ["角色", "人"],
      ["結果", "所得"],
      ["你", "汝"],
      ["我", "吾"]
    ]);
  }

  function toYue(text) {
    return replaceAllPairs(text, [
      ["你第一反應通常是？", "你通常第一個反應係咩？"],
      ["最先被什麼抓住？", "最先俾乜嘢吸住？"],
      ["看到『第二季／劇場版』這幾個字，你會？", "見到呢幾隻字，你通常會點？"],
      ["最期待哪一點？", "最想見到邊一樣？"],
      ["你通常保什麼？", "你通常會留低邊種？"],
      ["哪種場面最讓你想看下去？", "邊種場面最令你想追落去？"],
      ["你更想把自己丟進哪種場景？", "你會更想將自己掉入邊種場景？"],
      ["你最容易代入哪類主角？", "你最易代入邊類主角？"],
      ["你更喜歡作品怎麼『傷人』？", "你會更鍾意作品點樣『傷人』？"],
      ["你更容易被哪種關係打動？", "你最易俾邊種關係打中？"],
      ["你追番時最常出現的姿態是？", "你追番時最常見嘅狀態係邊種？"],
      ["你對『角色廚』這件事的態度是？", "你點睇『角色廚』呢回事？"],
      ["你更願意在哪種討論裡待久一點？", "你會更願意留喺邊種討論入面？"],
      ["如果這輪測完你真的去補番，你最希望那部作品能？", "如果今輪測完你真係去補番，你最想嗰套作品做到啲咩？"],
      ["先挑最能讓人一口氣追下去的", "先揀套最易令人一口氣追落去嘅"],
      ["先找能陪我慢慢進入狀態的", "先搵套可以陪我慢慢入戲嘅"],
      ["先看設定、監督或演出是不是夠有趣", "先睇設定、監督同演出夠唔夠吸引"],
      ["先找適合和朋友一起吐槽的", "先搵套啱同朋友一齊邊睇邊吐槽嘅"],
      ["戰鬥剪輯和爆點", "戰鬥剪接同爆點"],
      ["氣氛和關係張力", "氣氛同關係張力"],
      ["世界觀關鍵詞", "世界觀關鍵字"],
      ["畫風和鏡頭語言", "畫風同鏡頭語言"],
      ["前作越多越興奮", "前作越多越令我興奮"],
      ["門檻太高就先放著", "門檻太高就擺住先"],
      ["只要朋友都在看，我就跟上", "只要朋友都喺度睇，我就會跟上"],
      ["最好有一種誰也猜不到的衝擊", "最好有種冇人估到嘅衝擊感"],
      ["最好可以舒服地陪我一整季", "最好可以舒服咁陪我一整季"],
      ["最好有我能拿來聊設定的東西", "最好有啲可以俾我拎嚟傾設定嘅料"],
      ["最好玩得夠瘋夠好笑", "最好玩到夠癲又夠好笑"],
      ["看起來最溫柔耐看的", "睇落最溫柔、又最耐睇嘅"],
      ["最適合邊看邊發消息的", "最啱邊睇邊傳訊息嘅"],
      ["夏季番", "夏番"],
      ["命定番", "本命番"],
      ["原創新作", "原創新番"],
      ["最好的情緒收束方式是", "最好嘅情緒落點係"],
      ["最好的情緒收束方式", "最好嘅情緒落點"],
      ["的態度是", "嘅態度係"],
      ["那部作品", "嗰套作品"],
      ["補番門檻", "補番門檻"],
      ["劇場版", "劇場版"],
      ["看到", "見到"],
      ["哪種", "邊種"],
      ["看不懂先刷社媒解釋", "睇唔明先刷社媒解說"],
      ["追番", "追番"],
      ["補番", "補番"],
      ["角色廚", "角色廚"],
      ["世界觀", "世界觀"],
      ["名場面", "名場面"],
      ["高光", "高光位"],
      ["很適合", "幾啱"],
      ["最適合", "最啱"],
      ["更適合", "更啱"],
      ["首推", "本命"],
      ["我更喜歡", "我會更鍾意"],
      ["我更在乎", "我會更在乎"],
      ["我寧可", "我寧願"],
      ["讓我", "令我"],
      ["看下去", "追落去"],
      ["先找", "先搵"],
      ["先看", "先睇"],
      ["社媒", "社交平台"],
      ["消息", "訊息"],
      ["推薦", "推坑"],
      ["保存分享", "存圖分享"],
      ["更多測驗", "更多測驗"],
      ["這輪", "今輪"],
      ["什麼", "咩"],
      ["怎麼", "點樣"],
      ["喜歡", "鍾意"],
      ["朋友", "朋友"],
      ["一起", "一齊"],
      ["這個", "呢個"],
      ["那個", "嗰個"],
      ["不要", "唔好"],
      ["沒有", "冇"],
      ["不是", "唔係"],
      ["看起來", "睇落"],
      ["適合", "啱"],
      ["真的", "真係"],
      ["想", "想"],
      ["看", "睇"],
      ["給我", "畀我"]
    ]);
  }

  function localizeStyledText(locale, text) {
    if (locale === "tc") {
      return toTraditional(text);
    }

    if (locale === "sc") {
      return toSC(text);
    }

    if (locale === "hx") {
      return toMars(text);
    }

    if (locale === "wy") {
      return toWenyan(text);
    }

    if (locale === "yue") {
      return toYue(text);
    }

    return text;
  }

  var UI = {
    tc: {
      pageTitle: "2026 夏季番測驗 -- 你該追哪部？",
      pageDescription: "從 50 道 ACG 題庫隨機抽出 15 題，算出你這輪最對味的 2026 夏季番。",
      ogTitle: "2026 夏季番你該追哪部？",
      ogDescription: "50 題題池隨機抽 15 題，算出你這輪最適合補哪部夏季番",
      h1a: "夏季番",
      h1b: "你該追哪部？",
      sub: "從 50 道題庫隨機抽出 15 題，找到屬於你的這輪首推作品",
      go: "開始測驗 ▶",
      rl: "你 的 命 定 番 是",
      altT: "這輪也很適合你",
      avT: "可能需要避雷",
      ret: "再測一次",
      sh: "保存分享",
      ftr: "2026 夏季番你該追哪部",
      more: "更多測驗",
      prev: "上一題",
      verticalLeft: "アニメ性格診断",
      verticalRight: "二〇二六年夏",
      homeTag: "号外 EXTRA",
      homeDate: "VOL. 2026 -- SUMMER",
      mixedLine: "✧ 夏のアニメ × 運命診断 ✧",
      featureTag: "-- 特集 --",
      homeFooterPrimary: "ANIME PERSONALITY TEST",
      homeFooterSecondary: "アニメ性格診断テスト",
      sparkleLine: "☆ﾟ.*･｡ﾟ",
      resultTag: "号外",
      resultPub: "SUMMER ANIME GUIDE",
      resultVol: "VOL.2026",
      coverPlaceholder: "COVER ART",
      resultFooterSecondary: "アニメ性格診断",
      goodFallback: "整體調性和你這輪偏好相當接近。",
      avoidFallback: "整體調性和你這輪偏好稍微錯位。",
      goodPrefix: "更貼近你這輪對",
      goodSuffix: "的偏好。",
      avoidPrefix: "它更偏向",
      avoidSuffix: "，這輪不一定最對味。",
      leadPrefix: "這輪加權最高的理由，是你明顯更吃",
      leadSuffix: "。",
      shareSaving: "保存中…",
      shareFailed: "截圖保存失敗，請使用手機截圖功能",
      downloadName: "2026夏季番測驗結果.png",
      typeFallback: "本輪命中"
    },
    sc: {
      pageTitle: "2026 夏季番测验 -- 你该追哪部？",
      pageDescription: "从 50 道 ACG 题库随机抽出 15 题，算出你这轮最对味的 2026 夏季番。",
      ogTitle: "2026 夏季番你该追哪部？",
      ogDescription: "50 题题池随机抽 15 题，算出你这轮最适合补哪部夏季番",
      h1a: "夏季番",
      h1b: "你该追哪部？",
      sub: "从 50 道题库随机抽出 15 题，找到属于你的这轮首推作品",
      go: "开始测验 ▶",
      rl: "你 的 命 定 番 是",
      altT: "这轮也很适合你",
      avT: "可能需要避雷",
      ret: "再测一次",
      sh: "保存分享",
      ftr: "2026 夏季番你该追哪部",
      more: "更多测验",
      prev: "上一题",
      verticalLeft: "动漫性格诊断",
      verticalRight: "二〇二六年夏",
      homeTag: "号外 EXTRA",
      homeDate: "VOL. 2026 -- SUMMER",
      mixedLine: "✧ 夏日动画 × 命定测验 ✧",
      featureTag: "-- 特集 --",
      homeFooterPrimary: "ANIME PERSONALITY TEST",
      homeFooterSecondary: "动漫性格诊断测试",
      sparkleLine: "☆ﾟ.*･｡ﾟ",
      resultTag: "号外",
      resultPub: "SUMMER ANIME GUIDE",
      resultVol: "VOL.2026",
      coverPlaceholder: "COVER ART",
      resultFooterSecondary: "动漫性格诊断",
      goodFallback: "整体调性和你这轮偏好相当接近。",
      avoidFallback: "整体调性和你这轮偏好稍微错位。",
      goodPrefix: "更贴近你这轮对",
      goodSuffix: "的偏好。",
      avoidPrefix: "它更偏向",
      avoidSuffix: "，这轮不一定最对味。",
      leadPrefix: "这轮加权最高的理由，是你明显更吃",
      leadSuffix: "。",
      shareSaving: "保存中…",
      shareFailed: "截图保存失败，请使用手机截图功能",
      downloadName: "2026夏季番测验结果.png",
      typeFallback: "本轮命中"
    },
    hx: {
      pageTitle: "2026 夏番測驗 -- 伱這波該補哪部？",
      pageDescription: "50 題 ACG 題池隨機抽 15 題，幫伱揪出這波最對味の本命番。",
      ogTitle: "2026 夏番伱這波該補哪部？",
      ogDescription: "50 題題池隨機抽 15 題，幫伱鎖定這波最容易上頭の本命番",
      h1a: "夏番",
      h1b: "伱這波該補哪部？",
      sub: "從 50 道題庫隨機抽出 15 題，幫伱揪出這波最對味の本命番",
      go: "開始測番 ▶",
      rl: "伱 の 本 命 番 是",
      altT: "這輪同樣會讓伱上頭",
      avT: "這波大概卟太4伱の菜",
      ret: "再來壹把",
      sh: "存圖分享",
      ftr: "2026 夏番伱這波該補哪部",
      more: "更多試題",
      prev: "上一題",
      verticalLeft: "動漫性格診斷",
      verticalRight: "二〇二六年夏",
      homeTag: "號外 EXTRA",
      homeDate: "VOL. 2026 -- SUMMER",
      mixedLine: "✧ 夏番雷達 × 本命診斷 ✧",
      featureTag: "-- 特集 --",
      homeFooterPrimary: "ANIME PERSONALITY TEST",
      homeFooterSecondary: "夏番人格診斷",
      sparkleLine: "☆ﾟ.*･｡ﾟ",
      resultTag: "號外",
      resultPub: "SUMMER ANIME GUIDE",
      resultVol: "VOL.2026",
      coverPlaceholder: "COVER ART",
      resultFooterSecondary: "動漫補番診斷",
      goodFallback: "整體調性跟伱這波偏好幾乎無縫對上。",
      avoidFallback: "整體調性跟伱這波偏好有丶錯頻。",
      goodPrefix: "更貼近伱這波對",
      goodSuffix: "の偏好。",
      avoidPrefix: "它更偏向",
      avoidSuffix: "，所以這波未必最對味。",
      leadPrefix: "這波加權最高の理由，是伱明顯更吃",
      leadSuffix: "。",
      shareSaving: "保存中…",
      shareFailed: "截圖保存失敗，請直接手機截圖叭",
      downloadName: "2026夏季番測驗結果.png",
      typeFallback: "本命命中"
    },
    wy: {
      pageTitle: "二〇二六夏番試 -- 汝今當補何番？",
      pageDescription: "自五十題池隨取十五，以卜此輪最宜汝補觀之本命番。",
      ogTitle: "二〇二六夏番，汝今當補何番？",
      ogDescription: "五十題中隨取十五，以定此輪最宜入坑之夏番",
      h1a: "夏番",
      h1b: "汝今當補何番？",
      sub: "自五十題中隨取十五，求此輪最合汝意之本命番",
      go: "啟試 ▶",
      rl: "此 輪 本 命 番",
      altT: "此輪亦堪補觀",
      avT: "此輪宜暫避之",
      ret: "復測一次",
      sh: "保存分享",
      ftr: "二〇二六夏番汝今當補何番",
      more: "更多試頁",
      prev: "上一題",
      verticalLeft: "動漫性格診",
      verticalRight: "二〇二六年夏",
      homeTag: "號外 EXTRA",
      homeDate: "VOL. 2026 -- SUMMER",
      mixedLine: "✧ 夏番 × 本命之卜 ✧",
      featureTag: "-- 特集 --",
      homeFooterPrimary: "ANIME PERSONALITY TEST",
      homeFooterSecondary: "動漫性格試",
      sparkleLine: "☆ﾟ.*･｡ﾟ",
      resultTag: "號外",
      resultPub: "SUMMER ANIME GUIDE",
      resultVol: "VOL.2026",
      coverPlaceholder: "COVER ART",
      resultFooterSecondary: "補番性格試",
      goodFallback: "其整體氣調，與汝此輪所好甚契。",
      avoidFallback: "其整體氣調，與汝此輪所好稍乖。",
      goodPrefix: "較合汝此輪所好之",
      goodSuffix: "。",
      avoidPrefix: "其更偏於",
      avoidSuffix: "，故此輪未必甚合。",
      leadPrefix: "此輪加權最重之由，在汝明顯偏好",
      leadSuffix: "。",
      shareSaving: "保存中…",
      shareFailed: "保存失敗，請自以截圖存之",
      downloadName: "2026夏季番測結果.png",
      typeFallback: "本命命中"
    },
    en: {
      pageTitle: "Summer 2026 Anime Match -- What Should You Watch?",
      pageDescription: "15 questions drawn at random from a 50-question ACG pool to find your best-fit Summer 2026 title.",
      ogTitle: "Which Summer 2026 Anime Fits You Best?",
      ogDescription: "15 random pulls from a 50-question pool to find the Summer 2026 title that fits you this round",
      h1a: "Summer Anime",
      h1b: "What Should You Watch?",
      sub: "15 questions drawn at random from a 50-question pool to find the title that hits you best this round",
      go: "Start Test ▶",
      rl: "YOUR FATED PICK IS",
      altT: "Also Fits This Round",
      avT: "Maybe Skip for Now",
      ret: "Run It Again",
      sh: "Save Card",
      ftr: "Summer 2026 Anime Match",
      more: "More Tests",
      prev: "Previous",
      verticalLeft: "ANIME MATCH",
      verticalRight: "SUMMER 2026",
      homeTag: "EXTRA",
      homeDate: "VOL. 2026 -- SUMMER",
      mixedLine: "SUMMER ANIME x DESTINY MATCH",
      featureTag: "-- FEATURE --",
      homeFooterPrimary: "ANIME PERSONALITY TEST",
      homeFooterSecondary: "seasonal match engine",
      sparkleLine: "ARCHIVE MODE",
      resultTag: "EXTRA",
      resultPub: "SUMMER ANIME GUIDE",
      resultVol: "VOL.2026",
      coverPlaceholder: "COVER ART",
      resultFooterSecondary: "anime match report",
      goodFallback: "Its overall tone lines up closely with what you leaned toward this round.",
      avoidFallback: "Its overall tone sits a little off from what you kept choosing this round.",
      goodPrefix: "Closer to your taste for ",
      goodSuffix: " this time.",
      avoidPrefix: "It leans more toward ",
      avoidSuffix: ", so it may miss you this round.",
      leadPrefix: "The strongest weighted hit this round comes from your clear pull toward ",
      leadSuffix: ".",
      shareSaving: "Saving...",
      shareFailed: "Could not save the image. Try a device screenshot instead.",
      downloadName: "summer-anime-match-result.png",
      typeFallback: "Best Match"
    },
    yue: {
      pageTitle: "2026 夏番測驗 -- 你今輪應該補邊套？",
      pageDescription: "50 條 ACG 題目隨機抽 15 條，幫你搵出今輪最中你口味嘅本命番。",
      ogTitle: "2026 夏番你今輪應該補邊套？",
      ogDescription: "50 條題池隨機抽 15 條，搵出今輪最易令你入坑嘅本命番",
      h1a: "夏番",
      h1b: "你今輪應該補邊套？",
      sub: "由 50 道題庫隨機抽 15 題，幫你搵出今輪最中你口味嘅本命番",
      go: "開始測番 ▶",
      rl: "你 今 輪 本 命 番 係",
      altT: "今輪都幾值得你補",
      avT: "今輪未必啱你入坑",
      ret: "再測一次",
      sh: "存圖分享",
      ftr: "2026 夏番你今輪應該補邊套",
      more: "更多測驗",
      prev: "上一題",
      verticalLeft: "動漫性格診斷",
      verticalRight: "二〇二六年夏",
      homeTag: "號外 EXTRA",
      homeDate: "VOL. 2026 -- SUMMER",
      mixedLine: "✧ 夏番雷達 × 本命測驗 ✧",
      featureTag: "-- 特集 --",
      homeFooterPrimary: "ANIME PERSONALITY TEST",
      homeFooterSecondary: "動漫補番診斷",
      sparkleLine: "☆ﾟ.*･｡ﾟ",
      resultTag: "號外",
      resultPub: "SUMMER ANIME GUIDE",
      resultVol: "VOL.2026",
      coverPlaceholder: "COVER ART",
      resultFooterSecondary: "動漫補番診斷",
      goodFallback: "整體調性同你今輪口味都幾貼，一眼就中坑。",
      avoidFallback: "整體調性同你今輪口味有少少錯頻，未必一下就啱電波。",
      goodPrefix: "更貼近你今輪對",
      goodSuffix: "嘅偏好。",
      avoidPrefix: "佢會更偏向",
      avoidSuffix: "，所以今輪未必最啱你入坑。",
      leadPrefix: "今輪加權最高嘅原因，係你好明顯更食",
      leadSuffix: "。",
      shareSaving: "保存中…",
      shareFailed: "截圖保存失敗，請直接用手機截圖功能",
      downloadName: "2026夏季番測驗結果.png",
      typeFallback: "本命命中"
    },
    ja: {
      pageTitle: "2026 夏アニメ診断 -- 今のあなたに合うのは？",
      pageDescription: "50問のACG題材プールから15問をランダム抽選。今のあなたにいちばん合う2026年夏アニメを出します。",
      ogTitle: "2026 夏アニメ、今のあなたに合うのは？",
      ogDescription: "50問のプールから15問をランダム抽選して、この夏いちばん合う一本を出します",
      h1a: "夏アニメ",
      h1b: "今のあなたに合うのは？",
      sub: "50問の題材プールから15問をランダム抽選。今のあなたにいちばん合う一本を探します。",
      go: "診断開始 ▶",
      rl: "今 回 の 命 定 枠",
      altT: "今回こちらも相性良し",
      avT: "今回は少し外れそう",
      ret: "もう一度診断",
      sh: "画像を保存",
      ftr: "2026 夏アニメ相性診断",
      more: "他のテスト",
      prev: "前の設問",
      verticalLeft: "アニメ性格診断",
      verticalRight: "二〇二六年夏",
      homeTag: "号外 EXTRA",
      homeDate: "VOL. 2026 -- SUMMER",
      mixedLine: "夏アニメ x 運命診断",
      featureTag: "-- 特集 --",
      homeFooterPrimary: "ANIME PERSONALITY TEST",
      homeFooterSecondary: "アニメ性格診断テスト",
      sparkleLine: "☆ﾟ.*･｡ﾟ",
      resultTag: "号外",
      resultPub: "SUMMER ANIME GUIDE",
      resultVol: "VOL.2026",
      coverPlaceholder: "COVER ART",
      resultFooterSecondary: "アニメ性格診断",
      goodFallback: "全体のトーンが、今回あなたが選び続けた傾向によく寄っています。",
      avoidFallback: "全体のトーンが、今回あなたの好みとはややずれています。",
      goodPrefix: "今回のあなたが好みそうなのは ",
      goodSuffix: " の方向。",
      avoidPrefix: "どちらかといえば ",
      avoidSuffix: " 側なので、今回は少しずれるかもしれません。",
      leadPrefix: "今回もっとも強く加重された理由は、あなたがはっきり ",
      leadSuffix: " を好んでいたからです。",
      shareSaving: "保存中…",
      shareFailed: "保存に失敗しました。端末のスクリーンショットを使ってください。",
      downloadName: "2026-summer-anime-result.png",
      typeFallback: "今回の命中枠"
    }
  };

  var UI_EXTENSIONS = {
    tc: {
      pageDescription: "從 50 道 ACG 題池隨機抽出 15 題，找出這一輪最對你電波的 2026 夏季番。",
      ogDescription: "50 題題池隨機抽 15 題，找出這一輪最適合你補的夏季番",
      sub: "從 50 道 ACG 題池隨機抽出 15 題，找出這一輪最對你電波的本命番",
      rl: "你 這 輪 的 本 命 番",
      altT: "這一輪也很對味",
      avT: "這一輪可能會踩空",
      sh: "儲存結果圖",
      homeFooterSecondary: "夏番電波測驗",
      resultFooterSecondary: "夏番電波診斷",
      goodFallback: "整體調性和你這一輪的偏好相當貼近。",
      avoidFallback: "整體調性和你這一輪的偏好稍微錯開了。",
      goodPrefix: "更貼近你這一輪偏好的",
      goodSuffix: "。",
      avoidPrefix: "它更偏向",
      avoidSuffix: "，這一輪未必正中你。",
      leadPrefix: "這一輪權重最高的命中點，是你明顯更偏好",
      leadSuffix: "。",
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "先選擇語言",
      gateSubtitle: "選好後會進入測驗頁，右上角也能隨時切換。",
      gateNote: "開始頁、答題頁和結果頁，都保留同一個右上角語言入口。",
      gateToast: "右上角可隨時切換語言",
      qrLabel: "掃碼回到測驗",
      repoExamLabel: "EXAM 主站",
      repoAnimeLabel: "夏番測驗原始倉庫"
    },
    sc: {
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "先选择语言",
      gateSubtitle: "选好后进入测验页，右上角也能随时切换。",
      gateNote: "开始页、答题页和结果页都会保留同一个右上角语言入口。",
      gateToast: "右上角可随时切换语言",
      qrLabel: "扫码回到测验",
      repoExamLabel: "EXAM 主站",
      repoAnimeLabel: "夏番测验原始仓库"
    },
    hx: {
      pageDescription: "50 道 ACG 題池亂抽 15 題，幫伱揪出這波最對電波、最容易上頭の本命番。",
      ogDescription: "50 題題池亂抽 15 題，幫伱鎖定這波最容易上頭の本命番",
      sub: "從 50 道題池亂抽 15 題，幫伱鎖定這波最對電波の本命番",
      go: "開測 ▶",
      rl: "伱 這 波 の 本 命 番",
      altT: "這輪也超可能讓伱上頭",
      avT: "這波大概不太對伱胃口",
      sh: "存結果圖",
      homeFooterSecondary: "夏番電波雷達",
      resultFooterSecondary: "補番口味診斷",
      goodFallback: "整體調性跟伱這波偏好，基本屬於壹拍即合。",
      avoidFallback: "整體調性跟伱這波偏好有丶錯頻，未必會對上腦電波。",
      goodPrefix: "更貼伱這波偏好の",
      goodSuffix: "。",
      avoidPrefix: "它更偏向",
      avoidSuffix: "，所以這波未必對味。",
      leadPrefix: "這波權重拉滿の命中點，4伱明顯更吃",
      leadSuffix: "。",
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "先揀語言版本",
      gateSubtitle: "選完就進測驗頁，右上角那顆語言鍵之後隨時都能切。",
      gateNote: "開始頁、答題頁同結果頁，都會把語言入口掛喺右上角。",
      gateToast: "右上角還能隨時換語言",
      qrLabel: "掃碼回來再測",
      repoExamLabel: "EXAM 主站",
      repoAnimeLabel: "夏番測驗本體倉庫"
    },
    wy: {
      pageDescription: "自五十題池中隨取十五，以卜此輪最契汝意之二〇二六夏番。",
      ogDescription: "五十題中隨取十五，以定此輪最宜汝補觀之夏番",
      sub: "自五十題池中隨取十五，求此輪最契汝意之本命番",
      go: "啟試 ▶",
      rl: "此 輪 本 命 番",
      altT: "此輪亦甚相宜",
      avT: "此輪姑可暫避",
      sh: "存其結果",
      homeFooterSecondary: "夏番相契之試",
      resultFooterSecondary: "補番氣味診",
      goodFallback: "其整體氣調，與汝此輪所好甚相契。",
      avoidFallback: "其整體氣調，與汝此輪所好稍相乖。",
      goodPrefix: "較契汝此輪所好者在於",
      goodSuffix: "。",
      avoidPrefix: "其更偏於",
      avoidSuffix: "，故此輪未必合汝。",
      leadPrefix: "此輪加權最重之由，在汝明顯偏好",
      leadSuffix: "。",
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "請先擇言",
      gateSubtitle: "既擇其言，乃入測頁；右上角仍可隨時更之。",
      gateNote: "首頁、答題與所得之頁，皆存右上角一語言入口。",
      gateToast: "右上角可隨時易語",
      qrLabel: "掃碼可返此試",
      repoExamLabel: "EXAM 主站庫",
      repoAnimeLabel: "夏番試源庫"
    },
    en: {
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "Choose Your Language",
      gateSubtitle: "After you enter, the language menu stays in the top-right corner.",
      gateNote: "The home, quiz, and result views all keep using that same top-right language switch.",
      gateToast: "Language stays in the top-right corner",
      qrLabel: "Scan to reopen this test",
      repoExamLabel: "EXAM Home Repo",
      repoAnimeLabel: "Anime Test Repo"
    },
    yue: {
      pageDescription: "50 條 ACG 題池隨機抽 15 條，幫你搵出今輪最中你電波嘅 2026 夏番。",
      ogDescription: "50 條題池隨機抽 15 條，搵出今輪最適合你補嘅夏番",
      sub: "由 50 道題池隨機抽 15 題，幫你搵出今輪最中你電波嘅本命番",
      rl: "你 今 輪 嘅 本 命 番",
      altT: "今輪都幾啱你追",
      avT: "今輪未必中你口味",
      sh: "存結果圖",
      homeFooterSecondary: "夏番電波診斷",
      resultFooterSecondary: "補番口味診斷",
      goodFallback: "整體調性同你今輪偏好幾貼，一睇就對路。",
      avoidFallback: "整體調性同你今輪偏好有少少錯頻，未必即刻啱電波。",
      goodPrefix: "更貼近你今輪偏好嘅",
      goodSuffix: "。",
      avoidPrefix: "佢會更偏向",
      avoidSuffix: "，所以今輪未必最中你。",
      leadPrefix: "今輪加權最高嘅命中位，係你好明顯更食",
      leadSuffix: "。",
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "先揀語言",
      gateSubtitle: "揀完就會入測驗頁，右上角之後都可以隨時轉。",
      gateNote: "開始頁、答題頁同結果頁，都會留返同一個右上角語言入口。",
      gateToast: "右上角可以隨時轉語言",
      qrLabel: "掃碼返嚟再測",
      repoExamLabel: "EXAM 主站",
      repoAnimeLabel: "夏番測驗原始倉庫"
    },
    ja: {
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "先に言語を選んでください",
      gateSubtitle: "入った後も、右上の言語メニューからいつでも切り替えられます。",
      gateNote: "トップ、設問、結果の各画面で、同じ右上の言語メニューを使います。",
      gateToast: "言語切替は右上にあります",
      qrLabel: "QRでこの診断へ戻る",
      repoExamLabel: "EXAM本体",
      repoAnimeLabel: "夏アニメ診断元リポジトリ"
    }
  };

  Object.keys(UI_EXTENSIONS).forEach(function (locale) {
    Object.assign(UI[locale], UI_EXTENSIONS[locale]);
  });

  var WORK_TITLES = {
    supermarket_smoking: {
      en: "Smoking Behind the Supermarket with You",
      ja: "スーパーの裏でヤニ吸うふたり"
    },
    mushoku_iii: {
      en: "Mushoku Tensei III: Jobless Reincarnation",
      ja: "無職転生III ～異世界行ったら本気だす～"
    },
    youjo_senki_ii: {
      en: "The Saga of Tanya the Evil II",
      ja: "幼女戦記 II"
    },
    bleach_tybw: {
      en: "BLEACH: Thousand-Year Blood War - Kashin-tan",
      ja: "BLEACH 千年血戦篇-禍進譚-"
    },
    ghost_shell: {
      en: "Ghost in the Shell",
      ja: "攻殻機動隊 THE GHOST IN THE SHELL"
    },
    black_torch: {
      en: "BLACK TORCH",
      ja: "BLACK TORCH"
    },
    elusive_samurai_s2: {
      en: "The Elusive Samurai Season 2",
      ja: "逃げ上手の若君 第二期"
    },
    grand_blue_s3: {
      en: "Grand Blue Dreaming Season 3",
      ja: "ぐらんぶる Season 3"
    },
    polar_opposites_s2: {
      en: "You and I Are Polar Opposites Season 2",
      ja: "正反対な君と僕 第2期"
    },
    young_ladies_fighting_games: {
      en: "Young Ladies Don't Play Fighting Games",
      ja: "対ありでした。～お嬢さまは格闘ゲームなんてしない～"
    },
    jaadugar: {
      en: "A Witch in Mongolia",
      ja: "天幕のジャードゥーガル"
    },
    sparks_of_tomorrow: {
      en: "Sparks of Tomorrow",
      ja: "二十世紀電氣目録"
    },
    goodbye_lara: {
      en: "Goodbye, Lara",
      ja: "さよならララ"
    },
    old_bumpkin_sword: {
      en: "From Old Country Bumpkin to Master Swordsman Season 2",
      ja: "片田舎のおっさん、剣聖になる 第二期"
    },
    skeleton_knight_s2: {
      en: "Skeleton Knight in Another World Season 2",
      ja: "骸骨騎士様、只今異世界へお出掛け中 第2期"
    },
    clevatess_ii: {
      en: "Clevatess II",
      ja: "クレバテス -魔獣の王と赤子と屍の勇者- 第二期"
    },
    red_river: {
      en: "Red River",
      ja: "天は赤い河のほとり"
    },
    magilumiere_s2: {
      en: "Magilumiere Co. Ltd. Season 2",
      ja: "株式会社マジルミエ 第2期"
    },
    futtsu_akujyo: {
      en: "Though I Am an Inept Villainess",
      ja: "ふつつかな悪女ではございますが"
    },
    ibikona: {
      en: "A Stepmother and Stepsister Who Don't Bully",
      ja: "いびってこない義母と義姉"
    },
    hana_kimi_s2: {
      en: "Hanazakari no Kimitachi e Season 2",
      ja: "花ざかりの君たちへ 第2期"
    },
    heavy_knight: {
      en: "The Exiled Reincarnated Heavy Knight Knows How to Game the System",
      ja: "追放された転生重騎士はゲーム知識で無双する"
    },
    hanaori_san: {
      en: "Hanaori-san Wants to Throw Hands After Reincarnating",
      ja: "花織さんは転生してもケンカがしたい"
    },
    "100_girlfriends_s3": {
      en: "The 100 Girlfriends Season 3",
      ja: "君のことが大大大大大好きな100人の彼女 第3期"
    },
    victoria_tefuda: {
      en: "Victoria with Too Many Cards",
      ja: "手札が多すぎるヴィクトリア"
    },
    thunder3: {
      en: "THUNDER 3",
      ja: "THUNDER 3"
    },
    nanoha_exceeds: {
      en: "Magical Girl Lyrical Nanoha EXCEEDS",
      ja: "魔法少女リリカルなのは EXCEEDS"
    },
    worlds_strongest_rearguard: {
      en: "The World's Strongest Rearguard",
      ja: "世界最強の後衛 ～迷宮国の新人探索者～"
    },
    grow_up_show: {
      en: "Grow Up Show",
      ja: "Grow Up Show"
    },
    one_piece_heroines: {
      en: "ONE PIECE HEROINES",
      ja: "ONE PIECE HEROINES"
    },
    bandori_yume_mita: {
      en: "BanG Dream! Yume Mita",
      ja: "BanG Dream! ゆめ∞みた"
    },
    oni_no_hanayome: {
      en: "Bride of the Ogre",
      ja: "鬼の花嫁"
    },
    otome_kaiju_caramelise: {
      en: "Otome Kaiju Caramelize",
      ja: "乙女怪獣キャラメリゼ"
    },
    zero_people_frontier_lord: {
      en: "The Frontier Lord Begins with Zero Subjects",
      ja: "領民0人スタートの辺境領主様"
    },
    reiwa_dara_san: {
      en: "Reiwa no Dara-san",
      ja: "令和のダラさん"
    },
    lets_go_kaiki_gumi: {
      en: "Let's Go Kaiki Gumi",
      ja: "レッツゴー怪奇組"
    },
    lv999_villager: {
      en: "LV999 Villager",
      ja: "LV999の村人"
    },
    world_is_dancing: {
      en: "World Is Dancing",
      ja: "ワールド イズ ダンシング"
    },
    aikatsu_stars_anniversary: {
      en: "Aikatsu Stars! 10th STORY",
      ja: "アイカツスターズ！ 10th STORY"
    },
    time_leap_girl_4k: {
      en: "The Girl Who Leapt Through Time 4K",
      ja: "時をかける少女 4K"
    },
    playing_death_games: {
      en: "Playing Death Games 44: CLOUDY BEACH",
      ja: "ごはんのために死のゲームをしています 44:CLOUDY BEACH"
    },
    kimi_to_hanabi: {
      en: "You, the Fireworks, and Our Promise",
      ja: "きみと、花火と、約束と"
    },
    chiikawa_mermaid: {
      en: "Chiikawa the Movie: Mermaid Island",
      ja: "映画 ちいかわ 人魚の島"
    },
    crayon_shinchan_yokai_vacation: {
      en: "Crayon Shin-chan: Super Hot Kasukabe Dancers",
      ja: "クレヨンしんちゃん 超華麗！灼熱のカスカベダンサーズ"
    },
    paprika_4k: {
      en: "Paprika 4K Restoration",
      ja: "パプリカ 4Kリマスター"
    },
    ribbon_hero: {
      en: "Princess Knight",
      ja: "リボンの騎士"
    },
    patlabor_ezy: {
      en: "Patlabor EZY File 2",
      ja: "機動警察パトレイバー EZY File 2"
    },
    shiranui: {
      en: "Shiranui",
      ja: "不知火"
    },
    madoka_walpurgis: {
      en: "Puella Magi Madoka Magica the Movie: Walpurgisnacht: Rising",
      ja: "劇場版 魔法少女まどか☆マギカ〈ワルプルギスの廻天〉"
    }
  };

  var TRAIT_LABELS = {
    tc: {
      "高刺激推進": "高刺激推進",
      "低壓陪伴": "低壓陪伴",
      "沙雕喜劇感": "胡鬧喜劇感",
      "嚴肅正劇感": "嚴肅正劇感",
      "關係濃度": "關係濃度",
      "設定先行": "設定先行",
      "奇想與異世界感": "奇想與異世界感",
      "現實落地感": "現實落地感",
      "科技都會氣質": "科技都會氣質",
      "懷舊時代氣息": "懷舊時代氣息",
      "壓迫與黑暗濃度": "壓迫與黑暗濃度",
      "明亮鬆弛感": "明亮鬆弛感",
      "適合一起看和聊": "適合一起追和聊",
      "適合獨自沉浸": "適合獨自沉浸",
      "強者或策略爽點": "強者或策略爽點",
      "普通人共鳴": "平凡人共鳴",
      "演出與意象實驗": "演出與意象實驗",
      "直給好入口": "好上手、好入坑",
      "補番門檻也值得": "補番門檻也值得",
      "新手友好度": "新手友善度"
    },
    hx: {
      "高刺激推進": "高燃推進力",
      "低壓陪伴": "低壓陪跑感",
      "沙雕喜劇感": "整活喜劇感",
      "嚴肅正劇感": "正劇壓迫感",
      "關係濃度": "關係濃度",
      "設定先行": "設定控爽點",
      "奇想與異世界感": "奇想異世界感",
      "現實落地感": "現實貼地感",
      "科技都會氣質": "賽博都會味",
      "懷舊時代氣息": "復古年代味",
      "壓迫與黑暗濃度": "黑壓濃度",
      "明亮鬆弛感": "亮堂鬆弛感",
      "適合一起看和聊": "適合壹起追和聊",
      "適合獨自沉浸": "適合自巳沉浸",
      "強者或策略爽點": "強者／策略爽點",
      "普通人共鳴": "普通人代入感",
      "演出與意象實驗": "演出意象實驗感",
      "直給好入口": "壹眼就能入坑",
      "補番門檻也值得": "補番門檻高也值",
      "新手友好度": "新手友善度"
    },
    wy: {
      "高刺激推進": "激勢推進",
      "低壓陪伴": "徐緩相伴",
      "沙雕喜劇感": "諧戲胡鬧",
      "嚴肅正劇感": "嚴肅正劇",
      "關係濃度": "關係之濃",
      "設定先行": "設定居先",
      "奇想與異世界感": "奇想異界之感",
      "現實落地感": "貼近現實之感",
      "科技都會氣質": "科技都會之氣",
      "懷舊時代氣息": "懷舊時代之氣",
      "壓迫與黑暗濃度": "壓迫幽暗之濃",
      "明亮鬆弛感": "明朗寬弛之感",
      "適合一起看和聊": "宜共觀共談",
      "適合獨自沉浸": "宜獨自沉浸",
      "強者或策略爽點": "強者與謀略之快",
      "普通人共鳴": "平凡之人共鳴",
      "演出與意象實驗": "演出與意象之試",
      "直給好入口": "入門易親",
      "補番門檻也值得": "補番雖難亦值",
      "新手友好度": "新手易入"
    },
    yue: {
      "高刺激推進": "高燃推進",
      "低壓陪伴": "低壓陪住你",
      "沙雕喜劇感": "玩癲喜劇感",
      "嚴肅正劇感": "嚴肅正劇感",
      "關係濃度": "關係濃度",
      "設定先行": "設定行先",
      "奇想與異世界感": "奇想同異世界感",
      "現實落地感": "現實落地感",
      "科技都會氣質": "科技都會味",
      "懷舊時代氣息": "懷舊年代味",
      "壓迫與黑暗濃度": "壓迫同黑暗濃度",
      "明亮鬆弛感": "明亮鬆弛感",
      "適合一起看和聊": "適合一齊追同傾",
      "適合獨自沉浸": "適合自己沉浸",
      "強者或策略爽點": "強者／策略爽點",
      "普通人共鳴": "平凡人共鳴",
      "演出與意象實驗": "演出同意象實驗",
      "直給好入口": "好入坑、好上手",
      "補番門檻也值得": "補番門檻高都值",
      "新手友好度": "新手友善度"
    },
    en: {
      "高刺激推進": "high-impact momentum",
      "低壓陪伴": "low-pressure comfort",
      "沙雕喜劇感": "chaotic comedy",
      "嚴肅正劇感": "straight-faced drama",
      "關係濃度": "relationship intensity",
      "設定先行": "concept-first build",
      "奇想與異世界感": "wonder and otherworldliness",
      "現實落地感": "grounded realism",
      "科技都會氣質": "urban futurism",
      "懷舊時代氣息": "nostalgic period air",
      "壓迫與黑暗濃度": "oppressive darkness",
      "明亮鬆弛感": "bright looseness",
      "適合一起看和聊": "social watchability",
      "適合獨自沉浸": "solo immersion",
      "強者或策略爽點": "power and strategy payoff",
      "普通人共鳴": "ordinary-person resonance",
      "演出與意象實驗": "formal and visual experimentation",
      "直給好入口": "easy direct hook",
      "補番門檻也值得": "legacy payoff is worth it",
      "新手友好度": "newcomer friendly"
    },
    ja: {
      "高刺激推進": "高刺激な推進力",
      "低壓陪伴": "低圧で寄り添う空気",
      "沙雕喜劇感": "カオスなコメディ感",
      "嚴肅正劇感": "シリアスな正劇感",
      "關係濃度": "関係性の濃さ",
      "設定先行": "設定先行の魅力",
      "奇想與異世界感": "奇想と異世界感",
      "現實落地感": "現実に根ざした手触り",
      "科技都會氣質": "テック都会ムード",
      "懷舊時代氣息": "ノスタルジックな時代感",
      "壓迫與黑暗濃度": "圧迫感と闇の濃さ",
      "明亮鬆弛感": "明るくゆるい空気",
      "適合一起看和聊": "みんなで見て語れる",
      "適合獨自沉浸": "ひとりで沈み込める",
      "強者或策略爽點": "強者感と戦略の快感",
      "普通人共鳴": "等身大の共感",
      "演出與意象實驗": "演出とイメージの実験性",
      "直給好入口": "入口の良さ",
      "補番門檻也值得": "履修コスト込みで報われる",
      "新手友好度": "初見の入りやすさ"
    }
  };

  var QUIZ_TEXT = {
    en: {
      questions: [
        "When a new season starts, what is usually your first instinct?",
        "When you click on a PV, what grabs you first?",
        "When you see Season 2 or Movie, what do you do?",
        "What do you want most from an original new show?",
        "If you can only keep one title on your list first, what survives?",
        "What makes you fall for a character at first sight?",
        "Which narrator tone hooks you more?",
        "What kind of shot in a trailer makes you want to keep watching?",
        "What kind of cool are you most willing to buy into?",
        "For the cast, which setup do you lean toward?",
        "What kind of setting do you most want to throw yourself into?",
        "What kind of world-feel do you want from a series?",
        "How do you feel about historical or early-modern settings?",
        "What kind of magic or power do you like?",
        "What kind of stage or backdrop can make you stop and stare?",
        "What kind of protagonist do you slip into most easily?",
        "How do you like a protagonist to solve problems?",
        "If the protagonist has a clear flaw, which kind can you live with?",
        "What kind of growth arc works best on you?",
        "What challenge do you most want to see the protagonist face?",
        "What intensity level suits you best lately?",
        "How do you like a story to hurt you?",
        "What kind of easy-watch works best for you?",
        "How much oppressive tension can you take?",
        "What is the best way for an episode or film to land emotionally?",
        "What is your ideal density for a romance thread?",
        "What kind of relationship moves you most easily?",
        "If a work is selling fate, which version do you buy?",
        "What kind of heart-flutter moment do you like most?",
        "How do you feel about harems or ensemble romance?",
        "What is your most common posture when you are keeping up with anime?",
        "What kind of show do you actively recommend to friends?",
        "How do you feel about being a character stan?",
        "What kind of discussion would you happily stay in longer?",
        "How do you feel about checking social media explanations when something does not click?",
        "What is your lower limit for catch-up barrier?",
        "When you see 4K rerelease or anniversary project, what do you do?",
        "When a sequel has a steep entry barrier but explosive word of mouth, what is your move?",
        "What kind of information density can you handle better?",
        "If a show needs prior context, how do you take that?",
        "When picking a summer anime film, what matters most?",
        "What kind of color temperature do you want in a theater?",
        "What interests you most about a classic rerelease?",
        "What does cinematic feel like to you?",
        "If you could keep only one theater experience, which would you choose?",
        "After a work ends, what do you most want to be left with?",
        "What kind of work would make you go in for a second watch?",
        "What matters most about what a work leaves you with at the end?",
        "What do you fear most a work becoming by the end?",
        "If this test actually sends you to watch something, what do you want that work to do?"
      ],
      options: [
        ["The one that can hook me in one shot", "Something that eases me in slowly", "The one with the most interesting premise, director, or staging", "Something perfect for roasting with friends"],
        ["Fight cuts and highlight reels", "Mood and relationship tension", "Worldbuilding keywords", "Art style and camera language"],
        ["The more previous entries, the more excited I get", "If the emotional tone is right, I will catch up", "If the barrier is too high, I leave it for later", "If all my friends are watching, I am in"],
        ["A kind of impact no one can predict", "Something that can keep me company all season", "Something I can talk about for its setting", "Something wild and genuinely funny"],
        ["High risk but maybe explosive", "The one that looks the gentlest and most rewatchable", "The most complex one, the one you have to piece together slowly", "The one best suited for live messaging while watching"],
        ["They are strong, and they know they are strong", "They look like they already have a whole story", "They are smart and speak with calm control", "They act composed, then fall apart in a hilarious way"],
        ["Fate is about to swing its weapon", "Even this small everyday thing matters", "The truth is not that simple", "Do not get serious yet, laugh first"],
        ["The whole group enters at once", "Two people talking quietly at night", "A flash of worldbuilding that is gone in a second", "One absurd shot that blows the rhythm open"],
        ["Pure combat cool", "The cool that comes from holding words back", "The cool that sees through everything", "A messy kind of cool that somehow becomes irresistible"],
        ["The bigger the main cast, the better", "A small cast written more deeply", "Solid setup matters more than headcount", "One overwhelmingly strong core is enough"],
        ["City night, neon reflections", "Summer towns and slow sunlight", "Kingdoms, other worlds, lost ruins", "Clubs, drinking tables, or a bunch of people fooling around"],
        ["Clear rules and satisfying progression", "No need for too much explanation, I just want the scent to match", "The stranger the better, especially if it takes time to piece together", "Close to reality, but able to amplify emotion"],
        ["If the power games and fate are heavy enough, I am in", "A bit of period texture helps me invest in the characters", "Give me the future or tech setting instead", "As long as it is lively, any era works"],
        ["Simple and brutal, just let it hit hard", "Something tied to daily life, work, or relationships", "More rules, more fun to study", "Looks cute, but is actually a little dangerous"],
        ["A battlefield with gunpowder in the air", "Back alleys like convenience-store doors, riverbanks, rooftops", "Old streets, summer festivals, stations, after school", "Concert halls, stadiums, backstage areas"],
        ["Someone who wants to win even harder when the wind is against them", "Someone who looks ordinary, but feels emotionally real", "Someone very smart, maybe even a little scary", "Someone reckless who still heats the whole room up"],
        ["Power up, break through, push head-on", "Understand people first, then decide what to do", "Read the rules and catch the opponent's mistake", "Make the situation more interesting first"],
        ["As long as the fights are hot enough, the flaw can be fixed later", "If the emotions feel true, I will stay with them", "As long as their way of thinking is distinct enough", "If they are funny enough, I can forgive a lot"],
        ["Visible jumps in stats and ability", "Relationships slowly drawing closer while the person opens up", "Growth that comes from having your worldview overturned again and again", "A chaotic group slowly becoming synchronized"],
        ["I want to win, and I want to win beautifully", "I want to live in a way I can accept", "I want to understand how this world really works", "I want to survive today first, and maybe laugh while doing it"],
        ["The higher the pressure, the deeper I fall in", "Lighter please, do not add more burden", "Emotion is good, but let it seep in slowly", "Let me laugh first, then we can talk about the rest"],
        ["Hit me directly with scale and the feeling of loss", "One line that stays lodged in my chest", "Wrap me up through setting and imagery", "Make me laugh first, then stab me out of nowhere"],
        ["Fast pace and satisfying action are relaxing by themselves", "Nothing huge happens, but the atmosphere is great", "A little weird, but weird in a magnetic way", "Lots of people, dense talk, total chaos"],
        ["If there is pressure, I might even look for the harshest one", "Pressure is fine, but I need some human warmth to catch me", "I want coldness and distance more than outright suffering", "No thanks, I want something happier first"],
        ["Make me so fired up that I want the next episode now", "Make me sit with it in silence for a long while", "Make my brain keep turning", "Make me text a friend and say you need to watch this"],
        ["Keep it light, do not derail the main line", "Give me tension, push-pull, and a slow approach", "A stronger sense of fate is fine, I can take big feelings", "Romance is fine, but it needs to be funny and exaggerated"],
        ["A bond forged through life-and-death companionship", "The careful restraint adults never fully say out loud", "People from very different backgrounds slowly drawing closer", "They bicker constantly, and somehow it gets better and better"],
        ["If it is grand enough, I buy it", "If the emotions are fine enough, I buy it", "If the structure is clever enough, I buy it", "If it gets too solemn, I would rather it go crazier"],
        ["Mutual understanding clicking into place after fighting side by side", "A sentence left unfinished in a late-night conversation", "The dislocation created by time, identity, or position", "Something suddenly sincere inside a completely absurd situation"],
        ["If the tempo is fierce enough, I can take it as a gag piece", "I prefer one-to-one relationships written slowly and deeply", "If it can play with genre jokes and structure, I am interested", "I would rather skip romance and get something more stimulating"],
        ["Alone with headphones, sinking all the way in", "Keeping up with a fixed group of friends", "Watching while looking things up and taking notes", "Danmaku, screenshots, roasting, I need all of it"],
        ["The kind with immediate payoff", "The kind with exactly the right emotional tone", "The kind with especially strange setting or staging", "The kind that makes a whole group lose it together"],
        ["One strong highlight and I can fall in on the spot", "I care more about the relationship web growing over time", "The setting, design, and staging all have to click together", "If the character is unhinged enough and meme-worthy enough, that is enough"],
        ["Power levels, lore, and callbacks", "Character relationships and emotional flow", "Imagery, camera choices, and thematic reading", "Iconic scenes and reaction-image cataloging"],
        ["The more people piecing it together, the more fun it is", "I want to digest it by myself", "If I can keep digging deeper, I am happy to", "I would rather get a one-look payoff"],
        ["If it is worth it, I can catch up on an entire timeline", "Up to two seasons is fine", "Best if a newcomer can jump straight in", "If a friend guides me through it, I could do it"],
        ["Immediately want to catch up on the classic", "I decide based on vibe and subject", "I want to see something new from this era instead", "It is even better if I can watch it with someone"],
        ["The higher the barrier, the more I want to try it", "I first check whether the emotional tone is right", "I study why it is supposed to be worth it", "Sounds exhausting, I want something lighter"],
        ["Throw the setting terms and factions at me all at once", "Give me the characters first, then expand", "If the framing and rhythm are stable, it can be as complex as it wants", "I want to laugh first, then think about the rest"],
        ["Perfect, I like things with historical weight", "If the characters are charming enough, I will still go in", "I first judge whether the worldbuilding deserves my time", "Then I probably go look for something with an easier entry"],
        ["It has to hit hard on the big screen", "I want aftertaste that keeps turning after I leave the theater", "I want something that sends me home wanting to research", "Best if I can come out and talk my head off with friends"],
        ["Cold light, machinery, metal, city night", "Summer, fireworks, wind, humidity", "Red-black contrast, dream logic, uncanny images", "So vivid it feels like a festival"],
        ["I want the staging to hit me again on the big screen", "I want to relive youth and memory", "I want to catch up on a classic I missed back then", "If a friend asks me out, I would gladly go"],
        ["High concept, strong imagery, dreamlike", "One summer, one relationship, one missed moment", "An epic or a fated final showdown", "A cheerful adventure that lets you leave the theater light"],
        ["Getting slammed by sound and image", "That feeling of staying silent for a long time after it ends", "The audience next to me gasping at the exact same moment", "Walking out already ready to rant about the best bits"],
        ["That was incredible, I want another round", "I feel like someone finally understood me", "I need to sit with this for a while", "I need to send this part to a friend"],
        ["The action, staging, or highlight density is too high to ignore", "One watch is nowhere near enough for the relationship details", "The foreshadowing, structure, and imagery deserve another pass", "I want to watch everyone go feral together again"],
        ["Forward pull: I want the next part of the story immediately", "Body heat: the characters still feel alive next to me", "Mystery pull: I want to keep interpreting it", "Spreadability: I want to recommend it at once"],
        ["It builds huge and then lands with no force", "The emotions are loud, but the people never stand up", "It throws around a lot of setting, but has no real idea inside", "It stays too composed and does not even have good laughs"],
        ["Set me completely on fire", "Land on me like the exact right kind of company", "Recalibrate my aesthetic radar", "Become the center of the next round of chats with my friends"]
      ]
    },
    ja: {
      questions: [
        "新しいクールが始まるとき、最初の反応はだいたいどれ？",
        "PVを開いたとき、いちばん先に引っかかるのは？",
        "第2期や劇場版という文字を見たら、どうする？",
        "オリジナル新作にいちばん期待するのは？",
        "視聴リストからまず一本だけ残すなら、どれを残す？",
        "キャラをひと目で好きになる決め手は？",
        "どんなナレーションの温度感に弱い？",
        "予告で続きを見たくなるのはどんな場面？",
        "どんな格好よさにいちばんお金を払いたくなる？",
        "キャラ布陣はどのタイプが好き？",
        "自分を放り込みたい舞台はどれ？",
        "作品の世界感にいちばん欲しいものは？",
        "歴史物や近代背景に対する気分は？",
        "どんな魔法や能力が好き？",
        "どんな舞台装置だと足を止める？",
        "どんな主人公にいちばん入り込みやすい？",
        "主人公が問題を解くやり方、どれが好き？",
        "主人公に大きな欠点があるなら、どれなら受け入れやすい？",
        "どんな成長にいちばん刺さる？",
        "主人公に向き合ってほしい課題は？",
        "最近の自分に合う濃度はどれ？",
        "作品に傷つけられるなら、どんな刺さり方がいい？",
        "あなたにとっていちばん効くゆるさは？",
        "圧迫感への耐性はどれくらい？",
        "一話や一本の感情の着地として理想なのは？",
        "恋愛線の理想の濃さは？",
        "どんな関係性にいちばん心を動かされる？",
        "作品が運命感を売ってくるなら、どのタイプを買う？",
        "どんなときめきの瞬間が好き？",
        "ハーレムや群像恋愛をどう見る？",
        "アニメを追うときの自分の姿勢はどれに近い？",
        "友達に自分から勧めたくなるのはどんな作品？",
        "キャラ推し文化についてどう思う？",
        "どんな話題なら長く居座って語れる？",
        "分からなかったら先にSNSで解説を見ることについて、どう思う？",
        "履修コストの許容下限は？",
        "4K上映や周年企画を見たら、どうする？",
        "続編のハードルは高いのに評判が爆発しているとき、どう動く？",
        "どんな情報密度なら受け止めやすい？",
        "前提知識が必要な作品だと知ったら、どう受け取る？",
        "夏の劇場アニメを選ぶとき、何をいちばん重視する？",
        "劇場で見たい色温度はどれ？",
        "名作リバイバルにいちばん惹かれる点は？",
        "あなたにとって映画っぽさって何に近い？",
        "劇場体験をひとつだけ残すなら、どれを選ぶ？",
        "作品が終わったあと、何をいちばん持ち帰りたい？",
        "どんな作品なら二周目に入る？",
        "作品の最後に自分へ残るものとして、何をいちばん大事にする？",
        "作品が最後にこうなったら嫌だ、というものは？",
        "この診断のあと本当に一本見るなら、その作品に何をしてほしい？"
      ],
      options: [
        ["一気に引き込めそうな一本から選ぶ", "ゆっくり調子を合わせられそうな一本を探す", "設定や監督や演出が面白そうかを見る", "友達とツッコミながら見られそうなものを探す"],
        ["戦闘編集と見せ場", "空気感と関係の張り", "世界観のキーワード", "絵柄とカメラの言語"],
        ["前作が多いほどむしろ上がる", "感情の温度が合うなら履修する", "ハードルが高すぎたらいったん置く", "周りが見ているなら乗る"],
        ["誰も読めない衝撃がほしい", "一クールずっと心地よく寄り添ってほしい", "設定を語れるフックがほしい", "ちゃんと暴れてちゃんと笑わせてほしい"],
        ["ハイリスクだけど爆発しそうな一本", "いちばんやわらかくて長く付き合えそうな一本", "いちばん複雑で、じわじわ組み立てるタイプ", "見ながらそのまま感想を投げやすい一本"],
        ["強くて、本人もそれを分かっている", "見た瞬間から物語を背負っていそう", "頭が良くて、話し方に安定感がある", "取り澄ましているのに急に崩れて面白い"],
        ["運命がぶつかるぞという声", "この何気ない日常も大切だという声", "真相はそんなに単純じゃないという声", "まず笑ってからでいいという声"],
        ["チーム全員が一斉に出てくる場面", "夜に二人だけで静かに話す場面", "世界観の断片が一瞬だけ見える場面", "ありえない一枚でリズムを吹き飛ばす場面"],
        ["純粋に戦えて格好いい", "言わずに抱えている格好よさ", "冷静に全部を見抜く格好よさ", "めちゃくちゃなのに妙に惹かれる格好よさ"],
        ["主人公サイドは大人数なほど楽しい", "少人数を深く掘ってほしい", "人数より設定の強さが大事", "圧倒的な核がひとりいればいい"],
        ["都会の夜とネオンの反射", "夏の町とゆっくりした日差し", "王国や異界や失われた遺跡", "部活や飲みの場や集団のわちゃわちゃ"],
        ["ルールが明快で、成長が気持ちいい", "細かい説明より空気が先に合ってほしい", "知らないほどいい、少しずつ繋いでいきたい", "現実に近いけれど感情は増幅してほしい"],
        ["権謀と運命が重ければかなり好き", "少し時代の匂いがあると人物に入りやすい", "それなら未来やテック設定のほうがいい", "にぎやかなら時代は問わない"],
        ["シンプルで粗暴、撃ったら気持ちいいやつ", "日常や仕事や関係性に結びついたやつ", "ルールが多くて、調べるほど面白いやつ", "見た目は可愛いのに、実はちょっと危ないやつ"],
        ["空気に火薬の匂いがある戦場", "コンビニ裏や河川敷や屋上みたいな端っこの場所", "古い街並み、夏祭り、駅、放課後", "ライブ会場、試合会場、舞台裏"],
        ["逆風ほど勝ちたくなる人", "普通に見えるのに感情がやたら本物な人", "とても賢くて、少し怖いくらいの人", "無茶をするのに場を熱くしてしまう人"],
        ["強くなって正面から押し切る", "まず相手を理解してから決める", "ルールを見て、相手の綻びを突く", "先に状況そのものを面白くする"],
        ["戦いが熱ければ欠点はあとで直ればいい", "感情が本物なら見届けられる", "思考回路が独特なら許せる", "面白ければかなり許せる"],
        ["数値や実力が目に見えて上がる成長", "関係が少しずつ近づき、人も少しずつ開く成長", "認識が何度もひっくり返される成長", "ばらばらだった集団に呼吸が生まれる成長"],
        ["勝ちたいし、勝つなら綺麗に勝ちたい", "自分で受け入れられる自分になりたい", "この世界の仕組みをちゃんと知りたい", "まず今日を切り抜けたい、そのうえで笑いたい"],
        ["高圧なほど引き込まれる", "軽めでいい、これ以上負荷はいらない", "感情は欲しいけれど、じわじわ来てほしい", "まず笑わせて、その先はあとでいい"],
        ["大きな場面と喪失感で正面から殴ってほしい", "一言がじわじわ心に残る形がいい", "設定やイメージでぐるっと巻き込まれたい", "笑わせてから急に刺してほしい"],
        ["テンポが速くて、見ていて気持ちいいだけで十分", "大事件はないけど空気がいい", "少し変だけど、その変さが魅力", "人が多くて、会話が密で、ぐちゃぐちゃなのがいい"],
        ["あるならあるで、むしろきつい方を探す", "圧迫感はあっても、人間味で受け止めてほしい", "虐さよりも冷たさや距離感を見たい", "いやだ、まずは少し楽しいものがいい"],
        ["今すぐ次を押したくなる熱さ", "見終わってから長く黙ってしまう感じ", "頭が回り続ける感じ", "友達に今すぐ見てって送りたくなる感じ"],
        ["主線の邪魔をしないくらいで十分", "曖昧さと引き寄せ合いをゆっくり書いてほしい", "運命の濃さが強めでも大丈夫", "恋愛が入るなら笑えて大げさなくらいがいい"],
        ["生死を越えて並ぶ相棒感", "大人同士の言い切らない距離感", "背景がまるで違うのに少しずつ近づく関係", "言い合いばかりなのにどんどん良く見える関係"],
        ["壮大なら買う", "感情が繊細なら買う", "構造が巧ければ買う", "真面目すぎるなら、もっと狂ってほしい"],
        ["肩を並べて戦ったあと、呼吸が合う瞬間", "深夜の会話で言い切られない一言", "時間や立場や身分が生むずれ", "とんでもなく変な状況で急に本気になる瞬間"],
        ["テンポが強ければネタ作品として楽しめる", "一対一をじっくり深く書いてほしい", "ジャンル遊びや構造遊びがあるなら興味が湧く", "恋愛線より別の刺激がほしい"],
        ["ひとりでイヤホンをして沈み込む", "決まった友達と同時進行で追う", "見ながら調べて、見ながらメモする", "コメント、スクショ、ツッコミ、全部ほしい"],
        ["快感が分かりやすい作品", "感情の温度がぴたりと合う作品", "設定や演出が妙に変な作品", "みんなで見たら笑い崩れる作品"],
        ["見せ場ひとつでその場で落ちる", "関係の網が少しずつ伸びる方が大事", "設定と造形と演出が全部噛み合ってほしい", "キャラがぶっ飛んでいてネタになるなら十分"],
        ["戦力や設定や回収の話", "人物関係と感情の流れ", "イメージやカメラや主題の読み", "名場面とミームの整理"],
        ["みんなで少しずつ繋ぐ方が楽しい", "自分でゆっくり消化したい", "掘れば掘るほど深くなるなら歓迎", "ひと目で分かる快感の方がいい"],
        ["価値があるなら年表まるごと履修できる", "二期くらいまでなら大丈夫", "初見でもそのまま入れる方がいい", "友達が横で案内してくれるならいける"],
        ["すぐに名作を履修したくなる", "空気感と題材を見て決める", "今の時代の新しいものを見たい", "誰かと一緒に見られるならさらにいい"],
        ["ハードルが高いほど試したくなる", "まず感情の温度が合うかを見る", "なぜそこまで推されるのか先に調べる", "しんどいので、もっと軽いものがいい"],
        ["設定も用語も陣営もまとめて投げてほしい", "まず人物をくれて、そこから広げてほしい", "画面とリズムが安定していれば複雑でもいける", "まず笑いたい、その先はあとで考える"],
        ["むしろいい、歴史の重みがあるものが好き", "人物の魅力が十分なら入れる", "世界観が時間を投じる価値があるか先に見る", "それならもっと入りやすい方を探すかも"],
        ["大スクリーンでしっかり揺さぶられること", "劇場を出たあとも余韻が回り続けること", "帰ってから調べたくなるものがあること", "友達とその場で語り散らかせること"],
        ["冷たい光、機械、金属、都会の夜景", "夏、花火、風、湿度", "赤と黒のコントラスト、夢、異常な画", "巨大なお祭りみたいな鮮やかさ"],
        ["大スクリーンでもう一度演出に撃ち抜かれたい", "青春と記憶をもう一度なぞりたい", "当時見逃した名作を履修したい", "友達に誘われたら喜んで行く"],
        ["高概念で、強いイメージがあって、夢みたい", "ひと夏、ひとつの関係、ひとつのすれ違い", "叙事詩か宿命の決戦", "軽やかに劇場を出られる楽しい冒険"],
        ["音と画に思いきり殴られること", "見終わってしばらく黙るしかない感じ", "隣の観客と同じ瞬間に息をのむこと", "出た瞬間から名場面を語り倒せること"],
        ["うわ、もう一回浴びたいという感覚", "誰かに理解された気がする感覚", "少し考える時間が必要だという感覚", "この場面を友達に送りたいという感覚"],
        ["アクションや演出や見せ場が濃すぎる作品", "関係の細部は一周じゃ全然足りない作品", "伏線や構造やイメージを組み直したい作品", "みんなでまた暴走したい作品"],
        ["推進力、すぐ次の物語が欲しくなること", "体温、キャラがまだ隣にいる感じ", "余白、まだ解釈し続けたくなること", "伝播力、すぐ誰かに勧めたくなること"],
        ["大きく広げたのに最後が弱い", "感情はうるさいのに人が立っていない", "設定ばかり多くて芯がない", "構えすぎていて笑いどころまで死んでいる"],
        ["自分を丸ごと燃やしてほしい", "ちょうどいい寄り添い方で降りてきてほしい", "自分の美意識レーダーを再調整してほしい", "次の雑談の中心になってほしい"]
      ]
    }
  };

  var QUIZ_TEXT_EXTENSIONS = {
    tc: {
      questions: [
        "新一季開播時，你通常第一個反應是？",
        "點開一支 PV 時，最先抓住你的是什麼？",
        "看到「第二季／劇場版」這幾個字時，你會？",
        "你對「原創新作」最期待哪一點？",
        "待看清單只能先留一部時，你通常會留哪部？",
        "一個角色第一眼最讓你心動的是什麼？",
        "你更吃哪種旁白語氣？",
        "預告裡哪種場面最讓你想追下去？",
        "你更願意為哪種「帥」買單？",
        "角色陣容方面，你更偏哪一種？",
        "你更想把自己丟進哪種場景？",
        "一部作品的「世界感」，你更想要哪一種？",
        "你怎麼看歷史／近代背景？",
        "你喜歡哪種「魔法／能力」？",
        "哪種舞台最容易讓你停下來多看一眼？",
        "你最容易代入哪一類主角？",
        "你更喜歡主角用什麼方式解決問題？",
        "如果主角有明顯缺點，你比較能接受哪一種？",
        "你更吃哪種「成長弧線」？",
        "你更想看主角面對什麼課題？",
        "最近的你，比較適合哪種濃度？",
        "你更喜歡作品怎麼「刀你」？",
        "對你來說，哪種「輕鬆感」最有效？",
        "你對「壓迫感」的承受度是？",
        "一部作品最理想的情緒收束方式是？",
        "你理想中的感情線濃度是？",
        "你更容易被哪種關係打動？",
        "如果作品主打「命運感」，你會買哪一種？",
        "你更喜歡哪種心動瞬間？",
        "你怎麼看「後宮／群像戀愛」？",
        "你追番時最常出現的狀態是？",
        "你會主動推朋友哪一類作品？",
        "你怎麼看「角色廚」這件事？",
        "你更願意待在哪種討論串裡久一點？",
        "你怎麼看「看不懂就先刷社群解釋」？",
        "你對補番門檻的底線在哪？",
        "看到「4K 重映」「周年企劃」時，你會？",
        "面對「續作門檻很高但口碑爆炸」這種情況，你通常會？",
        "你更能接受哪種資訊密度？",
        "如果一部作品需要前情提要，你怎麼看？",
        "挑暑假劇場版時，你最看重什麼？",
        "你更想在戲院裡看到哪種色溫？",
        "經典重映最吸引你的，是哪一點？",
        "你心中的「電影感」更接近哪一種？",
        "如果戲院體驗只能留一種，你會選哪個？",
        "一部作品結束後，你最想留下的是什麼？",
        "你會為哪一類作品二刷？",
        "你更在意作品最後留給你什麼？",
        "你最怕作品最後變成什麼樣子？",
        "如果這一輪測完你真的去補番，你最希望那部作品能給你什麼？"
      ]
    },
    hx: {
      questions: [
        "新一季開播，伱第一反應通常4？",
        "點開一支 PV，最先被啥戳到？",
        "看到「第二季／劇場版」這幾個字，伱會？",
        "伱對「原創新作」最期待哪個點？",
        "待看清單只能先留壹部時，伱通常保哪部？",
        "壹個角色第一眼最戳伱の4啥？",
        "伱更吃哪種旁白口氣？",
        "預告裡哪種場面最容易把伱拽下去？",
        "伱更願意為哪種「帥」買單？",
        "角色陣容這塊，伱更偏哪掛？",
        "伱更想把自巳丟進哪種場景？",
        "一部作品の「世界感」，伱更想要哪掛？",
        "伱對歷史／近代背景啥態度？",
        "伱稀飯哪種「魔法／能力」？",
        "哪種舞台最容易讓伱停下來多瞅壹眼？",
        "伱最容易代入哪掛主角？",
        "伱更稀飯主角用啥方式解決問題？",
        "淉真主角缺點很明顯，伱更能吃哪種？",
        "伱更吃哪種「成長線」？",
        "伱更想看主角硬剛啥課題？",
        "最近の伱，更適合哪種濃度？",
        "伱更稀飯作品怎麼「刀人」？",
        "對伱來說，哪種「輕鬆感」最頂？",
        "伱對「壓迫感」の耐受值4？",
        "一部作品最好の情緒收尾姿勢4？",
        "伱理想中の感情線濃度4？",
        "伱更容易被哪種關係戳到？",
        "淉真作品主打「命運感」，伱會買哪掛？",
        "伱更稀飯哪種心動瞬間？",
        "伱肿么看「後宮／群像戀愛」？",
        "伱追番時最常見の狀態4？",
        "伱會主動推坑盆友哪掛作品？",
        "伱對「角色廚」這事啥態度？",
        "伱更願意泡在哪種討論樓裡久壹點？",
        "伱肿么看「看不懂就先刷社媒解釋」？",
        "伱對補番門檻の底線4？",
        "看到「4K 重映」「周年企劃」時，伱會？",
        "碰上「續作門檻很高但口碑爆炸」，伱通常會？",
        "伱更能扛哪種資訊密度？",
        "淉真一部作品需要前情提要，伱會肿么看？",
        "挑暑假劇場版時，伱最看重啥？",
        "伱更想在戲院裡看到哪種色溫？",
        "經典重映最戳伱の4哪壹點？",
        "伱心中の「電影感」更像哪掛？",
        "淉真戲院體驗只能留壹種，伱會選啥？",
        "壹部作品結束後，伱最想留下啥？",
        "伱會為哪掛作品二刷？",
        "伱更在乎作品最後留給伱啥？",
        "伱最怕作品最後變成啥樣？",
        "淉真這波測完伱真去補番，伱最想那部作品能給伱啥？"
      ]
    },
    wy: {
      questions: [
        "新季伊始，汝首念常何如？",
        "啟一支 PV，最先為何所攝？",
        "見「第二季／劇場版」數字，汝將何如？",
        "汝於「原創新作」最望者何？",
        "待看之單但可先留一作，汝常取何者？",
        "一角色初見之下，最使汝心動者何？",
        "汝較好何種旁白語氣？",
        "預告之中，何等場面最使汝欲續觀？",
        "汝更願為何種「帥氣」買單？",
        "於角色陣容，汝較偏何種？",
        "汝更欲自投於何等場景？",
        "一作之「世界感」，汝較欲得何種？",
        "汝於歷史／近代背景，其意何如？",
        "汝好何種「魔法／能力」？",
        "何等舞台最能使汝駐足再觀？",
        "汝最易代入何類主角？",
        "汝較喜主角以何法解決難題？",
        "若主角缺點昭然，汝較能受何種？",
        "汝較好何種「成長」之路？",
        "汝更欲觀主角面對何等課題？",
        "近來之汝，較宜何等濃度？",
        "汝較喜作品何以「傷人」？",
        "於汝而言，何種「輕鬆」最有效？",
        "汝受「壓迫感」之度何如？",
        "一作最佳之情緒收束何如？",
        "汝所理想之感情線濃度何如？",
        "汝最易為何等關係所動？",
        "若作品標舉「命運感」，汝願取何種？",
        "汝較喜何種心動一瞬？",
        "汝於「後宮／群像戀愛」何所見？",
        "汝追番之時，常居何態？",
        "汝常主動薦友何類作品？",
        "汝於「角色廚」一事，其意何如？",
        "汝較願久留於何等議論之中？",
        "汝於「未曉便先閱社群解釋」何所見？",
        "汝於補番門檻，底線安在？",
        "見「4K 重映」「周年企劃」時，汝將何如？",
        "若遇「續作門檻甚高而口碑大盛」，汝常何如？",
        "汝較能受何等資訊之密？",
        "若一作需前情提要，汝將何以觀之？",
        "選暑期劇場版時，汝最重何者？",
        "汝更欲於戲院見何等色溫？",
        "經典重映，最引汝者何點？",
        "汝心中之「電影感」，更近何種？",
        "若戲院體驗但可存一，汝將擇何者？",
        "一作既畢，汝最欲留存者何？",
        "汝會為何類作品再觀？",
        "汝更在意作品終末留予汝者何？",
        "汝最懼作品終成何狀？",
        "若此輪既畢而汝果真補番，最望彼作能予汝何物？"
      ]
    },
    yue: {
      questions: [
        "新一季開波時，你通常第一個反應係咩？",
        "點開一條 PV，最先俾乜嘢吸住？",
        "見到「第二季／劇場版」呢幾隻字，你會點？",
        "你對「原創新作」最期待邊一樣？",
        "待看清單只可以先留一套，你通常會留邊套？",
        "一個角色第一眼最容易令你心動嘅係咩？",
        "你會更食邊種旁白語氣？",
        "預告入面邊種場面最令你想追落去？",
        "你會更願意為邊種「型」埋單？",
        "角色陣容方面，你會更偏向邊一種？",
        "你會更想將自己掉入邊種場景？",
        "一部作品嘅「世界感」，你會更想要邊一種？",
        "你點睇歷史／近代背景？",
        "你鍾意邊種「魔法／能力」？",
        "邊種舞台最容易令你停低再望多眼？",
        "你最易代入邊類主角？",
        "你會更鍾意主角用咩方法解決問題？",
        "如果主角有明顯缺點，你會比較受得落邊種？",
        "你會更食邊種「成長線」？",
        "你會更想睇主角面對咩課題？",
        "最近嘅你，會比較啱邊種濃度？",
        "你會更鍾意作品點樣「刀你」？",
        "對你嚟講，邊種「輕鬆感」最有用？",
        "你對「壓迫感」嘅承受度去到邊？",
        "一部作品最好嘅情緒收尾方式係咩？",
        "你理想中嘅感情線濃度係點？",
        "你最易俾邊種關係打中？",
        "如果作品主打「命運感」，你會買邊一種？",
        "你會更鍾意邊種心動瞬間？",
        "你點睇「後宮／群像戀愛」？",
        "你追番時最常見嘅狀態係點？",
        "你會主動推朋友邊類作品？",
        "你點睇「角色廚」呢回事？",
        "你會更願意留喺邊種討論串耐少少？",
        "你點睇「睇唔明就先刷社交平台解釋」？",
        "你對補番門檻嘅底線去到邊？",
        "見到「4K 重映」「周年企劃」時，你會點？",
        "面對「續作門檻好高但口碑爆棚」呢種情況，你通常會點？",
        "你會更頂得順邊種資訊密度？",
        "如果一部作品要先補前情提要，你會點睇？",
        "揀暑假劇場版時，你最重視乜嘢？",
        "你會更想喺戲院見到邊種色溫？",
        "經典重映最吸引你嘅，係邊一點？",
        "你心目中嘅「電影感」會更似邊一種？",
        "如果戲院體驗只可以留一種，你會揀邊個？",
        "一部作品完咗之後，你最想留低啲咩？",
        "你會為邊類作品二刷？",
        "你會更在意作品最後留畀你啲咩？",
        "你最怕作品最後變成點樣？",
        "如果今輪測完你真係去補番，你最想嗰套作品帶畀你乜嘢？"
      ]
    }
  };

  Object.keys(QUIZ_TEXT_EXTENSIONS).forEach(function (locale) {
    QUIZ_TEXT[locale] = QUIZ_TEXT_EXTENSIONS[locale];
  });

  function getUi(locale) {
    return UI[locale] || UI.tc;
  }

  function getQuestion(locale, questionIndex, sourceText) {
    var localeText = QUIZ_TEXT[locale];

    if (localeText && localeText.questions) {
      return localeText.questions[questionIndex] || sourceText;
    }

    return localizeStyledText(locale, sourceText);
  }

  function getOption(locale, questionIndex, optionIndex, sourceText) {
    var localeText = QUIZ_TEXT[locale];

    if (localeText && localeText.options) {
      return (localeText.options[questionIndex] || [])[optionIndex] || sourceText;
    }

    return localizeStyledText(locale, sourceText);
  }

  function translateTrait(locale, text) {
    if (TRAIT_LABELS[locale]) {
      return TRAIT_LABELS[locale][text] || text;
    }

    return localizeStyledText(locale, text);
  }

  function joinList(locale, items) {
    if (locale === "en") {
      if (items.length <= 1) {
        return items.join("");
      }

      if (items.length === 2) {
        return items[0] + " and " + items[1];
      }

      return items.slice(0, -1).join(", ") + ", and " + items[items.length - 1];
    }

    if (locale === "ja") {
      return items.join("・");
    }

    return items.join("、");
  }

  function getWorkTitlePair(work) {
    return WORK_TITLES[work.id] || {
      en: work.animeRomaji || work.animeName,
      ja: work.animeRomaji || work.animeName
    };
  }

  function getPrimaryWorkName(locale, work) {
    var titles = getWorkTitlePair(work);

    if (locale === "en") {
      return titles.en;
    }

    if (locale === "ja") {
      return titles.ja;
    }

    if (locale === "sc") {
      return toSC(work.animeName);
    }

    return work.animeName;
  }

  function getSecondaryWorkName(locale, work) {
    var titles = getWorkTitlePair(work);

    if (locale === "en") {
      return titles.ja;
    }

    if (locale === "ja") {
      return titles.en;
    }

    return titles.ja + " / " + titles.en;
  }

  function getTypeLabel(locale, typeName, matches) {
    if (locale === "en" || locale === "ja") {
      var labels = (matches || []).slice(0, 2).filter(Boolean);

      return labels.length ? joinList(locale, labels) : getUi(locale).typeFallback;
    }

    return localizeStyledText(locale, typeName);
  }

  window.ExamKaraQuizI18n = {
    getUi: getUi,
    getQuestion: getQuestion,
    getOption: getOption,
    translateTrait: translateTrait,
    localizeStyledText: localizeStyledText,
    joinList: joinList,
    getPrimaryWorkName: getPrimaryWorkName,
    getSecondaryWorkName: getSecondaryWorkName,
    getTypeLabel: getTypeLabel
  };
})();
