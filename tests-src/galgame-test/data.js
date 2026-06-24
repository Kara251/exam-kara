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
      )
    ]
  };
})();
