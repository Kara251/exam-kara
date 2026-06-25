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
      // question-level replacements (long first)
      ["你第一反應通常是？", "伱第壹反應通常4？"],
      ["最先被什麼抓住？", "最先被啥戳到ㄇ？"],
      ["看到『第二季／劇場版』這幾個字，你會？", "看到『第二季／劇場版』這幾個字伱會咋整？"],
      ["最期待哪一點？", "最期待哪個點ㄇ？"],
      ["你通常保什麼？", "伱通常會留啥ㄇ？"],
      ["哪種場面最讓你想看下去？", "哪掛場面最容易把伱拽下去ㄇ？"],
      ["你更想把自己丟進哪種場景？", "伱更想把自巳丟進哪掛場景ㄇ？"],
      ["你最容易代入哪類主角？", "伱最容易代入哪掛主角ㄇ？"],
      ["你更喜歡作品怎麼『傷人』？", "伱更吃作品咋整『刀人』の ㄇ？"],
      ["你更容易被哪種關係打動？", "伱更容易被哪掛關係戳到ㄇ？"],
      ["你追番時最常出現的姿態是？", "伱追番時最常見の狀態4ㄇ？"],
      ["你對『角色廚』這件事的態度是？", "伱對『角色廚』這事啥態度ㄇ？"],
      ["你更願意在哪種討論裡待久一點？", "伱更願意泡在哪掛討論樓裡ㄇ？"],
      ["如果這輪測完你真的去補番，你最希望那部作品能？", "淉真這波測完伱尊嘟去補番，伱最想那部作能整點啥ㄇ？"],
      // option-level replacements
      ["先挑最能讓人一口氣追下去的", "先挑那種能讓人壹口氣肝下去の"],
      ["先找能陪我慢慢進入狀態的", "先揪能陪莪慢慢入戲の"],
      ["先看設定、監督或演出是不是夠有趣", "先瞅設定、監督或演出夠卟夠戳莪"],
      ["先找適合和朋友一起吐槽的", "先揪適合跟盆友壹起吐槽の"],
      ["戰鬥剪輯和爆點", "打鬥剪輯和爆點"],
      ["氣氛和關係張力", "氣氛跟關係拉扯"],
      ["畫風和鏡頭語言", "畫風跟鏡頭語言"],
      ["前作越多越興奮", "前作越多莪越上頭"],
      ["門檻太高就先放著", "門檻太高就先擱著"],
      ["只要朋友都在看，我就跟上", "只要盆友都在看，莪就跟上"],
      ["最好可以舒服地陪我一整季", "最好能舒舒服服陪莪壹整季"],
      ["最好玩得夠瘋夠好笑", "最好整得夠瘋夠好笑"],
      ["看起來最溫柔耐看的", "看起來最溫柔、還特別耐刷の"],
      ["最適合邊看邊發消息的", "最適合邊看邊狂敲盆友的"],
      ["看起來就有故事的人", "看起來就背著壹身故事の人"],
      ["有一種誰也猜不到的衝擊", "有壹種誰都猜卟到の衝擊"],
      ["最好有我能拿來聊設定的東西", "最好有莪能拿來聊設定の東西"],
      ["命運要開打了", "命運要開打惹hhh"],
      ["這點日常也很重要", "這點日常也超重要の"],
      ["真相沒有你想得那麼簡單", "真相卟是伱想の那麼簡單"],
      ["先別認真，笑完再說", "先卟要認真，笑完惹再說"],
      ["高風險但可能超炸裂的", "高風險但一旦炸開就可能封神の"],
      ["設定最複雜、最需要慢慢拼的", "設定最複雜、最需要慢慢拼圖の"],
      ["整隊人同時登場", "整隊人壹起登場"],
      ["兩個人在夜裡安靜說話", "兩個人在夜裡靜靜說話"],
      ["一個離譜畫面把節奏炸開", "壹個離譜畫面把節奏炸開惹"],
      ["越逆風越要贏的人", "越逆風越要贏の人"],
      ["很強，而且他自己也知道自己很強", "超強，而且他自巳也知道自巳超強"],
      ["腦子很好、說話很穩的人", "腦子超好、說話超穩の人"],
      ["明明端著，結果一下子崩掉很好笑", "明明端著，結果壹下子崩掉超好笑"],
      ["越陌生越好，最好需要慢慢拼", "越陌生越好，最好要慢慢拼"],
      ["城市夜色和霓虹反光", "城市夜色和霓虹反光 (˘ω˘)"],
      ["夏天小鎮和緩慢日光", "夏天小鎮和緩慢日光 (✿˘◡˘✿)"],
      ["社團、酒局或一群人胡鬧的地方", "社團、酒局或壹群人胡鬧の地方"],
      ["不行，我想先開心一點", "卟行，莪想先開心丶"],
      ["先把今天撐過去，順便笑出來", "先把今天撐過去，順便笑出來hhh"],
      ["變強、硬拆、正面推進", "變超強、硬拆、正面推進"],
      ["先把局面搞得更有趣再說", "先把局面整得更有趣惹再說"],
      ["人多、話密、亂成一團最好", "人多、話密、亂成壹團最好hhh"],
      ["讓人發消息給朋友說『你快來看這個』", "讓人發訊息給盆友說『伱快來看這個』"],
      ["先讓我笑，再談其他", "先讓莪笑出聲，再談別的"],
      ["讓人熱血到想立馬下一集", "讓人熱血到想立馬點下壹集"],
      ["讓人安靜地緩很久", "讓人安靜緩神超久"],
      ["要有我回家想查資料的東西", "得有讓莪回家還想繼續考據の東西"],
      ["大銀幕上必要夠震撼", "大銀幕上壹定得夠炸"],
      ["想在大銀幕重新被演出打中", "想在大銀幕上再被演出迎面打中"],
      ["如果朋友約，我會很願意去玩", "淉真盆友揪莪，莪超願意去補票"],
      ["被音響和畫面狠狠干到", "被音響和畫面迎面爆殺"],
      ["看完沉默很久的心情", "看完直接沉默超久の後勁"],
      ["像陪伴一樣剛好落下來", "像陪跑壹樣剛剛好落下來"],
      ["成為你和朋友下一輪聊天的中心", "直接變成伱跟盆友下壹輪聊天主樓"],
      ["你對感情線的理想濃度是？", "伱對感情線の理想濃度4ㄇ？"],
      ["你更容易被哪種關係打動？", "伱更容易被哪掛關係戳到ㄇ？"],
      ["你對弹幕和評論區的態度是？", "伱對彈幕和評論區の態度4ㄇ？"],
      // term substitutions
      ["夏季番", "夏番"],
      ["命定番", "本命番"],
      ["原創新作", "原創新番"],
      ["最好的情緒收束方式是", "最好の收尾姿勢4"],
      ["最好的情緒收束方式", "最好の收尾姿勢"],
      ["那部作品", "那部片"],
      ["看不懂先刷社媒解釋", "看卟懂先刷社媒考據"],
      ["主角團", "主角團"],
      ["名場面", "名場面"],
      ["高光", "高光"],
      ["很適合", "超對味"],
      ["最適合", "最對味"],
      ["更適合", "更吃"],
      ["首推", "本命"],
      ["推薦", "推坑"],
      ["保存結果圖", "存圖"],
      ["更多測驗", "更多試題"],
      ["再測一次", "再來壹把"],
      // broad substitutions (short, applied last)
      ["這輪", "這波"],
      ["哪種", "哪掛"],
      ["什麼", "虾米"],
      ["怎麼", "肿么"],
      ["如果", "淉真"],
      ["可以", "阔以"],
      ["喜歡", "稀飯"],
      ["朋友", "盆友"],
      ["一起", "壹起"],
      ["一個", "壹個"],
      ["一口氣", "壹口氣"],
      ["真的", "尊嘟"],
      ["開始", "開局"],
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
      ["立刻", "立馬"],
      ["不是", "卟4"],
      ["不行", "卟行"],
      ["不用", "卟用"],
      ["不要", "卟要"],
      ["不太", "卟太"],
      ["不一定", "卟壹定"],
      ["不會", "卟會"],
      ["不好", "卟好"],
      ["不", "卟"],
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
      ["保存結果圖", "存圖"],
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
      pageDescription: "15道問題對照追番性格，算出你這輪最對味的 2026 夏季番。",
      ogTitle: "2026 夏季番你該追哪部？",
      ogDescription: "15道問題，找到你本季的命定番",
      h1a: "夏季番",
      h1b: "你該追哪部？",
      sub: "15道問題，對照你的追番性格，找到本季命定番",
      go: "開始測驗 ▶",
      rl: "你 的 命 定 番 是",
      altT: "這輪也很適合你",
      avT: "可能需要避雷",
      ret: "再測一次",
      sh: "保存結果圖",
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
      leadPrefix: "這輪最明顯的偏向，是你更喜歡",
      leadSuffix: "，這讓它離你最近。",
      previewButton: "查看結果圖",
      previewTitle: "結果圖預覽",
      previewHint: "長按圖片即可保存到本地，也能直接分享給好友。",
      previewClose: "關閉",
      previewLoading: "生成中…",
      previewFailed: "結果圖生成失敗，請稍後再試。",
      shareSaving: "保存中…",
      shareFailed: "截圖保存失敗，請使用手機截圖功能",
      downloadName: "2026夏季番測驗結果.png",
      typeFallback: "本輪命中"
    },
    sc: {
      pageTitle: "2026 夏季番测验 -- 你该追哪部？",
      pageDescription: "15道问题对照追番性格，算出你这轮最对味的 2026 夏季番。",
      ogTitle: "2026 夏季番你该追哪部？",
      ogDescription: "15道问题，找到你本季的命定番",
      h1a: "夏季番",
      h1b: "你该追哪部？",
      sub: "15道问题，对照你的追番性格，找到本季命定番",
      go: "开始测验 ▶",
      rl: "你 的 命 定 番 是",
      altT: "这轮也很适合你",
      avT: "可能需要避雷",
      ret: "再测一次",
      sh: "保存结果图",
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
      leadPrefix: "这轮最明显的偏向，是你更喜欢",
      leadSuffix: "，这让它离你最近。",
      previewButton: "查看结果图",
      previewTitle: "结果图预览",
      previewHint: "长按图片即可保存到本地，也能直接分享给好友。",
      previewClose: "关闭",
      previewLoading: "生成中…",
      previewFailed: "结果图生成失败，请稍后再试。",
      shareSaving: "保存中…",
      shareFailed: "截图保存失败，请使用手机截图功能",
      downloadName: "2026夏季番测验结果.png",
      typeFallback: "本轮命中"
    },
    hx: {
      pageTitle: "2026 夏番 -- 伱這波該補哪部？",
      pageDescription: "15 道 ACG 題，幫伱揪出這波最對電波の本命番。",
      ogTitle: "2026 夏番伱這波該補哪部？",
      ogDescription: "15道題，幫伱鎖定這波最容易上頭の本命番",
      h1a: "夏番",
      h1b: "伱這波該補哪部？",
      sub: "15 道題，測出伱這波最容易入坑の本命番",
      go: "開測 ▶",
      rl: "伱 這 波 の 本 命 番",
      altT: "這波也超可能對伱電波",
      avT: "這波大概卟4伱の菜",
      ret: "再測壹把",
      sh: "存結果圖",
      ftr: "2026 夏番伱這波該補哪部",
      more: "更多試題",
      prev: "上壹題",
      verticalLeft: "夏番電波診斷",
      verticalRight: "二〇二六年夏",
      homeTag: "號外 EXTRA",
      homeDate: "VOL. 2026 -- SUMMER",
      mixedLine: "✧ 夏番雷達 × 本命診斷 ✧",
      featureTag: "-- 特集 --",
      homeFooterPrimary: "ANIME PERSONALITY TEST",
      homeFooterSecondary: "夏番本命診斷テスト",
      sparkleLine: "☆ﾟ.*･｡ﾟ",
      resultTag: "號外",
      resultPub: "SUMMER ANIME GUIDE",
      resultVol: "VOL.2026",
      coverPlaceholder: "COVER ART",
      resultFooterSecondary: "補番口味診斷",
      goodFallback: "整體調性跟伱這波偏好幾乎同頻，基本一眼就對電波惹。",
      avoidFallback: "整體調性跟伱這波偏好有丶錯頻，這波大概卟會第一時間上頭。",
      goodPrefix: "更貼伱這波偏好の",
      goodSuffix: "。",
      avoidPrefix: "它更偏向",
      avoidSuffix: "，所以這波未必正中伱。",
      leadPrefix: "這波最上頭の，就4伱明顯更吃",
      leadSuffix: "，這才讓它命中伱。",
      previewButton: "查看結果圖",
      previewTitle: "結果圖預覽",
      previewHint: "長按圖片就能存到本地，也阔以直接丟給盆友。",
      previewClose: "關閉",
      previewLoading: "生成中…",
      previewFailed: "結果圖生成失敗惹，稍後再試壹下。",
      shareSaving: "存圖中…",
      shareFailed: "存圖失敗惹，直接用手機截圖也阔以。",
      downloadName: "2026夏番測驗結果.png",
      typeFallback: "本命命中"
    },
    wy: {
      pageTitle: "二〇二六夏番試 -- 汝今當補何番？",
      pageDescription: "十五題以定此輪最宜汝補觀之本命番。",
      ogTitle: "二〇二六夏番，汝今當補何番？",
      ogDescription: "十五題以定此輪最契汝意之夏番",
      h1a: "夏番",
      h1b: "汝今當補何番？",
      sub: "以十五題，求此輪最契汝意之本命番",
      go: "啟試 ▶",
      rl: "此 輪 本 命 番",
      altT: "此輪亦堪補觀",
      avT: "此輪宜暫避之",
      ret: "復測一次",
      sh: "存其結果圖",
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
      leadPrefix: "此輪最顯者，在汝偏好",
      leadSuffix: "，故此番最契汝意。",
      previewButton: "觀其結果圖",
      previewTitle: "結果圖預覽",
      previewHint: "長按其圖，即可存於本地，亦可轉與友人。",
      previewClose: "關閉",
      previewLoading: "生成中…",
      previewFailed: "結果圖生成失敗，請稍後再試。",
      shareSaving: "保存中…",
      shareFailed: "保存失敗，請自以截圖存之",
      downloadName: "2026夏季番測結果.png",
      typeFallback: "本命命中"
    },
    en: {
      pageTitle: "Summer 2026 Anime Match -- What Should You Watch?",
      pageDescription: "15 ACG questions to find your best-fit Summer 2026 title.",
      ogTitle: "Which Summer 2026 Anime Fits You Best?",
      ogDescription: "15 questions to find the Summer 2026 title that fits you this round",
      h1a: "Summer Anime",
      h1b: "What Should You Watch?",
      sub: "15 questions to find the title that fits you best this round",
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
      homeFooterSecondary: "anime personality test",
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
      leadPrefix: "The biggest factor this round is your clear pull toward ",
      leadSuffix: ", which put this one closest to you.",
      previewButton: "View Result Card",
      previewTitle: "Result Card Preview",
      previewHint: "Press and hold the image to save it locally, or share it straight from your device.",
      previewClose: "Close",
      previewLoading: "Rendering...",
      previewFailed: "Could not render the result image. Please try again.",
      shareSaving: "Saving...",
      shareFailed: "Could not save the image. Try a device screenshot instead.",
      downloadName: "summer-anime-match-result.png",
      typeFallback: "Best Match"
    },
    yue: {
      pageTitle: "2026 夏番測驗 -- 你今輪應該補邊套？",
      pageDescription: "15 條 ACG 題，幫你搵出今輪最中你電波嘅 2026 夏番。",
      ogTitle: "2026 夏番你今輪應該補邊套？",
      ogDescription: "15 條題，搵出今輪最易令你入坑嘅本命番",
      h1a: "夏番",
      h1b: "你今輪應該補邊套？",
      sub: "15題幫你搵出今輪最中你口味嘅本命番",
      go: "開始測番 ▶",
      rl: "你 今 輪 本 命 番 係",
      altT: "今輪都幾值得你補",
      avT: "今輪未必啱你入坑",
      ret: "再測一次",
      sh: "存結果圖",
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
      leadPrefix: "今輪最明顯嘅偏向，係你好明顯更食",
      leadSuffix: "，令佢離你最近。",
      previewButton: "查看結果圖",
      previewTitle: "結果圖預覽",
      previewHint: "長按張圖就可以存去本地，亦都可以直接分享俾朋友。",
      previewClose: "關閉",
      previewLoading: "生成中…",
      previewFailed: "結果圖生成失敗，請稍後再試。",
      shareSaving: "保存中…",
      shareFailed: "截圖保存失敗，請直接用手機截圖功能",
      downloadName: "2026夏季番測驗結果.png",
      typeFallback: "本命命中"
    },
    ja: {
      pageTitle: "2026 夏アニメ診断 -- 今のあなたに合うのは？",
      pageDescription: "15問のACG診断で今のあなたにいちばん合う2026年夏アニメを出します。",
      ogTitle: "2026 夏アニメ、今のあなたに合うのは？",
      ogDescription: "15問で、この夏いちばん合う一本を出します",
      h1a: "夏アニメ",
      h1b: "今のあなたに合うのは？",
      sub: "15問で今のあなたにいちばん合う一本を探します。",
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
      leadPrefix: "今回いちばん効いたのは、あなたがはっきり ",
      leadSuffix: " を選んでいたことで、それがこの一本を引き寄せました。",
      previewButton: "結果画像を見る",
      previewTitle: "結果画像プレビュー",
      previewHint: "画像を長押しすると保存できます。端末側の共有もそのまま使えます。",
      previewClose: "閉じる",
      previewLoading: "生成中…",
      previewFailed: "結果画像の生成に失敗しました。少し置いてからもう一度お試しください。",
      shareSaving: "保存中…",
      shareFailed: "保存に失敗しました。端末のスクリーンショットを使ってください。",
      downloadName: "2026-summer-anime-result.png",
      typeFallback: "今回の命中枠"
    }
  };

  var UI_EXTENSIONS = {
    tc: {
      pageDescription: "15 道 ACG 問題，找出這一輪最對你電波的 2026 夏季番。",
      ogDescription: "15 道問題，找出這一輪最對你電波的夏季番",
      sub: "15 道 ACG 問題，找出這一輪最對你電波的本命番",
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
      leadPrefix: "這一輪最明顯的偏向，是你更喜歡",
      leadSuffix: "，這讓它離你最近。",
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "先選擇語言",
      gateSubtitle: "選好後會進入測驗頁，右上角也能隨時切換。",
      gateNote: "開始頁、答題頁和結果頁，都能在右上角切換語言。",
      gateToast: "右上角可隨時切換語言",
      scrollHint: "向下滑看更多",
      traitsTitle: "這輪特質分佈",
      qrLabel: "掃碼回到測驗",
      contactEntry: "定制測試 / 網站",
      contactTitle: "網站定制 / 測試定制 / 全棧開發",
      contactSubtitle: "點擊獲取微信好友二維碼：_UshioNoa",
      contactHint: "掃碼即可加微信，聊測試頁、網站頁或全棧開發合作。",
      contactClose: "關閉",
      contactQrAlt: "_UshioNoa 微信好友二維碼",
      repoExamLabel: "GitHub",
      repoAnimeLabel: "GitHub"
    },
    sc: {
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "先选择语言",
      gateSubtitle: "选好后进入测验页，右上角也能随时切换。",
      gateNote: "开始页、答题页和结果页，都能在右上角切换语言。",
      gateToast: "右上角可随时切换语言",
      scrollHint: "向下滑看更多",
      traitsTitle: "这轮特质分布",
      qrLabel: "扫码回到测验",
      contactEntry: "定制测试 / 网站",
      contactTitle: "网站定制 / 测试定制 / 全栈开发",
      contactSubtitle: "点击获取微信好友二维码：_UshioNoa",
      contactHint: "扫码即可加微信，聊测试页、网站页或全栈开发合作。",
      contactClose: "关闭",
      contactQrAlt: "_UshioNoa 微信好友二维码",
      repoExamLabel: "GitHub",
      repoAnimeLabel: "GitHub"
    },
    hx: {
      pageDescription: "15 道 ACG 題，幫伱鎖定這波最對電波、最容易踩坑の本命番。",
      ogDescription: "15 道 ACG 題，幫伱鎖定這波最容易上頭の本命番",
      sub: "15 道 ACG 題，幫伱揪出這波最對電波の本命番",
      go: "開測 ▶",
      rl: "伱 這 波 の 本 命 番",
      altT: "這波也很可能讓伱直接上頭",
      avT: "這波大概卟會中伱口味",
      sh: "存結果圖",
      homeFooterSecondary: "夏番電波雷達",
      resultFooterSecondary: "補番口味診斷",
      goodFallback: "整體調性跟伱這波偏好，基本屬於一拍即合。",
      avoidFallback: "整體調性跟伱這波偏好有丶錯頻，未必會對上腦電波。",
      goodPrefix: "更貼伱這波偏好の",
      goodSuffix: "。",
      avoidPrefix: "它更偏向",
      avoidSuffix: "，所以這波未必對味。",
      leadPrefix: "這波最上頭の，就4伱明顯更吃",
      leadSuffix: "，這才讓它命中伱。",
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "先揀伱想用の語言",
      gateSubtitle: "選完就進測驗頁，右上角那顆語言鍵之後想咋切都阔以。",
      gateNote: "開始頁、答題頁同結果頁，右上角都能切語言。",
      gateToast: "右上角隨時都能切語言",
      scrollHint: "往下滑，下面還囿料",
      traitsTitle: "這波電波分佈",
      qrLabel: "掃碼回來再測壹輪",
      contactEntry: "定制測試 / 網站",
      contactTitle: "網站定制 / 測試定制 / 全棧開發",
      contactSubtitle: "點我拿微信好友碼：_UshioNoa",
      contactHint: "掃壹下就能直接加微信，測驗頁、網站頁同全棧合作都阔以聊。",
      contactClose: "關閉",
      contactQrAlt: "_UshioNoa 微信好友碼",
      repoExamLabel: "GitHub",
      repoAnimeLabel: "GitHub"
    },
    wy: {
      pageDescription: "十五題以卜此輪最契汝意之二〇二六夏番。",
      ogDescription: "十五題以定此輪最宜汝補觀之夏番",
      sub: "以十五題，求此輪最契汝意之本命番",
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
      leadPrefix: "此輪最顯者，在汝偏好",
      leadSuffix: "，故此番最契汝意。",
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "請先擇言",
      gateSubtitle: "既擇其言，乃入測頁；右上角仍可隨時更之。",
      gateNote: "首頁、答題與所得之頁，皆可由右上角更語。",
      gateToast: "右上角可隨時易語",
      scrollHint: "下滑可見餘內容",
      traitsTitle: "此輪氣味分佈",
      qrLabel: "掃碼可返此試",
      contactEntry: "定制測試 / 網站",
      contactTitle: "網站定制 / 測試定制 / 全棧開發",
      contactSubtitle: "點此取微信友人碼：_UshioNoa",
      contactHint: "掃碼即可加微信，可議測試頁、網站頁與全棧開發之事。",
      contactClose: "關閉",
      contactQrAlt: "_UshioNoa 微信友人碼",
      repoExamLabel: "GitHub",
      repoAnimeLabel: "GitHub"
    },
    en: {
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "Choose Your Language",
      gateSubtitle: "After you enter, the language menu stays in the top-right corner.",
      gateNote: "The home, quiz, and result pages all share the same language switch.",
      gateToast: "Language switch is in the top-right corner",
      scrollHint: "Scroll for more",
      traitsTitle: "Trait Spread",
      qrLabel: "Scan to reopen this test",
      contactEntry: "Custom Tests / Sites",
      contactTitle: "Custom Sites / Custom Tests / Full-Stack Dev",
      contactSubtitle: "Tap to open the WeChat QR: _UshioNoa",
      contactHint: "Scan the QR to add me on WeChat for quiz commissions, site commissions, or full-stack work.",
      contactClose: "Close",
      contactQrAlt: "WeChat QR code for _UshioNoa",
      repoExamLabel: "GitHub",
      repoAnimeLabel: "GitHub"
    },
    yue: {
      pageDescription: "15 條 ACG 題，幫你搵出今輪最中你電波嘅 2026 夏番。",
      ogDescription: "15 條題，搵出今輪最適合你補嘅夏番",
      sub: "15題幫你搵出今輪最中你電波嘅本命番",
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
      leadPrefix: "今輪最明顯嘅偏向，係你好明顯更食",
      leadSuffix: "，令佢離你最近。",
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "先揀語言",
      gateSubtitle: "揀完就會入測驗頁，右上角之後都可以隨時轉。",
      gateNote: "開始頁、答題頁同結果頁，都可以喺右上角轉語言。",
      gateToast: "右上角可以隨時轉語言",
      scrollHint: "向下滑睇多啲",
      traitsTitle: "今輪特質分佈",
      qrLabel: "掃碼返嚟再測",
      contactEntry: "定制測試 / 網站",
      contactTitle: "網站定制 / 測試定制 / 全棧開發",
      contactSubtitle: "撳入去拎微信好友碼：_UshioNoa",
      contactHint: "掃碼就可以直接加微信，測試頁、網站頁同全棧開發都可以傾。",
      contactClose: "關閉",
      contactQrAlt: "_UshioNoa 微信好友碼",
      repoExamLabel: "GitHub",
      repoAnimeLabel: "GitHub"
    },
    ja: {
      gateKicker: "LANGUAGE INDEX",
      gateTitle: "先に言語を選んでください",
      gateSubtitle: "入った後も、右上の言語メニューからいつでも切り替えられます。",
      gateNote: "トップ、設問、結果の各画面で、同じ右上の言語メニューを使います。",
      gateToast: "言語切替は右上にあります",
      scrollHint: "下にスクロール",
      traitsTitle: "今回の特質分布",
      qrLabel: "QRでこの診断へ戻る",
      contactEntry: "制作相談",
      contactTitle: "サイト制作 / テスト制作 / フルスタック開発",
      contactSubtitle: "WeChat QRを開く：_UshioNoa",
      contactHint: "QRを読み取ると WeChat で追加できます。テスト制作、サイト制作、開発相談用です。",
      contactClose: "閉じる",
      contactQrAlt: "_UshioNoa の WeChat QRコード",
      repoExamLabel: "GitHub",
      repoAnimeLabel: "GitHub"
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
      "設定先行": "設定廚爽點",
      "奇想與異世界感": "奇想異世界感",
      "現實落地感": "現實貼地感",
      "科技都會氣質": "賽博都會味",
      "懷舊時代氣息": "復古年代味",
      "壓迫與黑暗濃度": "黑壓濃度",
      "明亮鬆弛感": "亮堂鬆弛感",
      "適合一起看和聊": "組團追番指數",
      "適合獨自沉浸": "獨自沉浸度",
      "強者或策略爽點": "強者／智鬥爽點",
      "普通人共鳴": "普通人代入感",
      "演出與意象實驗": "演出實驗感",
      "直給好入口": "壹眼入坑度",
      "補番門檻也值得": "補番門檻高也值",
      "新手友好度": "新手入坑友好度"
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
      ],
      options: [
        ["先擇最能使人一氣追下去者", "先求能徐徐相伴入境者", "先察設定、監督與演出是否有可觀", "先求可與友人共觀同樂者"],
        ["戰鬥剪輯與爆點", "氣氛與關係張力", "世界觀之要詞", "畫風與鏡頭語言"],
        ["前作愈多，愈感振奮", "若情緒相合，亦願補觀", "門檻太高，姑且置之", "友既皆觀，吾亦從之"],
        ["最好有出人意表之衝擊", "最好能安然相伴整季", "最好有可拿來論設定之物", "最好縱放足以令人大笑"],
        ["高風險而或可大爆者", "觀之最溫柔耐看者", "設定最繁、最需慢慢拼接者", "最宜邊觀邊傳訊者"],
        ["甚強，且自知其強", "觀之若帶一身故事", "聰慧而言辭沉穩", "明明持重，卻忽崩潰，頗為可笑"],
        ["命運將展其鋒", "此等尋常日常，亦自有其重", "真相非汝所想之簡", "且莫認真，笑罷再論"],
        ["整隊人一同登場", "兩人夜中靜靜說話", "世界觀之一瞥一閃而逝", "一荒謬畫面炸碎節奏"],
        ["純粹能戰之帥", "忍而不道破之帥", "冷然洞察一切之帥", "明明凌亂卻偏有魅力之帥"],
        ["主角眾越多越有趣", "少數人物深寫最佳", "設定穩固更勝人數", "有一絕強核心即足"],
        ["都市夜色與霓虹倒影", "夏日小鎮與悠緩日光", "王國、異界或失落遺跡", "社團、酒席或眾人胡鬧之所"],
        ["規則明確，升級暢快", "毋需多言，先對上氣味", "越陌生越好，最好需慢慢拼接", "近乎現實，然能放大情緒"],
        ["只要權謀與命運夠重，吾甚吃", "有時代感可使吾更投入人物", "不如直上未來或科技設定", "只要夠熱鬧，何等年代皆可"],
        ["簡單粗暴，打出來便爽", "與日常、職事或關係相連者", "規則愈多，越研究越上頭", "看來可愛，實則略帶危險"],
        ["空氣中滿是火藥味的戰場", "便利店後門、河堤、天台等邊角之所", "舊街景、夏祭、車站、放學之後", "演唱會、比賽場、舞台後台"],
        ["逆風越甚越欲勝者", "觀之普通，然情緒格外真實者", "甚聰慧，乃至令人略感可怖者", "明明胡鬧，卻能使全場沸騰者"],
        ["變強、硬拆、正面推進", "先解人心，再決行止", "觀察規則，捉對方之失", "先使局面更有趣，再說其他"],
        ["只要打得夠燃，缺點慢慢改亦可", "只要情緒寫得真，吾願一直相伴", "只要其思路夠獨特", "只要其夠好笑，吾願原諒甚多"],
        ["數值與實力肉眼可見地增長", "關係漸近，人亦漸開", "認知不斷被顛覆的成長", "從一群人亂成一團到有默契"],
        ["欲勝，且欲勝得漂亮", "欲活成自己能接受之樣", "欲弄懂此世界究竟如何", "先把今日撐過，順便笑出來"],
        ["越高壓越能把吾拉入其中", "輕一點，別再加諸額外負擔", "有情緒，但最好慢慢滲入", "先使吾笑，再談其他"],
        ["直接以大場面與失去感刺入", "以一言慢慢卡在心中", "以設定與意象將人繞入", "先使人笑，再突然補上一刀"],
        ["節奏快、打得爽，本身便是輕鬆", "無甚大事，然氣氛甚好", "略帶怪異，然怪得迷人", "人多、話密、亂成一團最好"],
        ["有即有，吾甚至會去找最狠的", "可有，但要有人情味接住吾", "吾更想看冷感與距離感，未必要虐", "不可，吾想先開心一點"],
        ["使人熱血，立刻欲觀下集", "使人靜靜回緩良久", "使人腦子轉個不停", "使人傳訊予友曰『汝速來觀此』"],
        ["點到即止，勿耽主線推進", "有曖昧、拉扯、徐徐靠近最好", "命運感強亦可，吾吃大情緒", "戀愛亦可，但要夠好笑夠誇張"],
        ["生死與共之同伴感", "成年人之間說不破的分寸感", "背景差異甚大卻徐徐靠近", "明明互相拌嘴，卻越看越對味"],
        ["只要夠壯闊，吾買單", "只要情緒夠細，吾買單", "只要結構夠精巧，吾買單", "若太正經，不如再瘋一點"],
        ["並肩作戰後，默契對上", "深夜對話中一句未說滿之言", "時間、身份或立場帶來的錯位感", "在極荒謬的情境下突然真切起來"],
        ["只要節奏夠猛，可當梗片觀", "吾更喜一對一慢慢寫深", "若能玩類型梗與結構，吾甚有興趣", "吾寧不要戀愛線，給吾別的更刺激"],
        ["獨自戴耳機沉浸其中", "與固定友人同步追更", "邊觀邊查資料邊記錄", "彈幕、截圖、吐槽一個都不能少"],
        ["爽感特別直接者", "情緒特別合者", "設定或演出特別奇異者", "大家一起觀會笑瘋者"],
        ["有高光吾便能當場入坑", "吾更在乎關係網慢慢長出", "設定、造型、演出一齊成立方可", "只要角色夠癲夠有梗便行"],
        ["戰力、設定、前後呼應", "人物關係與情緒走向", "意象、鏡頭、主題解讀", "名場面與表情包整理"],
        ["越多人一起拼圖越有趣", "吾欲自己慢慢消化", "若能越挖越深，吾甚樂意", "吾更想看一眼就懂的爽點"],
        ["只要值得，吾能補一整條時間線", "兩季以內尚可", "最好新手可直接進", "若友帶著吾觀，亦無不可"],
        ["立刻欲去補觀經典", "看氣氛與題材再決定", "吾更想看這個時代的新東西", "若能一同觀之，則更有趣"],
        ["門檻越高吾越想試", "吾先看其是否情緒對味", "吾會先研究其為何值得", "太累了，吾想找輕鬆點的"],
        ["設定、術語、陣營一起塞給吾", "先給吾人物，再慢慢展開", "只要鏡頭和節奏穩，再複雜都行", "吾想先笑出來，再考慮其他"],
        ["正好，吾喜有歷史重量者", "只要人物魅力夠，吾還是會進", "吾會先看其世界觀是否值得投時間", "那吾可能先去找更好入口的"],
        ["大銀幕上必要夠震撼", "要有餘韻，走出戲院仍在心中迴旋", "要有回家欲查資料之物", "最好能與友一起當場聊爆"],
        ["冷光、機械、金屬與都市夜景", "夏天、煙火、風與濕氣", "紅黑撞色、夢境與異常畫面", "鮮艷有如一場大型慶典"],
        ["欲在大銀幕重新被演出打中", "欲把青春與回憶再過一遍", "欲補當年未趕上的名作", "若友相約，吾甚願赴之"],
        ["高概念、強意象，有如做夢", "一個夏天、一段關係、一次錯過", "一場史詩或宿命決戰", "一趟使人輕鬆出戲院的快樂冒險"],
        ["被音響與畫面狠狠震撼", "觀完後沉默良久的心情", "旁邊觀眾也在同一瞬間倒吸一口氣", "出來便能開始瘋狂聊梗與名場面"],
        ["甚爽，吾還想再看一場", "吾好像被某人理解了", "此事吾得想上一會兒", "吾要把此段傳給友人"],
        ["打戲、演出或高光太密了", "關係細節初看根本不夠", "伏筆、結構、意象值得重拼", "吾想再看一遍大家一起發瘋"],
        ["推進感：欲立刻追下一段故事", "體溫感：角色好像還活在吾身旁", "懸念感：欲繼續解讀", "傳播感：欲立刻薦予他人"],
        ["明明鋪得甚大，卻收得無力", "情緒甚響，然人物未能立住", "設定甚多，卻無真正想法", "太端著了，連笑點都沒有"],
        ["將汝整個人點燃", "如陪伴般恰好落下來", "使汝重新校準審美雷達", "成為汝與友下一輪聊天的中心"]
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
      ],
      options: [
        ["先揀套最易令人一口氣追落去嘅", "先搵套可以陪我慢慢入狀態嘅", "先睇設定、監督同演出夠唔夠吸引", "先搵套啱同朋友一齊邊睇邊吐槽嘅"],
        ["戰鬥剪接同爆點", "氣氛同關係張力", "世界觀關鍵字", "畫風同鏡頭語言"],
        ["前作越多越令我興奮", "如果情緒啱，我都願意補", "門檻太高就擺住先", "只要朋友都喺度睇，我就跟上"],
        ["最好有種冇人估到嘅衝擊", "最好可以舒服咁陪我一整季", "最好有啲可以俾我拎嚟傾設定嘅料", "最好玩到夠癲又夠好笑"],
        ["高風險但可能超爆嘅", "睇落最溫柔、又最耐睇嘅", "設定最複雜、最需要慢慢拼嘅", "最啱邊睇邊傳訊息嘅"],
        ["好勁，而且佢自己都知自己好勁", "睇落就係帶住一身故事嘅人", "腦子好叻、講嘢好穩嘅人", "明明好正經，結果突然崩咗好好笑"],
        ["命運就快開打喇", "呢啲日常嘢都係好重要嘅", "真相唔係你諗嘅咁簡單", "唔好認真先，笑完先講"],
        ["整隊人一齊登場", "兩個人喺夜裡靜靜傾偈", "世界觀設定一閃即逝", "一個離譜畫面炸開晒節奏"],
        ["純粹打得型嘅型", "忍住唔講穿嘅型", "冷靜睇穿晒嘢嘅型", "明明好亂但偏偏有魅力嘅型"],
        ["主角團越大越好玩", "少數幾個人寫深啲最好", "設定企得住比人數重要", "有一個特別勁嘅核心就夠喇"],
        ["城市夜色同霓虹倒影", "夏日小鎮同慢慢嘅日光", "王國、異世界或者失落遺跡", "社團、飲酒或者一班人嘈嘈鬧鬧嘅地方"],
        ["規則清晰、升級過癮", "唔使解釋太多，氣味先對上", "越陌生越好，最好要慢慢拼", "跟現實好近，但可以放大情緒"],
        ["只要權謀同命運夠重，我幾食", "有啲時代感會令我更投入人物", "不如直接上未來或科技設定", "只要夠熱鬧，咩年代都得"],
        ["簡單粗暴，打出嚟就爽", "同日常、工作或關係連埋一齊嘅", "規則多啲，越研究越上頭", "睇落可愛，但其實有啲危險"],
        ["空氣中都係火藥味嘅戰場", "便利店後門、河堤、天台呢類邊角位", "舊街景、夏日祭典、車站、放學之後", "演唱會、比賽場地、台後"],
        ["越逆風越想贏嘅人", "睇落普通，但情緒特別真實嘅人", "好叻，甚至有啲令人驚嘅人", "明明亂嚟，卻總係能夠帶熱全場嘅人"],
        ["變強、硬拆、正面推進", "先理解人，再決定點做", "觀察規則，捉住對方失誤", "先將局面整到更有趣先算"],
        ["只要打起嚟夠燃，缺點慢慢改都得", "只要情緒寫得真，我會一路陪住睇", "只要佢嘅腦回路夠獨特", "只要佢夠好笑，我願意原諒好多嘢"],
        ["數值同實力肉眼可見咁升", "關係慢慢靠近，人都慢慢打開", "認知不斷被推翻嘅成長", "由一班人亂晒嗮到最終有默契"],
        ["我要贏，而且要贏得靚", "我要活成自己受得落嘅樣", "我要搞清楚呢個世界究竟係點", "我要先將今日撐過，順便笑出嚟"],
        ["越高壓越能夠拉著我入去", "輕啲啦，唔好再俾我額外負擔", "要有情緒，但最好係慢慢滲入嚟", "先令我笑，其他之後再講"],
        ["直接用大場面同失去感打過嚟", "用一句說話慢慢卡喺心度", "用設定同意象將人繞入去", "先逗你笑，再突然補你一刀"],
        ["節奏快、打得爽，本身就好輕鬆", "冇乜大事，但氣氛好好", "有啲怪，但怪得好迷人", "人多、話密、亂成一團最好"],
        ["有就有，我甚至會去搵最狠嘅", "可以有，但要有人情味接住我", "我更想睇冷感同距離感，唔一定要虐", "唔得，我想先開心啲"],
        ["令人熱血到即刻想睇下集", "令人靜靜緩好耐", "令人腦子轉個不停", "令人傳訊息畀朋友話『你快啲嚟睇』"],
        ["點到為止，唔好耽誤主線", "有曖昧、拉扯、慢慢靠近最好", "命運感強啲都得，我食大情緒", "戀愛都得，但要夠好笑夠誇張"],
        ["生死與共嘅同伴感", "大人之間說唔破嘅分寸感", "背景差異好大卻慢慢靠近", "明明互相鬥嘴，但越睇越對味"],
        ["只要夠壯闊，我買", "只要情緒夠細膩，我買", "只要結構夠精巧，我買", "如果太正經，不如再瘋啲"],
        ["並肩作戰後，默契對上", "深夜傾計入面一句說唔完嘅說話", "時間、身份或立場帶嚟嘅錯位感", "喺非常荒謬嘅情境下突然好真"],
        ["只要節奏夠猛，可以當梗片睇", "我更鍾意一對一慢慢寫深", "如果可以玩類型梗同結構，我會好有興趣", "我寧願唔要戀愛線，俾我別嘅更刺激"],
        ["一個人戴耳機沉入去", "同固定朋友同步追更", "邊睇邊查資料邊記嘢", "彈幕、截圖、吐槽一樣都唔少得"],
        ["爽感特別直接嘅", "情緒特別對嘅", "設定或演出特別奇嘅", "大家一齊睇會笑到癲嘅"],
        ["有高光我就能當場入坑", "我更在乎關係網慢慢長出嚟", "設定、造型、演出一齊成立先得", "只要角色夠癲夠有梗就得"],
        ["戰力、設定、前後呼應", "人物關係同情緒走向", "意象、鏡頭、主題解讀", "名場面同表情包整理"],
        ["越多人一齊拼圖越有趣", "我想自己慢慢消化", "如果可以越挖越深，我好樂意", "我更想睇一眼就明嘅爽點"],
        ["只要值，我能補一整條時間線", "兩季以內都可以", "最好新手直接入", "如果朋友帶住我睇，都唔係唔得"],
        ["即刻想去補經典", "睇氣氛同題材再決定", "我更想睇呢個時代嘅新嘢", "如果可以一齊睇就更有意思"],
        ["門檻越高我越想試", "我先睇佢係咪情緒對味", "我會先研究佢點解值得", "太攰喇，我想搵輕鬆啲嘅"],
        ["設定、術語、陣營一齊塞俾我", "先俾我人物，再慢慢展開", "只要鏡頭同節奏穩，再複雜都得", "我想先笑出嚟，再考慮其他"],
        ["正好，我鍾意有歷史重量嘅嘢", "只要人物魅力夠，我都係會入", "我會先睇佢嘅世界觀值唔值得投時間", "咁我可能先去搵更好入口嘅"],
        ["大銀幕上一定要夠震撼", "要有餘韻，出咗戲院仲喺心度轉", "要有返到屋企想查資料嘅嘢", "最好係可以同朋友一齊即場聊爆嘅"],
        ["冷光、機械、金屬同都市夜景", "夏天、煙火、風同濕氣", "紅黑撞色、夢境同異常畫面", "鮮艷到好似一場大型慶典"],
        ["想喺大銀幕重新被演出打中", "想將青春同回憶再過一次", "想補當年冇趕上嘅名作", "如果朋友約，我好願意去玩"],
        ["高概念、強意象、好似做夢咁", "一個夏天、一段關係、一次錯過", "一場史詩或者宿命決戰", "一次令人輕鬆行出戲院嘅快樂冒險"],
        ["被音響同畫面狠狠震到", "睇完靜左好耐嘅心情", "旁邊觀眾都係同一瞬間倒吸一口氣", "出嚟就可以開始瘋狂傾梗同名場面"],
        ["好爽，我仲想再睇一場", "我好似被某人理解咗", "呢樣嘢我要諗一陣", "我要將呢段傳俾朋友"],
        ["打戲、演出或高光太密喇", "關係細節第一次根本唔夠睇", "伏筆、結構、意象值得重拼", "我想再睇一次大家一齊發癲"],
        ["推進感：想即刻追下一段故事", "體溫感：角色好似仲活喺我身邊", "懸念感：想繼續解讀佢", "傳播感：想即刻去推坑其他人"],
        ["明明鋪得好大但收得冇力", "情緒好響，但人物冇企住", "設定好多，卻冇真正想法", "太正經喇，連笑點都冇"],
        ["將你整個人點燃", "好似陪伴咁恰好落下來", "令你重新校準自己嘅審美雷達", "成為你同朋友下一輪傾計嘅中心"]
      ]
    }
  };

  QUIZ_TEXT_EXTENSIONS.hx.options = [];
  QUIZ_TEXT_EXTENSIONS.hx.options[4] = [
    "高風險但一旦炸開就可能封神の",
    "看起來最溫柔、還特別耐刷の",
    "設定最複雜、得慢慢拼圖の",
    "最適合邊看邊狂敲盆友的"
  ];
  QUIZ_TEXT_EXTENSIONS.hx.options[20] = [
    "越高壓越能把莪整個拽進去",
    "輕一點，別再給莪額外負擔惹",
    "有情緒阔以，但最好慢慢滲進來",
    "先讓莪笑出聲，再談別的"
  ];
  QUIZ_TEXT_EXTENSIONS.hx.options[24] = [
    "讓人熱血到想立馬點下壹集",
    "讓人安靜緩神超久",
    "讓人腦內轉個卟停",
    "讓人立馬敲盆友說『伱快來看這個』"
  ];
  QUIZ_TEXT_EXTENSIONS.hx.options[30] = [
    "壹個人戴耳機沉到底",
    "跟固定盆友同步追更",
    "邊看邊查資料邊做筆記",
    "彈幕、截圖、吐槽，一個都卟能少"
  ];
  QUIZ_TEXT_EXTENSIONS.hx.options[40] = [
    "大銀幕上壹定得夠炸",
    "要有餘韻，走出戲院還在腦內打轉",
    "得有讓莪回家還想繼續考據の東西",
    "最好能跟盆友壹起當場聊爆"
  ];
  QUIZ_TEXT_EXTENSIONS.hx.options[42] = [
    "想在大銀幕上再被演出迎面打中",
    "想把青春和回憶再過壹遍",
    "想補當年沒趕上の名作",
    "淉真盆友揪莪，莪超願意去補票"
  ];
  QUIZ_TEXT_EXTENSIONS.hx.options[44] = [
    "被音響和畫面迎面爆殺",
    "看完直接沉默超久の後勁",
    "旁邊觀眾也在同一瞬間倒吸壹口氣",
    "出來就能直接開樓狂聊梗和名場面"
  ];
  QUIZ_TEXT_EXTENSIONS.hx.options[49] = [
    "把伱整個人點燃",
    "像陪跑壹樣剛剛好落下來",
    "讓伱重新校準自己の審美雷達",
    "直接變成伱跟盆友下壹輪聊天主樓"
  ];

  Object.keys(QUIZ_TEXT_EXTENSIONS).forEach(function (locale) {
    QUIZ_TEXT[locale] = QUIZ_TEXT_EXTENSIONS[locale];
  });

  function getUi(locale) {
    return UI[locale] || UI.tc;
  }

  function getQuestion(locale, questionIndex, sourceText) {
    var localeText = QUIZ_TEXT[locale];

    if (localeText && localeText.questions) {
      var question = localeText.questions[questionIndex];

      if (question) {
        return question;
      }
    }

    return localizeStyledText(locale, sourceText);
  }

  function getOption(locale, questionIndex, optionIndex, sourceText) {
    var localeText = QUIZ_TEXT[locale];

    if (localeText && localeText.options) {
      var optionSet = localeText.options[questionIndex];
      var optionText = optionSet && optionSet[optionIndex];

      if (optionText) {
        return optionText;
      }
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
