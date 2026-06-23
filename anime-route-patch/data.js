var TC2SC = "這这開开點点問问題题測测驗验動动畫画過过電电腦脑書书對对體体節节選选愛爱關关鍵键詞词類类該该經经極极轉转話话與与機机覺觉歡欢間间線线實实結结單单見见風风來来個个從从現现義义門门當当場场鄉乡飛飞國国園园熱热鬧闹隊队計计協协調调負负觀观樣样麼么發发屬属進进壓压龍龙劍剑闊阔滿满競竞夢梦灑洒揮挥淚泪複复華华壯壮無无雲云戀恋綿绵餘余暉晖紛纷陣阵腎肾飆飙據据準准領领雞鸡裡里後后號号報报穩稳歷历歲岁約约讓让療疗癒愈歎叹盡尽僅仅幣币優优歸归臉脸頭头輯辑斷断豐丰積积際际訊讯職职藝艺總总輕轻雜杂沒没帶带險险廳厅東东搖摇滾滚懸悬詩诗響响樂乐暫暂讀读謎谜傳传說说運运賽赛遊游戲戏聞闻聰聪祕秘異异靜静員员櫻樱鎮镇閃闪爍烁飄飘衝冲鋒锋擬拟筆笔棄弃堅坚強强萬万細细陰阴邏逻圍围騰腾燒烧觸触層层團团圓圆達达遺遗遠远邊边緊紧剝剥純纯戰战鬥斗鬆松寧宁顯显盤盘驅驱廢废獲获網网絡络醬酱繪绘織织續续練练時时為为備备佈布敘叙劇剧較较們们溫温氣气潤润劑剂賞赏變变膩腻嚮向係系議议設设穎颖討讨趨趋勢势內内規规尋寻標标寫写幾几會会彈弹麗丽術术絕绝門门實实屆届夠够劇剧風风藍蓝後后壓压補补歷历燈灯舊旧燒烧壓压兩两點点嗎吗樣样歡欢隻只來来廣广戰战關关雖虽應应總总壓压";

function toSC(s) {
  for (var i = 0; i < TC2SC.length; i += 2) {
    s = s.split(TC2SC[i]).join(TC2SC[i + 1]);
  }
  return s;
}

function O(text, scores) {
  return { text: text, scores: scores };
}

function Q(bucket, text, options) {
  return { bucket: bucket, text: text, options: options };
}

function W(id, animeName, animeRomaji, image, typeName, blurb, tags, traits) {
  return {
    id: id,
    animeName: animeName,
    animeRomaji: animeRomaji,
    image: image,
    typeName: typeName,
    blurb: blurb,
    tags: tags,
    traits: traits
  };
}

var UI = {
  tc: {
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
    tog: "简",
    more: "更多測驗",
    prev: "上一題"
  },
  sc: {
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
    tog: "繁",
    more: "更多测验",
    prev: "上一题"
  }
};

var QUIZ_DATA = {
  questionCount: 15,
  traits: [
    { id: "intensity", pos: "高刺激推進", neg: "低壓陪伴" },
    { id: "humor", pos: "沙雕喜劇感", neg: "嚴肅正劇感" },
    { id: "intimacy", pos: "關係濃度", neg: "設定先行" },
    { id: "wonder", pos: "奇想與異世界感", neg: "現實落地感" },
    { id: "futurism", pos: "科技都會氣質", neg: "懷舊時代氣息" },
    { id: "darkness", pos: "壓迫與黑暗濃度", neg: "明亮鬆弛感" },
    { id: "community", pos: "適合一起看和聊", neg: "適合獨自沉浸" },
    { id: "mastery", pos: "強者或策略爽點", neg: "普通人共鳴" },
    { id: "artiness", pos: "演出與意象實驗", neg: "直給好入口" },
    { id: "legacy", pos: "補番門檻也值得", neg: "新手友好度" }
  ],
  marqueeIds: [
    "supermarket_smoking",
    "mushoku_iii",
    "ghost_shell",
    "grand_blue_s3",
    "polar_opposites_s2",
    "jaadugar",
    "time_leap_girl_4k",
    "chiikawa_mermaid",
    "paprika_4k",
    "madoka_walpurgis"
  ],
  works: [
    W("supermarket_smoking", "在超市後門抽煙的二人", "Super no Ura de Yani Suu Futari", "images/01_supermarket_smoking1.webp", "深夜微醺型", "你這輪想要的不是大事件，而是夜色、疲憊和成年人之間那點慢慢發熱的情緒。《在超市後門抽煙的二人》會很懂你現在的下班心情。", ["#低刺激", "#成年人曖昧", "#夜色", "#社畜共鳴"], { intensity: -3, humor: -1, intimacy: 3, wonder: -3, futurism: -1, darkness: 1, community: -2, mastery: -3, artiness: 1, legacy: -2 }),
    W("mushoku_iii", "無職轉生 III", "Mushoku Tensei III", "images/02_mushoku_tensei_iii1.webp", "長線異世界型", "如果你願意把時間押在長線成長、人生修補和沉浸式世界觀上，《無職轉生 III》很可能就是這輪最穩的命中。", ["#異世界", "#長線成長", "#沉浸", "#續作"], { intensity: 1, humor: -2, intimacy: 1, wonder: 3, futurism: -1, darkness: 1, community: -1, mastery: 2, artiness: 0, legacy: 2 }),
    W("youjo_senki_ii", "幼女戰記 II", "Youjo Senki II", "images/03_youjo_senki_ii1.webp", "冷硬軍略型", "你這輪如果更想看的是壓迫、戰略、反英雄和勝負的寒氣，《幼女戰記 II》會比溫柔型作品更對味。", ["#軍事", "#反英雄", "#高壓", "#策略"], { intensity: 2, humor: -3, intimacy: -2, wonder: -1, futurism: 0, darkness: 3, community: -2, mastery: 3, artiness: 1, legacy: 2 }),
    W("bleach_tybw", "BLEACH 千年血戰篇 -禍進譚-", "BLEACH: Thousand-Year Blood War", "images/04_bleach_thousand_year_blood_war_kashin1.webp", "終章燃戰型", "如果你這輪最想要的是大場面、高光角色和宿命決戰，那種老 IP 終章的厚度會讓《BLEACH》直接衝上前排。", ["#戰鬥爽", "#角色高光", "#終章感", "#老粉向"], { intensity: 3, humor: -2, intimacy: -1, wonder: 1, futurism: -1, darkness: 2, community: 2, mastery: 3, artiness: -1, legacy: 3 }),
    W("ghost_shell", "攻殼機動隊 THE GHOST IN THE SHELL", "The Ghost in the Shell", "images/05_ghost_in_the_shell1.webp", "賽博思辨型", "你如果更吃冷光、都市、技術焦慮和身份命題，那麼《攻殼機動隊》這種高概念硬核氣質，會比熱血番更貼你這輪的頻率。", ["#賽博朋克", "#高概念", "#都市冷感", "#思辨"], { intensity: 1, humor: -3, intimacy: -2, wonder: -3, futurism: 3, darkness: 2, community: -2, mastery: 1, artiness: 3, legacy: 0 }),
    W("black_torch", "BLACK TORCH", "Black Torch", "images/06_black_torch1.webp", "妖怪街戰型", "你這輪如果想直接進入少年戰鬥、妖怪衝突和酷感角色，《BLACK TORCH》會是很乾脆的那種爽快命中。", ["#少年戰鬥", "#妖怪", "#街頭感", "#快節奏"], { intensity: 3, humor: 0, intimacy: -1, wonder: 1, futurism: 1, darkness: 1, community: 1, mastery: 2, artiness: -1, legacy: -1 }),
    W("elusive_samurai_s2", "擅長逃跑的殿下 第二期", "Nige Jouzu no Wakagimi S2", "images/07_elusive_samurai_s21.webp", "逃生策略型", "如果你喜歡弱者靠腦子活下來、歷史感裡帶點狡黠和求生，《擅長逃跑的殿下》會很容易讓你一路追下去。", ["#歷史", "#逃生", "#策略", "#少年成長"], { intensity: 1, humor: -2, intimacy: -1, wonder: 0, futurism: -2, darkness: 1, community: -1, mastery: 2, artiness: 1, legacy: 2 }),
    W("grand_blue_s3", "碧藍之海 第三季", "Grand Blue S3", "images/08_grand_blue_s31.webp", "社交爆笑型", "你這輪要的是一群人一起鬧到失控、適合邊看邊笑邊截圖，那《碧藍之海》第三季幾乎就是標準答案。", ["#爆笑", "#社交能量", "#群體觀看", "#顏藝"], { intensity: 1, humor: 3, intimacy: 0, wonder: -2, futurism: -2, darkness: -1, community: 3, mastery: -1, artiness: -1, legacy: 2 }),
    W("polar_opposites_s2", "正相反的你與我 第二季", "Seihantai na Kimi to Boku S2", "images/09_polar_opposites_s21.webp", "溫柔互補型", "如果你更想被關係裡那種細細的靠近感打中，《正相反的你與我》這種乾淨又溫柔的校園戀愛會很穩。", ["#校園戀愛", "#互補關係", "#溫柔", "#低壓"], { intensity: -2, humor: 0, intimacy: 3, wonder: -2, futurism: -2, darkness: -2, community: -1, mastery: -2, artiness: 1, legacy: 1 }),
    W("young_ladies_fighting_games", "大小姐才不會玩格鬥遊戲", "Tai Ari Deshita", "images/10_young_ladies_fighting_games1.webp", "反差勝負欲型", "你這輪若是想看優雅外殼下的勝負欲、女校反差和遊戲火花，《大小姐才不會玩格鬥遊戲》會很有樂子。", ["#反差萌", "#格鬥遊戲", "#女子校", "#競技"], { intensity: 1, humor: 2, intimacy: 0, wonder: -2, futurism: 0, darkness: -1, community: 2, mastery: 2, artiness: 0, legacy: -1 }),
    W("jaadugar", "天幕的賈杜加爾", "Jaadugar", "images/11_jaadugar_witch_in_mongolia1.webp", "文明史詩型", "如果你吃的是時代洪流、知識型女主和文明碰撞的重量，《天幕的賈杜加爾》會比單純爽番更中你這輪的調。", ["#歷史", "#知識型", "#女性成長", "#慢熱"], { intensity: 0, humor: -3, intimacy: 1, wonder: 0, futurism: -3, darkness: 1, community: -2, mastery: 1, artiness: 3, legacy: -1 }),
    W("sparks_of_tomorrow", "二十世紀電氣目錄", "Nijusseiki Denki Mokuroku", "images/12_sparks_of_tomorrow_nijusseiki_denki_mokuroku1.webp", "近代文藝型", "你如果這輪想看的是近代空氣、青春餘韻和京都系的透明感，《二十世紀電氣目錄》會很容易貼住你的心情。", ["#懷舊", "#青春", "#文藝", "#近代浪漫"], { intensity: -2, humor: -1, intimacy: 2, wonder: 0, futurism: -2, darkness: -2, community: -2, mastery: -2, artiness: 2, legacy: -1 }),
    W("goodbye_lara", "再見拉拉", "Goodbye, Lara", "images/13_goodbye_lara1.webp", "海風孤旅型", "如果你想被原創感、海洋、旅程和一點說不清的孤獨溫柔包住，《再見拉拉》很可能會直接命中。", ["#原創", "#海洋", "#旅程", "#孤獨治癒"], { intensity: -2, humor: -2, intimacy: 1, wonder: 3, futurism: -1, darkness: 1, community: -2, mastery: -2, artiness: 3, legacy: -1 }),
    W("old_bumpkin_sword", "鄉下大叔成為劍聖 第二期", "Katainaka no Ossan, Kensei ni Naru S2", "images/14_old_country_bumpkin_master_swordsman_s21.webp", "師父逆襲型", "你這輪如果需要的是低調強者、穩穩發揮和看得很舒服的成長爽感，《鄉下大叔成為劍聖》就很合適。", ["#低調強者", "#劍術", "#師父感", "#穩定爽感"], { intensity: 1, humor: -1, intimacy: 0, wonder: 2, futurism: -2, darkness: -1, community: 0, mastery: 3, artiness: -1, legacy: 2 }),
    W("skeleton_knight_s2", "骸骨騎士大人異世界冒險中 第二季", "Skeleton Knight in Another World S2", "images/15_skeleton_knight_s21.webp", "輕快冒險型", "如果你更想要的是不那麼沉重、一路救人一路冒險的異世界體驗，《骸骨騎士》會比高壓作品輕鬆很多。", ["#異世界", "#冒險", "#輕喜劇", "#英雄感"], { intensity: 1, humor: 0, intimacy: -1, wonder: 3, futurism: -1, darkness: -1, community: 0, mastery: 2, artiness: -1, legacy: 2 }),
    W("clevatess_ii", "Clevatess 第二期", "Clevatess II", "images/16_clevatess_ii1.webp", "黑暗王權型", "你要是這輪更偏黑暗奇幻、命運壓迫和史詩式衝突，那《Clevatess》這種重壓世界觀會更對胃口。", ["#黑暗奇幻", "#王權", "#史詩", "#壓迫感"], { intensity: 2, humor: -3, intimacy: -2, wonder: 2, futurism: -1, darkness: 3, community: -2, mastery: 2, artiness: 1, legacy: 2 }),
    W("red_river", "天是紅河岸", "Sora wa Akai Kawa no Hotori", "images/18_red_river1.webp", "命運宮廷型", "如果你這輪更吃古代異世界、命運戀愛和帶點宮廷戲的宏大情緒，《天是紅河岸》會很會勾你。", ["#少女漫", "#古代穿越", "#命運戀愛", "#宮廷"], { intensity: 1, humor: -1, intimacy: 3, wonder: 2, futurism: -3, darkness: 1, community: 0, mastery: 1, artiness: 1, legacy: 1 }),
    W("magilumiere_s2", "株式會社魔法少女 第二季", "Kabushikigaisha Magi-Lumiere S2", "images/19_magilumiere_s21.webp", "職場魔法型", "你如果喜歡把奇幻放進制度和職場裡來看，《株式會社魔法少女》這種現代商業設定會非常順你的腦回路。", ["#職場", "#魔法少女", "#團隊", "#現代奇幻"], { intensity: 1, humor: 0, intimacy: 0, wonder: 1, futurism: 2, darkness: -1, community: 1, mastery: 1, artiness: 1, legacy: 2 }),
    W("futtsu_akujyo", "不當惡女", "Futsutsu na Akujo de wa Gozaimasu ga", "images/20_futtsu_akujyo1.webp", "惡女翻盤型", "如果你想看的是身份錯位、女主翻盤和宮廷策略戲，《不當惡女》這種女性向智鬥會很帶勁。", ["#惡女逆襲", "#宮廷", "#身份錯位", "#智鬥"], { intensity: 0, humor: -1, intimacy: 2, wonder: -1, futurism: -2, darkness: 1, community: 0, mastery: 3, artiness: 1, legacy: -1 }),
    W("ibikona", "不欺負人的繼母與姐姐", "A Stepmother and Stepsister Who Don't Bully", "images/21_ibikona_gibo_gishi1.webp", "反套路家族型", "如果你這輪只是想要一點溫柔、家人的善意和反套路的舒心感，《不欺負人的繼母與姐姐》會很穩。", ["#治癒", "#家庭", "#反套路", "#低壓"], { intensity: -3, humor: 1, intimacy: 2, wonder: -2, futurism: -2, darkness: -3, community: -1, mastery: -3, artiness: 0, legacy: -2 }),
    W("hana_kimi_s2", "偷偷愛著你 第二季", "Hana Kimi S2", "images/22_hana_kimi_s21.webp", "經典校園鬧劇型", "你要是會為經典少女漫、女扮男裝和青春誤會喜劇買單，《偷偷愛著你》這類老派快樂會很有效。", ["#少女漫", "#女扮男裝", "#青春", "#誤會喜劇"], { intensity: -1, humor: 2, intimacy: 2, wonder: -2, futurism: -2, darkness: -2, community: 2, mastery: -2, artiness: -1, legacy: 2 }),
    W("heavy_knight", "被放逐的轉生重騎士憑遊戲知識無雙", "Exiled Heavy Knight", "images/23_exiled_heavy_knight1.webp", "構築無雙型", "如果你這輪偏愛數值、機制、職業構築和知識碾壓，《被放逐的轉生重騎士》會給你很乾脆的快感。", ["#遊戲系統", "#構築", "#逆襲", "#爽文"], { intensity: 2, humor: -1, intimacy: -2, wonder: 2, futurism: -1, darkness: 0, community: -1, mastery: 3, artiness: -1, legacy: -1 }),
    W("hanaori_san", "花織小姐轉生後也想打架", "Hanaori-san", "images/24_hanaori_san1.webp", "能打千金型", "你如果吃少女感裡帶拳風、戀愛外表下其實很能打的反差，《花織小姐轉生後也想打架》會很有記憶點。", ["#反差", "#少女熱血", "#轉生", "#能打"], { intensity: 2, humor: 1, intimacy: 1, wonder: 1, futurism: -2, darkness: 0, community: 1, mastery: 2, artiness: -1, legacy: -1 }),
    W("100_girlfriends_s3", "超超超超超喜歡你的 100 個女朋友 第三季", "The 100 Girlfriends S3", "images/25_100_girlfriends_s31.webp", "暴走戀愛喜劇型", "你這輪如果想看的是把戀愛梗玩到暴走、吐槽密度炸裂的作品，《100 個女朋友》第三季大概會笑得很對。", ["#後宮解構", "#高能吐槽", "#暴走喜劇", "#續作"], { intensity: 2, humor: 3, intimacy: 2, wonder: -2, futurism: -1, darkness: 0, community: 3, mastery: -1, artiness: 1, legacy: 3 }),
    W("victoria_tefuda", "手牌很多的維多利亞", "Victoria with Too Many Cards", "images/26_victoria_tefuda1.webp", "手牌智鬥型", "如果你喜歡的是看女主手裡一直有牌、靠資訊差和局勢調度往前贏，《手牌很多的維多利亞》會很順。", ["#智鬥", "#女性主角", "#情報差", "#策略"], { intensity: 0, humor: -2, intimacy: -1, wonder: -1, futurism: -2, darkness: 1, community: -1, mastery: 2, artiness: 2, legacy: -1 }),
    W("thunder3", "THUNDER3", "Thunder3", "images/27_thunder31.webp", "異常都市型", "你如果偏好現代都市裡突然裂開的超常和危機感，《THUNDER3》這種不太安分的調子會很中。", ["#都市異常", "#超常", "#動作", "#危機感"], { intensity: 2, humor: -1, intimacy: -2, wonder: -1, futurism: 1, darkness: 2, community: -1, mastery: 2, artiness: 2, legacy: -1 }),
    W("nanoha_exceeds", "魔法少女奈葉 EXCEEDS", "Magical Girl Lyrical Nanoha EXCEEDS", "images/28_nanoha_exceeds1.webp", "魔炮高壓型", "如果你對魔法少女的期待是高輸出、硬碰硬和老粉才能明白的熱度，那《奈葉 EXCEEDS》會非常精準。", ["#魔法少女", "#高火力", "#老粉向", "#宿命"], { intensity: 2, humor: -1, intimacy: 1, wonder: 2, futurism: 2, darkness: 2, community: 0, mastery: 3, artiness: 1, legacy: 3 }),
    W("worlds_strongest_rearguard", "世界最強後衛", "The World's Strongest Rearguard", "images/29_worlds_strongest_rearguard1.webp", "後排開團型", "你這輪要是偏好隊伍構築、後排指揮和不靠硬莽也能贏的套路，《世界最強後衛》會很合適。", ["#隊伍構築", "#後排指揮", "#異世界", "#穩紮穩打"], { intensity: 1, humor: 0, intimacy: -1, wonder: 3, futurism: -1, darkness: -1, community: 0, mastery: 2, artiness: -1, legacy: 1 }),
    W("grow_up_show", "Grow Up Show", "Grow Up Show", "images/30_grow_up_show1.webp", "舞台成長型", "如果你喜歡看年輕人站上舞台、跌跌撞撞長成自己的樣子，《Grow Up Show》這種成長型節奏會很舒服。", ["#成長", "#舞台感", "#青春", "#群像"], { intensity: -1, humor: 1, intimacy: 1, wonder: 0, futurism: -1, darkness: -1, community: 1, mastery: -1, artiness: 1, legacy: -1 }),
    W("one_piece_heroines", "ONE PIECE HEROINES", "One Piece Heroines", "images/31_one_piece_heroines1.webp", "角色廚外傳型", "你如果本來就對角色外傳和女性角色焦點很有興趣，這種角色廚含量高的《ONE PIECE HEROINES》會特別好入口。", ["#角色外傳", "#女性角色", "#冒險", "#系列粉"], { intensity: 1, humor: 1, intimacy: 1, wonder: 2, futurism: -1, darkness: -1, community: 2, mastery: 1, artiness: 0, legacy: 3 }),
    W("bandori_yume_mita", "BanG Dream! ゆめ∞みた", "BanG Dream! Yume Mita", "images/32_bandori_yume_mita1.webp", "樂團應援型", "如果你吃的是樂團群像、舞台夢和那種一起追一起應援的感覺，這類 BanG Dream! 系作品會很對路。", ["#樂團", "#應援", "#少女群像", "#舞台"], { intensity: 0, humor: 1, intimacy: 2, wonder: -1, futurism: -1, darkness: -1, community: 2, mastery: -1, artiness: 1, legacy: 3 }),
    W("oni_no_hanayome", "鬼的新娘", "Oni no Hanayome", "images/33_oni_no_hanayome1.webp", "和風婚約型", "你如果這輪比較偏想看命定感、和風奇想和有點甜也有點危險的婚約氛圍，《鬼的新娘》會很勾人。", ["#和風奇幻", "#婚約", "#命定感", "#少女向"], { intensity: 0, humor: -1, intimacy: 3, wonder: 2, futurism: -2, darkness: 1, community: -1, mastery: 1, artiness: 0, legacy: -1 }),
    W("otome_kaiju_caramelise", "乙女怪獸焦糖化", "Otome Kaiju Caramelize", "images/34_otome_kaiju_caramelise1.webp", "少女怪獸心動型", "如果你喜歡少女漫畫的心動瞬間再混進一點怪獸級的誇張情緒，《乙女怪獸焦糖化》會很有趣。", ["#少女漫", "#怪獸系情緒", "#可愛誇張", "#戀愛"], { intensity: 1, humor: 2, intimacy: 2, wonder: 1, futurism: -1, darkness: 0, community: 2, mastery: 1, artiness: 1, legacy: -1 }),
    W("zero_people_frontier_lord", "領民 0 人開局的邊境領主大人", "Ryomin 0-nin Start no Henkyo Ryoushu-sama", "images/35_zero_people_frontier_lord1.webp", "開荒經營型", "如果你這輪更想看的是從零開荒、慢慢經營和把一塊地做起來的穩定樂趣，這部會很適合。", ["#開荒", "#領地經營", "#慢慢做大", "#異世界"], { intensity: 0, humor: 0, intimacy: -1, wonder: 2, futurism: -2, darkness: -2, community: 1, mastery: 2, artiness: -1, legacy: -1 }),
    W("reiwa_dara_san", "令和的達拉小姐", "Reiwa no Dara-san", "images/36_reiwa_dara_san1.webp", "怪談脫線型", "你如果吃的是怪談題材裡帶點荒謬和鬆弛的偏門樂趣，《令和的達拉小姐》會是那種很私人的命中。", ["#怪談", "#脫線", "#現代怪異", "#偏門"], { intensity: 0, humor: 2, intimacy: -1, wonder: -2, futurism: -2, darkness: 1, community: 1, mastery: -1, artiness: 1, legacy: -1 }),
    W("lets_go_kaiki_gumi", "Let's Go 怪奇組", "Let's Go Kaiki Gumi", "images/37_lets_go_kaiki_gumi1.webp", "怪奇胡鬧型", "如果你想看的其實是怪異題材外皮下的一群人瞎鬧，那《Let's Go 怪奇組》會很適合邊笑邊看。", ["#怪奇", "#胡鬧", "#群體感", "#輕喜劇"], { intensity: 1, humor: 3, intimacy: -1, wonder: -1, futurism: -2, darkness: 0, community: 3, mastery: -1, artiness: 0, legacy: -1 }),
    W("lv999_villager", "LV999 的村人", "LV999 no Murabito", "images/38_lv999_villager1.webp", "底層逆襲型", "如果你要的是底層起步但一路翻盤的爽感，《LV999 的村人》這種逆襲節奏會給得很直。", ["#逆襲", "#等級感", "#異世界", "#爽感"], { intensity: 2, humor: 0, intimacy: -1, wonder: 1, futurism: -1, darkness: 0, community: 0, mastery: 3, artiness: -1, legacy: -1 }),
    W("world_is_dancing", "World is Dancing", "World is Dancing", "images/39_world_is_dancing1.webp", "身體表達型", "如果你更在意的是身體、節奏、舞動和那種不完全靠台詞說話的表達，《World is Dancing》很可能會讓你停下來。", ["#舞蹈", "#身體表達", "#文藝", "#感官"], { intensity: 0, humor: -2, intimacy: 1, wonder: -2, futurism: -1, darkness: 0, community: -2, mastery: -2, artiness: 3, legacy: -1 }),
    W("aikatsu_stars_anniversary", "偶像活動 Stars! 10th STORY", "Aikatsu Stars! 10th STORY", "images/41_aikatsu_stars_anniversary1.webp", "偶像懷舊型", "如果你想被偶像舞台、青春夢想和回到當年追番狀態的感覺打中，這類周年向作品會很準。", ["#偶像", "#懷舊", "#舞台", "#應援"], { intensity: 0, humor: 1, intimacy: 2, wonder: 1, futurism: -2, darkness: -2, community: 3, mastery: -1, artiness: 1, legacy: 3 }),
    W("time_leap_girl_4k", "穿越時空的少女 4K", "The Girl Who Leapt Through Time 4K", "images/42_time_leap_girl_4k1.webp", "夏日遺憾型", "如果你這輪最對味的是夏天、時間、青春和一點來不及的悵然，那《穿越時空的少女》會非常穩。", ["#夏日", "#青春", "#時間", "#遺憾"], { intensity: -1, humor: -2, intimacy: 2, wonder: -1, futurism: -1, darkness: 0, community: -2, mastery: -2, artiness: 3, legacy: 3 }),
    W("playing_death_games", "為吃飯而玩死亡遊戲 44:CLOUDY BEACH", "Playing Death Games 44: Cloudy Beach", "images/43_playing_death_games_cloudy_beach1.webp", "生存壓迫型", "如果你這輪想被高壓選擇、死亡遊戲和一直吊著的一口氣往前推，那這類型會很有穿透力。", ["#死亡遊戲", "#高刺激", "#壓迫感", "#生存"], { intensity: 3, humor: -3, intimacy: -2, wonder: -2, futurism: 0, darkness: 3, community: -1, mastery: 2, artiness: 1, legacy: -1 }),
    W("kimi_to_hanabi", "與你、煙花與約定", "Kimi to Hanabi to Yakusoku", "images/44_kimi_to_hanabi_to_yakusoku1.webp", "煙火約定型", "如果你只是想在夏夜、煙火和一句說不出口的心情裡待著，《與你、煙花與約定》會很準地落下來。", ["#煙火", "#約定", "#夏夜", "#青春戀愛"], { intensity: -2, humor: -1, intimacy: 3, wonder: -1, futurism: -2, darkness: 0, community: -1, mastery: -2, artiness: 2, legacy: -1 }),
    W("chiikawa_mermaid", "電影 吉伊卡哇 人魚之島", "Chiikawa: Mermaid Island", "images/46_chiikawa_mermaid_island1.webp", "可愛荒誕型", "如果你要的是可愛外殼下的一點點怪、一點點荒誕和很適合分享的角色魅力，《吉伊卡哇》會非常順手。", ["#萌系", "#荒誕", "#可愛", "#社媒傳播"], { intensity: -2, humor: 1, intimacy: 0, wonder: 1, futurism: -1, darkness: 0, community: 1, mastery: -2, artiness: 1, legacy: 2 }),
    W("crayon_shinchan_yokai_vacation", "蠟筆小新 超華麗！灼熱的春日部舞者", "Crayon Shin-chan", "images/47_crayon_shinchan_yokai_vacation1.webp", "國民解壓型", "如果你現在只想找一部能讓人鬆掉、帶點國民動畫的熟悉快樂，《蠟筆小新》這種穩定陪伴值就會很高。", ["#國民動畫", "#解壓", "#家庭向", "#輕鬆"], { intensity: 0, humor: 3, intimacy: 1, wonder: -1, futurism: -2, darkness: -2, community: 3, mastery: -2, artiness: -1, legacy: 3 }),
    W("paprika_4k", "紅辣椒 4K 修復版", "Paprika 4K", "images/48_paprika_4k_remaster1.webp", "夢境影迷型", "如果你這輪的審美雷達明顯朝夢境、潛意識和影像實驗那邊偏，《紅辣椒》會是最難被替代的一種命中。", ["#夢境", "#超現實", "#影迷", "#今敏"], { intensity: 1, humor: -3, intimacy: -2, wonder: -3, futurism: 1, darkness: 3, community: -2, mastery: -2, artiness: 3, legacy: 3 }),
    W("ribbon_hero", "緞帶騎士", "The Ribbon Hero", "images/50_ribbon_hero1.webp", "童話騎士型", "如果你喜歡童話、冒險和一種帶著復古氣息的王道英雄感，《緞帶騎士》這種低門檻奇幻會很好入口。", ["#童話", "#騎士", "#冒險", "#復古 IP"], { intensity: 1, humor: 0, intimacy: 1, wonder: 3, futurism: -2, darkness: -1, community: 1, mastery: 1, artiness: 0, legacy: 2 }),
    W("patlabor_ezy", "機動警察 Patlabor EZY File2", "Patlabor EZY File2", "images/51_patlabor_ezy_file21.webp", "近未來機甲型", "如果你偏愛的是機甲裡偏現實、偏制度、偏近未來工作的那一面，《Patlabor》這種氣質會特別準。", ["#機甲", "#近未來", "#警察", "#現實質感"], { intensity: 0, humor: -2, intimacy: -1, wonder: -2, futurism: 2, darkness: 1, community: -1, mastery: 1, artiness: 2, legacy: 3 }),
    W("shiranui", "不知火", "Shiranui", "images/52_shiranui1.webp", "民俗夏影型", "如果你這輪對地方傳說、記憶和夏天的幽微感特別有反應，《不知火》這種慢熱民俗片會很貼。", ["#民俗", "#夏天", "#記憶", "#靜謐"], { intensity: -2, humor: -2, intimacy: 1, wonder: -1, futurism: -3, darkness: 1, community: -2, mastery: -2, artiness: 3, legacy: -1 }),
    W("madoka_walpurgis", "魔法少女小圓〈魔女之夜的回天〉", "Madoka Magica: Walpurgisnacht Rising", "images/53_madoka_walpurgisnacht_rising1.webp", "宿命魔法少女型", "如果你這輪更吃命運閉環、華麗壓迫和老粉才懂的情緒核，《魔女之夜的回天》會直接往上衝。", ["#黑暗魔法少女", "#宿命", "#高情緒", "#考據"], { intensity: 2, humor: -3, intimacy: 1, wonder: 2, futurism: 1, darkness: 3, community: -2, mastery: 1, artiness: 3, legacy: 3 })
  ],
  questions: [
    Q("opener", "新一季開始時，你第一反應通常是？", [
      O("先挑最能讓人一口氣追下去的", { intensity: 2, mastery: 1, community: 1, humor: -1 }),
      O("先找能陪我慢慢進入狀態的", { intensity: -2, intimacy: 1, darkness: -1, legacy: -1 }),
      O("先看設定、監督或演出是不是夠有趣", { artiness: 2, futurism: 1, intimacy: -1, humor: -1 }),
      O("先找適合和朋友一起吐槽的", { humor: 2, community: 2, intensity: 1, artiness: -1 })
    ]),
    Q("opener", "你點開一支 PV，最先被什麼抓住？", [
      O("戰鬥剪輯和爆點", { intensity: 2, mastery: 1 }),
      O("氣氛和關係張力", { intimacy: 2, darkness: -1 }),
      O("世界觀關鍵詞", { wonder: 2, futurism: 1 }),
      O("畫風和鏡頭語言", { artiness: 2, humor: -1 })
    ]),
    Q("opener", "看到『第二季／劇場版』這幾個字，你會？", [
      O("前作越多越興奮", { legacy: 2, mastery: 1, community: 1 }),
      O("如果情緒對味，我也願意補", { legacy: 1, intimacy: 1, artiness: 1 }),
      O("門檻太高就先放著", { legacy: -2, intensity: -1 }),
      O("只要朋友都在看，我就跟上", { community: 2, humor: 1, legacy: 1 })
    ]),
    Q("opener", "你對『原創新作』最期待哪一點？", [
      O("最好有一種誰也猜不到的衝擊", { artiness: 2, darkness: 1 }),
      O("最好可以舒服地陪我一整季", { intensity: -2, intimacy: 1 }),
      O("最好有我能拿來聊設定的東西", { futurism: 1, wonder: 1, artiness: 1 }),
      O("最好玩得夠瘋夠好笑", { humor: 2, community: 2 })
    ]),
    Q("opener", "片單裡只能先留一部時，你通常保什麼？", [
      O("高風險但可能超炸裂的", { intensity: 2, darkness: 1, artiness: 1 }),
      O("看起來最溫柔耐看的", { intimacy: 2, darkness: -1 }),
      O("設定最複雜、最需要慢慢拼的", { futurism: 1, wonder: 1, artiness: 2 }),
      O("最適合邊看邊發消息的", { community: 2, humor: 2 })
    ]),

    Q("trailer", "一個角色第一眼最讓你心動的是？", [
      O("很強，而且他自己也知道自己很強", { mastery: 2, intensity: 1 }),
      O("看起來就有故事的人", { intimacy: 2, darkness: 1 }),
      O("腦子很好、說話很穩的人", { artiness: 1, futurism: 1, mastery: 1 }),
      O("明明端著，結果一下子崩掉很好笑", { humor: 2, community: 1 })
    ]),
    Q("trailer", "你更吃哪種旁白語氣？", [
      O("命運要開打了", { intensity: 2, wonder: 1 }),
      O("這點日常也很重要", { intensity: -2, intimacy: 1 }),
      O("真相沒有你想得那麼簡單", { artiness: 2, darkness: 1 }),
      O("先別認真，笑完再說", { humor: 2, darkness: -1 })
    ]),
    Q("trailer", "預告裡哪種場面最讓你想看下去？", [
      O("整隊人同時登場", { community: 2, intensity: 1, legacy: 1 }),
      O("兩個人在夜裡安靜說話", { intimacy: 2, intensity: -1 }),
      O("一個世界觀設定一閃而過", { wonder: 1, futurism: 2, artiness: 1 }),
      O("一個離譜畫面把節奏炸開", { humor: 2, intensity: 1 })
    ]),
    Q("trailer", "你更願意為哪種『帥』買單？", [
      O("純粹能打的帥", { mastery: 2, intensity: 1 }),
      O("忍著不說破的帥", { intimacy: 2, darkness: 1 }),
      O("冷冷地把事情看穿的帥", { futurism: 1, artiness: 1, mastery: 1 }),
      O("明明很亂卻特別有魅力的帥", { humor: 2, community: 1 })
    ]),
    Q("trailer", "對角色陣容，你更偏哪一種？", [
      O("主角團越大越好玩", { community: 2, humor: 1, legacy: 1 }),
      O("少數幾個人寫深一點最好", { intimacy: 2, community: -1 }),
      O("設定立得住比人數重要", { artiness: 2, futurism: 1 }),
      O("有一個特別強的核心就夠了", { mastery: 2, community: -1 })
    ]),

    Q("setting", "你更想把自己丟進哪種場景？", [
      O("城市夜色和霓虹反光", { futurism: 2, darkness: 1 }),
      O("夏天小鎮和緩慢日光", { intensity: -2, intimacy: 1, futurism: -1 }),
      O("王國、異界或失落遺跡", { wonder: 2, mastery: 1 }),
      O("社團、酒局或一群人胡鬧的地方", { community: 2, humor: 2 })
    ]),
    Q("setting", "一部作品的『世界感』，你更想要哪種？", [
      O("規則明確、升級痛快", { mastery: 2, wonder: 1 }),
      O("不用解釋太多，氣味先對上", { intimacy: 1, artiness: 1 }),
      O("越陌生越好，最好需要慢慢拼", { artiness: 2, futurism: 1 }),
      O("跟現實很近，但能放大情緒", { intimacy: 2, wonder: -1 })
    ]),
    Q("setting", "你對歷史／近代背景的態度是？", [
      O("只要權謀和命運夠重，我很吃", { darkness: 1, artiness: 1, futurism: -2 }),
      O("有點時代感會讓我更投入人物", { intimacy: 1, futurism: -1 }),
      O("不如直接上未來或科技設定", { futurism: 2, wonder: -1 }),
      O("只要夠熱鬧，什麼年代都行", { humor: 1, community: 1 })
    ]),
    Q("setting", "你喜歡哪種『魔法／能力』？", [
      O("簡單粗暴，打出來就爽", { intensity: 2, mastery: 1 }),
      O("和日常、工作或關係綁在一起的", { intimacy: 1, wonder: 1 }),
      O("規則多一點，越研究越上頭", { artiness: 2, mastery: 1 }),
      O("看起來可愛，實際有點危險", { humor: 1, darkness: 1, wonder: 1 })
    ]),
    Q("setting", "哪種舞台最能讓你停下來？", [
      O("空氣裡都是火藥味的戰場", { intensity: 2, darkness: 2 }),
      O("便利店後門、河堤、天台這種邊角空間", { intensity: -1, intimacy: 2, artiness: 1 }),
      O("舊街景、夏祭、車站、放課後", { futurism: -2, intimacy: 1, artiness: 1 }),
      O("演唱會、比賽場、舞台後台", { community: 2, mastery: 1 })
    ]),

    Q("protagonist", "你最容易代入哪類主角？", [
      O("越逆風越要贏的人", { mastery: 2, intensity: 1 }),
      O("看起來普通，但情緒特別真實的人", { intimacy: 2, legacy: -1 }),
      O("很聰明，甚至有點可怕的人", { artiness: 1, futurism: 1, darkness: 1 }),
      O("明明亂來，卻總能把場子帶熱的人", { humor: 2, community: 2 })
    ]),
    Q("protagonist", "你更喜歡主角用什麼方式解決問題？", [
      O("變強、硬拆、正面推進", { intensity: 2, mastery: 2 }),
      O("先理解人，再決定怎麼做", { intimacy: 2, darkness: -1 }),
      O("觀察規則，抓對方失誤", { artiness: 1, mastery: 1, darkness: 1 }),
      O("先把局面搞得更有趣再說", { humor: 2, community: 1 })
    ]),
    Q("protagonist", "如果主角有明顯缺點，你更能接受哪種？", [
      O("只要打起來夠燃，缺點慢慢改也行", { intensity: 2, legacy: 1 }),
      O("只要情緒寫得真，我會一直陪著看", { intimacy: 2, artiness: 1 }),
      O("只要他的腦回路夠獨特", { futurism: 1, artiness: 2 }),
      O("只要他夠好笑，我願意原諒很多", { humor: 2, community: 1 })
    ]),
    Q("protagonist", "你更吃哪種『成長』？", [
      O("數值和實力肉眼可見地漲", { mastery: 2, wonder: 1 }),
      O("關係慢慢靠近，人也慢慢打開", { intimacy: 2, darkness: -1 }),
      O("認知被不斷推翻的成長", { artiness: 2, darkness: 1 }),
      O("從一群人亂成一團到有默契", { community: 2, humor: 1 })
    ]),
    Q("protagonist", "你更想看主角面對什麼課題？", [
      O("我要贏，而且要贏得漂亮", { intensity: 2, mastery: 2 }),
      O("我要活成自己能接受的樣子", { intimacy: 2, artiness: 1 }),
      O("我要弄懂這個世界到底怎麼回事", { futurism: 1, wonder: 1, artiness: 1 }),
      O("我要先把今天撐過去，順便笑出來", { humor: 2, intensity: -1, intimacy: 1 })
    ]),

    Q("mood", "你這陣子更適合什麼濃度？", [
      O("越高壓越能把我拉進去", { darkness: 2, intensity: 2 }),
      O("輕一點，別再給我額外負擔", { intensity: -2, darkness: -2 }),
      O("有情緒，但最好是慢慢滲進來", { intimacy: 2, artiness: 1 }),
      O("先讓我笑，再談別的", { humor: 2, community: 1 })
    ]),
    Q("mood", "你更喜歡作品怎麼『傷人』？", [
      O("直接給大場面和失去感", { intensity: 2, darkness: 2 }),
      O("用一句話慢慢卡在心裡", { intimacy: 2, artiness: 1 }),
      O("用設定和意象把人繞進去", { artiness: 2, futurism: 1 }),
      O("先把你逗笑，再突然補一刀", { humor: 1, darkness: 1 })
    ]),
    Q("mood", "對你來說，哪種『輕鬆』最有效？", [
      O("節奏快、打得爽，本身就很輕鬆", { intensity: 2, darkness: -1 }),
      O("沒什麼大事，但氣氛很好", { intensity: -2, intimacy: 1 }),
      O("有點怪，但怪得很迷人", { artiness: 2, humor: 1 }),
      O("人多、話密、亂成一團最好", { community: 2, humor: 2 })
    ]),
    Q("mood", "你對『壓迫感』的接受度是？", [
      O("有就有，我甚至會去找最狠的", { darkness: 2, legacy: 1 }),
      O("可以有，但要有人味把我接住", { intimacy: 2, darkness: 1 }),
      O("我更想看冷感和距離感，不一定要虐", { futurism: 1, artiness: 2 }),
      O("不行，我想先開心一點", { humor: 2, darkness: -2 })
    ]),
    Q("mood", "一部片最好的情緒收束方式是？", [
      O("讓人熱血到想立刻下一集", { intensity: 2, community: 1 }),
      O("讓人安靜地緩很久", { intimacy: 2, artiness: 1 }),
      O("讓人腦子轉個不停", { artiness: 2, futurism: 1 }),
      O("讓人發消息給朋友說『你快來看這個』", { community: 2, humor: 1 })
    ]),

    Q("romance", "你對感情線的理想濃度是？", [
      O("點到為止，別耽誤主線推進", { intimacy: -1, mastery: 1, intensity: 1 }),
      O("有曖昧、拉扯、慢慢靠近最好", { intimacy: 2, darkness: -1 }),
      O("命運感強一點也可以，我吃大情緒", { intimacy: 2, wonder: 1, darkness: 1 }),
      O("戀愛也行，但要夠好笑夠誇張", { humor: 2, intimacy: 1 })
    ]),
    Q("romance", "你更容易被哪種關係打動？", [
      O("生死與共的同伴感", { community: 2, intensity: 1 }),
      O("成年人說不破的分寸感", { intimacy: 2, artiness: 1 }),
      O("背景差異很大卻慢慢靠近", { wonder: 1, intimacy: 2 }),
      O("明明互相拌嘴卻越看越對味", { humor: 2, intimacy: 1 })
    ]),
    Q("romance", "如果作品在賣『命運感』，你更買哪種？", [
      O("只要夠壯闊，我買單", { wonder: 2, intensity: 1 }),
      O("只要情緒夠細，我買單", { intimacy: 2, artiness: 1 }),
      O("只要結構夠精巧，我買單", { artiness: 2, legacy: 1 }),
      O("如果太正經，不如給我再瘋一點", { humor: 2, intimacy: -1 })
    ]),
    Q("romance", "你更喜歡哪種心動瞬間？", [
      O("並肩作戰後，默契對上", { mastery: 1, intimacy: 1, community: 1 }),
      O("深夜對話裡一句沒說滿的話", { intimacy: 2, artiness: 1 }),
      O("時間、身份或立場帶來的錯位感", { artiness: 2, darkness: 1 }),
      O("在非常荒謬的情境下突然很真", { humor: 2, intimacy: 1 })
    ]),
    Q("romance", "你怎麼看『後宮／群像戀愛』？", [
      O("只要節奏夠猛，我可以當梗片看", { humor: 2, community: 2 }),
      O("我更喜歡一對一慢慢寫深", { intimacy: 2, community: -1 }),
      O("如果能玩類型梗和結構，我會很有興趣", { artiness: 2, legacy: 1 }),
      O("我寧可不要戀愛線，給我別的更刺激", { intensity: 1, mastery: 1, intimacy: -2 })
    ]),

    Q("social", "你追番時最常出現的姿態是？", [
      O("一個人戴耳機沉進去", { community: -2, artiness: 1 }),
      O("和固定朋友同步追更", { community: 2, legacy: 1 }),
      O("邊看邊查資料邊記東西", { artiness: 2, futurism: 1 }),
      O("彈幕、截圖、吐槽一個都不能少", { community: 2, humor: 2 })
    ]),
    Q("social", "你會把哪類作品主動安利給朋友？", [
      O("爽感特別直接的", { intensity: 2, community: 1 }),
      O("情緒特別對的", { intimacy: 2, community: 1 }),
      O("設定或演出特別奇的", { artiness: 2, futurism: 1 }),
      O("大家一起看會笑瘋的", { humor: 2, community: 2 })
    ]),
    Q("social", "你對『角色廚』這件事的態度是？", [
      O("有高光我就能當場入坑", { mastery: 2, intensity: 1 }),
      O("我更在乎關係網慢慢長出來", { intimacy: 2, community: 1 }),
      O("設定、造型、演出一起成立才行", { artiness: 2 }),
      O("只要角色夠癲夠有梗就行", { humor: 2 })
    ]),
    Q("social", "你更願意在哪種討論裡待久一點？", [
      O("戰力、設定、前後呼應", { mastery: 2, legacy: 1 }),
      O("人物關係和情緒走向", { intimacy: 2 }),
      O("意象、鏡頭、主題解讀", { artiness: 2, futurism: 1 }),
      O("名場面和表情包整理", { humor: 2, community: 2 })
    ]),
    Q("social", "你對『看不懂先刷社媒解釋』的態度是？", [
      O("越多人一起拼圖越有趣", { community: 2, artiness: 1 }),
      O("我想自己慢慢消化", { community: -2, artiness: 1 }),
      O("如果能越挖越深，我很樂意", { artiness: 2, legacy: 1 }),
      O("我更想看一眼就懂的爽點", { legacy: -1, intensity: 1 })
    ]),

    Q("barrier", "你對補番門檻的底線是？", [
      O("只要值，我能補一整條時間線", { legacy: 2, artiness: 1 }),
      O("兩季以內還可以", { legacy: 1 }),
      O("最好新手直接進", { legacy: -2 }),
      O("如果朋友帶著我看，也不是不行", { community: 2, legacy: 1 })
    ]),
    Q("barrier", "看到『4K 重映』『周年企劃』時，你會？", [
      O("立刻想去補經典", { legacy: 2, artiness: 1 }),
      O("看氣氛和題材再決定", { legacy: 0, intimacy: 1 }),
      O("我更想看這個時代的新東西", { legacy: -1, futurism: 1 }),
      O("如果能一起看就更有意思", { community: 2, legacy: 1 })
    ]),
    Q("barrier", "對『續作門檻很高但口碑爆炸』這件事，你通常？", [
      O("門檻越高我越想試", { legacy: 2, mastery: 1 }),
      O("我先看它是不是情緒對味", { intimacy: 1, legacy: 1 }),
      O("我會先研究它為什麼值得", { artiness: 2, legacy: 1 }),
      O("太累了，我想找輕鬆點的", { legacy: -2, humor: 1 })
    ]),
    Q("barrier", "你更能接受哪種資訊密度？", [
      O("設定、術語、陣營一起塞給我", { futurism: 1, legacy: 1, artiness: 1 }),
      O("先給我人物，再慢慢展開", { intimacy: 2, legacy: -1 }),
      O("只要鏡頭和節奏穩，再複雜都行", { artiness: 2 }),
      O("我想先笑出來，再考慮其他", { humor: 2, legacy: -1 })
    ]),
    Q("barrier", "一部作品如果需要前情提要，你會怎麼看？", [
      O("正好，我喜歡有歷史重量的東西", { legacy: 2, darkness: 1 }),
      O("只要人物魅力夠，我還是會進", { intimacy: 1, legacy: 1 }),
      O("我會先看它的世界觀值不值得投時間", { wonder: 1, artiness: 1, legacy: 1 }),
      O("那我可能先去找更好入口的", { legacy: -2, intensity: -1 })
    ]),

    Q("cinema", "你挑暑假劇場版時最看重什麼？", [
      O("大銀幕上一定要夠震", { intensity: 2, artiness: 1 }),
      O("要有餘韻，走出戲院還在心裡轉", { intimacy: 2, artiness: 1 }),
      O("要有我回家想查資料的東西", { artiness: 2, futurism: 1 }),
      O("最好是能跟朋友一起當場聊爆的", { community: 2, humor: 1 })
    ]),
    Q("cinema", "你更想在戲院看到哪種色溫？", [
      O("冷光、機械、金屬和都市夜景", { futurism: 2, darkness: 1 }),
      O("夏天、煙火、風和濕氣", { intimacy: 2, futurism: -1 }),
      O("紅黑撞色、夢境和異常畫面", { artiness: 2, darkness: 1 }),
      O("鮮艷到像一場大型慶典", { community: 2, humor: 1 })
    ]),
    Q("cinema", "你對經典重映最有興趣的是哪一點？", [
      O("想在大銀幕重新被演出打中", { artiness: 2, legacy: 2 }),
      O("想把青春和回憶再過一遍", { intimacy: 1, futurism: -2, legacy: 2 }),
      O("想補自己當年沒趕上的名作", { legacy: 2, mastery: 1 }),
      O("如果朋友約，我會很願意去玩", { community: 2, legacy: 1 })
    ]),
    Q("cinema", "你心中的『電影感』更像哪一種？", [
      O("高概念、強意象、做夢一樣", { artiness: 2, darkness: 1 }),
      O("一個夏天、一段關係、一次錯過", { intimacy: 2, futurism: -1 }),
      O("一場史詩或宿命決戰", { intensity: 2, wonder: 1, legacy: 1 }),
      O("一趟讓人輕鬆出戲院的快樂冒險", { humor: 2, community: 1, darkness: -1 })
    ]),
    Q("cinema", "如果只能保留一種戲院體驗，你會選？", [
      O("被音響和畫面狠狠干到", { intensity: 2 }),
      O("看完沉默很久的心情", { intimacy: 2, artiness: 1 }),
      O("旁邊觀眾也在同一瞬間倒吸一口氣", { community: 2, darkness: 1 }),
      O("出來就能開始瘋狂聊梗和名場面", { humor: 2, community: 2 })
    ]),

    Q("aftertaste", "一部作品結束後，你最想留下什麼？", [
      O("好爽，我還想再看一場", { intensity: 2, mastery: 1 }),
      O("我好像被某個人理解了", { intimacy: 2, darkness: -1 }),
      O("這個東西我得想一會兒", { artiness: 2, futurism: 1 }),
      O("我要把這段發給朋友", { community: 2, humor: 1 })
    ]),
    Q("aftertaste", "你會為哪種作品二刷？", [
      O("打戲、演出或高光太密了", { intensity: 2, legacy: 1 }),
      O("關係細節第一次根本不夠看", { intimacy: 2 }),
      O("伏筆、結構、意象值得重拼", { artiness: 2, darkness: 1 }),
      O("我想再看一遍大家一起發瘋", { humor: 2, community: 2 })
    ]),
    Q("aftertaste", "你更在意作品最後留給你的什麼？", [
      O("推進感：我想馬上追下一段故事", { intensity: 2, legacy: 1 }),
      O("體溫感：角色好像還活在我旁邊", { intimacy: 2 }),
      O("懸念感：我想繼續解讀它", { artiness: 2, futurism: 1 }),
      O("傳播感：我想立刻去安利別人", { community: 2, humor: 1 })
    ]),
    Q("aftertaste", "你最怕作品最後變成什麼樣？", [
      O("明明鋪很大卻收得沒勁", { intensity: 2, artiness: 1 }),
      O("情緒很響，但人沒立住", { intimacy: 2 }),
      O("設定很多，卻沒有真正想法", { futurism: 1, artiness: 2 }),
      O("太端著了，連笑點都沒有", { humor: 2, darkness: -1 })
    ]),
    Q("aftertaste", "如果這輪測完你真的去補片，你最希望那部作品能？", [
      O("把你整個人點燃", { intensity: 2, mastery: 1 }),
      O("像陪伴一樣剛好落下來", { intimacy: 2, darkness: -1 }),
      O("讓你重新校準自己的審美雷達", { artiness: 2, futurism: 1 }),
      O("成為你和朋友下一輪聊天的中心", { community: 2, humor: 2 })
    ])
  ]
};
