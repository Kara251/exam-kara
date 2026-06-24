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
    publicUrl: "https://exam.kara251.com/tests/galgame-match/",
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
      )
    ]
  };
})();
