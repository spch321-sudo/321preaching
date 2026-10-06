/* 321講道服事 · 真理料理包工作坊（進入時才載入，ES5） */
(function () {
var KI = {"zh": {"title": "真理料理包工作坊", "steps": "禱告領受：神引導人|人引導AI：備齊六大素材|四加：加水・加熱・加菜・加料|守住紅線・內化真理|一包多用：多種形式|講道流程：榮耀歸神", "stepG": "靈|悟|命|命|侍|神", "h0": "先打開聖經、跪下禱告，再打開AI。求神賜下祂要你傳的信息，把聖靈給你的感動寫下來——這是整包料理的源頭。", "lTitle": "主題", "lRef": "核心經文", "lPray": "聖靈給我的感動", "lMsg": "核心信息（神要我傳的一句話）", "refPH": "例：希伯來書 4:2", "prayPH": "禱告中，聖靈讓我看見……", "msgPH": "例：用信心調和所聽見的道，真理才會在生命裡發熱", "mine": "我的料理包", "untitled": "未命名料理包", "delQ": "刪除這個料理包？", "h1": "帶著從神領受的方向，請小智備料。你是導演，AI是劇組；第2項「聖靈啟示」只能從你和神之間來。", "prepAll": "一次備齊其餘五項", "prep": "請小智備料", "preparing": "小智備料中…", "noAI": "不用AI，從禱告中領受", "gotIt": "備好了，請用聖經檢驗", "ing_bible": "聖經真理", "ing_spirit": "聖靈啟示", "ing_s321": "321理念", "ing_sci": "科學知識", "ing_illus": "比喻例證", "ing_apply": "生活應用", "d_bible": "主食材：核心經文、相關經文、原文、歷史背景、神學脈絡", "d_spirit": "聖靈光照你的角度、禱告中的感動、讀經時被打開的領悟", "d_s321": "三個基礎、兩個核心、一個目的，讓會眾落實在生命中", "d_sci": "心理學、腦科學、管理學、歷史資料，佐證真理", "d_illus": "讓抽象真理變得具體、可感受、記得住", "d_apply": "聽完回去可以做的具體行動", "spiritPH": "這一項請你親自寫：聖靈在禱告和讀經中給你的感動……", "test": "聖經是我的準則：AI整理的每一項都要用聖經檢驗——合乎聖經的採用，不合聖經的堅決捨棄；不確定的資料要查證，不可照抄。", "tested": "我已用聖經檢驗每一項素材，並刪去不合適的內容", "h2": "料理包是半成品。端上桌之前，講道者要親自下鍋，總共「四加」——這是AI絕對做不到的部分。", "heat": "加熱：用信心調和真理", "dish": "加菜：加入生命見證", "season": "加料：加入聖靈的感動", "d_heat": "「只是所聽見的道與他們無益，因為他們沒有信心與所聽見的道調和。」（來4:2）你先被這段真理感動了嗎？", "d_dish": "「弟兄勝過牠，是因羔羊的血和自己所見證的道。」（啟12:11）一兩段真實經歷就夠了。", "d_season": "好的講道是內容正確；對的講道是聖靈此刻要對這群人說的話。", "heatPH": "這段真理怎樣先感動了我、改變了我……", "dishPH": "我親身經歷神帶領的見證……", "seasonPH": "聖靈要我特別強調、特別對這群人說的話……", "space": "我在講章裡留了空白，讓聖靈在那些空間裡說話", "h3": "在紅線之內，你可以自由大膽地使用AI；越過紅線，就是危險地帶。然後把料理包內化成你自己的信息。", "red": "三條紅線", "reds": "人不能取代神：我先求問神，沒有跳過禱告|AI不能取代人：我不會把AI寫的稿直接拿去念|AI更不能取代神：信息方向來自聖靈，不是AI", "inT": "內化五步", "ins": "熟讀：明白每一段的邏輯和脈絡|默想：讓核心經文在心裡反覆咀嚼|領受：記下聖靈給的新角度|整理：用自己的語言和節奏表達|成為我自己的信息：消化過、活過", "h4": "同一份料理包，可以產出多種形式，讓真理在整個星期持續影響會眾。逐字稿是用來內化的，不是用來念的。", "f_slides": "投影片大綱", "f_script": "逐字稿草稿", "f_cards": "字卡金句", "f_video": "短影片腳本", "f_podcast": "播客腳本", "fd_slides": "清楚的標題、核心經文、重點摘要，幫會眾抓住重點", "fd_script": "完整內容、經文、比喻、轉場；標出放見證與留白的位置", "fd_cards": "把核心真理濃縮成金句，可做成經文美圖", "fd_video": "一到三分鐘，適合社群分享", "fd_podcast": "通勤、運動、做家務時收聽", "make": "請小智產生", "redo": "重新產生", "h5": "從禱告開始，到禱告結束。講道不是讀稿，不是表演，而是分享生命。", "flow": "禱告開始：從禱告開始，不是從打開電腦開始|信息傳講：看著會眾，不是看著投影片|呼召決志：真理是用來回應的|回應禱告：留時間讓聖靈作深的工作|祝福禱告：求神祝福會眾行出所聽的道", "bless": "願耶和華賜福給你，保護你。願耶和華使他的臉光照你，賜恩給你。願耶和華向你仰臉，賜你平安。", "blessRef": "民數記 6:24-26", "toB": "轉入講章工作坊", "toBDone": "已轉成一篇講章草稿", "newKit": "＋ 新料理包", "askStep": "請小智看這一步", "needMsg": "請先寫下主題或核心信息——神引導人，人才引導AI", "askMsg": "我正在用「真理料理包講道法」預備講道，現在是「{0}」這一步。以下是我目前的內容：\n{1}\n請按神人機協作的原則（神引導人、人引導AI、AI完成工作）幫我檢視，並提出具體建議。", "sys": "你現在協助講道者使用「真理料理包講道法」備料。原則：神引導人，人引導AI，AI完成工作；神作神，人作人，AI作工具。只負責整理素材，以講道者給的核心信息為準，不替他決定信息方向，也不代替他的見證和聖靈的感動。引用經文用和合本並附出處；科學或歷史資料要寫出來源，不確定就註明「需查證」，絕不編造數據或引文。用簡潔的條列，不要用表格。", "ask_bible": "請整理「聖經真理」素材：核心經文的上下文與歷史背景、重要原文字詞（附音譯與意思）、3到5處相關經文（和合本，附出處）、這段真理的神學脈絡，以及它怎樣指向基督。", "ask_s321": "請整理「321理念」素材：這個主題怎樣連結三個基礎（耶穌是我的榜樣、聖經是我的準則、聖靈是我的引導）、兩個核心（讓耶穌作王、讓耶穌得著一切的榮耀）、一個目的（建立屬神的體系），以及無己的生命、五重改變，各寫一兩句。", "ask_sci": "請整理「科學知識」素材：2到3個能佐證這個真理的心理學、腦科學、管理學或歷史資料，每項寫出來源（研究者、機構或年份）與重點；不確定的請註明「需查證」，不要編造數據。", "ask_illus": "請整理「比喻例證」素材：3個貼近現代生活的比喻或例證，每個說明它對應哪一個真理，以及講完後怎樣用一句話接回真理。", "ask_apply": "請整理「生活應用」素材：依觀念、生命、生活、關係、事工各寫一個具體、可行、有時間的應用，並從恩典出發（因為基督已成就，所以我們可以……）。", "form_slides": "請把以上素材整理成8到12張投影片的大綱：每張一行短標題，下面一節經文或一句重點，不要密密麻麻的文字。", "form_script": "請把以上素材整理成約2000字的講章逐字稿草稿：開頭、三個重點、應用、呼召、結束禱告（結尾用「奉主耶穌的名禱告，阿們」）。在需要講道者親身見證的地方標出【這裡放你的見證】，在需要聖靈感動的地方標出【留白給聖靈】。", "form_cards": "請濃縮出5句金句或經文卡片文字，每句不超過30字，一行一句，不要編號以外的符號。", "form_video": "請寫一支60到90秒短影片的腳本：開場鉤子、核心真理、一個有畫面感的比喻、一句行動呼召，標出每段大約秒數。", "form_podcast": "請寫一集約10分鐘播客的腳本大綱（主持人口吻），分段標出時間，包含開場、經文、故事、應用與結尾祝福。", "water": "加水：加上聖靈純淨的活水", "d_water": "「從他腹中要流出活水的江河來。」耶穌這話是指著信他之人要受聖靈說的（約7:38-39）。加水是聖靈親自澆灌的，放在最前面；有了活水，後面三加才煮得開。", "waterPH": "上台前我怎樣求聖靈充滿、認罪潔淨；要放下哪些驕傲、表演和人的意思……", "watered": "我已求聖靈充滿、認罪潔淨，倚靠活水而不倚靠講稿"}, "zs": {"title": "真理料理包工作坊", "steps": "祷告领受：神引导人|人引导AI：备齐六大素材|四加：加水・加热・加菜・加料|守住红线・内化真理|一包多用：多种形式|讲道流程：荣耀归神", "stepG": "灵|悟|命|命|侍|神", "h0": "先打开圣经、跪下祷告，再打开AI。求神赐下祂要你传的信息，把圣灵给你的感动写下来——这是整包料理的源头。", "lTitle": "主题", "lRef": "核心经文", "lPray": "圣灵给我的感动", "lMsg": "核心信息（神要我传的一句话）", "refPH": "例：希伯来书 4:2", "prayPH": "祷告中，圣灵让我看见……", "msgPH": "例：用信心调和所听见的道，真理才会在生命里发热", "mine": "我的料理包", "untitled": "未命名料理包", "delQ": "删除这个料理包？", "h1": "带着从神领受的方向，请小智备料。你是导演，AI是剧组；第2项「圣灵启示」只能从你和神之间来。", "prepAll": "一次备齐其余五项", "prep": "请小智备料", "preparing": "小智备料中…", "noAI": "不用AI，从祷告中领受", "gotIt": "备好了，请用圣经检验", "ing_bible": "圣经真理", "ing_spirit": "圣灵启示", "ing_s321": "321理念", "ing_sci": "科学知识", "ing_illus": "比喻例证", "ing_apply": "生活应用", "d_bible": "主食材：核心经文、相关经文、原文、历史背景、神学脉络", "d_spirit": "圣灵光照你的角度、祷告中的感动、读经时被打开的领悟", "d_s321": "三个基础、两个核心、一个目的，让会众落实在生命中", "d_sci": "心理学、脑科学、管理学、历史资料，佐证真理", "d_illus": "让抽象真理变得具体、可感受、记得住", "d_apply": "听完回去可以做的具体行动", "spiritPH": "这一项请你亲自写：圣灵在祷告和读经中给你的感动……", "test": "圣经是我的准则：AI整理的每一项都要用圣经检验——合乎圣经的采用，不合圣经的坚决舍弃；不确定的资料要查证，不可照抄。", "tested": "我已用圣经检验每一项素材，并删去不合适的内容", "h2": "料理包是半成品。端上桌之前，讲道者要亲自下锅，总共「四加」——这是AI绝对做不到的部分。", "heat": "加热：用信心调和真理", "dish": "加菜：加入生命见证", "season": "加料：加入圣灵的感动", "d_heat": "「只是所听见的道与他们无益，因为他们没有信心与所听见的道调和。」（来4:2）你先被这段真理感动了吗？", "d_dish": "「弟兄胜过牠，是因羔羊的血和自己所见证的道。」（启12:11）一两段真实经历就够了。", "d_season": "好的讲道是内容正确；对的讲道是圣灵此刻要对这群人说的话。", "heatPH": "这段真理怎样先感动了我、改变了我……", "dishPH": "我亲身经历神带领的见证……", "seasonPH": "圣灵要我特别强调、特别对这群人说的话……", "space": "我在讲章里留了空白，让圣灵在那些空间里说话", "h3": "在红线之内，你可以自由大胆地使用AI；越过红线，就是危险地带。然后把料理包内化成你自己的信息。", "red": "三条红线", "reds": "人不能取代神：我先求问神，没有跳过祷告|AI不能取代人：我不会把AI写的稿直接拿去念|AI更不能取代神：信息方向来自圣灵，不是AI", "inT": "内化五步", "ins": "熟读：明白每一段的逻辑和脉络|默想：让核心经文在心里反覆咀嚼|领受：记下圣灵给的新角度|整理：用自己的语言和节奏表达|成为我自己的信息：消化过、活过", "h4": "同一份料理包，可以产出多种形式，让真理在整个星期持续影响会众。逐字稿是用来内化的，不是用来念的。", "f_slides": "投影片大纲", "f_script": "逐字稿草稿", "f_cards": "字卡金句", "f_video": "短影片脚本", "f_podcast": "播客脚本", "fd_slides": "清楚的标题、核心经文、重点摘要，帮会众抓住重点", "fd_script": "完整内容、经文、比喻、转场；标出放见证与留白的位置", "fd_cards": "把核心真理浓缩成金句，可做成经文美图", "fd_video": "一到三分钟，适合社群分享", "fd_podcast": "通勤、运动、做家务时收听", "make": "请小智产生", "redo": "重新产生", "h5": "从祷告开始，到祷告结束。讲道不是读稿，不是表演，而是分享生命。", "flow": "祷告开始：从祷告开始，不是从打开电脑开始|信息传讲：看着会众，不是看着投影片|呼召决志：真理是用来回应的|回应祷告：留时间让圣灵作深的工作|祝福祷告：求神祝福会众行出所听的道", "bless": "愿耶和华赐福给你，保护你。愿耶和华使他的脸光照你，赐恩给你。愿耶和华向你仰脸，赐你平安。", "blessRef": "民数记 6:24-26", "toB": "转入讲章工作坊", "toBDone": "已转成一篇讲章草稿", "newKit": "＋ 新料理包", "askStep": "请小智看这一步", "needMsg": "请先写下主题或核心信息——神引导人，人才引导AI", "askMsg": "我正在用「真理料理包讲道法」预备讲道，现在是「{0}」这一步。以下是我目前的内容：\n{1}\n请按神人机协作的原则（神引导人、人引导AI、AI完成工作）帮我检视，并提出具体建议。", "sys": "你现在协助讲道者使用「真理料理包讲道法」备料。原则：神引导人，人引导AI，AI完成工作；神作神，人作人，AI作工具。只负责整理素材，以讲道者给的核心信息为准，不替他决定信息方向，也不代替他的见证和圣灵的感动。引用经文用和合本并附出处；科学或历史资料要写出来源，不确定就注明「需查证」，绝不编造数据或引文。用简洁的条列，不要用表格。", "ask_bible": "请整理「圣经真理」素材：核心经文的上下文与历史背景、重要原文字词（附音译与意思）、3到5处相关经文（和合本，附出处）、这段真理的神学脉络，以及它怎样指向基督。", "ask_s321": "请整理「321理念」素材：这个主题怎样连结三个基础（耶稣是我的榜样、圣经是我的准则、圣灵是我的引导）、两个核心（让耶稣作王、让耶稣得着一切的荣耀）、一个目的（建立属神的体系），以及无己的生命、五重改变，各写一两句。", "ask_sci": "请整理「科学知识」素材：2到3个能佐证这个真理的心理学、脑科学、管理学或历史资料，每项写出来源（研究者、机构或年份）与重点；不确定的请注明「需查证」，不要编造数据。", "ask_illus": "请整理「比喻例证」素材：3个贴近现代生活的比喻或例证，每个说明它对应哪一个真理，以及讲完后怎样用一句话接回真理。", "ask_apply": "请整理「生活应用」素材：依观念、生命、生活、关系、事工各写一个具体、可行、有时间的应用，并从恩典出发（因为基督已成就，所以我们可以……）。", "form_slides": "请把以上素材整理成8到12张投影片的大纲：每张一行短标题，下面一节经文或一句重点，不要密密麻麻的文字。", "form_script": "请把以上素材整理成约2000字的讲章逐字稿草稿：开头、三个重点、应用、呼召、结束祷告（结尾用「奉主耶稣的名祷告，阿们」）。在需要讲道者亲身见证的地方标出【这里放你的见证】，在需要圣灵感动的地方标出【留白给圣灵】。", "form_cards": "请浓缩出5句金句或经文卡片文字，每句不超过30字，一行一句，不要编号以外的符号。", "form_video": "请写一支60到90秒短影片的脚本：开场钩子、核心真理、一个有画面感的比喻、一句行动呼召，标出每段大约秒数。", "form_podcast": "请写一集约10分钟播客的脚本大纲（主持人口吻），分段标出时间，包含开场、经文、故事、应用与结尾祝福。", "water": "加水：加上圣灵纯净的活水", "d_water": "「从他腹中要流出活水的江河来。」耶稣这话是指着信他之人要受圣灵说的（约7:38-39）。加水是圣灵亲自浇灌的，放在最前面；有了活水，后面三加才煮得开。", "waterPH": "上台前我怎样求圣灵充满、认罪洁净；要放下哪些骄傲、表演和人的意思……", "watered": "我已求圣灵充满、认罪洁净，倚靠活水而不倚靠讲稿"}, "en": {"title": "Truth Meal-Kit Workshop", "steps": "Pray and receive: God guides people|People guide AI: gather six ingredients|Four adds: water · heat · add · season|Keep the red lines · internalise|One kit, many forms|Preaching flow: glory to God", "stepG": "Spirit|Understanding|Life|Life|Serve|God", "h0": "Open the Bible and kneel in prayer before you open AI. Ask God for the message he wants you to bring, and write down the Spirit's prompting — this is the source of the whole kit.", "lTitle": "Theme", "lRef": "Key passage", "lPray": "The Spirit's prompting to me", "lMsg": "Core message (one sentence God wants me to bring)", "refPH": "e.g. Hebrews 4:2", "prayPH": "In prayer, the Spirit showed me…", "msgPH": "e.g. When we mix the word with faith, truth grows warm in our lives", "mine": "My meal-kits", "untitled": "Untitled meal-kit", "delQ": "Delete this meal-kit?", "h1": "With the direction you received from God, ask Xiaozhi to gather ingredients. You are the director, AI is the crew. Ingredient 2, “the Spirit's revelation”, can only come from you and God.", "prepAll": "Gather the other five at once", "prep": "Ask Xiaozhi", "preparing": "Xiaozhi is preparing…", "noAI": "No AI — received in prayer", "gotIt": "Ready — test it against Scripture", "ing_bible": "Biblical truth", "ing_spirit": "The Spirit's revelation", "ing_s321": "The 321 vision", "ing_sci": "Knowledge", "ing_illus": "Illustrations", "ing_apply": "Life application", "d_bible": "Main ingredient: key and related passages, original language, background, theology", "d_spirit": "The angle the Spirit shows you, prompting in prayer, insight opened while reading", "d_s321": "Three foundations, two cores, one purpose — helping people live it out", "d_sci": "Psychology, brain science, management, history that support the truth", "d_illus": "Making abstract truth concrete, felt and remembered", "d_apply": "Concrete actions people can take afterwards", "spiritPH": "Write this one yourself: what the Spirit has shown you in prayer and Scripture…", "test": "The Bible is my standard: test every item AI gathers against Scripture — keep what agrees, firmly discard what does not, and verify anything uncertain rather than copying it.", "tested": "I have tested every ingredient against Scripture and removed what does not fit", "h2": "A meal-kit is half-made. Before it reaches the table, the preacher must cook it with four “adds” — the part AI can never do.", "heat": "Heat it: mix truth with faith", "dish": "Add to it: your testimony", "season": "Season it: the Spirit's prompting", "d_heat": "“The word they heard didn't profit them, because it wasn't mixed with faith” (Hebrews 4:2). Has this truth moved you first?", "d_dish": "“They overcame him because of the Lamb's blood, and because of the word of their testimony” (Revelation 12:11). One or two real stories are enough.", "d_season": "A good sermon is accurate; a right sermon is what the Spirit wants to say to these people now.", "heatPH": "How this truth first moved and changed me…", "dishPH": "My testimony of how God led me…", "seasonPH": "What the Spirit wants me to stress for these people…", "space": "I have left space in the sermon for the Holy Spirit to speak", "h3": "Within the red lines, use AI freely and boldly; beyond them is danger. Then internalise the kit until it is your own message.", "red": "Three red lines", "reds": "People must not replace God: I sought God first and did not skip prayer|AI must not replace people: I will not read an AI script straight from the page|AI must never replace God: the direction comes from the Spirit, not AI", "inT": "Five steps to internalise", "ins": "Read: grasp the logic and flow of each section|Meditate: let the key passage turn over in my heart|Receive: write down fresh angles from the Spirit|Arrange: express it in my own words and rhythm|Make it mine: digested and lived", "h4": "One kit can become many forms, so truth keeps shaping people all week. A manuscript is for internalising, not for reading aloud.", "f_slides": "Slide outline", "f_script": "Manuscript draft", "f_cards": "Key-line cards", "f_video": "Short video script", "f_podcast": "Podcast script", "fd_slides": "Clear titles, key verses and main points that help people grasp the message", "fd_script": "Full content, verses, illustrations, transitions; marks where your testimony and Spirit-space go", "fd_cards": "Core truth in short lines — can become verse pictures", "fd_video": "One to three minutes, for sharing on social media", "fd_podcast": "For commuting, exercise and housework", "make": "Ask Xiaozhi", "redo": "Regenerate", "h5": "Begin with prayer and end with prayer. Preaching is not reading a script or performing; it is sharing life.", "flow": "Begin with prayer — not by switching on the computer|Deliver the message — look at people, not the slides|Give an invitation — truth is meant to be answered|Time of response — give the Spirit room to work deeply|Blessing — ask God to help people live what they heard", "bless": "The LORD bless you, and keep you. The LORD make his face to shine on you, and be gracious to you. The LORD lift up his face toward you, and give you peace.", "blessRef": "Numbers 6:24-26", "toB": "Send to Sermon Workshop", "toBDone": "Turned into a sermon draft", "newKit": "＋ New meal-kit", "askStep": "Ask Xiaozhi about this step", "needMsg": "Write the theme or core message first — God guides people, then people guide AI", "askMsg": "I'm preparing a sermon with the Truth Meal-Kit Method, on the step “{0}”. Here is what I have:\n{1}\nPlease review it by the principles of God–people–AI collaboration (God guides people, people guide AI, AI does the work) and give specific suggestions.", "sys": "You are now helping a preacher prepare with the Truth Meal-Kit Method. Principles: God guides people, people guide AI, AI does the work; God is God, people are people, AI is a tool. Only gather and organise material, follow the preacher's core message, never decide the direction for them, and never replace their testimony or the Spirit's prompting. Quote the World English Bible with references; for scientific or historical material give the source, mark anything uncertain as “needs checking”, and never invent data or quotations. Use concise bullet points, no tables.", "ask_bible": "Gather “biblical truth” material: the context and background of the key passage, important original-language words (with transliteration and meaning), 3–5 related passages (with references), the theological context, and how it points to Christ.", "ask_s321": "Gather “321 vision” material: how this theme connects with the three foundations (Jesus is my example, the Bible is my standard, the Holy Spirit is my guide), the two cores (let Jesus be King, let Jesus receive all the glory), the one purpose (build God's system), the self-emptied life and the five layers of change — one or two sentences each.", "ask_sci": "Gather “knowledge” material: 2–3 findings from psychology, brain science, management or history that support this truth, each with its source (researcher, institution or year) and main point; mark anything uncertain as “needs checking” and never invent data.", "ask_illus": "Gather “illustration” material: 3 analogies or examples from modern life, each showing which truth it illustrates and one sentence that ties it back to the truth.", "ask_apply": "Gather “life application” material: one specific, doable, time-bound application each for mindset, life, lifestyle, relationships and ministry, flowing from grace (because Christ has done it, we can…).", "form_slides": "Turn the material above into an outline of 8–12 slides: one short title per slide with one verse or key line beneath — not crowded with text.", "form_script": "Turn the material above into a manuscript draft of about 1,200 words: opening, three main points, application, invitation and closing prayer (ending “in the name of the Lord Jesus we pray, Amen”). Mark [YOUR TESTIMONY HERE] where the preacher's own story belongs and [SPACE FOR THE SPIRIT] where the Spirit's prompting belongs.", "form_cards": "Distil 5 key lines or verse-card texts, each under 20 words, one per line.", "form_video": "Write a 60–90 second short-video script: hook, core truth, one vivid analogy, a call to action, with approximate seconds for each part.", "form_podcast": "Write an outline for a 10-minute podcast episode in a host's voice, with timings: opening, passage, story, application and closing blessing.", "water": "Add water: the pure living water of the Spirit", "d_water": "“From within him will flow rivers of living water.” He said this about the Spirit (John 7:38-39). The water is what the Spirit pours out, so it comes first; with living water the other three adds can cook.", "waterPH": "How I will ask to be filled with the Spirit and cleansed before preaching; what pride, performance or agenda I must lay down…", "watered": "I have asked to be filled with the Spirit and cleansed, relying on living water rather than my notes"}};
function K(k) { var d = KI[L()] || KI.zh, s = d[k]; if (s == null) s = KI.zh[k]; if (s == null) s = k; for (var i = 1; i < arguments.length; i++) s = String(s).split('{' + (i - 1) + '}').join(arguments[i]); return s; }
var ING = ['bible', 'spirit', 's321', 'sci', 'illus', 'apply'];
var FORMS = ['slides', 'script', 'cards', 'video', 'podcast'];
var KS = { i: 0, id: null, busy: {} };
function kits() { if (!S.kits) S.kits = []; return S.kits; }
function cur() { var a = kits(); for (var i = 0; i < a.length; i++) if (a[i].id === KS.id) return a[i]; return null; }
function newKit() { var k = { id: 'k' + now(), at: now(), f: {}, c: {}, out: {} }; kits().unshift(k); KS.id = k.id; KS.i = 0; save(); return k; }
function fld(k, key, label, big, ph) {
  var v = esc(k.f[key] || '');
  return '<label class="fl">' + esc(label) + '</label>' + (big ? '<textarea data-kf="' + key + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : '') + '>' + v + '</textarea>' : '<input type="text" data-kf="' + key + '" value="' + v + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : '') + '>');
}
function chk(k, key, label) { return '<label class="chkrow"><input type="checkbox" data-kc="' + key + '"' + (k.c[key] ? ' checked' : '') + '><span>' + esc(label) + '</span></label>'; }
function ctxText(k, withIng) {
  var f = k.f, o = [];
  if (f.title) o.push(K('lTitle') + T('sep') + f.title); if (f.ref) o.push(K('lRef') + T('sep') + f.ref);
  if (f.msg) o.push(K('lMsg') + T('sep') + f.msg); if (f.pray) o.push(K('lPray') + T('sep') + f.pray);
  if (withIng) { for (var i = 0; i < ING.length; i++) { var v = f['i_' + ING[i]]; if (v) o.push('【' + K('ing_' + ING[i]) + '】\n' + v); }
    if (f.water) o.push('【' + K('water') + '】\n' + f.water); if (f.heat) o.push('【' + K('heat') + '】\n' + f.heat); if (f.dish) o.push('【' + K('dish') + '】\n' + f.dish); if (f.season) o.push('【' + K('season') + '】\n' + f.season); }
  return o.join('\n');
}
function ai(ask, cb) {
  var body = { model: SVC.model, max_tokens: 2400, system: T('xzSys') + '\n\n' + K('sys'), messages: [{ role: 'user', content: ask }] };
  (function go(n) {
    ajax('POST', SVC.xz, body, null, function (st, txt) {
      var r = ''; if (st === 200) { try { r = extractReply(JSON.parse(txt)); } catch (e) { r = txt; } }
      if (!r && n < 2) { setTimeout(function () { go(n + 1); }, 900 * (n + 1)); return; }
      cb(r ? mdStrip(r) : '', st);
    });
  })(0);
}
function need(k) { if (!trim(k.f.msg || '') && !trim(k.f.title || '')) { toast(K('needMsg')); KS.i = 0; draw(); return true; } return false; }
function prep(key) {
  var k = cur(); if (!k || KS.busy[key] || need(k)) return;
  if (navigator.onLine === false) { toast(T('xzOffline')); return; }
  KS.busy[key] = 1; draw();
  ai(ctxText(k, false) + '\n\n' + K('ask_' + key), function (r, st) {
    KS.busy[key] = 0; if (r) { k.f['i_' + key] = r; k.at = now(); save(); toast(K('gotIt')); } else toast(T('xzFail') + (st ? '（http ' + st + '）' : ''));
    if (R.page.t === 'kit') draw();
  });
}
function prepAll() { for (var i = 0; i < ING.length; i++) if (ING[i] !== 'spirit' && !trim(cur().f['i_' + ING[i]] || '')) prep(ING[i]); }
function form(key) {
  var k = cur(); if (!k || KS.busy['o' + key] || need(k)) return;
  if (navigator.onLine === false) { toast(T('xzOffline')); return; }
  KS.busy['o' + key] = 1; draw();
  ai(ctxText(k, true) + '\n\n' + K('form_' + key), function (r, st) {
    KS.busy['o' + key] = 0; if (r) { k.out[key] = r; k.at = now(); save(); } else toast(T('xzFail') + (st ? '（http ' + st + '）' : ''));
    if (R.page.t === 'kit') draw();
  });
}
function allText(k) {
  var o = [ctxText(k, true)], i;
  for (i = 0; i < FORMS.length; i++) if (k.out[FORMS[i]]) o.push('【' + K('f_' + FORMS[i]) + '】\n' + k.out[FORMS[i]]);
  return (k.f.title ? '' : K('untitled') + '\n') + o.join('\n\n') + '\n\n—— ' + T('appName') + ' · ' + T('fellowshipName');
}
function toBuilder() {
  var k = cur(); if (!k) return; var f = k.f, d = { id: 'd' + now(), at: now(), f: {} };
  d.f.title = f.title || ''; d.f.ref = f.ref || ''; d.f.big = f.msg || ''; d.f.pray = f.pray || ''; d.f.mean = f.i_bible || '';
  d.f.illus = f.i_illus || ''; d.f.testi = f.dish || ''; d.f.a3 = f.i_apply || ''; d.f.me = f.heat || '';
  S.drafts.unshift(d); save(); bState = { i: 0, id: d.id }; toast(K('toBDone')); open_({ t: 'builder' });
}
function step0(k) {
  var h = '<div class="hint">' + esc(K('h0')) + '</div>' + fld(k, 'title', K('lTitle'), 0) + fld(k, 'ref', K('lRef'), 0, K('refPH')) + fld(k, 'pray', K('lPray'), 1, K('prayPH')) + fld(k, 'msg', K('lMsg'), 1, K('msgPH'));
  var a = kits(); if (a.length > 1) {
    h += '<p class="eyebrow">' + esc(K('mine')) + '</p>';
    for (var i = 0; i < a.length; i++) { var x = a[i]; h += '<div class="litem" style="cursor:default"><div class="grow"><div class="lt">' + esc(x.f.title || K('untitled')) + (x.id === KS.id ? ' ✓' : '') + '</div><div class="ls">' + esc(x.f.ref || '') + '　' + fmtDate(x.at) + '</div></div><button class="btn sm" data-kopen="' + x.id + '">' + esc(T('edit')) + '</button><button class="btn sm" data-kdel="' + x.id + '">✕</button></div>'; }
  }
  return h;
}
function step1(k) {
  var h = '<div class="hint">' + esc(K('h1')) + '</div><button class="btn sm pri" data-kall="1">🍱 ' + esc(K('prepAll')) + '</button>';
  for (var i = 0; i < ING.length; i++) {
    var g = ING[i], b = KS.busy[g];
    h += '<div class="kitem"><div class="row" style="justify-content:space-between;gap:8px"><b>' + (i + 1) + '. ' + esc(K('ing_' + g)) + '</b>' +
      (g === 'spirit' ? '<span class="xs muted">' + esc(K('noAI')) + '</span>' : '<button class="btn sm gold" data-kprep="' + g + '"' + (b ? ' disabled' : '') + '>' + (b ? esc(K('preparing')) : '🤖 ' + esc(K('prep'))) + '</button>') + '</div>' +
      '<div class="xs muted">' + esc(K('d_' + g)) + '</div><textarea data-kf="i_' + g + '"' + (g === 'spirit' ? ' placeholder="' + esc(K('spiritPH')) + '"' : '') + '>' + esc(k.f['i_' + g] || '') + '</textarea></div>';
  }
  return h + '<div class="warn">' + esc(K('test')) + '</div>' + chk(k, 'tested', K('tested'));
}
function step2(k) {
  return '<div class="hint">' + esc(K('h2')) + '</div>' +
    '<div class="kitem"><b>💧 ' + esc(K('water')) + '</b><div class="xs muted">' + esc(K('d_water')) + '</div><textarea data-kf="water" placeholder="' + esc(K('waterPH')) + '">' + esc(k.f.water || '') + '</textarea></div>' +
    chk(k, 'watered', K('watered')) +
    '<div class="kitem"><b>🔥 ' + esc(K('heat')) + '</b><div class="xs muted">' + esc(K('d_heat')) + '</div><textarea data-kf="heat" placeholder="' + esc(K('heatPH')) + '">' + esc(k.f.heat || '') + '</textarea></div>' +
    '<div class="kitem"><b>🥗 ' + esc(K('dish')) + '</b><div class="xs muted">' + esc(K('d_dish')) + '</div><textarea data-kf="dish" placeholder="' + esc(K('dishPH')) + '">' + esc(k.f.dish || '') + '</textarea></div>' +
    '<div class="kitem"><b>🧂 ' + esc(K('season')) + '</b><div class="xs muted">' + esc(K('d_season')) + '</div><textarea data-kf="season" placeholder="' + esc(K('seasonPH')) + '">' + esc(k.f.season || '') + '</textarea></div>' +
    
    chk(k, 'space', K('space'));
}
function step3(k) {
  var h = '<p class="eyebrow">' + esc(K('red')) + '</p>', r = K('reds').split('|'), m = K('ins').split('|'), i;
  for (i = 0; i < r.length; i++) h += chk(k, 'r' + i, r[i]);
  h += '<p class="eyebrow">' + esc(K('inT')) + '</p>';
  for (i = 0; i < m.length; i++) h += chk(k, 'n' + i, m[i]);
  return '<div class="hint">' + esc(K('h3')) + '</div>' + h;
}
function step4(k) {
  var h = '<div class="hint">' + esc(K('h4')) + '</div>';
  for (var i = 0; i < FORMS.length; i++) {
    var g = FORMS[i], b = KS.busy['o' + g], o = k.out[g];
    h += '<div class="kitem"><div class="row" style="justify-content:space-between;gap:8px"><b>' + esc(K('f_' + g)) + '</b><button class="btn sm gold" data-kform="' + g + '"' + (b ? ' disabled' : '') + '>' + (b ? esc(K('preparing')) : (o ? '↻ ' + esc(K('redo')) : '🤖 ' + esc(K('make')))) + '</button></div><div class="xs muted">' + esc(K('fd_' + g)) + '</div>' +
      (o ? '<div class="out">' + esc(o) + '</div><div class="row wrap" style="gap:6px;margin-top:6px"><button class="btn sm" data-kcopy="' + g + '">' + esc(T('copy')) + '</button><button class="btn sm" data-kshare="' + g + '">' + esc(T('share')) + '</button>' +
        (g === 'cards' ? '<button class="btn sm gold" data-kcard="1">🖼 ' + esc(T('makeCard')) + '</button>' : '') + (g === 'script' ? '<button class="btn sm" data-kread="1">🔊 ' + esc(T('readThis')) + '</button>' : '') + '</div>' : '') + '</div>';
  }
  return h;
}
function step5(k) {
  var h = '<div class="hint">' + esc(K('h5')) + '</div>', fl = K('flow').split('|');
  for (var i = 0; i < fl.length; i++) h += chk(k, 'f' + i, fl[i]);
  h += '<div class="verse">' + esc(K('bless')) + '</div><div class="vref2">' + esc(K('blessRef')) + '</div>';
  h += '<div class="row wrap" style="gap:8px;margin-top:10px"><button class="btn gold" data-kbuild="1">🛠️ ' + esc(K('toB')) + '</button><button class="btn" data-kall2="copy">' + esc(T('copyAll')) + '</button><button class="btn" data-kall2="share">' + esc(T('share')) + '</button></div>';
  return h;
}
var STEPS = [step0, step1, step2, step3, step4, step5];
function draw() {
  var k = cur(); if (!k) k = kits()[0]; if (!k) k = newKit(); KS.id = k.id;
  var n = KS.i, tt = K('steps').split('|'), gg = K('stepG').split('|');
  var h = topbar(K('title'), true) + '<div class="wrap"><div class="card"><div class="steps">';
  for (var i = 0; i < STEPS.length; i++) h += '<i class="' + (i <= n ? 'on' : '') + '" data-kgo="' + i + '"></i>';
  h += '</div><span class="tag">' + esc(T('bStep', gg[n], n + 1, STEPS.length)) + '</span><h2 style="margin:6px 0">' + esc(tt[n]) + '</h2>' + STEPS[n](k);
  h += '<div class="row navrow">' + (n > 0 ? '<button class="btn sm" data-kmv="-1">' + esc(T('prevStep')) + '</button>' : '<span></span>') +
    (n < STEPS.length - 1 ? '<button class="btn gold" data-kmv="1">' + esc(T('nextStep')) + '</button>' : '<span></span>') + '</div></div>';
  h += '<div class="row wrap" style="gap:8px"><button class="btn sm pri" data-kask="1">' + svgI('chat') + ' ' + esc(K('askStep')) + '</button><button class="btn sm" data-knew="1">' + esc(K('newKit')) + '</button></div></div>';
  var y = window.scrollY; setApp(h); window.scrollTo(0, y); bind(k);
}
function bind(k) {
  var app = $('#app');
  eachA($$('[data-kf]', app), function (el) { el.oninput = function () { k.f[el.getAttribute('data-kf')] = el.value; k.at = now(); save(); }; });
  eachA($$('[data-kc]', app), function (el) { el.onchange = function () { k.c[el.getAttribute('data-kc')] = el.checked; save(); }; });
  eachA($$('[data-kmv]', app), function (b) { b.onclick = function () { KS.i = Math.max(0, Math.min(STEPS.length - 1, KS.i + (+b.getAttribute('data-kmv')))); draw(); window.scrollTo(0, 0); }; });
  eachA($$('[data-kgo]', app), function (b) { b.onclick = function () { KS.i = +b.getAttribute('data-kgo'); draw(); }; });
  eachA($$('[data-kprep]', app), function (b) { b.onclick = function () { prep(b.getAttribute('data-kprep')); }; });
  eachA($$('[data-kform]', app), function (b) { b.onclick = function () { form(b.getAttribute('data-kform')); }; });
  eachA($$('[data-kall]', app), function (b) { b.onclick = prepAll; });
  eachA($$('[data-kcopy]', app), function (b) { b.onclick = function () { copyText(k.out[b.getAttribute('data-kcopy')] || ''); }; });
  eachA($$('[data-kshare]', app), function (b) { b.onclick = function () { shareText(k.out[b.getAttribute('data-kshare')] || ''); }; });
  eachA($$('[data-kcard]', app), function (b) { b.onclick = function () { var ls = String(k.out.cards || '').split('\n'), t = ''; for (var i = 0; i < ls.length; i++) { t = trim(ls[i].replace(/^[・\-\d.、\s]+/, '')); if (t) break; } openStudio({ t: t, ref: k.f.ref || '', n: '' }); }; });
  eachA($$('[data-kread]', app), function (b) { b.onclick = function () { speakText(k.out.script || '', 'kit'); }; });
  eachA($$('[data-kbuild]', app), function (b) { b.onclick = toBuilder; });
  eachA($$('[data-kall2]', app), function (b) { b.onclick = function () { var t = allText(k); if (b.getAttribute('data-kall2') === 'copy') copyText(t); else shareText(t); }; });
  eachA($$('[data-knew]', app), function (b) { b.onclick = function () { newKit(); draw(); window.scrollTo(0, 0); }; });
  eachA($$('[data-kopen]', app), function (b) { b.onclick = function () { KS.id = b.getAttribute('data-kopen'); draw(); }; });
  eachA($$('[data-kdel]', app), function (b) { b.onclick = function () { if (!confirm(K('delQ'))) return; var a = kits(), id = b.getAttribute('data-kdel'); for (var i = 0; i < a.length; i++) if (a[i].id === id) { a.splice(i, 1); break; } if (KS.id === id) KS.id = a.length ? a[0].id : null; save(); draw(); }; });
  eachA($$('[data-kask]', app), function (b) { b.onclick = function () { openXz(K('askMsg', K('steps').split('|')[KS.i], ctxText(k, KS.i > 0))); }; });
}
window.KIT = { draw: draw };
})();
