(function () {
  function L(tc, en, ja) {
    return { tc: tc, en: en, ja: ja };
  }

  function O(tc, en, ja, scores) {
    return {
      text: L(tc, en, ja),
      scores: scores
    };
  }

  function Q(id, tc, en, ja, options) {
    return {
      id: id,
      text: L(tc, en, ja),
      options: options
    };
  }

  window.GALGAME_TEST_DATA = {
    publicUrl: "https://exam.kara251.com/tests/galgame-test/",
    questionCount: 15,
    traits: [
      { id: "romance", color: "#E75D7C", label: L("情感拉力", "Emotional pull", "感情の引力"), weight: 1.15 },
      { id: "comedy", color: "#F2A541", label: L("胡鬧能量", "Comic charge", "はしゃぎ度"), weight: 1.0 },
      { id: "mystery", color: "#1D7FA9", label: L("真相執念", "Truth chase", "真相執着"), weight: 1.1 },
      { id: "sci_fi", color: "#3B9BCB", label: L("科幻電波", "Sci-fi signal", "SF電波"), weight: 1.0 },
      { id: "fantasy", color: "#C05A38", label: L("奇幻命運", "Fantasy scale", "幻想運命"), weight: 1.0 },
      { id: "horror", color: "#7E3140", label: L("黑暗承受", "Dark tolerance", "闇耐性"), weight: 1.08 },
      { id: "action", color: "#D06D3A", label: L("勝負推進", "Action drive", "戦闘推進"), weight: 0.95 },
      { id: "tearjerker", color: "#8D6AC8", label: L("餘韻後勁", "Afterglow", "余韻の深さ"), weight: 1.08 },
      { id: "slice_of_life", color: "#4D9E84", label: L("日常陪伴", "Daily warmth", "日常の寄り添い"), weight: 1.0 },
      { id: "gameplay", color: "#5661B3", label: L("系統需求", "System appetite", "システム欲"), weight: 0.88 },
      { id: "adult_risk", color: "#6E475D", label: L("成人耐性", "Adult tolerance", "成人耐性"), weight: 1.12 },
      { id: "entry_barrier", color: "#7B7265", label: L("坑深耐性", "Barrier tolerance", "導入耐性"), weight: 0.9 },
      { id: "length", color: "#98856A", label: L("長篇耐性", "Long-form patience", "長編耐性"), weight: 0.86 }
    ],
    sceneOrder: ["signal", "petal", "cathedral", "forge", "parade", "shore", "archive"],
    sceneMeta: {
      signal: {
        layout: "split",
        label: L("信號雜訊", "Signal Noise", "信号ノイズ"),
        deck: L("實驗室殘響 / 都市冷光 / 時間線焦躁", "Lab static / city glare / timeline anxiety", "実験室の残響 / 都市の冷光 / 時間線の焦燥"),
        note: L("偏科幻、懸疑、資訊差與真相回收。", "Sci-fi, tension, information gaps, and truth-reveal payoffs.", "SF、緊張感、情報差、真相回収の系統。")
      },
      petal: {
        layout: "stack",
        label: L("花窗餘溫", "Petal Afterglow", "花びらの余熱"),
        deck: L("關係慢熱 / 冬夜鋼琴 / 心動後勁", "slow-burn closeness / winter piano / aching warmth", "関係のスローバーン / 冬夜のピアノ / 胸に残る熱"),
        note: L("偏戀愛、情緒拉扯與溫柔的後勁。", "Romance, emotional pull, and the kind of warmth that lingers.", "恋愛、感情の引力、やさしい余韻が強い系統。")
      },
      cathedral: {
        layout: "asym",
        label: L("暗館回聲", "Cathedral Echo", "暗館の残響"),
        deck: L("哥德長廊 / 裂開的信仰 / 黑暗濃度", "gothic corridors / fractured faith / dark pressure", "ゴシック回廊 / ひび割れた信仰 / 闇の圧"),
        note: L("偏獵奇、陰影、成人風險與心理壓迫。", "Grotesque edges, psychological pressure, and heavier risk.", "猟奇、陰影、成人リスク、心理圧迫へ寄る系統。")
      },
      forge: {
        layout: "split",
        label: L("鋼火命運", "Forge of Fate", "鋼火の命運"),
        deck: L("王與劍 / 機甲轟鳴 / 宿命與戰場", "kings and blades / metal thunder / fate and battlefields", "王と剣 / 機甲の轟き / 宿命と戦場"),
        note: L("偏奇幻、戰鬥、世界觀厚度與長線投入。", "Fantasy scale, combat, worldbuilding weight, and long arcs.", "幻想の規模、戦闘、世界の厚み、長い物語へ寄る系統。")
      },
      parade: {
        layout: "asym",
        label: L("糖分暴走", "Sugar Parade", "糖分パレード"),
        deck: L("戀愛玩笑 / 角色火花 / 甜度失控", "romantic chaos / cast chemistry / sweetness at full tilt", "恋愛ギャグ / キャラ火花 / 甘さの暴走"),
        note: L("偏萌系、喜劇、角色互動與低壓快樂。", "Moe energy, comedy, chemistry, and low-pressure fun.", "萌え、コメディ、掛け合い、低圧の楽しさに寄る系統。")
      },
      shore: {
        layout: "stack",
        label: L("海風靜脈", "Shoreline Lull", "潮風の静脈"),
        deck: L("夏光島嶼 / 緩慢呼吸 / 溫柔陪伴", "island light / slow breathing / gentle companionship", "夏光の島 / ゆるやかな呼吸 / やさしい寄り添い"),
        note: L("偏夏日、治癒、日常感與細水長流。", "Summer hush, healing, small daily details, and soft drift.", "夏の静けさ、癒やし、日常、ゆっくり流れる系統。")
      },
      archive: {
        layout: "split",
        label: L("舊卷留聲", "Archive Resonance", "古い頁の残響"),
        deck: L("老派名作 / 文藝氣味 / 經典餘波", "old masters / literary air / classic resonance", "古典の名残 / 文芸の気配 / 名作の残響"),
        note: L("偏經典、音樂感、歷史氣味與慢熱文藝。", "Classics, musical texture, historical air, and literary slow burn.", "古典、音楽感、時代の匂い、文芸寄りのスローバーン。")
      }
    },
    questions: [
      Q(
        "opener",
        "今晚開一部 Gal，你最想先得到什麼？",
        "When you open a VN tonight, what do you want first?",
        "今夜一本開くなら、最初に欲しいのは？",
        [
          O("被一段感情慢慢拖進去", "A slow emotional pull", "感情にゆっくり沈められること", { romance: 3, tearjerker: 2, slice_of_life: 1 }),
          O("先有謎團，再一路拆真相", "A mystery to unspool into truth", "謎から始まり、真相までほどけていく感覚", { mystery: 3, sci_fi: 2 }),
          O("笑點、互動、角色火花夠密", "Dense banter and lively chemistry", "笑いと掛け合いとキャラ火花の密度", { comedy: 3, romance: 2, slice_of_life: 1 }),
          O("世界觀和戰鬥先把我打醒", "A world and a conflict strong enough to wake me up", "世界観と戦いで一気に目を覚まされたい", { fantasy: 3, action: 2, length: 1 })
        ]
      ),
      Q(
        "length",
        "你能接受的篇幅，大概在哪裡？",
        "What sort of runtime feels right to you?",
        "いま心地いいボリューム感は？",
        [
          O("十小時上下，短而準最好", "Around ten hours. Short and sharp.", "十時間前後。短く鋭いほうがいい。", { tearjerker: 1 }),
          O("二十到四十小時，剛好進入狀態", "Twenty to forty hours. Enough to settle in.", "二十から四十時間。ちょうど入り込める長さ。", { length: 2, entry_barrier: 1, mystery: 1 }),
          O("五十小時以上也可以，只要夠值得", "Fifty-plus hours is fine if it pays off.", "五十時間超えでも、報われるなら平気。", { length: 3, entry_barrier: 2, fantasy: 1 }),
          O("越長越好，我想住進那個世界", "The longer the better. I want to live there.", "長ければ長いほどいい。その世界に住みたい。", { length: 4, entry_barrier: 3, slice_of_life: 1 })
        ]
      ),
      Q(
        "content",
        "你對成人內容或重口警告的接受度是？",
        "How much adult or high-risk material are you willing to take?",
        "成人要素や高リスク表現への耐性は？",
        [
          O("盡量全年齡，別太刺激", "Keep it mostly all-ages.", "できるだけ全年齢寄りで。", { slice_of_life: 1 }),
          O("成熟題材可以，但不用太露骨", "Mature themes are fine, just not too explicit.", "成熟テーマはいいけれど露骨すぎないほうがいい。", { adult_risk: 1, mystery: 1, tearjerker: 1 }),
          O("只要作品夠好，我能接受成人版說明", "If the work earns it, I can handle adult-version context.", "作品に必然があるなら成人版の文脈もいける。", { adult_risk: 2, romance: 1, horror: 1 }),
          O("黑暗、獵奇、成人向也可以直接來", "Dark, grotesque, adult-heavy material is fair game.", "暗さも猟奇も成人向けも、そのまま来ていい。", { adult_risk: 4, horror: 3, mystery: 1 })
        ]
      ),
      Q(
        "world",
        "你更想被哪種世界抓住？",
        "What kind of setting do you want to fall into?",
        "どんな世界に一番引き込まれたい？",
        [
          O("雨夜、實驗室、時鐘和螢幕光", "Rainy nights, labs, clocks, and terminal glow", "雨夜、研究室、時計、モニターの光", { sci_fi: 3, mystery: 2 }),
          O("王國、魔術、刀劍與誓言", "Kingdoms, magecraft, steel, and vows", "王国、魔術、剣、誓い", { fantasy: 3, action: 2 }),
          O("教室、海風、小鎮與很慢的下午", "Classrooms, sea breeze, small towns, and slow afternoons", "教室、潮風、小さな町、ゆっくりした午後", { slice_of_life: 3, romance: 1, tearjerker: 1 }),
          O("宅邸、異象、裂開的信仰與陰影", "Manors, anomalies, fractured faith, and shadow", "館、異変、ひび割れた信仰、濃い影", { horror: 3, mystery: 2, tearjerker: 1 })
        ]
      ),
      Q(
        "curve",
        "你最理想的情緒曲線是？",
        "What emotional curve hits hardest for you?",
        "いちばん刺さる感情の流れは？",
        [
          O("前面溫柔，後面一刀見血", "Gentle at first, then one clean wound", "前半はやさしく、後半で一太刀", { romance: 2, tearjerker: 3 }),
          O("先笑到失守，後面再慢慢反噬", "Make me laugh first, then let it come back to bite", "まず笑わせて、あとから効いてくるやつ", { comedy: 3, tearjerker: 1, slice_of_life: 1 }),
          O("一路收緊，最後把真相扣上", "Tighten the screws until the truth clicks into place", "じわじわ締め上げて、最後に真相が噛み合う", { mystery: 3, sci_fi: 1, horror: 1 }),
          O("從頭到尾都在高壓推進", "Keep the pressure on all the way through", "最初から最後まで高圧で押し切ってほしい", { action: 3, fantasy: 1, comedy: 1 })
        ]
      ),
      Q(
        "routes",
        "談到多路線，你最在意什麼？",
        "What matters most in a multi-route structure?",
        "複数ルート物で一番大事なのは？",
        [
          O("每條線都要像一封寫給角色的情書", "Each route should feel like a letter to its character", "各ルートがそのキャラ宛ての手紙みたいであってほしい", { romance: 2, slice_of_life: 1, comedy: 1 }),
          O("一定要有 True Route 把整體扣回來", "A true route has to snap the whole thing together", "全体を回収する真ルートは絶対に欲しい", { mystery: 3, entry_barrier: 1, length: 1 }),
          O("一條主線也行，只要濃度夠高", "One strong line is fine if the density is high enough", "一本強い本線で十分。濃度が高ければいい", { tearjerker: 2, slice_of_life: 1 }),
          O("有解鎖、循環、系統知識更好玩", "Unlocks, loops, and system knowledge make it better", "解放条件やループやシステム理解があると楽しい", { gameplay: 3, mystery: 1, sci_fi: 1 })
        ]
      ),
      Q(
        "cast",
        "你最容易為哪種角色氣質停下來？",
        "Which kind of character aura stops you cold?",
        "どんな人物の気配に一番足が止まる？",
        [
          O("安靜，但總會在你身旁的人", "The quiet one who somehow keeps staying beside you", "静かなのに、気づけばずっとそばにいる人", { romance: 2, slice_of_life: 2, tearjerker: 1 }),
          O("漂亮又危險，像藏著第二層人格", "Beautiful and dangerous, like there's a second self underneath", "美しくて危うく、もう一層奥がありそうな人", { mystery: 2, horror: 1, romance: 1 }),
          O("一開口就讓房間有了活氣的人", "The one whose first line wakes up the room", "ひと言で部屋の空気を動かす人", { comedy: 3, slice_of_life: 1 }),
          O("像是背著命運走來的人", "Someone who looks like they're carrying fate on their back", "運命を背負って歩いてきたみたいな人", { fantasy: 2, action: 2, tearjerker: 1 })
        ]
      ),
      Q(
        "lead",
        "你更想跟著哪種主角走？",
        "What kind of lead do you want to follow?",
        "どんな主人公についていきたい？",
        [
          O("普通，但很可靠", "Ordinary, but dependable", "平凡だけど、妙に頼れる", { slice_of_life: 2, romance: 1, tearjerker: 1 }),
          O("會觀察、會推理、會拆局", "Observant, analytical, good at breaking situations open", "観察して、推理して、局面をほどける", { mystery: 2, gameplay: 1, sci_fi: 1 }),
          O("有傷口，甚至有點危險", "Wounded, maybe even a little dangerous", "傷を抱えていて、少し危うい", { horror: 2, adult_risk: 1, action: 1 }),
          O("很熱、很直，想把夢硬推到終點", "Hot-blooded enough to shove a dream to the finish line", "熱くて真っすぐで、夢を最後まで押し通す", { fantasy: 2, action: 2, comedy: 1 })
        ]
      ),
      Q(
        "system",
        "除了文字本身，你對玩法的需求是？",
        "Outside the text itself, how much gameplay do you want?",
        "文章以外に、どれくらい遊びの手触りが欲しい？",
        [
          O("不用，文本夠強就好", "None. Strong prose is enough.", "いらない。文章が強ければそれでいい。", { tearjerker: 2, romance: 1 }),
          O("有一點小系統、小遊戲就很加分", "Light systems or mini-games are a nice bonus", "軽いシステムやミニゲームがあると嬉しい", { gameplay: 1, slice_of_life: 1, comedy: 1 }),
          O("有戰鬥、管理、構築最好", "Combat, management, or builds make it better", "戦闘や管理やビルドがあると一気に上がる", { gameplay: 3, action: 2, fantasy: 1 }),
          O("探索、分歧、邏輯判斷要有存在感", "Exploration, branching, and logic should matter", "探索や分岐や論理判断がちゃんと効いてほしい", { gameplay: 2, mystery: 2, sci_fi: 1 })
        ]
      ),
      Q(
        "presentation",
        "配樂與演出，你最吃哪一掛？",
        "What kind of music and presentation gets you?",
        "音と演出でいちばん刺さるのは？",
        [
          O("鋼琴、弦樂、落下來的那種痛", "Piano, strings, and pain that settles in slowly", "ピアノと弦、ゆっくり落ちてくる痛み", { tearjerker: 3, romance: 1 }),
          O("副歌一到就想跟著一起衝", "A chorus hit that makes me surge with it", "サビが来た瞬間に一緒に走りたくなるやつ", { action: 2, fantasy: 1, comedy: 1 }),
          O("畫面和鏡頭本身就像魔術", "When the frame itself feels like a spell", "画面やカメラの動き自体が魔法みたいなもの", { fantasy: 2, sci_fi: 1, action: 1 }),
          O("越不安、越詭異，越讓我醒著", "The more uneasy and off it feels, the better", "不穏で、妙で、目が冴える感じがいい", { horror: 2, mystery: 2 })
        ]
      ),
      Q(
        "ending",
        "結局，你最在意哪種收尾？",
        "In the end, what kind of finish matters most?",
        "結局、どんな締め方がいちばん大事？",
        [
          O("感情被好好送到終點，哪怕很痛", "The emotion lands cleanly, even if it hurts", "痛くても、感情がきちんと終点まで届くこと", { romance: 2, tearjerker: 3 }),
          O("所有伏筆真的有回收，腦袋被打開", "The foreshadowing really comes home and blows my mind open", "伏線が本当に回収されて、頭が開くこと", { mystery: 3, sci_fi: 2 }),
          O("留下一種很安靜、很長的後勁", "A long, quiet aftertaste", "長く静かな余韻が残ること", { tearjerker: 2, slice_of_life: 1, horror: 1 }),
          O("就算毀滅一點，只要忘不掉也值", "Even a little devastation is fine if it stays with me", "少し壊れるくらいでも、忘れられないならいい", { horror: 3, adult_risk: 2, action: 1 })
        ]
      ),
      Q(
        "flaw",
        "哪種失誤最會讓你瞬間冷掉？",
        "What mistake cools you off instantly?",
        "どんなミスで一気に冷める？",
        [
          O("角色之間根本沒有化學反應", "There is no chemistry between the characters", "人物同士に化学反応がまるでない", { romance: 2, slice_of_life: 1 }),
          O("設定有洞，越想越站不住", "The setting falls apart the harder you think about it", "設定に穴があって、考えるほど立たない", { mystery: 2, sci_fi: 1, fantasy: 1 }),
          O("前面拖太久，主戲一直不啟動", "It drags too long before the real play begins", "本題に入るまでが長すぎる", { action: 1, mystery: 1, length: 1 }),
          O("只是硬塞黑暗，卻沒有真正的重量", "It turns dark for surface effect without real weight", "表面だけ暗くしていて、本当の重みがない", { slice_of_life: 2, comedy: 1, tearjerker: 1 })
        ]
      ),
      Q(
        "order",
        "第一條線，你通常怎麼開？",
        "How do you usually pick your first route?",
        "最初のルートはどう選ぶ？",
        [
          O("先衝最心動的那個人", "I go straight for the one who hits me first", "いちばん惹かれた相手から行く", { romance: 2, comedy: 1 }),
          O("按推薦順序，該怎麼看就怎麼看", "Recommended order only. I'll respect the structure.", "推奨順を守る。作品の設計を信じたい", { mystery: 2, entry_barrier: 1, length: 1 }),
          O("先挑最短的，把作品脈搏摸熟", "The shortest one first, to learn the pulse of the work", "まずは短いルートで作品の脈をつかむ", { gameplay: 1, slice_of_life: 1 }),
          O("只要最後能把真結局拚出來就行", "Anything is fine if it gets me to the true ending", "最後に真エンドへ届くなら途中は構わない", { length: 3, entry_barrier: 2, mystery: 1 })
        ]
      ),
      Q(
        "stage",
        "如果可以住進一個場景，你選哪裡？",
        "If you could live inside one scene, where would you go?",
        "もし一つの風景に住めるなら、どこへ行く？",
        [
          O("雪夜、鋼琴房、和那些說不出口的記憶", "A snowy night, a piano room, and memories that won't be said out loud", "雪の夜、ピアノ室、言葉にできない記憶のそば", { tearjerker: 2, romance: 1, slice_of_life: 1 }),
          O("海風、遺跡、夏光和很慢的呼吸", "Sea breeze, ruins, summer light, and slow breathing", "潮風、遺跡、夏の光、ゆっくりした呼吸", { slice_of_life: 2, fantasy: 1, tearjerker: 1 }),
          O("霓虹、終端畫面、凌晨三點的城市", "Neon, terminal screens, and a city at three in the morning", "ネオン、端末画面、午前三時の街", { sci_fi: 2, mystery: 1, adult_risk: 1 }),
          O("王座、鋼鐵、誓言與開戰前的靜默", "Thrones, steel, oaths, and the silence before battle", "玉座、鋼、誓い、開戦前の静けさ", { fantasy: 2, action: 2, horror: 1 })
        ]
      ),
      Q(
        "after",
        "打完一部之後，你最常做什麼？",
        "What do you usually do right after finishing one?",
        "一本終えた直後、いちばんやりがちなことは？",
        [
          O("把 OST 單曲循環，讓自己再沉一陣子", "Loop the OST and stay under it a little longer", "OSTを回して、もう少しその底に沈む", { tearjerker: 2, romance: 1 }),
          O("翻 Wiki、攻略帖，把剩下的真相補齊", "Open wikis and guides to close the remaining gaps", "Wikiや考察を漁って、残りの真相を埋める", { mystery: 2, sci_fi: 1, gameplay: 1 }),
          O("立刻找 FD、續作或同社下一部", "Immediately hunt for the FD, sequel, or the studio's next one", "すぐFDや続編や同ブランドの次を探す", { length: 2, entry_barrier: 1, romance: 1 }),
          O("想再往更怪、更黑、更難忘的方向補", "I want to go stranger, darker, and harder to forget", "もっと奇妙で、暗くて、忘れにくい方向へ行きたい", { horror: 2, adult_risk: 1, fantasy: 1 })
        ]
      ),
      Q(
        "bad_end",
        "Bad End 這件事，你通常怎麼看？",
        "How do you usually feel about bad ends?",
        "バッドエンドはどう受け取る？",
        [
          O("偶爾來一下可以，別太多", "A few are fine. Just not too many.", "少しならいいけど、多すぎるのは嫌だ。", { tearjerker: 1, romance: 1 }),
          O("只要回收有價值，我會全收", "If the payoff is real, I will see them all.", "回収の価値があるなら全部見る。", { mystery: 2, entry_barrier: 1, length: 1 }),
          O("越殘酷越能看出作品膽量", "The crueler they are, the more I pay attention.", "残酷なくらいのほうが作品の胆力が見える。", { horror: 3, adult_risk: 2 }),
          O("我更愛那種從絕望翻回來的", "I love the kind that claws back from despair.", "絶望からひっくり返す流れのほうが好きだ。", { action: 2, fantasy: 1, tearjerker: 2 })
        ]
      ),
      Q(
        "romance_density",
        "感情線的理想濃度，你偏哪邊？",
        "What is your ideal romance density?",
        "感情線の理想濃度は？",
        [
          O("主菜就是戀愛，越濃越好", "Romance is the main dish. The thicker, the better.", "主菜は恋愛。濃いほどいい。", { romance: 3, tearjerker: 1 }),
          O("甜跟鬧都要有，會發糖也會打嘴砲", "I want sweetness and banter together.", "甘さも掛け合いも両方ほしい。", { comedy: 3, romance: 2 }),
          O("有就好，別搶走主題", "It can be there, just do not steal the core.", "あっていいけど、主題までは奪わないでほしい。", { mystery: 1, sci_fi: 1, fantasy: 1 }),
          O("沒感情線也行，只要世界夠強", "No romance is fine if the world is strong enough.", "恋愛がなくても、世界が強ければ平気。", { fantasy: 2, action: 1, gameplay: 1 })
        ]
      ),
      Q(
        "old_ui",
        "老畫風、老 UI、老系統，你的容忍度呢？",
        "How much old art, old UI, and old systems can you take?",
        "古い絵柄やUIやシステムへの耐性は？",
        [
          O("最好現代一點，入口舒服最重要", "Keep it modern. A smooth entry matters most.", "できるだけ現代寄りがいい。入りやすさが大事。", { entry_barrier: 0 }),
          O("舊一點沒關係，只要節奏夠好", "Older is fine if the pace still moves.", "少し古くても、テンポが良ければ平気。", { entry_barrier: 1, mystery: 1 }),
          O("經典名作我可以慢慢適應", "I can ease into classics if they are worth it.", "名作ならゆっくり慣れていける。", { entry_barrier: 2, length: 1, tearjerker: 1 }),
          O("只要口碑夠狠，再老我都能硬吃", "If the reputation is strong enough, I can brute-force it.", "評判が本物なら、古さごと押し切れる。", { entry_barrier: 4, length: 2, mystery: 1 })
        ]
      ),
      Q(
        "slow_burn",
        "前期慢熱這件事，你能忍到哪裡？",
        "How much slow-burn setup can you take?",
        "前半のスローバーンにはどこまで付き合える？",
        [
          O("三十分還沒勾住我，我就想跑", "If it has not hooked me in thirty minutes, I drift away.", "三十分で引っかからないと、もう離れそう。", { action: 2, comedy: 1, entry_barrier: 0 }),
          O("一個晚上都在鋪，我還能跟", "I can follow one full evening of setup.", "一晩まるごと仕込みでも、まだついていける。", { romance: 1, mystery: 1 }),
          O("Common Route 長一點也行，先養味道", "A longer common route is fine if it builds flavor.", "共通ルートが長くても、空気が育つなら平気。", { length: 2, entry_barrier: 2, slice_of_life: 1 }),
          O("埋吧，埋越深越好，後面要給我炸開", "Bury the setup as deep as you want. Just make it explode later.", "いくらでも溜めていい。その代わり後半で爆発してほしい。", { length: 4, entry_barrier: 3, mystery: 2 })
        ]
      ),
      Q(
        "heroine",
        "你最容易被哪種女主角氣場攔下來？",
        "What kind of heroine aura stops you first?",
        "どんなヒロインの気配に足が止まる？",
        [
          O("溫柔但有傷，像一碰就會露底", "Warm, but carrying a wound underneath.", "やさしいけれど、触れたら傷が見えそうな人。", { romance: 2, tearjerker: 2 }),
          O("嘴上很兇，實際上火花四射", "Sharp-tongued, but full of sparks.", "口はきついのに、火花が散る人。", { comedy: 3, romance: 1 }),
          O("漂亮得不太對勁，像藏了詛咒", "Beautiful in a way that feels slightly cursed.", "綺麗なのに、どこか呪われていそうな人。", { horror: 2, mystery: 1, romance: 1 }),
          O("像從更大的命運裡走出來的人", "Someone who feels like they stepped out of a larger fate.", "もっと大きな運命の中から歩いてきたような人。", { fantasy: 2, action: 2 })
        ]
      ),
      Q(
        "laugh",
        "笑點方面，你最吃哪一掛？",
        "What kind of comedy do you respond to most?",
        "笑いはどの方向がいちばん刺さる？",
        [
          O("高速嘴砲，講話越密越爽", "Rapid-fire banter. The denser, the better.", "高速の掛け合い。言葉数が多いほど気持ちいい。", { comedy: 3 }),
          O("一個蠢局面越滾越大", "One dumb situation rolling completely out of control.", "一つの馬鹿な状況がどんどん膨らむやつ。", { comedy: 2, slice_of_life: 1 }),
          O("緊繃故事裡突然來一下冷笑話", "A dry joke cutting into a tense story.", "張った物語の中で、急に差し込まれる乾いた冗談。", { mystery: 1, sci_fi: 1, comedy: 1 }),
          O("不用太多笑點，氣氛本身就夠了", "I do not need many jokes if the mood is strong enough.", "笑いは少なくていい。空気そのものが強ければ足りる。", { tearjerker: 1, horror: 1 })
        ]
      ),
      Q(
        "darkness",
        "黑暗這件事，你想怎麼吃？",
        "How do you want darkness to land?",
        "暗さはどういう形で来てほしい？",
        [
          O("不要獵奇，只要那種情緒上的痛", "No grotesque shock. Emotional pain is enough.", "猟奇はいらない。感情の痛さで十分。", { tearjerker: 2, romance: 1 }),
          O("不安和疑心可以多一點", "More unease and suspicion is good.", "不穏さと疑心は多めでもいい。", { mystery: 2, horror: 1 }),
          O("心理崩壞、扭曲視角我可以", "I can handle collapse and warped perspective.", "精神の崩れや歪んだ視点もいける。", { horror: 3, adult_risk: 1 }),
          O("戰場級的悲劇也很能打到我", "War-scale tragedy hits me too.", "戦場規模の悲劇にもかなりやられる。", { action: 1, fantasy: 2, tearjerker: 1 })
        ]
      ),
      Q(
        "rulebook",
        "世界觀方面，你想先拿到什麼？",
        "What do you want first from a world?",
        "世界観で最初にほしいものは？",
        [
          O("規則清楚，魔術或科技得站得住", "Clear rules. Magic or tech has to stand up.", "ルールが明確で、魔術や技術が立っていてほしい。", { mystery: 2, fantasy: 1, sci_fi: 1 }),
          O("先有氣味，再慢慢知道規則也行", "Atmosphere first. The rules can arrive later.", "まず空気があればいい。ルールはあとからでもいい。", { romance: 1, slice_of_life: 1, tearjerker: 1 }),
          O("最好有一套越看越深的機制", "I want systems that deepen the longer I stay.", "見れば見るほど深くなる仕組みがほしい。", { sci_fi: 2, mystery: 2, gameplay: 1 }),
          O("派系、政治、立場衝突要夠厚", "Factions, politics, and clashing positions need weight.", "勢力、政治、立場の衝突に厚みがほしい。", { action: 1, fantasy: 2, length: 1 })
        ]
      ),
      Q(
        "replay",
        "二刷三刷的動力，通常來自哪裡？",
        "What usually drives your replays?",
        "周回する動機はどこから来る？",
        [
          O("想把每個人都補完整", "I want to complete every heroine.", "全員分ちゃんと回収したくなる。", { romance: 3, length: 1 }),
          O("想把每條線的真相拼滿", "I want every route's truth to lock into place.", "各ルートの真相を全部つなげたくなる。", { mystery: 3, gameplay: 1 }),
          O("壞結局、隱藏條件、分岔都想看", "I want the bad ends, the hidden flags, all of it.", "バッドエンドも隠し条件も分岐も全部見たい。", { gameplay: 3, horror: 1 }),
          O("有一條最強的線就夠了", "One supreme route is enough for me.", "一本ぶち抜きで強いルートがあれば十分。", { tearjerker: 2, slice_of_life: 1 })
        ]
      ),
      Q(
        "spoilers",
        "開補之前，你對劇透的底線在哪？",
        "Where is your spoiler line before you start?",
        "始める前のネタバレ許容量は？",
        [
          O("完全不能碰，連 TAG 都別多說", "Do not touch anything. Not even the tags.", "完全に触れないでほしい。タグですら多い。", { mystery: 2, romance: 1 }),
          O("前提和氣味可以，核心反轉不行", "Premise and mood are fine. Core turns are not.", "前提と空気はいい。でも核心の反転は駄目。", { mystery: 1 }),
          O("我會先看門檻、篇幅和風險再決定", "I check barrier, length, and risk first.", "門檻と尺とリスクは先に見ておきたい。", { entry_barrier: 1, length: 1, adult_risk: 1 }),
          O("真結局怎麼開我也想先知道個大概", "I even want a rough sense of how the true route opens.", "真ルートの開き方くらいは先に知っておきたい。", { gameplay: 2, mystery: 1 })
        ]
      ),
      Q(
        "voice",
        "聲優、配音、讀白，哪一塊最重要？",
        "Which part of voice work matters most to you?",
        "声の仕事でいちばん大事なのは？",
        [
          O("角色之間的化學反應", "The chemistry between the characters.", "人物同士の化学反応。", { romance: 2, comedy: 1 }),
          O("高壓場面裡那種真的失控感", "That real loss of control in high-pressure scenes.", "高圧の場面で本当に崩れる感じ。", { horror: 2, action: 1 }),
          O("內心戲要能把人慢慢拖進去", "The inner voice has to pull me under slowly.", "内面の声で、じわじわ沈めてほしい。", { tearjerker: 2, mystery: 1 }),
          O("主題曲、插曲、反覆出現的旋律", "Themes, inserts, and recurring motifs.", "主題歌や挿入歌や反復する旋律。", { tearjerker: 1, slice_of_life: 1, fantasy: 1 })
        ]
      ),
      Q(
        "version",
        "遇到版本差異時，你更傾向怎麼補？",
        "When there are version splits, how do you prefer to enter?",
        "版差がある作品はどう入りたい？",
        [
          O("先給我最好上的全年齡入口", "Give me the easiest all-ages route first.", "まずは入りやすい全年齢ルートをください。", { adult_risk: 0, entry_barrier: 0 }),
          O("版本不同沒關係，只要主體完整", "Version differences are fine if the core survives.", "版が違っても、本体が揃っていればいい。", { adult_risk: 1, mystery: 1 }),
          O("如果差異很關鍵，我可以分開補", "If the differences matter, I can split my way through them.", "差分が重要なら、分けて追ってもいい。", { adult_risk: 2, entry_barrier: 1, romance: 1 }),
          O("原作如果才是本體，直接告訴我", "If the original line is the real face, tell me plainly.", "原作側こそ本体なら、最初からそう言ってほしい。", { adult_risk: 4, horror: 1 })
        ]
      ),
      Q(
        "confession",
        "告白或感情爆點，你最吃哪種情境？",
        "What kind of confession or emotional peak do you want most?",
        "告白や感情の爆発はどんな場面が好き？",
        [
          O("放學後、屋頂上、直球就很好", "After school, on a rooftop, straight to the point.", "放課後、屋上、ど直球でいい。", { romance: 3, slice_of_life: 1 }),
          O("真相揭完那一刻順勢炸開", "Let it explode right after the truth lands.", "真相が落ちた直後に、そのまま炸裂してほしい。", { mystery: 2, romance: 1 }),
          O("生死關頭之後講出口最狠", "It hits hardest after life and death already passed.", "生き死にのあとで口にされるのがいちばん来る。", { action: 2, fantasy: 1, romance: 1 }),
          O("拖很久、傷很深，最後才敢說", "Dragged out, deeply damaged, and only then spoken aloud.", "長く引きずって、深く傷ついたあとでようやく言うやつ。", { tearjerker: 2, horror: 1, adult_risk: 1 })
        ]
      ),
      Q(
        "adults",
        "校園青春和成年後果，你這輪比較偏哪邊？",
        "Between school youth and adult consequences, which side are you leaning toward?",
        "学園青春と大人の後始末、今はどちら寄り？",
        [
          O("校園最好，發光發熱最對味", "School stories still hit hardest for me.", "学園ものがいちばんしっくり来る。", { slice_of_life: 2, comedy: 1, romance: 1 }),
          O("兩邊都行，只要對話夠好", "Either is fine if the dialogue is good.", "どちらでもいい。会話が強ければ十分。", { romance: 1, mystery: 1 }),
          O("成年人做錯事的代價比較狠", "Adult consequences cut harder.", "大人がやらかした時の代償のほうが刺さる。", { adult_risk: 2, romance: 2 }),
          O("年齡不是重點，世界夠大就行", "Age is secondary if the world is big enough.", "年齢は二の次。世界が大きければいい。", { fantasy: 2, action: 1 })
        ]
      ),
      Q(
        "crowd",
        "角色數量方面，你的舒適區在哪？",
        "What is your comfort zone for cast size?",
        "キャラ数の快適圏はどこ？",
        [
          O("兩三個人寫深一點就夠", "Two or three people, written deep, are enough.", "二、三人を深く書いてくれれば足りる。", { slice_of_life: 2, tearjerker: 2 }),
          O("一對主軸加一些支援剛剛好", "One core pair plus support is perfect.", "主軸の二人に少し支えがあればちょうどいい。", { romance: 2, comedy: 1 }),
          O("班級或社團那種一大群才熱鬧", "A whole class or club makes it lively.", "クラスや部活みたいに一団いるほうが楽しい。", { comedy: 2, slice_of_life: 1, romance: 1 }),
          O("派系、陣營、軍勢，越滿越有勁", "Factions, camps, armies. Fill the whole board.", "勢力、陣営、軍勢。盤面が埋まるほど燃える。", { action: 2, fantasy: 2, length: 1 })
        ]
      ),
      Q(
        "guide",
        "攻略、流程圖、存檔大法，你平常怎麼用？",
        "How do you usually use guides, route charts, and saves?",
        "攻略やフローチャートやセーブ運用はどうしてる？",
        [
          O("第一輪一定盲打", "The first run has to be blind.", "初回は絶対に手探りで行く。", { mystery: 1, romance: 1 }),
          O("先盲打，之後再補遺漏", "Blind first, cleanup later.", "まず手探りで、そのあと回収する。", { mystery: 1, gameplay: 1 }),
          O("路線順序我會先查好", "I like knowing the route order before I start.", "ルート順だけは先に見ておきたい。", { entry_barrier: 1, length: 1, mystery: 1 }),
          O("系統型作品我直接開圖表玩", "If it is system-heavy, I open charts from the start.", "システム寄りなら最初から図表を開いて遊ぶ。", { gameplay: 3 })
        ]
      ),
      Q(
        "philosophy",
        "文本開始講哲學、元敘事、作者惡意時，你會？",
        "When the text starts leaning into philosophy, metafiction, or authorial malice, how do you react?",
        "哲学、メタ、作者の悪意が出てきたらどうなる？",
        [
          O("收一點，先把人寫好比較重要", "Pull it back. Writing the people well matters more.", "少し抑えてほしい。まず人物を書いてほしい。", { slice_of_life: 1, romance: 1 }),
          O("有一點香，但別整頁往我臉上砸", "A little is good. Just do not dump pages of it on me.", "少しなら好き。でも顔面に丸ごと叩きつけないでほしい。", { mystery: 1, fantasy: 1 }),
          O("我喜歡文本反過來質問讀者", "I like it when the text starts questioning the reader back.", "テキストが読者に問い返してくるのは好きだ。", { mystery: 2, entry_barrier: 1, length: 1 }),
          O("越怪越好，最好讀完人也有點裂", "The stranger the better. I want to leave slightly altered.", "奇妙なほどいい。読み終わって少し割れていたい。", { horror: 1, mystery: 2, adult_risk: 1, entry_barrier: 1 })
        ]
      ),
      Q(
        "scene_trigger",
        "哪種場景最容易先把你拖進去？",
        "Which setting drags you in first?",
        "どんな風景にまず引きずり込まれる？",
        [
          O("雨打窗、鋼琴聲、說不出口的事", "Rain on glass, piano, and things left unsaid.", "窓の雨、ピアノ、言えないこと。", { tearjerker: 2, romance: 1, entry_barrier: 1 }),
          O("夏光、島路、風一吹就慢下來", "Summer light, island roads, and air that slows everything down.", "夏の光、島の道、風が吹くと時間がゆるむ感じ。", { slice_of_life: 2, tearjerker: 1 }),
          O("霓虹、終端、熬夜到凌晨的城市", "Neon, terminals, and a city awake at three a.m.", "ネオン、端末、午前三時まで起きている街。", { sci_fi: 2, mystery: 1 }),
          O("館、長廊、門後面不知道是什麼", "Manors, corridors, and doors that should stay shut.", "館、長い廊下、開けるべきでない扉。", { horror: 2, mystery: 2 })
        ]
      ),
      Q(
        "cover_check",
        "你掃一眼封面或商店頁，第一眼在抓什麼？",
        "When you glance at a cover or store page, what do you read first?",
        "パッケージやストアページを一瞥した時、最初に何を見る？",
        [
          O("角色表情和兩個人的距離感", "The faces, and the distance between two people.", "表情と、二人の距離感。", { romance: 2, comedy: 1 }),
          O("色調、光、整個氣味對不對", "The color, the light, the whole atmosphere.", "色と光と、全体の匂い。", { tearjerker: 1, slice_of_life: 1, fantasy: 1 }),
          O("標題、副標、世界觀關鍵詞", "The title, subtitle, and world keywords.", "タイトル、副題、世界観のキーワード。", { mystery: 2, sci_fi: 1 }),
          O("系統標籤、篇幅、風險提示", "System tags, runtime, and risk notes.", "システムタグ、尺、リスク表示。", { gameplay: 2, entry_barrier: 1, adult_risk: 1 })
        ]
      ),
      Q(
        "rhythm",
        "整體篇幅節奏，你更想怎麼走？",
        "How do you want the overall runtime to move?",
        "全体の尺とリズムはどう進んでほしい？",
        [
          O("短而狠，一晚上就能進核心", "Short and sharp. One night to the core.", "短く鋭く。一晩で核まで行ってほしい。", { action: 2, length: 0 }),
          O("中篇一條線，慢慢往上爬剛好", "Mid-length with one strong climb is enough.", "中編一本で、じわじわ上がるくらいがちょうどいい。", { mystery: 1, tearjerker: 1, length: 1 }),
          O("長 Common 再切深線，我可以", "A long common route before deeper branches is fine.", "長い共通から深いルートへ入る形でもいける。", { length: 3, romance: 1, entry_barrier: 1 }),
          O("給我一部住很久的超長篇", "Give me a world I can live in for a long time.", "長く住める超長編をくれ。", { length: 4, fantasy: 1, slice_of_life: 1 })
        ]
      ),
      Q(
        "side_cast",
        "配角最理想的功能，你怎麼看？",
        "What is the best use of side characters?",
        "脇役の理想的な役割は？",
        [
          O("把日常撐起來，讓主角有空氣", "Hold up the daily life and give the leads air.", "日常を支えて、主役たちに空気を与えること。", { comedy: 2, slice_of_life: 1 }),
          O("藏線索、丟誤導、讓真相更好玩", "Hide clues, mislead me, and make the truth better.", "手がかりを隠して、ミスリードして、真相を面白くすること。", { mystery: 2 }),
          O("一個導師或對手就能改變整部戲", "A mentor or rival should be able to reshape the whole story.", "師匠やライバル一人で全体が変わること。", { action: 1, fantasy: 1, tearjerker: 1 }),
          O("怪人越多越好，暗故事更需要旁邊的人", "The stranger they are, the better. Dark stories need that pressure.", "変な人が多いほどいい。暗い話ほど脇の圧が要る。", { horror: 1, comedy: 1, mystery: 1 })
        ]
      ),
      Q(
        "climax",
        "高潮你最想被哪一下打中？",
        "What kind of climax do you most want to be hit by?",
        "クライマックスで何を食らいたい？",
        [
          O("一句話講出口，整個人都沒了", "One confession and I am finished.", "一言が出た瞬間に全部持っていかれる。", { romance: 3, tearjerker: 1 }),
          O("最後一塊拼圖卡上去的瞬間", "That last piece of the puzzle locking in place.", "最後の一片がはまる瞬間。", { mystery: 3, sci_fi: 1 }),
          O("理念、刀劍、拳頭同時撞上來", "Ideals, steel, and force hitting at once.", "理念と刃と拳が同時にぶつかる瞬間。", { action: 2, fantasy: 2 }),
          O("只剩一張畫面，但你知道回不去了", "Only one image left, but you know you cannot go back.", "一枚の絵だけが残って、もう戻れないとわかる時。", { horror: 2, adult_risk: 1, tearjerker: 1 })
        ]
      ),
      Q(
        "completion",
        "你對全收集的執念有多高？",
        "How strong is your completionist streak?",
        "全回収への執念はどれくらい強い？",
        [
          O("一條夠狠的主線就能交代我", "One brutal main route can satisfy me.", "一本強い本線があれば納得できる。", { tearjerker: 2 }),
          O("True Route 沒看到，我不會停", "I do not stop before the true route.", "真ルートを見るまで止まらない。", { mystery: 2, length: 1 }),
          O("FD、後日談、補完線都想補", "FDs, after stories, and side closures all matter to me.", "FDも後日談も補完線も見たい。", { romance: 2, slice_of_life: 1, length: 1 }),
          O("隱藏條件、CG、系統成就我全都要", "Hidden conditions, CGs, system trophies. I want everything.", "隠し条件もCGもシステム実績も全部ほしい。", { gameplay: 3, length: 2 })
        ]
      ),
      Q(
        "pain",
        "你更容易被哪種痛法留住？",
        "Which kind of pain stays with you most?",
        "どんな痛みがいちばん残る？",
        [
          O("錯過、別離、那種很靜的痛", "Missed chances and quiet partings.", "すれ違いと別れみたいな静かな痛み。", { tearjerker: 3, romance: 1 }),
          O("世界和個人只能二選一的痛", "Pain born from choosing between the world and a person.", "世界と個人を二者択一する痛み。", { fantasy: 2, tearjerker: 1, action: 1 }),
          O("身體或認知被污染的痛", "Pain from a body or mind getting contaminated.", "身体や認識が汚染されていく痛み。", { horror: 3, adult_risk: 1 }),
          O("記憶、時間、身份被切開的痛", "Pain from memory, time, or identity being split open.", "記憶や時間や自己が切り裂かれる痛み。", { mystery: 2, sci_fi: 2, tearjerker: 1 })
        ]
      ),
      Q(
        "classics",
        "經典老牌作品，你這輪願意補到什麼程度？",
        "How ready are you to dive into older classics right now?",
        "古典寄りの名作には今どれくらい潜れる？",
        [
          O("先不要，我想先玩當代入口", "Not yet. I want modern entry points first.", "今はいい。まずは現代の入口から入りたい。", { entry_barrier: 0 }),
          O("重製版、高清版我很歡迎", "Remasters and HD versions are ideal.", "リマスターやHD版ならかなり嬉しい。", { entry_barrier: 1 }),
          O("老畫風沒關係，名作就是名作", "Older art is fine if the work is truly major.", "古い絵でも名作なら十分行ける。", { entry_barrier: 2, length: 1, tearjerker: 1 }),
          O("只要後勁夠狠，我可以直接跳進深坑", "If the afterglow is strong enough, I can jump straight into the deep end.", "余韻が本物なら、そのまま深いところへ飛び込める。", { entry_barrier: 4, length: 2, mystery: 1 })
        ]
      ),
      Q(
        "city",
        "這輪你更想去哪一種地方？",
        "Where do you want to go this round?",
        "今はどんな場所へ行きたい？",
        [
          O("雨城、犯罪、灰色霓虹", "Rainy cities, crime, and gray neon.", "雨の街、犯罪、灰色のネオン。", { mystery: 2, adult_risk: 1 }),
          O("深夜都市、終端、時間線焦躁", "Midnight cities, terminals, and timeline pressure.", "深夜都市、端末、時間線の焦り。", { sci_fi: 2, mystery: 1 }),
          O("海風、鄉鎮、樹影和長日照", "Sea wind, small towns, and long daylight.", "潮風、町、木漏れ日、長い昼。", { slice_of_life: 2, fantasy: 1 }),
          O("王都、戰場、王座和誓言", "Capitals, battlefields, thrones, and vows.", "王都、戦場、玉座、誓い。", { fantasy: 2, action: 2 })
        ]
      ),
      Q(
        "club",
        "哪種『據點』最像你想久待的地方？",
        "What kind of base feels like somewhere you want to stay?",
        "長く居座りたくなる『拠点』はどれ？",
        [
          O("音樂室、練團房、舞台後台", "A music room, practice room, or backstage.", "音楽室、練習室、舞台裏。", { romance: 1, tearjerker: 2 }),
          O("學生會、社辦、大家一直亂聊的房間", "A student room where everyone keeps talking.", "生徒会室や部室みたいに、ずっと誰かが喋っている場所。", { comedy: 2, romance: 1 }),
          O("研究室、工房、作戰桌旁", "A lab, workshop, or operation table.", "研究室、工房、作戦卓のそば。", { sci_fi: 1, mystery: 1, gameplay: 1 }),
          O("書庫、地下室、鎖著門的書房", "A library, basement, or locked study.", "書庫、地下室、鍵のかかった書斎。", { horror: 1, mystery: 2 })
        ]
      ),
      Q(
        "distance",
        "關係推進的距離感，你這輪更想怎麼拿？",
        "What relationship distance feels right this round?",
        "関係の距離感は今どんな取り方がいい？",
        [
          O("快一點，交往後的後果也很好看", "Fast. I want to see what happens after they get together.", "速めがいい。付き合った後の後始末まで見たい。", { adult_risk: 2, romance: 2 }),
          O("慢慢燒，最後才點起來最香", "Slow-burn is best when it lights at the end.", "ゆっくり燃えて、最後に灯るのがいちばんいい。", { romance: 2, tearjerker: 1 }),
          O("一起解謎、一起做事，感情順便長出來", "Let them solve things together and grow closer on the way.", "一緒に何かを解きながら、そのついでに近づいてほしい。", { mystery: 2, romance: 1 }),
          O("先一起活過地獄，再談感情", "Let them survive hell together first.", "まず地獄を一緒に抜けてから感情の話をしてほしい。", { action: 2, fantasy: 1, horror: 1 })
        ]
      ),
      Q(
        "secret",
        "什麼類型的秘密最容易讓你一路追到底？",
        "What kind of secret keeps you chasing all the way down?",
        "どんな秘密なら最後まで追いかけたくなる？",
        [
          O("角色的真身份或隱藏過去", "A hidden identity or past buried inside a character.", "人物の正体や隠された過去。", { mystery: 2, romance: 1 }),
          O("整個世界的規則其實不是你想的那樣", "The world's rules being different from what you thought.", "世界のルール自体が思っていたものと違うこと。", { sci_fi: 1, fantasy: 1, mystery: 2 }),
          O("某段關係其實早就被命運綁好了", "A relationship that was tied together long before it looked like it.", "ある関係がずっと前から運命で結ばれていたこと。", { tearjerker: 2, romance: 1 }),
          O("主角本人其實就有問題", "The lead himself being the problem.", "主人公本人のほうに問題があること。", { horror: 1, adult_risk: 1, mystery: 1 })
        ]
      ),
      Q(
        "route_lock",
        "鎖線、真線、隱藏線，你通常怎麼看？",
        "How do you feel about locked routes and true routes?",
        "ロックルートや真ルートってどう思う？",
        [
          O("最好別鎖，我想自由挑人", "Preferably do not lock me. I want freedom.", "できれば縛らないでほしい。自由に選びたい。", { romance: 2 }),
          O("鎖一點沒關係，節奏更完整", "Some locking is fine if it helps the pace.", "少しロックがあっても、流れが良くなるなら平気。", { mystery: 2, entry_barrier: 1 }),
          O("最好讓我靠系統知識自己拆出來", "I like earning them through system knowledge.", "システム理解で自分でこじ開けたい。", { gameplay: 2, mystery: 1 }),
          O("只要最後那條真線夠狠，怎樣都行", "Anything is fine if the final line destroys me properly.", "最後の真ルートが強ければ、そこへ至る形はなんでもいい。", { length: 2, horror: 1, mystery: 1 })
        ]
      ),
      Q(
        "opening",
        "作品開頭最想怎麼抓你？",
        "How do you want a work to seize you at the opening?",
        "冒頭ではどう掴まれたい？",
        [
          O("先丟一個災難或異常過來", "Throw me into disaster or anomaly immediately.", "まず災難か異常を投げつけてほしい。", { action: 2, mystery: 1 }),
          O("先日常、先聊天，讓人慢慢貼上去", "Start with everyday talk and let me settle into it.", "まず日常と会話で、ゆっくり貼りつかせてほしい。", { comedy: 2, slice_of_life: 1 }),
          O("先用一個夢、預言或怪畫面打我", "Hit me with a dream, prophecy, or uncanny image.", "夢や予言や奇妙な画で最初に殴ってほしい。", { fantasy: 2, horror: 1 }),
          O("先給我一條規則，之後全部圍著它炸", "Give me one precise rule and build everything around it.", "最初に一つ明確なルールを置いて、その周りで全部爆発してほしい。", { sci_fi: 1, mystery: 2, gameplay: 1 })
        ]
      ),
      Q(
        "tempo",
        "你更喜歡哪種敘事手感？",
        "Which narrative texture do you prefer?",
        "どんな語りの手触りが好き？",
        [
          O("剪得快、推得狠、場景一直換", "Fast cuts, hard pushes, constant movement.", "切り替えが速くて、強く押してきて、場面がどんどん変わる感じ。", { action: 2, comedy: 1 }),
          O("對話很強，像一直在打心理戰", "Dialogue-heavy, like a constant mental duel.", "会話が強くて、ずっと心理戦をしている感じ。", { mystery: 2, romance: 1 }),
          O("獨白很多，慢慢往人心裡鑽", "Lots of inner voice, slowly drilling inward.", "独白が多くて、じわじわ内側へ潜っていく感じ。", { tearjerker: 2, mystery: 1, length: 1 }),
          O("日常重複裡一直出現細小差分", "Tiny differences emerging inside repeated daily loops.", "繰り返す日常の中で、小さな差分が増えていく感じ。", { slice_of_life: 2, sci_fi: 1, mystery: 1 })
        ]
      ),
      Q(
        "quiet_scene",
        "安靜場景裡，你最常被哪一種畫面收走？",
        "In a quiet scene, what image usually takes you away?",
        "静かな場面で、どんな絵に持っていかれやすい？",
        [
          O("便利店、深夜散步、兩個人慢慢講話", "A convenience store, a late walk, two people speaking slowly.", "コンビニ、夜の散歩、二人がゆっくり話す場面。", { slice_of_life: 2, romance: 1 }),
          O("空教室、冬傍晚、快要說出口的話", "An empty classroom, winter dusk, words about to spill.", "空の教室、冬の夕方、言いかけの言葉。", { tearjerker: 2, romance: 1 }),
          O("月台、城市、列車還沒進站前那幾秒", "A platform, a city, the seconds before the train arrives.", "ホーム、街、電車が来る前の数秒。", { mystery: 1, sci_fi: 1, tearjerker: 1 }),
          O("古屋、神殿、沒人說話但東西都在看你", "An old house or temple where silence itself is watching you.", "古い家や神殿で、沈黙そのものに見られている感じ。", { fantasy: 1, horror: 2 })
        ]
      ),
      Q(
        "free_weekend",
        "給你一個完整週末，你最想怎麼補？",
        "Give you a full weekend. How do you want to spend it?",
        "丸ごとの週末があったら、どう補いたい？",
        [
          O("一口氣打完一部短而完整的", "Finish one short, complete work in one run.", "短くて完結した一本を一気に終えたい。", { length: 1, tearjerker: 1 }),
          O("先摸兩三條線，確認自己最吃哪邊", "Sample a few routes and find my lane first.", "二、三ルート触って、自分がどこに刺さるか確かめたい。", { romance: 1, comedy: 1, length: 2 }),
          O("直接馬拉松長篇，別叫我出門", "Marathon a long work and do not call me outside.", "長編をそのままマラソンしたい。外には呼ばないでほしい。", { length: 3, mystery: 1, entry_barrier: 1 }),
          O("學系統、做選擇、順便打出一個盤面", "Learn the systems, make choices, and build a whole board.", "システムを覚えて、選択して、盤面まで作りたい。", { gameplay: 3, action: 1 })
        ]
      ),
      Q(
        "sequel",
        "現在只准你先開一坑，你會怎麼選？",
        "If you are only allowed to open one pit right now, how do you choose?",
        "今ひとつだけ坑を開けるなら、どう選ぶ？",
        [
          O("先清一部名聲太大的經典", "Clear a towering classic first.", "評判が大きすぎる古典から先に片づける。", { entry_barrier: 2, tearjerker: 1 }),
          O("先開重製版，手感舒服最重要", "Start with the remaster. Comfort matters.", "まずはリマスター。手触りの良さが大事。", { entry_barrier: 0, fantasy: 1 }),
          O("先跳一部所有人都說後勁很狠的", "Jump into the one everyone says leaves the nastiest afterglow.", "とにかく余韻が強いと評判の一本へ飛び込む。", { entry_barrier: 3, mystery: 2 }),
          O("先碰最危險、最怪、最忘不掉的", "Touch the most dangerous and unforgettable one first.", "いちばん危うくて、奇妙で、忘れにくいものから触る。", { adult_risk: 2, horror: 2 })
        ]
      ),
      Q(
        "route_map",
        "面對一張分歧很密的路線圖，你第一反應是？",
        "When a route chart gets dense, what is your first reaction?",
        "分岐だらけのルート図を見た時、最初にどう感じる？",
        [
          O("好耶，我想自己拆出一條最順的線", "Good. I want to carve out the cleanest route myself.", "いいね。自分でいちばんきれいな道を割り出したい。", { gameplay: 3, mystery: 1 }),
          O("可以，但最好別破壞感情流", "Fine, as long as it does not break the emotional flow.", "いいけれど、感情の流れは壊さないでほしい。", { romance: 2, gameplay: 1 }),
          O("別太複雜，我想先被故事帶走", "Not too dense. I want the story to carry me first.", "複雑すぎないでほしい。まずは物語に運ばれたい。", { slice_of_life: 1, tearjerker: 1 }),
          O("越像迷宮越好，走錯也算樂趣", "The more labyrinthine, the better. Even mistakes are part of the fun.", "迷宮みたいなほど嬉しい。迷ってもそれが面白い。", { gameplay: 2, horror: 1, mystery: 1 })
        ]
      ),
      Q(
        "save_slots",
        "你平常怎麼管理存檔？",
        "How do you usually manage save files?",
        "セーブ枠はふだんどう使う？",
        [
          O("想到哪存到哪，感覺對了就行", "I save on instinct. If it feels right, it is enough.", "感覚で置いていく。しっくり来れば十分。", { slice_of_life: 1, romance: 1 }),
          O("關鍵選項前一定留檔", "I always keep a slot before key choices.", "重要な選択肢の前には必ず残す。", { gameplay: 2, mystery: 1 }),
          O("會分類命名，像在做自己的攻略", "I label and sort them like a guide of my own.", "名前を付けて整理する。自分用の攻略みたいに。", { gameplay: 3, entry_barrier: 1 }),
          O("如果作品很壞，我會存滿整頁防它", "If a work looks mean, I fill whole pages just in case.", "作品が意地悪そうなら、守りで枠を埋めていく。", { horror: 1, gameplay: 2, adult_risk: 1 })
        ]
      ),
      Q(
        "ending_aftertaste",
        "一部作品結束後，你最想留下哪種餘味？",
        "What kind of aftertaste do you want a finished work to leave behind?",
        "一本終わったあと、どんな余韻がいちばん欲しい？",
        [
          O("像一封回不去的情書", "Like a love letter I can never return to.", "もう戻れない恋文みたいな余韻。", { romance: 3, tearjerker: 2 }),
          O("像謎底落下後的長長回音", "Like a long echo after the final answer lands.", "答えが落ちたあとに長く残る反響。", { mystery: 3, sci_fi: 1 }),
          O("像夏天過完，卻還捨不得關窗", "Like the end of summer, with the window still open.", "夏が終わったのに、まだ窓を閉めたくない感じ。", { slice_of_life: 2, tearjerker: 1, romance: 1 }),
          O("像一場惡夢醒了，但身體還記得", "Like waking from a nightmare my body still remembers.", "悪夢から醒めても、体だけがまだ覚えている感じ。", { horror: 3, adult_risk: 1 })
        ]
      ),
      Q(
        "heroine_gap",
        "哪種『反差』最容易讓你中招？",
        "What kind of gap is most dangerous for you?",
        "どんな『ギャップ』にいちばん弱い？",
        [
          O("平常很穩，偶爾才露出脆弱", "Someone steady who only rarely shows fragility.", "普段は強いのに、たまにだけ脆さが見える人。", { romance: 2, tearjerker: 1 }),
          O("嘴很壞，但關鍵時刻最可靠", "Sharp-tongued, but the most reliable when it matters.", "口は悪いのに、肝心な場面でいちばん頼れる人。", { comedy: 2, romance: 1, action: 1 }),
          O("看起來像光，裡面其實有洞", "Someone bright on the surface with a void underneath.", "光みたいに見えて、内側に穴がある人。", { tearjerker: 1, mystery: 1, horror: 1 }),
          O("像是人，卻又有哪裡不完全像人", "Someone human, but not entirely human.", "人の形をしているのに、どこか人でない人。", { fantasy: 1, sci_fi: 1, horror: 1 })
        ]
      ),
      Q(
        "prose_density",
        "文字密度方面，你這輪想吃哪一種？",
        "What kind of prose density do you want this round?",
        "文章の密度は今どれくらい欲しい？",
        [
          O("清透一點，讀起來要很順", "Clear and light. I want it to flow.", "透き通っていて、するすると読めるほうがいい。", { slice_of_life: 2, comedy: 1 }),
          O("有文氣，但別滿到喘不過氣", "Literary is good, but do not suffocate me with it.", "文っぽさはほしい。でも息苦しいほどは要らない。", { tearjerker: 1, romance: 1, mystery: 1 }),
          O("越寫越深越好，我願意慢慢咀嚼", "The denser it gets, the better. I will chew on it slowly.", "濃ければ濃いほどいい。ゆっくり噛みしめたい。", { length: 2, mystery: 1, tearjerker: 1 }),
          O("最好密到能把人整個包起來", "Dense enough to wrap around me completely.", "人を丸ごと包むくらい濃くていい。", { horror: 1, length: 2, fantasy: 1 })
        ]
      ),
      Q(
        "title_logo",
        "你看見作品標題或 Logo，最容易被哪種感覺勾住？",
        "When you see a title or logo, what kind of feeling hooks you first?",
        "タイトルやロゴを見た時、どんな気配にいちばん惹かれる？",
        [
          O("安靜、留白很多，像把情緒藏住", "Quiet and spacious, like feeling held back on purpose.", "静かで余白が多くて、感情を隠している感じ。", { tearjerker: 2, romance: 1 }),
          O("筆鋒很硬，像真相已經在裡面", "Hard-edged, like the truth is already hiding inside.", "線が硬くて、もう真相が潜んでいそうな感じ。", { mystery: 2, sci_fi: 1 }),
          O("華麗、亮、角色感直接撲上來", "Bright, ornate, and immediately character-driven.", "華やかで明るくて、キャラの気配が一気に来る感じ。", { comedy: 2, romance: 1, fantasy: 1 }),
          O("不祥、怪、看一眼就不太對勁", "Off, uncanny, a little wrong at first sight.", "不穏で妙で、一目で少しおかしい感じ。", { horror: 2, adult_risk: 1 })
        ]
      ),
      Q(
        "rain_or_sun",
        "這輪你更想把自己交給哪種天氣？",
        "What weather do you want to give yourself to this round?",
        "今はどんな天気に身を預けたい？",
        [
          O("雨。窗邊、傘、和沒說出口的句子", "Rain. Windows, umbrellas, and unfinished lines.", "雨。窓際、傘、言い切れなかった言葉。", { romance: 2, tearjerker: 1, mystery: 1 }),
          O("晴天。海風、白光、像會開始的東西", "Clear skies. Sea wind, white light, and things about to begin.", "晴れ。潮風、白い光、何かが始まりそうな空気。", { slice_of_life: 2, fantasy: 1 }),
          O("雷夜。電流感越強越好", "A storm night. The more charge in the air, the better.", "雷の夜。空気に電気が走るほどいい。", { sci_fi: 2, action: 1, mystery: 1 }),
          O("陰天。像世界本來就不該那麼亮", "A gray sky. Like the world was never meant to be bright.", "曇り空。世界は最初からそんなに明るくない感じ。", { horror: 2, adult_risk: 1, tearjerker: 1 })
        ]
      ),
      Q(
        "adult_patch",
        "如果作品有額外補丁或版本補完，你的態度是？",
        "If a work has a patch or version-restore path, how do you feel about it?",
        "補丁や版補完がある作品にはどう向き合う？",
        [
          O("我偏向直接玩最方便的版本", "I lean toward the most convenient version.", "できるだけ手軽な版から入りたい。", { entry_barrier: 0, adult_risk: 0 }),
          O("只要主體完整，補不補都行", "If the core survives, patching is optional.", "本体が通るなら、補完はあってもなくてもいい。", { adult_risk: 1, entry_barrier: 1 }),
          O("差異如果會改氣味，我願意補", "If the difference changes the tone, I will patch it.", "差分で空気が変わるなら、補う価値がある。", { adult_risk: 2, romance: 1, mystery: 1 }),
          O("我想看最接近原貌的版本", "I want the version closest to the original face.", "できるだけ原形に近い版で触れたい。", { adult_risk: 3, entry_barrier: 2, mystery: 1 })
        ]
      ),
      Q(
        "route_unlock",
        "隱藏線或真線，怎樣開出來最讓你滿意？",
        "What is the most satisfying way for a hidden or true route to unlock?",
        "隠しルートや真ルートは、どう開くのがいちばん気持ちいい？",
        [
          O("情緒自然推到那裡，不要太像作業", "Let emotion carry me there. Do not make it feel like chores.", "感情の流れで自然に届いてほしい。作業っぽすぎるのは嫌だ。", { romance: 2, tearjerker: 1 }),
          O("靠觀察與伏筆理解自己打開", "I want to unlock it through observation and understanding.", "伏線や観察で、自分でこじ開けたい。", { mystery: 3, gameplay: 1 }),
          O("靠一點系統條件也沒關係", "A few system conditions are fine.", "多少のシステム条件があっても平気。", { gameplay: 2, entry_barrier: 1 }),
          O("最好像闖禁區，打開那刻就知道不一樣", "I want it to feel forbidden the moment it opens.", "開いた瞬間に『ここから違う』とわかる禁域感がほしい。", { horror: 2, mystery: 1, adult_risk: 1 })
        ]
      ),
      Q(
        "house_rules",
        "如果故事有一個長期據點，你最在意它什麼？",
        "If the story has a long-term base, what matters most about it?",
        "物語に長く滞在する拠点があるなら、何をいちばん大事にする？",
        [
          O("人一走進去，日常就會自己長出來", "The kind of place where daily life grows by itself.", "入った瞬間に日常が自然に育ち始める場所。", { slice_of_life: 2, comedy: 1 }),
          O("它要能藏秘密，甚至藏第二層規則", "It should be able to hide secrets and second rules.", "秘密や第二のルールを隠していそうな場所。", { mystery: 2, horror: 1 }),
          O("它像舞台，隨時能切進高潮", "It should feel like a stage ready for climaxes.", "いつでも見せ場に切り替われる舞台感がほしい。", { action: 2, fantasy: 1 }),
          O("它本身就像一個會呼吸的角色", "The place itself should breathe like a character.", "場所そのものが息をするキャラみたいであってほしい。", { tearjerker: 1, fantasy: 1, slice_of_life: 1 })
        ]
      ),
      Q(
        "opening_movie",
        "OP Movie 最容易用哪種方式把你收走？",
        "What kind of opening movie steals you fastest?",
        "OPムービーはどんな作りだと一気に持っていかれる？",
        [
          O("角色表情一閃一閃，像感情先偷跑", "Flashes of faces that make the feelings arrive first.", "表情の断片が走って、感情だけ先に届く感じ。", { romance: 2, tearjerker: 1 }),
          O("節奏很準，畫面像在拼一個謎", "Tight rhythm, with frames assembling a puzzle.", "テンポが鋭くて、画面が謎を組み立てていく感じ。", { mystery: 2, sci_fi: 1 }),
          O("色彩爆開，角色一出就知道誰會很鬧", "Color exploding, with the cast telegraphing instant chemistry.", "色が弾けて、出た瞬間に掛け合いの強さがわかる感じ。", { comedy: 2, romance: 1 }),
          O("只要最後那一秒有不祥感，我就會記住", "If the final second feels wrong, I remember it.", "最後の一秒に不穏さがあれば、それだけで残る。", { horror: 2, adult_risk: 1 })
        ]
      ),
      Q(
        "point_of_view",
        "你比較喜歡哪種視角手感？",
        "What kind of point-of-view texture do you prefer?",
        "視点の手触りはどれが好き？",
        [
          O("主角很近，心跳和猶豫都要聽得到", "Stay close enough to hear the heartbeat and hesitation.", "主人公の鼓動や迷いまで聞こえる近さがいい。", { romance: 2, tearjerker: 1 }),
          O("有一點距離，讓我自己拼真相", "Keep some distance so I can piece things together myself.", "少し距離を置いて、自分で真相を組み立てたい。", { mystery: 2, sci_fi: 1 }),
          O("視角能偶爾切換，角色群像更有勁", "Some switching helps the ensemble breathe.", "ときどき視点が切り替わるほうが群像に厚みが出る。", { fantasy: 1, action: 1, comedy: 1 }),
          O("不可靠視角最好，最好連我都一起被騙", "An unreliable perspective. Deceive me too.", "信頼できない視点がいい。読んでいる私ごと騙してほしい。", { horror: 2, mystery: 2 })
        ]
      ),
      Q(
        "remake_bias",
        "同一作品有原版與重製版，你這輪更偏哪種？",
        "When both original and remaster exist, which side do you lean toward right now?",
        "同じ作品に原版とリメイクがあるなら、今はどちら寄り？",
        [
          O("重製版。先把入口弄舒服比較重要", "The remaster. A comfortable entry matters most.", "リメイク版。まず入り口の良さを優先したい。", { entry_barrier: 0 }),
          O("先重製，再決定要不要回原版", "Remaster first, then decide if the original is worth circling back for.", "まずリメイクに触れて、必要なら原版へ戻る。", { entry_barrier: 1, slice_of_life: 1 }),
          O("如果原版氣味更重，我會偏原版", "If the original breathes harder, I will lean original.", "原版の匂いのほうが濃いなら、そちらへ寄る。", { entry_barrier: 2, tearjerker: 1, mystery: 1 }),
          O("我想直接看最接近當年衝擊的那個", "I want the version closest to the original shockwave.", "当時の衝撃にいちばん近い版をそのまま浴びたい。", { entry_barrier: 3, length: 1, adult_risk: 1 })
        ]
      ),
      Q(
        "favorite_meltdown",
        "角色崩潰場景，你最容易被哪種處理打中？",
        "What kind of breakdown scene hits you hardest?",
        "人物の崩れ方は、どんな演出だといちばん来る？",
        [
          O("很克制，只是聲音突然低下去", "Restrained enough that the voice simply drops.", "抑えたまま、声だけが少し落ちる感じ。", { tearjerker: 2, romance: 1 }),
          O("講到一半停住，比哭出來更痛", "Stopping mid-sentence hurts more than crying.", "言い切れずに止まるほうが、泣くより痛い。", { tearjerker: 2, mystery: 1 }),
          O("表面還在撐，畫面其實已經裂了", "They are still holding the surface while the frame itself cracks.", "本人は保っているのに、画面のほうが先に割れる感じ。", { sci_fi: 1, horror: 1, mystery: 1 }),
          O("直接失控，漂亮地壞給你看", "A full, beautiful loss of control.", "きれいに壊れていくところまで見せてほしい。", { horror: 2, adult_risk: 1, action: 1 })
        ]
      ),
      Q(
        "bridge_scene",
        "大事件與大事件之間，你最想要哪種過橋場景？",
        "Between major beats, what kind of bridge scene do you want most?",
        "大きな山場と山場のあいだ、どんな橋渡しがいちばん欲しい？",
        [
          O("兩個人安靜走一段路", "Two people walking quietly for a while.", "二人で静かに少し歩く場面。", { romance: 2, slice_of_life: 1 }),
          O("把零碎線索悄悄對齊", "A scene that quietly aligns scattered clues.", "散らばった手がかりが静かに揃う場面。", { mystery: 2, sci_fi: 1 }),
          O("用一點笑話把壓力先鬆開", "A joke or two to loosen the pressure first.", "軽い笑いで、いったん圧をゆるめてほしい。", { comedy: 2, slice_of_life: 1 }),
          O("短，但能讓命運感繼續發熱", "Short, but still glowing with fate.", "短くても、運命の熱だけは絶やさないでほしい。", { fantasy: 2, action: 1 })
        ]
      ),
      Q(
        "route_commit",
        "如果一條個別線普通，但整體很強，你會？",
        "If one route is only average but the whole work is strong, what do you do?",
        "個別ルートが普通でも、全体が強い作品ならどうする？",
        [
          O("可以接受，整體完成度更重要", "That is fine. Cohesion matters more.", "平気。全体の完成度のほうが大事。", { mystery: 2, length: 1 }),
          O("我要至少有一條線能讓我真心記住", "I still need at least one route that stays with me.", "それでも一本は、本気で残るルートが欲しい。", { romance: 2, tearjerker: 1 }),
          O("如果世界觀夠厚，我會繼續走", "If the world is thick enough, I keep going.", "世界が厚ければ、そのまま進める。", { fantasy: 2, action: 1, length: 1 }),
          O("不行，個別線弱會讓我整體掉感", "No. A weak route drags down the whole feeling for me.", "駄目。個別ルートが弱いと全体まで冷める。", { slice_of_life: 1, romance: 1 })
        ]
      ),
      Q(
        "ensemble_heat",
        "群像互動裡，你最想看見哪種熱度？",
        "Inside ensemble scenes, what kind of heat do you want most?",
        "群像の掛け合いでは、どんな熱がいちばん欲しい？",
        [
          O("大家講話很熟，像多年老朋友", "A cast that sounds lived-in, like old friends.", "長年の友人みたいに、会話が自然に噛み合う感じ。", { comedy: 2, slice_of_life: 1 }),
          O("每個人都有心事，對白裡一直在藏刀", "Everyone is hiding something, and the dialogue keeps the knives sheathed.", "全員が何かを隠していて、台詞の裏に刃がある感じ。", { mystery: 2, horror: 1 }),
          O("同一個目標把所有人暫時拉成一隊", "A shared goal pulling everyone into one line for a while.", "同じ目的で、しばらく全員が一列に並ぶ感じ。", { action: 2, fantasy: 1 }),
          O("就算在鬧，也知道某天一定會散", "Even while laughing, you can already tell it will end someday.", "笑っていても、いつか散ると最初からわかっている感じ。", { tearjerker: 2, romance: 1 })
        ]
      ),
      Q(
        "cg_hunt",
        "CG 或差分回收，你最在意哪種滿足感？",
        "When collecting CGs or variations, what satisfaction matters most?",
        "CGや差分回収で、どんな満足感がいちばん大きい？",
        [
          O("我想把喜歡的角色看完整", "I want to complete the character I love.", "好きなキャラを最後まで見届けたい。", { romance: 2, length: 1 }),
          O("每張圖最好都帶一塊真相", "Ideally each image carries a piece of the truth.", "一枚ごとに真相の欠片が乗っていてほしい。", { mystery: 2, gameplay: 1 }),
          O("日常小差分很多，也很幸福", "A lot of small daily variations are already bliss.", "日常の細かな差分が多いだけでもうれしい。", { slice_of_life: 2, comedy: 1 }),
          O("我想收集所有不該看的畫面", "I want every image I probably should not be seeing.", "見てはいけない絵ほど、全部拾いたくなる。", { horror: 1, adult_risk: 2, gameplay: 1 })
        ]
      ),
      Q(
        "setting_scale",
        "世界觀的『尺度』，你這輪偏哪一邊？",
        "Which side of world scale are you leaning toward this round?",
        "世界観の『尺度』は今どちら寄り？",
        [
          O("只要一條街、一間教室，也能很動人", "A single street or classroom is enough if it sings.", "一本の通りや一つの教室でも、ちゃんと刺さるなら十分。", { slice_of_life: 2, romance: 1 }),
          O("城市級就剛好，有空氣也有複雜度", "City scale is perfect. Enough air, enough complexity.", "都市規模くらいがちょうどいい。空気も複雑さもある。", { mystery: 2, adult_risk: 1 }),
          O("國家、組織、陣營，越展越好", "Nations, factions, organizations. Expand the board.", "国家、組織、陣営。盤面は広いほどいい。", { fantasy: 2, action: 2 }),
          O("尺度不重要，只要那個核心傷口夠深", "Scale is secondary if the core wound is deep enough.", "規模より、その中心の傷が深いかどうかのほうが大事。", { tearjerker: 2, horror: 1 })
        ]
      ),
      Q(
        "support_character",
        "你最喜歡哪種配角功能？",
        "What is your favorite kind of supporting role?",
        "いちばん好きな脇役の役目は？",
        [
          O("幫主角把日常撐出厚度", "Someone who thickens the daily world around the lead.", "主人公の周りの日常に厚みを足してくれる人。", { slice_of_life: 2, comedy: 1 }),
          O("一開口就能把謎再擰緊一圈", "Someone who tightens the mystery with one line.", "ひと言で謎をもう一段ねじれる人。", { mystery: 2 }),
          O("作為對手或鏡子，逼主角長大", "A rival or mirror that forces growth.", "相手役や鏡として、主人公を前へ押す人。", { action: 1, fantasy: 1, tearjerker: 1 }),
          O("光是存在就讓氣氛變得不安", "Someone whose presence alone makes the room uneasy.", "いるだけで空気がざらつく人。", { horror: 2, adult_risk: 1 })
        ]
      ),
      Q(
        "reading_posture",
        "真正開始補一部時，你理想中的閱讀姿勢是？",
        "When you really begin a work, what is your ideal reading posture?",
        "本気で一本を始める時、理想の読み姿勢は？",
        [
          O("夜裡關燈，讓自己慢慢沉進去", "At night, lights dimmed, sinking slowly in.", "夜に灯りを落として、ゆっくり沈みたい。", { tearjerker: 1, romance: 1, horror: 1 }),
          O("桌前坐好，像在進入一個系統", "Seated properly, like entering a system.", "机に座って、ひとつのシステムへ入る感じ。", { gameplay: 2, sci_fi: 1 }),
          O("躺著補，想讓它變成陪伴型的時間", "Lying down. I want it to feel companionable.", "寝転んで触れたい。付き添ってくれる時間みたいに。", { slice_of_life: 2, romance: 1 }),
          O("戴耳機，隔絕掉外面，別讓人打擾", "Headphones on. Seal the outside away.", "ヘッドホンで外を切って、邪魔されずに入りたい。", { mystery: 1, horror: 1, tearjerker: 1 })
        ]
      ),
      Q(
        "lore_delivery",
        "設定說明最好怎麼來？",
        "How do you want lore delivery to work?",
        "設定説明はどう入ってくるのが理想？",
        [
          O("藏在日常裡，邊讀邊自己拼", "Hide it inside daily life so I piece it together myself.", "日常の中に紛れていて、読みながら自分で繋げたい。", { mystery: 1, slice_of_life: 1 }),
          O("遇到關鍵就給清楚一點", "Be clear when the turning points arrive.", "要所だけは、きちんと明かしてほしい。", { mystery: 1, sci_fi: 1, fantasy: 1 }),
          O("可以厚一點，我願意讀規則", "It can be dense. I am willing to read the rules.", "厚くてもいい。ルールを読む準備はある。", { sci_fi: 2, fantasy: 1, length: 1 }),
          O("最好用角色立場互撞出來", "Best if it emerges from clashing viewpoints.", "人物たちの立場がぶつかる中で見えてくるのがいちばんいい。", { action: 1, fantasy: 1, mystery: 1 })
        ]
      ),
      Q(
        "route_ordering",
        "面對推薦順序，你通常會怎麼做？",
        "What do you usually do with a recommended route order?",
        "推奨ルート順がある時、ふだんどうする？",
        [
          O("照走，我想尊重作品節奏", "I follow it. I want to respect the design.", "守る。作品のリズムを尊重したい。", { mystery: 2, entry_barrier: 1 }),
          O("先看一眼，再按自己心情微調", "I check it, then adjust around my own mood.", "いったん見て、自分の気分に合わせて少しだけずらす。", { romance: 1, gameplay: 1 }),
          O("只要別擋我本命，我都好說", "As long as it does not block my favorite, I can work with it.", "本命さえ遠回りしすぎなければ大丈夫。", { romance: 2, comedy: 1 }),
          O("越限制我，我越想自己亂走", "The more it constrains me, the more I want to wander.", "縛られるほど、自分で崩したくなる。", { gameplay: 2, horror: 1 })
        ]
      ),
      Q(
        "dramatic_irony",
        "你吃不吃那種『讀者已經知道，但角色還不知道』的戲？",
        "Do you like scenes where the reader already knows what the characters do not?",
        "読者だけが先に知っていて、登場人物はまだ知らない展開は好き？",
        [
          O("很吃，尤其是戀愛快要錯過的時候", "Very much, especially when romance is about to miss its timing.", "かなり好き。特に恋がすれ違いそうな時。", { romance: 2, tearjerker: 1 }),
          O("很吃，真相戲這樣最折磨人", "Absolutely. It makes truth-reveal stories deliciously painful.", "好き。真相ものだといちばん効く。", { mystery: 2, horror: 1 }),
          O("可以，但不要拖太久", "Yes, just do not drag it forever.", "いいけれど、引っぱりすぎないでほしい。", { comedy: 1, mystery: 1 }),
          O("我更喜歡和角色一起同時知道", "I prefer finding out at the same moment as the cast.", "登場人物と同じ瞬間に知るほうが好き。", { action: 1, fantasy: 1, slice_of_life: 1 })
        ]
      ),
      Q(
        "epilogue_need",
        "真結局之後，你對後日談的需求有多高？",
        "How badly do you need an epilogue after the true ending?",
        "真エンドのあと、後日談はどれくらい欲しい？",
        [
          O("一定要有，不然我出不來", "I need it, or I cannot leave properly.", "欲しい。ないと気持ちが出てこない。", { romance: 2, slice_of_life: 1, tearjerker: 1 }),
          O("有最好，但收得漂亮更重要", "Nice to have, but a graceful ending matters more.", "あればうれしい。でも締めの美しさのほうが大事。", { tearjerker: 2, mystery: 1 }),
          O("不用太多，一兩幕就夠", "Not much. One or two scenes are enough.", "長くなくていい。一、二幕で足りる。", { mystery: 1, action: 1 }),
          O("不要補太滿，留白會更痛", "Do not overfill it. The emptiness hurts better.", "埋めすぎないでほしい。余白のほうが痛い。", { horror: 1, tearjerker: 2 })
        ]
      ),
      Q(
        "voice_priority",
        "聲音演出裡，你最不能少的是哪一塊？",
        "In voice work, what can you least do without?",
        "音の演技で、いちばん欠かせないものは？",
        [
          O("曖昧停頓，那種差一口氣的感情", "Hesitations that sound one breath short of confession.", "告白の一歩手前みたいな、ための気配。", { romance: 2, tearjerker: 1 }),
          O("語氣變化，讓真相一層一層翻開", "Tone shifts that peel the truth open layer by layer.", "声色の変化で、真相が一枚ずつ剥がれる感じ。", { mystery: 2, sci_fi: 1 }),
          O("群像掛け合い，講幾句就知道熟不熟", "Ensemble banter that tells you instantly how lived-in the cast is.", "掛け合いの温度だけで関係の深さがわかる感じ。", { comedy: 2, slice_of_life: 1 }),
          O("失控、低語、發瘋邊緣的破音", "Cracks at the edge of losing control.", "壊れる寸前のかすれや割れ。", { horror: 2, adult_risk: 1 })
        ]
      ),
      Q(
        "joke_tolerance",
        "主線很重時，穿插的笑點你希望到什麼程度？",
        "When the main story is heavy, how much comedy do you want woven in?",
        "本筋が重い時、笑いはどれくらい差し込んでほしい？",
        [
          O("少量就好，像讓人喘口氣", "Just enough to let me breathe.", "少しでいい。ひと息つける程度がいい。", { tearjerker: 1, mystery: 1 }),
          O("可以多一點，反差會讓後面更狠", "More is fine. The contrast makes later hits land harder.", "多めでもいい。落差で後半がもっと効く。", { comedy: 2, tearjerker: 1 }),
          O("最好角色一開口就自帶火花", "Ideally the cast should crackle by default.", "できれば会話そのものに火花があってほしい。", { comedy: 3, romance: 1 }),
          O("幾乎不要，氣氛別被拆掉", "Almost none. Do not break the pressure.", "ほとんど要らない。圧を切らないでほしい。", { horror: 2, action: 1 })
        ]
      ),
      Q(
        "route_bait",
        "作品一開始丟很多香香的路線鉤子，你會？",
        "When a work throws a lot of tempting route hooks at you early, what do you do?",
        "序盤から魅力的なルートの餌がたくさん投げられたら？",
        [
          O("很開心，我喜歡先被選擇題包圍", "I love being surrounded by choices early.", "うれしい。最初から選択肢に囲まれたい。", { romance: 2, comedy: 1 }),
          O("可以，但希望主線別因此散掉", "Fine, as long as the spine does not dissolve.", "いいけれど、本筋まで散らないでほしい。", { mystery: 1, romance: 1 }),
          O("我會先記住誰最像真線核心", "I immediately start reading who looks like the true-route core.", "真ルートの核っぽい相手を先に探し始める。", { mystery: 2, gameplay: 1 }),
          O("太香反而可疑，我會開始防", "Too much bait makes me suspicious.", "甘すぎると逆に警戒する。", { horror: 1, mystery: 2 })
        ]
      ),
      Q(
        "seasonal_mood",
        "這輪更適合你的季節感是？",
        "What seasonal mood suits you most right now?",
        "今の自分にいちばん合う季節感は？",
        [
          O("春。關係剛長出來，一切還很輕", "Spring. New feelings, still light in the air.", "春。関係が芽吹き始めて、まだ空気が軽い感じ。", { romance: 2, comedy: 1 }),
          O("夏。日照長，情緒也跟著拉開", "Summer. Long daylight, long emotions.", "夏。日が長くて、感情の伸びも長い感じ。", { slice_of_life: 2, tearjerker: 1 }),
          O("秋。氣味開始變深，真相也該到了", "Autumn. The air deepens, and the truth should arrive with it.", "秋。空気が深くなって、真相もそろそろ来てほしい。", { mystery: 2, tearjerker: 1 }),
          O("冬。冷一點，痛一點，最容易記住", "Winter. Colder, sharper, easier to remember.", "冬。冷たくて、痛くて、そのぶん残りやすい。", { tearjerker: 2, horror: 1 })
        ]
      ),
      Q(
        "system_commitment",
        "如果作品帶有戰鬥、養成或管理，你希望它介入到什麼程度？",
        "If the work has combat, raising, or management systems, how much should they intervene?",
        "戦闘や育成や管理があるなら、どれくらい本編に食い込んでほしい？",
        [
          O("點到為止，別搶戲", "Keep it light. Do not steal the show.", "軽くでいい。物語の主役は奪わないでほしい。", { romance: 1, tearjerker: 1 }),
          O("有存在感就好，能幫節奏就行", "Give it presence, as long as it helps the pacing.", "存在感があれば十分。リズムを支えるくらいがいい。", { gameplay: 1, action: 1 }),
          O("要能左右結果，我才會有參與感", "I want it to affect outcomes so I feel involved.", "結末や進行に効いてこそ、参加している感じが出る。", { gameplay: 3, mystery: 1 }),
          O("最好乾脆成為作品的第二脈搏", "Ideally it becomes the work's second heartbeat.", "むしろ作品の第二の脈になってほしい。", { gameplay: 2, action: 2, fantasy: 1 })
        ]
      ),
      Q(
        "confession_timing",
        "感情真正說破，放在哪個時點最對你？",
        "When is the right moment for feelings to finally be spoken aloud?",
        "感情がはっきり言葉になる瞬間は、どこに置かれるのがいちばん好き？",
        [
          O("中段就說，後面看兩人怎麼活", "Say it mid-route and let me watch them live with it.", "中盤で言って、その後どう生きるかまで見たい。", { romance: 2, adult_risk: 1, slice_of_life: 1 }),
          O("結尾前夕最好，前面先把火養足", "Right before the end, after enough slow heat.", "終盤直前がいい。そこまでじっくり火を育ててほしい。", { romance: 2, tearjerker: 1 }),
          O("真相揭開那刻一起炸開最爽", "Best when it bursts together with the truth.", "真相と一緒に弾ける形がいちばん気持ちいい。", { mystery: 2, romance: 1 }),
          O("等一切都快毀了才講，才夠狠", "Only when everything is about to break.", "全部が壊れかけたところでようやく言うのが一番効く。", { horror: 1, tearjerker: 2, adult_risk: 1 })
        ]
      ),
      Q(
        "trauma_shape",
        "作品裡的傷口，哪一種最容易讓你停下來？",
        "What kind of wound inside a work makes you stop and stare?",
        "作品の中の傷で、どれにいちばん足が止まる？",
        [
          O("感情一直有，卻始終說不完整", "Feelings that are always there but never fully speakable.", "感情はずっとあるのに、最後まで言い切れない傷。", { romance: 2, tearjerker: 2 }),
          O("記憶缺口，時間一碰就歪掉", "Memory gaps and time that warps when touched.", "記憶の欠落や、触れると歪む時間。", { mystery: 2, sci_fi: 2 }),
          O("信念很正，但世界一直逼它變形", "A clean belief bent out of shape by the world.", "まっすぐな信念が、世界に押されて歪んでいく傷。", { action: 1, fantasy: 2, tearjerker: 1 }),
          O("身體、知覺、倫理一起爛掉", "Body, perception, and ethics rotting at the same time.", "身体も知覚も倫理も一緒に崩れていく傷。", { horror: 3, adult_risk: 2 })
        ]
      ),
      Q(
        "menu_aesthetic",
        "標題畫面或系統選單，你更吃哪種美感？",
        "What kind of title-screen or menu aesthetic do you respond to most?",
        "タイトル画面やメニューは、どんな美感だと刺さる？",
        [
          O("乾淨、靜、像還留著一口氣", "Clean and quiet, like holding a single breath.", "静かで整っていて、まだ息を一つ残している感じ。", { tearjerker: 1, mystery: 1 }),
          O("資訊感很強，像一套會運作的裝置", "Interface-heavy, like a system that actually runs.", "情報量があって、本当に動いている装置みたいな感じ。", { sci_fi: 2, gameplay: 1 }),
          O("華麗一點，打開就知道角色很多很熱鬧", "More ornate, so the cast presence hits immediately.", "少し華やかで、開いた瞬間に人の熱が伝わる感じ。", { comedy: 2, romance: 1 }),
          O("怪一點，光是游標移動都不太對", "Strange enough that even moving the cursor feels wrong.", "少し異様で、カーソルを動かすだけでも変な感じ。", { horror: 2, mystery: 1 })
        ]
      ),
      Q(
        "scene_memory",
        "你最常被哪一類場景記一輩子？",
        "What kind of scene do you remember for life?",
        "どんな場面を一生覚えていがち？",
        [
          O("兩個人終於講出那句話的瞬間", "The exact second two people finally say it.", "二人がとうとうあの一言を口にした瞬間。", { romance: 3, tearjerker: 1 }),
          O("真相回收那一幕，前面全都重排", "The reveal that rearranges everything before it.", "真相の回収で、それ以前の全部が組み替わる瞬間。", { mystery: 3, sci_fi: 1 }),
          O("某個很平凡的日常突然變得不能回去", "An ordinary day suddenly becoming unrecoverable.", "何でもない日常が、急に戻れないものになる瞬間。", { slice_of_life: 2, tearjerker: 2 }),
          O("一張畫面安靜停住，但你知道已經壞了", "A still image that quietly tells you everything is broken.", "一枚の画が静止しているのに、もう壊れたとわかる瞬間。", { horror: 2, adult_risk: 1, tearjerker: 1 })
        ]
      ),
      Q(
        "letter_or_truth",
        "如果要選一種推進方式，你更偏哪邊？",
        "If you had to choose one engine, which side do you lean toward?",
        "物語を動かす力を一つ選ぶなら、どちら寄り？",
        [
          O("一封信、一句話、兩個人之間的距離", "A letter, a line, the distance between two people.", "一通の手紙、一言、二人の距離。", { romance: 2, tearjerker: 1 }),
          O("一個謎、一條規則、越追越深", "A mystery, a rule, and a chase that only deepens.", "一つの謎、一つの規則、追うほど深くなる感覚。", { mystery: 2, sci_fi: 1 }),
          O("一個願望，要靠很多人一起撐住", "A wish that needs a whole cast to keep standing.", "多くの人で支えないと立っていられない願い。", { fantasy: 2, action: 1 }),
          O("一個禁忌，越碰越知道不該碰", "A taboo that only becomes stronger the more it is touched.", "触れるほど、触れてはいけないとわかる禁忌。", { horror: 2, adult_risk: 1 })
        ]
      ),
      Q(
        "route_failure",
        "如果某條線結尾不是幸福，而是『必要』，你能接受嗎？",
        "Can you accept an ending that is not happy, but necessary?",
        "幸せではなく『必要だった』終わり方は受け入れられる？",
        [
          O("可以，只要感情有被妥善送完", "Yes, if the emotions are delivered cleanly.", "受け入れられる。感情がきちんと送られていれば。", { tearjerker: 3, romance: 1 }),
          O("可以，只要真相層面說得通", "Yes, if it is true on the structural level.", "受け入れられる。真相や構造のレベルで納得できれば。", { mystery: 2, sci_fi: 1 }),
          O("勉強接受，但我還是想要一點回甘", "I can try, but I still want some sweetness after.", "受け入れたいけれど、少しだけ救いもほしい。", { romance: 1, slice_of_life: 1, tearjerker: 1 }),
          O("當然，越不留情越容易長在心裡", "Absolutely. Merciless endings stay longer.", "もちろん。容赦がないほど心に残る。", { horror: 2, adult_risk: 1, tearjerker: 1 })
        ]
      ),
      Q(
        "publisher_trust",
        "你會因為品牌、系列或編劇名字就先加分嗎？",
        "Do brand names, series lines, or staff names earn points from you up front?",
        "ブランドやシリーズや書き手の名前だけで、最初から加点する？",
        [
          O("會，但只是一個溫柔的起跑線", "Yes, but only as a gentle head start.", "する。でも、あくまでやさしい助走くらい。", { slice_of_life: 1, romance: 1 }),
          O("我會記住，尤其是真相系作品", "I keep track, especially for truth-driven works.", "意識する。特に真相系ではかなり見る。", { mystery: 2, entry_barrier: 1 }),
          O("只看眼前這一部，名字不能替它寫完", "I judge the work itself. A name cannot finish it for me.", "その一本をその一本として見る。名前だけでは最後まで書けない。", { action: 1, romance: 1, horror: 1 }),
          O("會，因為有些人就是知道怎麼把你毀掉", "Yes, because some names know exactly how to ruin me.", "する。あの人たちは、どう壊せば効くか知っているから。", { adult_risk: 1, horror: 1, tearjerker: 1 })
        ]
      ),
      Q(
        "backlog_style",
        "面對待補清單，你通常是哪一型？",
        "What kind of backlog person are you?",
        "積みリストに対して、あなたはどのタイプ？",
        [
          O("先補最輕鬆進去的，讓自己有手感", "I start with the easiest entry to regain the feel.", "まずはいちばん入りやすいものから触って感触を戻す。", { entry_barrier: 0, slice_of_life: 1 }),
          O("先補最該補的，哪怕門檻高一點", "I start with what deserves it most, even if it is harder.", "門檻が高くても、いちばん補うべきものから行く。", { entry_barrier: 2, mystery: 1, length: 1 }),
          O("看今天的心情，電波對到再說", "I follow the mood of the day.", "その日の電波と気分で決める。", { romance: 1, comedy: 1, fantasy: 1 }),
          O("會故意留一兩部重的，等自己夠穩再開", "I save the heavier ones until I feel steady enough.", "重いものは一、二本わざと残しておく。受け止められる時まで。", { horror: 1, tearjerker: 1, adult_risk: 1 })
        ]
      ),
      Q(
        "opening_temperature",
        "作品前兩小時的溫度，你希望偏哪邊？",
        "What temperature do you want the first two hours to have?",
        "最初の二時間は、どんな温度で始まってほしい？",
        [
          O("溫一點，讓我願意把心放下來", "Warm enough that I let my guard down.", "少し温かくて、こちらの肩が下りる感じ。", { slice_of_life: 2, romance: 1 }),
          O("冷一點，讓我知道它不是普通作品", "Cool enough that I know it is not ordinary.", "少し冷たくて、ただの作品ではないとわかる感じ。", { mystery: 2, sci_fi: 1 }),
          O("亮一點，先用角色火花把我拉住", "Bright enough that character chemistry hooks me first.", "明るめで、まずは掛け合いの火花で掴んでほしい。", { comedy: 2, romance: 1 }),
          O("壓一點，讓我從第一頁就開始戒備", "Pressurized enough that I am already on guard by page one.", "少し圧があって、一頁目からもう警戒したい。", { horror: 2, action: 1 })
        ]
      ),
      Q(
        "heroine_distance",
        "主角和本命角色之間，你最喜歡哪種距離感開局？",
        "What opening distance between the lead and your favorite character do you like most?",
        "主人公と本命候補の距離感は、どんな始まりがいちばん好き？",
        [
          O("其實早就認識，只是還沒真正看見彼此", "They have known each other, but have not truly seen each other yet.", "前から知ってはいるけれど、まだ本当に見えていない関係。", { romance: 2, slice_of_life: 1 }),
          O("完全陌生，靠事件被硬拉在一起", "Total strangers forced together by an event.", "まったくの他人が、事件で無理やり並ぶ関係。", { mystery: 1, action: 1, romance: 1 }),
          O("表面很近，實際上隔著整層真相", "Close on the surface, separated by a whole truth underneath.", "表面は近いのに、下に真相が一枚挟まっている関係。", { mystery: 2, romance: 1 }),
          O("像命運先認識了他們，人反而還沒有", "Fate knows them before they know each other.", "人より先に、運命のほうが二人を知っている感じ。", { fantasy: 2, tearjerker: 1 })
        ]
      ),
      Q(
        "twist_ethics",
        "反轉如果會傷角色，你希望它遵守什麼？",
        "If a twist is going to hurt the characters, what must it honor?",
        "反転が人物を傷つけるなら、何だけは守ってほしい？",
        [
          O("感情真實，別只是技巧漂亮", "Emotional truth. Not just technical cleverness.", "感情の真実さ。技巧だけ綺麗なのは嫌だ。", { tearjerker: 2, romance: 1 }),
          O("邏輯完整，回頭看也站得住", "Structural integrity. It has to stand on a reread.", "論理の強さ。あとから見返しても立っていてほしい。", { mystery: 3, sci_fi: 1 }),
          O("就算殘酷，也要讓角色有選擇感", "Even cruel turns should leave the characters some agency.", "残酷でも、人物に選ぶ感覚だけは残してほしい。", { action: 1, fantasy: 1, romance: 1 }),
          O("不用守太多，敢就行", "Not much. I mostly want nerve.", "そこまで守らなくていい。まずは胆力がほしい。", { horror: 2, adult_risk: 1 })
        ]
      ),
      Q(
        "protagonist_edge",
        "主角身上，你最想保留哪種『棱角』？",
        "What kind of edge do you most want the protagonist to keep?",
        "主人公には、どんな『角』を残していてほしい？",
        [
          O("溫柔，但不是誰都能進來", "Kind, but not openly available to everyone.", "やさしいけれど、誰でも入ってこられるわけじゃない感じ。", { romance: 2, slice_of_life: 1 }),
          O("聰明，甚至有點不好親近", "Sharp, maybe even slightly hard to approach.", "頭が切れて、少し近寄りがたいくらいがいい。", { mystery: 2, sci_fi: 1 }),
          O("有野心，做選擇時不怕得罪人", "Ambitious enough to make hard choices.", "野心があって、選ぶ時に人を嫌われるのも恐れない感じ。", { action: 2, fantasy: 1 }),
          O("有裂痕，甚至自己都知道不太正常", "Cracked enough to know something is wrong inside.", "ひびが入っていて、自分でも普通じゃないとわかっている感じ。", { horror: 2, adult_risk: 1, tearjerker: 1 })
        ]
      ),
      Q(
        "sound_design",
        "音效或環境音，你最希望它怎麼參與？",
        "How do you want sound design or ambience to participate?",
        "効果音や環境音には、どう関わってほしい？",
        [
          O("很淡，只在靜的地方把人推深一點", "Subtle, only deepening quiet scenes.", "淡くて、静かな場面を少しだけ深くするくらい。", { tearjerker: 1, slice_of_life: 1 }),
          O("成為提示，讓我覺得哪裡不對", "As a hint that tells me something is off.", "手がかりとして働いて、何かがおかしいと感じさせてほしい。", { mystery: 2, horror: 1 }),
          O("要有存在感，像整個世界都在運作", "Present enough to make the world feel active.", "存在感があって、世界そのものが動いている感じがほしい。", { fantasy: 1, sci_fi: 1, action: 1 }),
          O("越細越可怕，最好安靜時最不安", "The finer it gets, the scarier it should become.", "細かいほど怖くて、静かな時ほど不安になるのがいい。", { horror: 2, adult_risk: 1 })
        ]
      ),
      Q(
        "branch_density",
        "選項頻率方面，你這輪想要什麼節奏？",
        "What choice frequency feels right this round?",
        "選択肢の頻度は、今どんなリズムがいい？",
        [
          O("少一點，重要時再出現就好", "Sparse. Let them appear only when it matters.", "少なめでいい。大事な時だけ現れてほしい。", { tearjerker: 1, romance: 1 }),
          O("規律一點，讓我一直有參與感", "Regular enough that I keep feeling involved.", "ある程度規則的で、ずっと参加している感じがほしい。", { gameplay: 2, mystery: 1 }),
          O("多一點，我喜歡掌舵感", "Frequent. I like steering the wheel.", "多めがいい。舵を取っている感覚が好きだ。", { gameplay: 3, action: 1 }),
          O("表面少，但每次一來都很致命", "Rare on the surface, but devastating when they come.", "表向きは少なくていい。でも来るたびに致命的であってほしい。", { horror: 1, mystery: 2, adult_risk: 1 })
        ]
      ),
      Q(
        "screen_time",
        "你最在意哪一種『畫面停留』？",
        "What kind of on-screen stillness matters most to you?",
        "どんな『画面の滞留』をいちばん大事にしたい？",
        [
          O("兩個人不說話，但空氣在走", "Two people silent while the air keeps moving.", "二人は黙っているのに、空気だけが流れている時間。", { romance: 2, tearjerker: 1 }),
          O("某個道具或地點被反覆看見，慢慢變重要", "An object or place recurring until it means more.", "同じ物や場所が何度も映って、少しずつ意味を持つ感じ。", { mystery: 2, slice_of_life: 1 }),
          O("打鬥或對峙前，那一秒的屏氣", "That held breath before a clash.", "ぶつかる直前の、息を止める一秒。", { action: 2, fantasy: 1 }),
          O("畫面很安靜，但你知道有東西在看", "A quiet frame that still feels watched.", "静かな画なのに、何かに見られている気がする時間。", { horror: 2, mystery: 1 })
        ]
      ),
      Q(
        "unlock_grind",
        "為了補到核心內容，你願意承受多少『程序感』？",
        "How much procedural friction are you willing to take to reach the core?",
        "核心へ届くための『手順感』にはどこまで付き合える？",
        [
          O("少一點最好，我想情緒不斷線", "As little as possible. I want emotional continuity.", "少ないほどいい。感情の線は切りたくない。", { romance: 2, tearjerker: 1 }),
          O("適量可以，算是作品的一部分", "A little is fine. It can be part of the work.", "適度なら平気。作品の一部として受け止められる。", { gameplay: 1, mystery: 1 }),
          O("只要最終回報夠高，我能忍", "If the final payoff is big enough, I can take it.", "最後の報いが大きいなら、かなり耐えられる。", { gameplay: 2, length: 1, mystery: 1 }),
          O("越像儀式越好，解鎖本身就該有重量", "The more ritualized, the better. Unlocking should carry weight.", "儀式っぽいほどいい。開く行為そのものに重みがほしい。", { horror: 1, gameplay: 2, fantasy: 1 })
        ]
      ),
      Q(
        "emotional_recovery",
        "補完一部很重的之後，你通常怎麼恢復？",
        "How do you usually recover after something heavy?",
        "重い一本を終えたあと、どうやって戻ってくる？",
        [
          O("找一部溫柔的，慢慢把自己接回來", "I find something gentle and reconnect slowly.", "やさしい一本で、ゆっくり自分を戻していく。", { slice_of_life: 2, romance: 1 }),
          O("直接翻資料，把它徹底消化完", "I dive into notes and digest it completely.", "資料や考察に潜って、徹底的に消化しに行く。", { mystery: 2, entry_barrier: 1 }),
          O("換個更熱的，讓自己重新活過來", "I switch to something hotter to wake back up.", "もっと熱いものに切り替えて、もう一度動き出したい。", { action: 2, fantasy: 1 }),
          O("不恢復，我想讓那種不適再留久一點", "I do not. I want the discomfort to stay a little longer.", "戻さない。その不快さをもう少し残しておきたい。", { horror: 2, adult_risk: 1, tearjerker: 1 })
        ]
      ),
      Q(
        "classic_commitment",
        "如果一部經典又長又慢，你願意怎麼對待它？",
        "If a classic is both long and slow, how are you willing to meet it?",
        "古典が長くて遅い時、どんな付き合い方ならできる？",
        [
          O("先不碰，我現在想要更直覺的入口", "Not now. I want more immediate entry points.", "今はまだいい。もっと直感的に入れるものが欲しい。", { entry_barrier: 0 }),
          O("可以分段補，只要它值得", "I can take it in segments if it is worth it.", "価値があるなら、区切りながらでも付き合える。", { entry_barrier: 2, length: 1 }),
          O("我會留出完整時間，好好進去", "I will carve out the time and enter properly.", "ちゃんと時間を空けて、きちんと入りに行く。", { length: 3, entry_barrier: 2, mystery: 1 }),
          O("越像深井越好，我現在就想往下跳", "The deeper the well, the better. I want to jump now.", "深井みたいなほどいい。今こそ飛び込みたい。", { length: 4, entry_barrier: 3, horror: 1 })
        ]
      ),
      Q(
        "route_resolution",
        "最後最後，你希望作品如何把你放下？",
        "At the very end, how do you want the work to set you down?",
        "最後の最後、作品にはどうやってこちらを着地させてほしい？",
        [
          O("很輕地放下，但心裡一直有餘溫", "Gently, but with warmth still lingering inside.", "やさしく着地して、内側だけずっと温かいままがいい。", { romance: 2, slice_of_life: 1, tearjerker: 1 }),
          O("把所有線頭綁好，再讓我回頭驚一下", "Tie every thread, then make me look back in awe.", "糸口をきれいに結んだうえで、振り返って驚かせてほしい。", { mystery: 3, sci_fi: 1 }),
          O("給我一個能繼續活下去的方向", "Leave me with a direction I can keep walking toward.", "この先も歩ける方向だけは置いていってほしい。", { fantasy: 2, action: 1, tearjerker: 1 }),
          O("不用太安穩，殘響夠深就行", "It does not need to be comfortable. Depth matters more.", "穏やかでなくていい。残響の深さのほうが大事だ。", { horror: 1, adult_risk: 1, tearjerker: 2 })
        ]
      ),
      Q(
        "shelf_pick",
        "如果書架上只剩四種氣味，你今晚會抽哪一種？",
        "If only four kinds of mood were left on the shelf tonight, which one would you pull?",
        "棚に四つの気配しか残っていない夜、どれを引き抜く？",
        [
          O("柔軟、近身、會慢慢變痛的", "Soft, intimate, and slowly painful.", "やわらかくて近くて、ゆっくり痛くなるもの。", { romance: 2, tearjerker: 2 }),
          O("冷靜、銳利、像會回收很多東西的", "Cool, sharp, and likely to pay everything back.", "冷静で鋭くて、いろいろ回収してくれそうなもの。", { mystery: 2, sci_fi: 1 }),
          O("明亮、吵鬧、角色一出場就有戲的", "Bright, lively, and instantly character-driven.", "明るくて賑やかで、出た瞬間から人物に熱があるもの。", { comedy: 2, slice_of_life: 1, romance: 1 }),
          O("陰影、禁忌、看完大概不會舒服的", "Shadowed, taboo-laced, and unlikely to leave me comfortable.", "陰りがあって、禁忌があって、たぶん見終わっても楽ではないもの。", { horror: 2, adult_risk: 1, mystery: 1 })
        ]
      )
    ]
  };
})();
