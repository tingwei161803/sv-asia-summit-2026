/* =========================================================================
   data/data.js — single source of truth for the site (plain globals, no modules)

   `status` fields ("verified"/"partial"/"claimed") are kept for reference but
   are no longer rendered on the site; SITE_FACTCHECK below is likewise kept
   as data only (its section is hidden). Full research notes with sources
   live in /research/*.md of this repo.
   ========================================================================= */

window.SITE_META = {
  title: {
    en: "SV–Asia Youth Innovation Leaders Summit 2026",
    zh: "矽谷亞洲青年創新領袖峰會 2026"
  },
  subtitle: {
    en: "Event recap, speaker profiles & my session notes",
    zh: "活動回顧・講者介紹・聽講心得"
  },
  description: {
    en: "A recap of the SV–Asia Youth Innovation Leaders Summit (2026-07-19, NTU, Taipei): event info, speaker profiles with references, session notes and follow-up deep dives.",
    zh: "矽谷亞洲青年創新領袖峰會（2026-07-19，台大）活動回顧：活動資訊、講者介紹與參考來源、聽講心得，以及會後延伸整理。"
  },
  url: "https://sv-asia-summit-2026.peteraim.com/",
  repo: "tingwei161803/sv-asia-summit-2026"
};

/* ---------- event facts (hero + about) ---------- */
window.SITE_EVENT = {
  date: { en: "Sunday, July 19, 2026", zh: "2026 年 7 月 19 日（日）" },
  time: { en: "13:00–17:00 (GMT+8) · doors 12:30", zh: "13:00–17:00（12:30 開放入場）" },
  venue: {
    en: "Socrates Hall, B1, NTU 2nd Student Activity Center, Taipei",
    zh: "台大第二學生活動中心 B1 蘇格拉底廳"
  },
  intro: [
    {
      en: "An invitation/review-based youth entrepreneurship summit that brought together speakers from Silicon Valley and Asia — venture investors, serial founders and innovation educators — for an afternoon of talks and networking aimed at students and young founders.",
      zh: "一場採邀請與審核制的青年創業峰會，匯聚來自矽谷與亞洲的創投、連續創業者與創新教育推動者，以講座與交流為主，面向學生與年輕創業者。"
    }
  ],
  facts: [
    {
      icon: "event",
      label: { en: "Date & time", zh: "日期時間" },
      value: { en: "2026-07-19 (Sun) 13:00–17:00, doors 12:30", zh: "2026-07-19（日）13:00–17:00，12:30 開放入場" },
      status: "verified",
      note: { en: "Accupass event page + organizer's pre-event notice.", zh: "Accupass 活動頁與主辦方行前公告可證。" }
    },
    {
      icon: "location_on",
      label: { en: "Venue", zh: "地點" },
      value: {
        en: "Socrates Hall, B1, NTU 2nd Student Activity Center (85 Roosevelt Rd. Sec. 4) — a 145-seat tiered auditorium run by GIS NTU Convention Center",
        zh: "台大第二學生活動中心 B1 蘇格拉底廳（羅斯福路四段 85 號）— 集思台大會議中心經營之階梯式會議廳，容納 145 人"
      },
      status: "verified",
      note: { en: "Confirmed via GIS venue page, NTU student affairs site and Wikipedia.", zh: "集思場地頁、台大學務處與維基百科可證。" }
    },
    {
      icon: "apartment",
      label: { en: "Organizer", zh: "主辦單位" },
      value: {
        en: "SV Asia Leaders Consulting Co., Ltd.",
        zh: "矽谷亞洲領袖顧問企業有限公司"
      },
      status: "partial",
      note: {
        en: "Company registry (g0v) + whois/DNS. The email domain and the Accupass organizer account were both created 2026-04-26 — ~7 weeks BEFORE the company existed; this is the account's first and only event. The sole director has no other companies or public footprint.",
        zh: "商工登記（g0v）與 whois/DNS 查核。信箱域名與 Accupass 主辦帳號同日建立（2026-04-26），比公司設立早約 7 週；此為該帳號唯一一場活動。代表人名下無其他公司、查無任何公開足跡。"
      }
    },
    {
      icon: "confirmation_number",
      label: { en: "“Invitation/review-based” & “sold out”", zh: "「邀請與審核制」「門票售完」" },
      value: {
        en: "The organizer billed the summit as invitation/review-based with physical tickets sold out",
        zh: "主辦方宣稱峰會採邀請與審核制，且實體票售完"
      },
      status: "claimed",
      note: {
        en: "The Accupass page was a normal ticket checkout with no review mechanism (970 views · 13 likes). “Sold out” can't be verified: the page was never archived and now just reads “event ended”, not “sold out”.",
        zh: "Accupass 為一般購票流程，無審核機制痕跡（頁面 970 瀏覽、13 喜歡）。「售完」無法驗證：活動頁從未被存檔，現況顯示「活動已結束」而非「售完」。"
      }
    },
    {
      icon: "school",
      label: { en: "Initiator", zh: "發起人" },
      value: {
        en: "Initiated by Christine Chen (陳思穎), a 14-year-old student",
        zh: "由 14 歲學生 Christine Chen（陳思穎）發起籌辦"
      },
      status: "verified",
      note: { en: "Named in the Economic Daily News (UDN) recap, 2026-07-21, and in the organizer's posts.", zh: "經濟日報 2026-07-21 報導與主辦方貼文均載明。" }
    },
    {
      icon: "groups",
      label: { en: "Speakers", zh: "講者" },
      value: {
        en: "8 announced; 6 appeared on the day. Two overseas speakers switched to video sharing per the organizer's pre-event post",
        zh: "原定 8 位；當天名單 6 位。主辦方行前貼文稱兩位海外講師改以影片分享"
      },
      status: "verified",
      note: {
        en: "Day-of speaker list recorded first-hand on site; lineup cross-checked with the Accupass page. Notably, none of the eight speakers (or their organizations) ever mentioned this summit on their own channels.",
        zh: "當天名單為本站作者現場第一手記錄；原定陣容與 Accupass 活動頁互證。值得一提：八位講者本人與所屬組織的公開頻道皆未提及這場峰會。"
      }
    },
    {
      icon: "newspaper",
      label: { en: "Media coverage", zh: "媒體報導" },
      value: {
        en: "Economic Daily News (UDN) ran a recap on 2026-07-21: the summit concluded successfully with a full house of students, parents and young founders",
        zh: "經濟日報 2026-07-21 刊出報導：峰會圓滿落幕，現場座無虛席，吸引學生、家長與青年創業者參與"
      },
      status: "verified",
      note: { en: "See the report link below.", zh: "報導連結見下方。" }
    }
  ],
  links: [
    { label: { en: "Economic Daily News report", zh: "經濟日報報導" }, url: "https://money.udn.com/money/story/5635/9639200" },
    { label: { en: "Accupass event page", zh: "Accupass 活動頁" }, url: "https://www.accupass.com/event/2607111225301831786626" },
    { label: { en: "Organizer's Facebook group", zh: "主辦方 FB 社團" }, url: "https://www.facebook.com/groups/3905341733045087/" },
    { label: { en: "Venue: Socrates Hall (GIS)", zh: "場地：蘇格拉底廳（集思）" }, url: "https://www.meeting.com.tw/ntu/socrates.php" }
  ]
};

/* ---------- speakers ----------
   order: day-of speaking-list order (per on-site record), then the two
   announced speakers who were not on the day list.                       */
window.SITE_SPEAKERS = [
  {
    slug: "chih-yao-wu",
    attended: true,
    name: { en: "Chih-Yao Wu", zh: "吳智堯" },
    role: {
      en: "Executive Director, Chinese Innovation & Invention Society (CIIS)",
      zh: "中華創新發明學會 執行長"
    },
    bio: {
      en: "Executive Director and standing director of CIIS (founded 2009), and executive director of the Taiwan International Invention Award Winners Association. Former CIIS secretary-general; long-time delegation leader and judge at international invention exhibitions; author of books on innovation management. CIIS has organized the IIIC International Innovation & Invention Competition annually since 2010 (16th edition in 2025, 386 entries from 13 countries).",
      zh: "中華創新發明學會（2009 年成立）執行長兼常務理事，並任台灣國際發明得獎協會執行長。曾任學會秘書長，多次擔任國際發明展台灣代表團領隊與評審，著有創新管理相關書籍。學會自 2010 年起每年主辦 IIIC 國際創新發明競賽（2025 年第 16 屆，13 國 386 件作品）。"
    },
    facts: [
      {
        claim: { en: "Executive Director of CIIS", zh: "中華創新發明學會執行長" },
        status: "verified",
        note: { en: "CIIS board roster + 2022 award press release.", zh: "學會官網理監事名單與 2022 年頒獎新聞稿可證。" }
      },
      {
        claim: { en: "Long-time promoter of innovation & patent education", zh: "長年推動創新與專利教育" },
        status: "partial",
        note: { en: "Track record (delegation leader, judge, books) comes almost entirely from his own society's website; no third-party media profile found.", zh: "領隊、評審、著作等資歷幾乎全出自所屬學會官網自述，缺第三方媒體獨立報導。" }
      },
      {
        claim: { en: "Long-time organizer of the IIIC competition", zh: "長期推動 IIIC 國際創新發明競賽" },
        status: "verified",
        note: { en: "IIIC runs annually since 2010; corroborated by university announcements (NTNU and others).", zh: "IIIC 自 2010 年起每年舉辦；台師大等多所大學公告可佐證。" }
      }
    ],
    refs: [
      { label: "中華創新發明學會官網", url: "https://www.innosociety.org/" },
      { label: "CIIS 理監事會名單", url: "https://www.innosociety.org/m/412-1649-13687.php" },
      { label: "2022 IIP/IIIC 頒獎新聞稿", url: "https://www.innosociety.org/m/404-1649-111543.php" },
      { label: "台師大 2025 IIIC 公告（第三方）", url: "https://www.acad.ntnu.edu.tw/zh_tw/showepaper/-%E7%99%BC%E6%98%8E%E7%AB%B6%E8%B3%BD-%E4%B8%AD%E8%8F%AF%E5%89%B5%E6%96%B0%E7%99%BC%E6%98%8E%E5%AD%B8%E6%9C%83%E8%BE%A6%E7%90%862025-%E7%AC%AC16%E5%B1%86IIIC%E5%9C%8B%E9%9A%9B%E5%89%B5%E6%96%B0%E7%99%BC%E6%98%8E%E7%AB%B6%E8%B3%BD-%E6%95%AC%E8%AB%8B%E8%B8%B4%E8%BA%8D%E5%A0%B1%E5%90%8D%E5%8F%83%E5%8A%A0-30634096" },
      { label: "延伸整理：TRIZ 40 發明原則圖鑑", url: "https://triz-40.peteraim.com/" }
    ]
  },
  {
    slug: "ray-chen",
    attended: true,
    name: { en: "Ray Chen", zh: "陳一強 Ray Chen" },
    role: {
      en: "Co-founder & President, B Current Impact Investment (活水影響力投資)",
      zh: "活水影響力投資 共同創辦人暨總經理"
    },
    bio: {
      en: "Co-founder and President of B Current Impact Investment (founded 2014 with chairman CK Cheng and 40+ shareholders) — Taiwan's first VC management firm investing 100% in social-innovation enterprises, focused on regional revitalization, healthcare, sustainable food & agriculture and education. Active in the movement since 2007; co-initiated B Lab Taiwan (2016), Taiwan Impact Investment Association (2020) and School 28 (2021).",
      zh: "活水影響力投資（B Current Impact Investment）共同創辦人暨總經理，2014 年與董事長鄭志凱等 40 餘位股東共同發起，為台灣第一家 100% 投資社會創新企業的創投基金管理公司，聚焦地方創生、醫療照護、食農永續與教育創新。自 2007 年投入社會創新運動，共同發起 B Lab Taiwan（2016）、台灣影響力投資協會（2020）與 School 28（2021）。"
    },
    facts: [
      {
        claim: { en: "Founder of Taiwan's first 100%-social-innovation VC firm", zh: "台灣第一家 100% 投資社會創新企業的創投創辦人" },
        status: "partial",
        note: { en: "The “first 100% social-innovation VC” description checks out — but he is a co-founder (with CK Cheng and ~43 shareholders), not sole founder.", zh: "「台灣第一家 100% 投資社會創新企業」描述屬實；但他是共同創辦人（與鄭志凱等約 43 位共同發起），非唯一創辦人。" }
      },
      {
        claim: { en: "Long-time work across healthcare, food, agriculture, education innovation, regional revitalization and impact investing", zh: "長年投入醫療、食品、農業、教育創新、地方創生與影響力投資" },
        status: "verified",
        note: { en: "Matches B Current's stated focus areas and his documented track record since 2007.", zh: "與活水官網聚焦領域及 2007 年以來的公開紀錄相符。" }
      },
      {
        claim: { en: "Quote: “Today's social-innovation enterprises will be tomorrow's mainstream enterprises.”", zh: "名言：「今天的社會創新企業，會是明天的主流企業。」" },
        status: "partial",
        note: { en: "No verbatim record found; the documented version is “今日的社會創新，就是明日企業的日常” (Social Enterprise Insights interview) — same idea, different wording.", zh: "查無此逐字句；可查證版本為社企流專訪的「今日的社會創新，就是明日企業的日常」，意涵相同、字句不同。" }
      }
    ],
    refs: [
      { label: "活水影響力投資官網", url: "https://bcurrent.asia/en/about-us-english/" },
      { label: "Tatler Asia 個人頁", url: "https://www.tatlerasia.com/people/%E9%99%B3%E4%B8%80%E5%BC%B7-ray-chen" },
      { label: "AVPN 簡介", url: "https://avpn.asia/author/ray-chen/" },
      { label: "社企流專訪（名言出處）", url: "https://www.seinsights.asia/article/3289/3268/7799" },
      { label: "Meet 創業小聚專訪", url: "https://meet.bnext.com.tw/articles/view/47567" },
      { label: "延伸整理：影響力投資與 B 型企業圖鑑", url: "https://impact-investing.peteraim.com/" }
    ]
  },
  {
    slug: "david-wu",
    attended: true,
    name: { en: "David Wu", zh: "吳德威 David Wu" },
    role: {
      en: "Partner, Acorn Pacific Ventures",
      zh: "Acorn Pacific Ventures（橡子園太平洋基金）合夥人"
    },
    bio: {
      en: "Partner at Silicon Valley VC firm Acorn Pacific Ventures; since July 2023, director & CEO (unpaid) of the Taoyuan City Sports Development Foundation; and since mid-2025, chairman of the Taiwan Future Society (Yangmingshan). Previously GM of Alibaba Tmall Taiwan (2018), first GM of the revived CPBL Wei Chuan Dragons (2019–2020), and VP of PChome e-commerce & Ruten (from 2020). Former chairman of Cheetah Mobile Taiwan; Carnegie Mellon MISM; author of a book on cross-domain leadership.",
      zh: "矽谷創投 Acorn Pacific Ventures（橡子園太平洋基金）合夥人，2023 年 7 月起兼任桃園市體育發展基金會董事暨執行長（無給職），並自 2025 年年中起任陽明山未來學社理事長。歷任阿里巴巴天貓台灣總經理（2018）、中職味全龍復軍首任領隊（2019–2020）、PChome 電商副總暨露天市集副總（2020 起）；曾任雪豹科技董事長，卡內基美隆大學資訊管理碩士，著有《跨界領導密碼》。"
    },
    facts: [
      {
        claim: { en: "Partner, Acorn Pacific Ventures (Silicon Valley)", zh: "矽谷 Acorn Pacific Ventures 創投基金合夥人" },
        status: "verified",
        note: { en: "Multiple independent sources: Yahoo News, Crossing (CommonWealth) interview, 2024 forum agendas, LinkedIn.", zh: "Yahoo 新聞、換日線專訪、2024 年會議程與 LinkedIn 等多方可證。" }
      },
      {
        claim: { en: "Director & CEO, Taoyuan City Sports Development Foundation", zh: "桃園市體育發展基金會董事暨執行長" },
        status: "verified",
        note: { en: "TSNA/Yahoo Sports interview; took office July 2023, unpaid role.", zh: "TSNA／Yahoo 運動專訪可證；2023 年 7 月上任，無給職。" }
      },
      {
        claim: { en: "Chairman, Yangmingshan Future Society", zh: "陽明山未來學社理事長" },
        status: "verified",
        note: { en: "Confirmed in round two: the society's Chinese homepage states “the current chairman is David Wu”, and its own March 2026 event report calls him “Chairman Wu”. He took over around mid-2025 (Wayback: between 2025-03 and 2025-10); the English/about pages that still list Kuang-Shih Yeh are stale 2020 copy.", zh: "第二輪查證翻案：學社中文版首頁明載「現任理事長由吳德威先生出任」，2026 年 3 月官方活動報導亦稱「理事長吳德威」。約 2025 年年中就任（Wayback 定位於 2025-03 至 2025-10 間換屆）；仍列葉匡時的英文版與「關於我們」頁為 2020 年舊文案未更新。" }
      },
      {
        claim: { en: "Former VP of PChome e-commerce & Ruten", zh: "曾任 PChome 電商副總、露天市集副總" },
        status: "verified",
        note: { en: "Business Next (2020) and Yahoo News reports.", zh: "數位時代（2020）與 Yahoo 新聞報導可證。" }
      },
      {
        claim: { en: "Former GM, Alibaba Tmall Taiwan", zh: "曾任 Alibaba 天貓海外台灣總經理" },
        status: "verified",
        note: { en: "INSIDE report, 2018.", zh: "INSIDE 2018 年報導可證。" }
      },
      {
        claim: { en: "Former GM of CPBL Wei Chuan Dragons", zh: "曾任中職味全龍領隊" },
        status: "verified",
        note: { en: "First GM of the revived Dragons, Apr 2019 – Aug 2020 (resigned for health reasons); widely reported.", zh: "2019/4 復軍首任領隊，2020/8 因健康因素請辭；多家媒體報導。" }
      }
    ],
    refs: [
      { label: "個人官網", url: "https://www.iamdavidwu.com/en" },
      { label: "Yahoo 新聞（Acorn Pacific 合夥人）", url: "https://tw.news.yahoo.com/%E7%9F%BD%E8%B0%B7acorn-pacific-ventures%E5%89%B5%E6%8A%95%E5%9F%BA%E9%87%91%E5%90%88%E5%A4%A5%E4%BA%BA%E5%90%B3%E5%BE%B7%E5%A8%81-%E5%8D%B3%E5%B0%87%E5%8F%83%E8%88%87%E7%AC%AC%E5%85%AB%E5%B1%86-hit-093000716.html" },
      { label: "INSIDE（天貓台灣總經理）", url: "https://www.inside.com.tw/article/13479-tmall-taiwan" },
      { label: "數位時代（PChome 副總）", url: "https://www.bnext.com.tw/article/59159/weichuan-dragons-pchome" },
      { label: "ETtoday（味全龍領隊）", url: "https://sports.ettoday.net/news/1789627" },
      { label: "陽明山未來學社官網（理事長：葉匡時）", url: "https://taiwanfuturesociety.org/en-us/about-us-en.html" }
    ]
  },
  {
    slug: "andy-lin",
    attended: true,
    name: { en: "Andy Lin", zh: "林志鴻 Andy Lin" },
    role: {
      en: "Founder & CEO, Yo-Kai Express",
      zh: "Yo-Kai Express 創辦人暨執行長"
    },
    bio: {
      en: "Founder & CEO of Yo-Kai Express (founded 2016, Hayward, CA), maker of 24/7 unmanned hot-food robots that serve ramen in ~45 seconds — famously praised by Elon Musk in a 2018 tweet. NTU bio-mechatronics grad who moved to the US in 2004 for a UC Irvine MS (2004–2006), then spent 12 years at ASE Group — latterly its Silicon Valley subsidiary — before founding the company. Machines deployed across the US, Japan, Korea, Taiwan and Europe (independent reports: ~150–200 units/locations by 2024–25). Investors include Ippudo's parent Chikaranomoto, Pulmuone (Series A lead) and Japan Tobacco; SoftBank Robotics is its Japan technology partner.",
      zh: "Yo-Kai Express（2016 年創立，加州 Hayward）創辦人暨執行長，打造 24 小時無人熱食機器人，約 45 秒出餐拉麵，2018 年曾獲 Elon Musk 推文稱讚。台大生物機電系畢業，2004 年赴美就讀 UC Irvine 碩士（2004–2006），其後任職日月光 12 年（後期在矽谷的美國子公司）。設備部署於美、日、韓、台與歐洲多國（獨立報導 2024–25 年約 150–200 台／據點）。投資人含一風堂母公司力之源、Pulmuone（Series A 領投）與日本菸草；SoftBank Robotics 為日本市場技術合作夥伴。"
    },
    facts: [
      {
        claim: { en: "Founder & CEO of Yo-Kai Express", zh: "Yo-Kai Express 創辦人暨執行長" },
        status: "verified",
        note: { en: "LinkedIn, Crunchbase, TechCrunch, PR Newswire.", zh: "LinkedIn、Crunchbase、TechCrunch 與新聞稿可證。" }
      },
      {
        claim: { en: "A “Physical AI” robotics food platform", zh: "「Physical AI」機器人餐飲平台" },
        status: "partial",
        note: { en: "Media and the company describe it as an “autonomous restaurant platform”; “Physical AI” is recent marketing framing (2025 Edge AI work with Qualcomm/Pegatron is real).", zh: "媒體與公司自述為「autonomous restaurant platform」；「Physical AI」屬近期行銷用語（2025 年與高通、和碩的 Edge AI 合作屬實）。" }
      },
      {
        claim: { en: "Moved to the US in 2004", zh: "2004 年前往美國發展" },
        status: "verified",
        note: { en: "Confirmed in round two: his own LinkedIn lists UC Irvine 2004–2006, cross-consistent with NTU 1997–2001, joining ASE in 2006 (later at ASE (U.S.) Inc. in Silicon Valley) and the widely reported “12 years in semiconductors” (2006–2018). “2004” = moving to the US for grad school.", zh: "第二輪查證翻案：本人 LinkedIn 明列 UC Irvine 就讀 2004–2006，與台大 1997–2001、2006 年入職日月光（後任職矽谷的美國子公司 ASE (U.S.) Inc.）、各報導「半導體 12 年」（2006–2018）完全交叉吻合——「2004 年赴美」即赴 UC Irvine 讀碩士。" }
      },
      {
        claim: { en: "24/7 zero-staff AI food machines", zh: "24 小時零人力 AI 自動餐飲機" },
        status: "verified",
        note: { en: "45s–2min serve time, 24/7 unmanned — widely reported.", zh: "45 秒～2 分鐘出餐、全天候無人化，多方報導可證。" }
      },
      {
        claim: { en: "Hundreds of machines deployed worldwide", zh: "已於全球多國部署數百台設備" },
        status: "partial",
        note: { en: "Multi-country is true; independent reports cite ~200 units/6 countries (GVM 2024-03) and 150+ locations (JSTORIES 2025-10). “Hundreds” runs above that; a ~500-unit boba deal is contracts, not deployments.", zh: "「多國」屬實；獨立報導為 200 台／六國（遠見 2024-03）與 150+ 據點（JSTORIES 2025-10）。「數百台」略高於此；珍奶機近 500 台為簽約數非部署數。" }
      },
      {
        claim: { en: "Backed by SoftBank Robotics, IPPUDO and Pulmuone", zh: "獲 SoftBank Robotics、一風堂、Pulmuone 支持" },
        status: "partial",
        note: { en: "Ippudo's parent and Pulmuone are confirmed investors (plus Japan Tobacco); SoftBank Robotics is a technology partner in Japan, not an investor per primary English sources.", zh: "一風堂母公司與 Pulmuone 為投資人（另有日本菸草）；SoftBank Robotics 依英文一手來源為日本技術合作夥伴，非投資人。" }
      }
    ],
    refs: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/andylin838/" },
      { label: "Crunchbase（投資人名單）", url: "https://www.crunchbase.com/organization/yo-kai-express-inc" },
      { label: "TechCrunch (2021)", url: "https://techcrunch.com/2021/01/12/yo-kai-express-introduces-takumi-a-smart-home-cooking-appliance/" },
      { label: "The Spoon（Ippudo/JT 投資）", url: "https://thespoon.tech/autonomous-restaurant-startup-yo-kai-express-expands-in-japan-announces-new-investors/" },
      { label: "Pulmuone 合作新聞稿", url: "https://www.prnewswire.com/news-releases/pulmuone-launches-gourmet-vending-machines-across-south-korea-in-partnership-with-yo-kai-express-301939908.html" },
      { label: "遠見雜誌（2024-03）", url: "https://www.gvm.com.tw/article/110512" },
      { label: "JSTORIES 專訪（2025-10）", url: "https://jstories.media/article/yo-kai-express" }
    ]
  },
  {
    slug: "tina-cheng",
    attended: true,
    name: { en: "Tina Cheng", zh: "鄭文婷 Tina Cheng" },
    role: {
      en: "Venture Partner, Bonhope Capital · serial entrepreneur",
      zh: "Bonhope Capital Venture Partner・連續創業者"
    },
    bio: {
      en: "LA-based serial entrepreneur (Tina W. Cheng, CFA; UCLA engineering, USC MBA — not the Cherubic Ventures Tina Cheng). Started her first company at 22 (The Muse, a three-story Pasadena nightclub that later expanded to Shanghai); six ventures across the US, Taiwan and Asia including a Taiwan postpartum care center and custom-jewelry brand Capsul. Served as Greater China CEO of JigoCity, the social-commerce platform acquired by Nasdaq-listed FriendFinder Networks in 2011 for up to US$65M in stock and warrants. Earlier finance career includes portfolio management at Bear Stearns and a boutique-IB managing-director role. Now Venture Partner at Bonhope Capital.",
      zh: "洛杉磯連續創業者（Tina W. Cheng, CFA；UCLA 工程學士、USC MBA——非 Cherubic Ventures 的 Tina Cheng）。22 歲創辦第一間公司（Pasadena 三層樓夜店 The Muse，後拓展至上海）；六個事業橫跨美國、台灣與亞洲，含台灣月子中心與客製珠寶品牌 Capsul。曾任社交電商 JigoCity 大中華區 CEO，該公司 2011 年由 Nasdaq 上市之 FriendFinder Networks 以最高 6,500 萬美元股票與認股權證收購。早年金融資歷含 Bear Stearns 投資組合管理與精品投行董事總經理。現任 Bonhope Capital Venture Partner。"
    },
    facts: [
      {
        claim: { en: "Managing Partner of GVA (Global Venture Accelerator)", zh: "GVA Global Venture Accelerator 執行合夥人" },
        status: "claimed",
        note: { en: "Two verification rounds found nothing: three recent bios she herself endorsed (SparkLabs Taiwan 2024 instructor bio, her 2025 podcast intro, Bonhope's team page) all omit GVA, and no institution named “Global Venture Accelerator” could be found anywhere. The title's only known source is the event copy.", zh: "兩輪查證皆無所獲：她本人近兩年背書的三份正式簡介（SparkLabs Taiwan 2024 講師簡介、2025 podcast 官方介紹、Bonhope 官網團隊頁）全部沒有 GVA，且全網查無名為「Global Venture Accelerator」的機構——此頭銜目前唯一出處就是主辦方文案。" }
      },
      {
        claim: { en: "Partner at Bonhope Capital (PE fund)", zh: "Bonhope Capital 私募基金合夥人" },
        status: "partial",
        note: { en: "Bonhope's team page lists her as Venture Partner (Managing Partners are Terry Hsiao and Nina Wang).", zh: "官網團隊頁職稱為 Venture Partner（經營合夥人為蕭一白與 Nina Wang）。" }
      },
      {
        claim: { en: "Started her first business at 22; six companies founded/run", zh: "22 歲開始創業；創辦及經營六家公司" },
        status: "verified",
        note: { en: "VoyageLA interview + her own “6X Serial Entrepreneur” profile; some of the six were operating roles (CEO/COO) rather than founding.", zh: "VoyageLA 專訪與本人「6X Serial Entrepreneur」簡介可證；六家中部分為經營（CEO/COO）而非創辦。" }
      },
      {
        claim: { en: "Founded US nightlife brand The Muse", zh: "創辦美國 Nightlife 品牌 The Muse" },
        status: "verified",
        note: { en: "Three-story Old Town Pasadena club, 40+ staff, later a Shanghai outpost (VoyageLA).", zh: "Pasadena 三層樓夜店、40+ 員工，曾在上海開分店（VoyageLA）。" }
      },
      {
        claim: { en: "Founded a large postpartum care center in Taiwan", zh: "創辦台灣大型月子中心" },
        status: "partial",
        note: { en: "Two consistent self-reported sources (VoyageLA interview; her 2025 podcast episode has a chapter on it) but zero third-party records, and no name or location is ever given — “large” is the event copy's own embellishment.", zh: "兩個一致的本人自述來源（VoyageLA 專訪；2025 podcast 有專章談月子中心），但零第三方紀錄，名稱與地點從未揭露——「大型」二字是主辦方文案自行添加。" }
      },
      {
        claim: { en: "Founded a 6-country e-commerce platform sold for US$65M to a Nasdaq company", zh: "創辦橫跨亞洲六國電商，以 6,500 萬美元售予 Nasdaq 上市公司" },
        status: "partial",
        note: { en: "JigoCity was acquired by FriendFinder Networks (Nasdaq) in 2011 for UP TO $65M in stock + warrants; the official release names three founders — not her. Her own endorsed bios (incl. SparkLabs Taiwan 2024) consistently say “Greater China CEO” (2010–2013), not founder. FriendFinder went bankrupt in 2013.", zh: "JigoCity 2011 年由 FriendFinder Networks（Nasdaq）以「上限 6,500 萬美元」股票＋認股權證收購；官方新聞稿列名三位創辦人不含她。她本人背書的簡介（含 SparkLabs Taiwan 2024）一致寫「大中華區 CEO」（2010–2013）而非創辦人。FriendFinder 2013 年破產。" }
      }
    ],
    refs: [
      { label: "Bonhope Capital 團隊頁", url: "https://www.bonhopecapital.com/team" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/tinawcheng/" },
      { label: "VoyageLA 專訪", url: "https://voyagela.com/interview/meet-tina-cheng-capsul-jewelry-south-bay/" },
      { label: "Women of Wearables 專訪", url: "https://www.womenofwearables.com/new-blog/wow-woman-in-fashion-tech-tina-cheng-capsul" },
      { label: "FriendFinder 收購新聞稿", url: "https://www.prnewswire.com/news-releases/friendfinder-networks-inc-announces-the-acquisition-of-jigocity-for-consideration-of-up-to-65-million-129639058.html" },
      { label: "TechCrunch 收購報導", url: "https://techcrunch.com/2011/09/12/friendfinder-networks-buys-daily-deals-business-jigocity-for-up-to-65m/" }
    ]
  },
  {
    slug: "jonathan-lin",
    attended: true,
    name: { en: "Jonathan Lin", zh: "林家振 Jonathan Lin" },
    role: {
      en: "Partner, Andra Capital · Adjunct Professor, NTU GSB",
      zh: "Andra Capital 合夥人・台大商研所兼任教授"
    },
    bio: {
      en: "Partner at Andra Capital, a late-stage tech fund (portfolio independently verifiable for Stripe, Anthropic, xAI, SpaceX and Automation Anywhere). Adjunct professor at NTU's Graduate School of Business (taught M&A, restructuring & PE) and a consulting expert at Academia Sinica's Biomedical Translation Research Center. Organizer materials also cite earlier stints at AT&T, Credit Suisse, UBS and Deutsche Bank and a Wharton degree — these recur in his bios but lack first-hand independent records.",
      zh: "Andra Capital 合夥人，該基金投資後期科技未上市公司（可獨立驗證的投資含 Stripe、Anthropic、xAI、SpaceX、Automation Anywhere）。台大商學研究所兼任教授（開設企業併購、重整與私募基金課程），並為中研院生醫轉譯研究中心「諮詢專家」。主辦方另稱其歷任 AT&T、瑞信、UBS、德銀並畢業於華頓——這些說法在其各處簡歷中反覆出現，但查無第一手獨立紀錄。"
    },
    facts: [
      {
        claim: { en: "Partner at Andra Capital", zh: "美國安卓樂資本（Andra Capital）合夥人" },
        status: "verified",
        note: { en: "Bloomberg profile + media interviews — though Andra's own team page currently lists only two Managing Partners, not him.", zh: "Bloomberg 個人檔案與媒體專訪可證；惟 Andra 官網團隊頁現僅列兩位經營合夥人，未列其名。" }
      },
      {
        claim: { en: "Adjunct Professor, NTU Graduate School of Business", zh: "台灣大學商學研究所兼任教授" },
        status: "verified",
        note: { en: "NTU College of Management faculty page + course syllabus.", zh: "台大管理學院教師頁與課程大綱可證。" }
      },
      {
        claim: { en: "Visiting professor at Academia Sinica's biomedical center", zh: "中央研究院生醫中心客座教授" },
        status: "partial",
        note: { en: "Academia Sinica BioTReC lists him as a “consulting expert”, not visiting professor.", zh: "中研院 BioTReC 官網身分為「諮詢專家」，非客座教授。" }
      },
      {
        claim: { en: "Career at AT&T, Credit Suisse, UBS, Deutsche Bank; Wharton graduate", zh: "歷任 AT&T、瑞信、UBS、德銀；華頓畢業" },
        status: "partial",
        note: { en: "Round two: FINRA/SEC records only go back 10 years, so the banking stints can be neither confirmed nor refuted. His own bios put the roles at associate/VP level (AT&T = CFO of the Taiwan branch), so any “senior executive” phrasing is inflation; and his claimed role on AOL–Time Warner conflicts with the SEC S-4 (advisors were Salomon Smith Barney and Morgan Stanley). He appeared as a Wharton alum at a 2017 event, but the program name shifts between his bios.", zh: "第二輪：FINRA／SEC 紀錄僅保留十年，投行任職無法證實也無法證偽。依本人自述職級為協理／VP 級（AT&T 為台灣分公司財務長），任何「高層」表述屬灌水；自稱參與 AOL 併時代華納一案與 SEC S-4 文件牴觸（主顧問為 Salomon Smith Barney 與 Morgan Stanley）。2017 年曾以華頓校友身分公開露面，但學程名稱在其各版簡歷間不一致。" }
      },
      {
        claim: { en: "Andra's management team includes Cisco/Broadcom/IBM execs, the Siri inventor, Goldman & Morgan Stanley bankers", zh: "Andra 管理團隊含 Cisco、Broadcom、IBM 高層、Siri 發明人、高盛與大摩高層" },
        status: "partial",
        note: { en: "Round two traced this list to Lin's own NTU faculty bio (added between the 2022 and 2025 versions — the event copy quotes it verbatim). Two of six hold up in some form: ex-Cisco corp-dev head Charles Carmel was an Andra Managing Partner until ~2024 (though his Cisco title was VP, not “president”), and ex-Goldman MD Kathy Park joined as Partner in 2022. No trace anywhere of the Broadcom/LSI, IBM, Siri-inventor or Lehman/Morgan Stanley figures — across ten years of site snapshots, SEC filings and name-by-name searches.", zh: "第二輪追到源頭：此名單逐字出自林本人的台大官網 bio（2022→2025 版之間新增，主辦方為照抄）。六項中兩項有其人：前 Cisco 企業發展主管 Charles Carmel 曾任 Andra 經營合夥人至約 2024（惟其 Cisco 職銜為 VP 而非「總裁」）、前高盛 MD Kathy Park 2022 年加入任 Partner。Broadcom/LSI、IBM 創新長、Siri 發明人、雷曼／大摩四項——遍查十年官網快照、SEC 文件與逐名交叉搜尋——全數查無。" }
      },
      {
        claim: { en: "Portfolio: Palantir, SpaceX, Anthropic, Stripe, xAI, Automation Anywhere, Scale AI, Neuralink, Databricks", zh: "投資組合：Palantir、SpaceX、Anthropic、Stripe、xAI、Automation Anywhere、Scale AI、Neuralink、Databricks" },
        status: "partial",
        note: { en: "5 of 9 independently supported (Stripe, Anthropic, xAI on Andra's site; SpaceX via PitchBook; Automation Anywhere via official LinkedIn). Palantir has featured on Andra's own portfolio page since 2022 (self-published, no third-party record). Scale AI, Neuralink and Databricks appear in NEITHER ten years of Andra site snapshots NOR Lin's own 16-company bio list — most likely added by the event copy. Per SEC Form D the fund has raised US$350M from 260 investors.", zh: "9 家中 5 家有佐證（Stripe、Anthropic、xAI 見官網；SpaceX 見 PitchBook；Automation Anywhere 見官方 LinkedIn）。Palantir 自 2022 年起見於 Andra 官網 portfolio 頁（屬自我宣稱，無第三方紀錄）。Scale AI、Neuralink、Databricks 則在十年官網快照與林本人 bio 的 16 家清單中都不存在——最可能是活動文宣自行添加。依 SEC Form D，該基金累計實募 3.5 億美元、260 位投資人。" }
      }
    ],
    refs: [
      { label: "Bloomberg", url: "https://www.bloomberg.com/profile/person/22544048" },
      { label: "Andra Capital 官網", url: "https://www.andracapital.com/team/" },
      { label: "PitchBook", url: "https://pitchbook.com/profiles/investor/224383-69" },
      { label: "台大管理學院教師頁", url: "https://management.ntu.edu.tw/faculty/teacher/sn/385" },
      { label: "中研院 BioTReC", url: "https://biotrec.sinica.edu.tw/posts/187669" },
      { label: "Meet 創業小聚專訪", url: "https://meet.bnext.com.tw/articles/view/52840" },
      { label: "延伸整理：Andra Capital 筆記", url: "https://andra-capital.peteraim.com/" }
    ]
  },
  {
    slug: "terry-hsiao",
    attended: false,
    name: { en: "Terry Hsiao", zh: "蕭一白 Terry Hsiao" },
    role: {
      en: "Managing Partner, Bonhope Capital · Adjunct Professor, GWU",
      zh: "Bonhope Capital 經營合夥人・GWU 兼任教授"
    },
    bio: {
      en: "Managing Partner of Bonhope Capital (a Maryland multi-strategy fund: private credit + VC secondaries) and adjunct professor at George Washington University School of Business since 2024. Co-founded InphoMatch in 2000 (renamed Mobile 365 after the 2004 Mobileway merger); the company — ~330 staff, ~US$90M revenue — was sold to Sybase in 2006 for an announced US$425M (US$417M at closing per SEC filings). MIT Sloan MS, Rutgers BSEE; also founded Hook Mobile and Way Systems.",
      zh: "Bonhope Capital（馬里蘭州混合型基金：私募信貸＋創投次級市場）經營合夥人，2024 年起任喬治華盛頓大學商學院兼任教授。2000 年共同創辦 InphoMatch（2004 年併 Mobileway 後更名 Mobile 365），公司約 330 名員工、年營收約 9,000 萬美元，2006 年以宣布價 4.25 億美元售予 Sybase（SEC 文件交割價 4.17 億）。MIT Sloan 碩士、Rutgers 電機學士；另創辦 Hook Mobile、Way Systems。"
    },
    facts: [
      {
        claim: { en: "Managing Partner, “BonHope Fund” VC", zh: "BonHope Fund 創投基金經營合夥人" },
        status: "verified",
        note: { en: "Bonhope Capital team page confirms Managing Partner; note the firm is a private-credit + VC-secondaries hybrid, not a classic VC fund.", zh: "Bonhope Capital 官網團隊頁可證；惟正式名稱為 Bonhope Capital，屬私募信貸＋創投次級混合基金而非典型創投。" }
      },
      {
        claim: { en: "Visiting professor at George Washington University", zh: "華府 George Washington University 客座教授" },
        status: "partial",
        note: { en: "GWU-hosted CV lists him as Adjunct Professor (from 2024), teaching MBA entrepreneurship & startup financing.", zh: "GWU 官網掛載 CV 為 Adjunct Professor（兼任教授，2024 起），教 MBA 創業與新創融資。" }
      },
      {
        claim: { en: "Founded Mobile 365 (née InphoMatch) in 2000; 300 staff & US$90M revenue in six years", zh: "2000 年創辦 Mobile 365（前身 InphoMatch），六年 300 名員工、營收 9,000 萬美元" },
        status: "partial",
        note: { en: "Founding year and revenue check out; headcount was ~330 and scale included the 2004 Mobileway merger, not purely organic growth.", zh: "創辦年份與營收屬實；員工約 330 人，且規模含 2004 年 Mobileway 合併，非純內生成長。" }
      },
      {
        claim: { en: "Sold to Sybase for US$425M in 2006", zh: "2006 年以 4.25 億美元售予 Sybase" },
        status: "partial",
        note: { en: "US$425M was the announced price (Sep 2006); actual all-cash consideration at closing was US$417M per Sybase's SEC 10-K.", zh: "4.25 億為宣布價（2006/9）；依 Sybase SEC 10-K，交割實際全現金對價為 4.17 億美元。" }
      }
    ],
    refs: [
      { label: "Bonhope Capital 團隊頁", url: "https://www.bonhopecapital.com/team" },
      { label: "GWU 掛載 CV（PDF）", url: "https://business.gwu.edu/sites/g/files/zaxdzs5326/files/2025-11/CV%20Terry%20Hsiao%20.pdf" },
      { label: "Sybase 10-K（SEC）", url: "https://www.sec.gov/Archives/edgar/data/0000768262/000095013407004574/f27565e10vk.htm" },
      { label: "VentureBeat (2006)", url: "https://venturebeat.com/2006/09/06/sybase-to-buy-mobile-messaging-co-mobile-365-for-425m/" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/terryhsiao" }
    ]
  },
  {
    slug: "edgar-chiu",
    attended: false,
    name: { en: "Edgar Chiu", zh: "邱彥錡 Edgar Chiu" },
    role: {
      en: "Co-founder & Managing Partner, SparkLabs Taiwan",
      zh: "SparkLabs Taiwan 共同創辦人暨管理合夥人"
    },
    bio: {
      en: "Co-founder & Managing Partner of SparkLabs Taiwan (est. 2017–18, part of the global SparkLabs Group) and former founding COO of Gogolook (Whoscall), which was acquired-invested by Korea's Naver in 2013. Has backed and mentored 80+ Taiwanese startups going global (FunNow, JustKitchen, AmazingTalker…), catalyzing over US$400M in follow-on funding; SparkLabs Taiwan DemoDay (11th edition, June 2026) is one of Taiwan's flagship startup showcases. Previously IBM consulting and HP; NTHU quantitative finance grad.",
      zh: "SparkLabs Taiwan（2017–18 年成立，隸屬國際 SparkLabs Group）共同創辦人暨管理合夥人，曾任 Gogolook（Whoscall）創始營運長，該公司 2013 年獲韓國 Naver 投資收購。投資輔導逾 80 家台灣新創國際化（FunNow、JustKitchen、AmazingTalker 等），帶動後續投資逾 4 億美元；SparkLabs Taiwan DemoDay（2026 年 6 月第 11 屆）為台灣具代表性的新創發表平台。曾任職 IBM 顧問部門與 HP；清大計量財務金融系畢業。"
    },
    facts: [
      {
        claim: { en: "Founder & Managing Partner of SparkLabs Taiwan", zh: "SparkLabs Taiwan 創辦人暨管理合夥人" },
        status: "partial",
        note: { en: "Official title is Co-founder & Managing Partner — SparkLabs Taiwan was co-founded by several partners under the SparkLabs Group network.", zh: "正確頭銜為「共同創辦人暨管理合夥人」；SparkLabs Taiwan 為多位合夥人共同創辦。" }
      },
      {
        claim: { en: "Founding COO of Gogolook (Whoscall)", zh: "曾任 Gogolook（Whoscall）創始營運長" },
        status: "verified",
        note: { en: "SparkLabs' own bio + independent coverage; Gogolook was acquired by Naver in 2013 (~NT$529M).", zh: "官網簡歷與獨立報導可證；Gogolook 2013 年獲 Naver 收購（約新台幣 5.29 億）。" }
      },
      {
        claim: { en: "Helped 80+ Taiwanese startups expand globally", zh: "已協助超過 80 家台灣新創拓展全球市場" },
        status: "verified",
        note: { en: "Tatler Asia interview and portfolio records.", zh: "Tatler Asia 專訪與投資組合紀錄可證。" }
      },
      {
        claim: { en: "DemoDay is one of Taiwan's flagship startup showcases", zh: "Demo Day 為台灣具代表性的國際新創發表平台" },
        status: "verified",
        note: { en: "An evaluative claim, but backed by sustained independent coverage (Business Next, INSIDE, Meet) and 1,000+ attendee editions.", zh: "屬評價性描述，但有數位時代、INSIDE、Meet 等長期獨立報導與逾千人場次支持。" }
      }
    ],
    refs: [
      { label: "SparkLabs Taiwan 官網", url: "https://www.sparklabstaiwan.com/zh/people" },
      { label: "Tatler Asia 專訪", url: "https://www.tatlerasia.com/gen-t/leadership/edgar-chiu-interview-gent-zh-hant" },
      { label: "Meet 創業小聚 DemoDay 11", url: "https://meet.bnext.com.tw/articles/view/53280" },
      { label: "數位時代 DemoDay 9", url: "https://www.bnext.com.tw/article/79985/sparklabs-taiwan-demoday-9" },
      { label: "LinkedIn", url: "https://tw.linkedin.com/in/edgarchiu" }
    ]
  }
];

/* ---------- my session notes ----------
   One entry per day-of speaker. `content: null` renders a placeholder;
   replace null with { en: "...", zh: "..." } (or arrays of paragraphs
   { en: [...], zh: [...] }) to publish a note.                          */
window.SITE_NOTES = [
  {
    speaker: "chih-yao-wu",
    content: {
      en: [
        "First on stage was Chih-Yao Wu, who opened with a \"top 10 of the 100 greatest inventions\" poll: the light bulb, the internet, the telephone, paper, the wheel, the airplane. World-changing inventions sound out of reach, but his whole point was the opposite: inventing is a skill you can learn.",
        "The method is TRIZ, a system that distills a massive body of patents into 40 inventive principles. He showed the full table of 40, then a \"bag of tricks\" slide revealing how they hide in everyday objects. The tear notch on a snack bag is Preliminary Action, the upside-down ketchup bottle is Inversion, spiral mosquito coils and curved mascara brushes are Spheroidality, car turn signals are Periodic Action, and folding chairs are Dynamics. The little designs around us all follow principles.",
        "One genuinely practical patent tip: when you find a patent in your way, don't detour yet. Check whether it has expired or lapsed because the annuities went unpaid; many \"blocked\" paths are already public domain. His society also runs a podcast sharing invention success and failure stories, and organizes stages like the Taiwan Innotech Expo and the IIIC international invention competition.",
        "He closed with two book recommendations: \"Fifty Questions on Creative Thinking for Children\" and \"The Inventor's Handbook\". As for me, I fell straight down the TRIZ rabbit hole and turned the 40 principles into a bilingual field-guide site; see \"follow-up deep dives\" below."
      ],
      zh: [
        "第一位登台的吳智堯執行長，從「百大發明票選前十名」開場：燈泡、網路、電話、紙、車輪、飛機。這些改變世界的東西聽起來遙不可及，但他整場想說的正好相反，發明是有方法可以學的。",
        "方法就是 TRIZ（萃思），一套把大量專利歸納成 40 個發明原則的系統性創新工具。他先放出 40 個原則的全表，再用「發明家的錦囊妙計」示範其中幾項如何藏在日常用品裡：快撕袋的易撕缺口是「預先作用」、倒立的番茄醬瓶是「逆轉」、盤成螺旋的蚊香與弧形睫毛膏刷頭是「曲面化」、汽車方向燈是「週期性作用」、折疊椅是「動態性」。原來身邊這些不起眼的小設計，背後都有原則可循。",
        "還有一個很實用的專利小知識：查到一件專利，先別急著繞路，要再確認它是否已經期滿，或因為沒繳年費而消滅；很多「看起來卡住的路」其實已經是公共財。他所在的中華創新發明學會也用 Podcast 分享發明的成功與失敗案例，並長期推動台灣創新技術博覽會、IIIC 國際創新發明競賽這些讓發明者被看見的舞台。",
        "他最後推薦了兩本書：《兒童創意思考五十問》與《發明家手冊》。而我自己聽完就掉進了 TRIZ 的坑，把 40 個發明原則整理成一個雙語圖鑑網站，放在下方的「會後延伸整理」。"
      ]
    }
  },
  {
    speaker: "ray-chen",
    content: {
      en: [
        "Ray Chen strung his talk together as a series of questions, walking the audience through the turning points of his own life. The first one landed hard: can a mid-life crisis still open a second curve? On the slide were two photos from 2006: his young family, and Muhammad Yunus receiving the Nobel Peace Prize with Grameen Bank. That was the year microfinance showed him that business could answer social problems directly, and the start of his own second curve.",
        "Question two: beyond profit, what else can business change? He traced the B Corp movement's arrival in Asia, from the book he co-translated (\"B Corp: the good companies we need now\") to the group photo of an Asia B Corp gathering, turning \"good company\" from a compliment into a movement with standards and a community.",
        "B Current Impact Investment positions itself as \"a lever for sustainability, a bridge for cross-sector collaboration\": pooling capital from the National Development Fund, corporates and family offices on one side, and connecting startups, transforming incumbents and cross-border teams on the other, with investment as the fulcrum.",
        "The most memorable slide for me was the Spectrum of Capital: from finance-only to impact-only is a continuum, not a binary. He summed it up as ABC: A, do no harm (screen out tobacco, gambling, weapons); B, be transparent and fair (do ESG well); C, offer solutions (address the SDGs head-on). Impact investing isn't charity; it's consciously choosing where your capital stands.",
        "He closed on young people and AI. By the research he cited, the global impact investing market is set to roughly triple within a decade toward the trillion-dollar mark; younger investors care whether investments match their values, not just returns; and AI can amplify impact measurement and capital allocation, as long as its own energy footprint is part of the math. After this talk I turned my homework on impact investing and B Corps into a follow-up site; see \"follow-up deep dives\" below."
      ],
      zh: [
        "陳一強總經理用一連串提問串起整場分享，比較像帶著大家重走一遍他人生的抉擇題。第一題就很重：「中年危機，還能開啟人生第二曲線？」投影片上是 2006 年的兩張照片，一張是他的全家福，另一張是尤努斯（Muhammad Yunus）與鄉村銀行獲頒諾貝爾和平獎。那一年，微型金融讓他看見商業可以直接回應社會問題，也成了他人生第二曲線的起點。",
        "第二題：「除了追求利潤，商業還能改變什麼？」他從參與翻譯的《B 型企業，現在最需要的好公司》講到 B 型企業運動在亞洲的推展，一路講到 B 型企業亞洲年會的那張大合照，把「好公司」從一句稱讚變成一場有標準、有社群的運動。",
        "活水影響力投資的自我定位是「永續發展的槓桿、跨域合作的橋樑」：一端匯聚國發基金、企業與家族辦公室的資金，另一端連結想解決問題的新創、轉型中的老創與跨境團隊，用投資當支點把兩端撬在一起。",
        "我覺得最有畫面的一頁是「資本的光譜」（Spectrum of Capital）：從「財務唯一」到「影響力唯一」是一整段連續的光譜，而不是二選一。他用 ABC 三層總結：A 不作惡（排除菸酒賭博軍火）、B 透明友善（把 ESG 做好）、C 提出解方（直接回應 SDGs 的挑戰）。影響力投資不是慈善，而是有意識地選擇資本要站的位置。",
        "收尾他把主題拉回年輕世代與 AI。依他引用的市場研究，全球影響力投資規模將在十年內成長近三倍、邁向上兆美元；年輕世代不只追求報酬，更在意投資是否符合價值觀；AI 能放大影響力的衡量與資本配置，但它的能源消耗也要一併納入評估。聽完這場，我把影響力投資與 B 型企業的功課整理成一個延伸站，放在下方的「會後延伸整理」。"
      ]
    }
  },
  {
    speaker: "david-wu",
    content: {
      en: [
        "David Wu laid out his cross-industry career on a single \"Investment Journey\" slide: consumer electronics, e-commerce, F&B, mobile apps, live streaming, fintech, and finally venture capital, with the logos of companies he has invested in or mentored filling the screen. His career is that timeline, stepping into a new industry every few years.",
        "The case he spent the most time on was TaxiGo (later Line Taxi / LineGo). Taxis are a licensed, concession-based industry: medallions are often run by families across three generations, so the real barrier is structural, not technical. On top of that, Taiwan Taxi (55688) had acquired most of the small fleets, leaving newcomers to face a highly consolidated market.",
        "So how do you test product-market fit there? The playbook at the time was free-ride subsidies to spike demand. It worked, but it burned an enormous amount of cash. Subsidies buy you usage data; they don't buy a lasting moat. It was the most honest, felt piece of startup reality in the whole afternoon.",
        "His closing slide was a country-by-country table of representative unicorns: OpenAI and SpaceX for the US, ByteDance for China, Coupang for Korea, Mercari for Japan, Grab for Singapore, Canva for Australia… and a blank cell next to Taiwan's flag. Why no Taiwanese unicorn yet? His answer wasn't capital or technology but education: raising people who dare to think big, take risks and pull resources together matters more than subsidizing any single industry."
      ],
      zh: [
        "吳德威合夥人用一頁「Investment Journey」把自己的跨界攤開：從消費電子、電商、餐飲、行動應用、直播、金融科技一路走到創投，投資與輔導過的公司 logo 排滿整張投影片。他的職涯本身就是那條時間軸，每隔幾年就跨進一個新產業。",
        "他花最多時間講的是 TaxiGo（後來的 Line Taxi、LineGo）這個案例。計程車是特許行業，牌照往往是家族三代經營，真正的門檻不在技術而在結構；加上台灣大車隊（55688）幾乎把小車隊都收購了，新進者面對的是一個高度整合的市場。",
        "那要怎麼驗證 product-market fit？當年的做法是用免費搭車補貼衝需求，確實有效，但代價是燒非常多錢。補貼買得到使用數據，買不到長期的護城河；這段講得很誠實，也是整場我最有感的創業現實。",
        "最後一頁是各國代表性獨角獸對照表：美國 OpenAI 與 SpaceX、中國 ByteDance、韓國 Coupang、日本 Mercari、新加坡 Grab、澳洲 Canva……名單一路排下來，台灣的欄位卻是空的。為什麼台灣還沒有自己的獨角獸？他給的答案不在資金也不在技術，而在教育：能不能培養出敢想、敢闖、敢整合資源的人，比補貼任何一個產業都更根本。"
      ]
    }
  },
  {
    speaker: "andy-lin",
    content: {
      en: [
        "Andy Lin opened with a single line: \"Have you ever had that experience, where one day, everything you've built goes to zero?\" The room went quiet. He spent the rest of his time answering it with his own story.",
        "His path was not a fast one: NTU class of 2001, to the US for UC Irvine in 2004, ASE in 2006, then two decades in Silicon Valley before founding Yo-Kai Express. The slide showed where it stands today: seven countries, 300-plus AI-powered autonomous food stations, with SoftBank, IPPUDO and Pulmuone as strategic investors.",
        "But the spine of the talk wasn't the wins. It was a timeline titled \"failure is the mother of success\": in 2013 his first startup, a grocery-delivery platform for Chinese communities in the US, failed; in 2018 he hit the wall of Japan's supply chain, where no one wanted to help a foreigner; in 2020 COVID wiped revenue to zero in a month; in 2021 Korea's suppliers shut their doors, and he kept ringing doorbells only to be turned away; in 2024 the boba texture wasn't right, so he recalled every bubble-tea machine and re-engineered it through generation after generation.",
        "After every failure came one of his lines. After shutting down the delivery platform in 2013, wondering if he was simply \"one of those people not built for startups\", what pulled him back was \"the thing you can't stop thinking about is the thing you truly want to do\". The boba do-over slide carried \"you can fail, but you cannot compromise with yourself\". And running through the whole talk: \"you may fail, but you must not stop trying\".",
        "From absolute zero to seven countries, the talk really said just one thing: you will fail; don't be discouraged. He has lived that sentence into proof."
      ],
      zh: [
        "林志鴻的開場只有一句話：「你有沒有過那種經驗，某一天，你做的事情，完全歸零了？」全場安靜了一下。接下來的時間，他用自己的故事回答這個問題。",
        "他的路走得不快：2001 年台大畢業、2004 年赴美讀 UC Irvine、2006 年進日月光，在矽谷深耕二十多年後才創辦 Yo-Kai Express。投影片上的現況是七個國家、三百多台 AI 自動化餐飲設備，SoftBank、一風堂、Pulmuone 都是策略投資人。",
        "但整場的主軸不是這些成績，而是一條「失敗為成功之母」的時間軸：2013 年第一次創業做美國華人超市外送平台，失敗；2018 年撞上日本供應鏈的牆，沒有人有意願幫一個外國人；2020 年 COVID 讓業績一夜歸零，單月收入 0 元；2021 年在韓國吃了供應鏈的閉門羹，持續按電鈴卻被趕走；2024 年因為常溫珍珠口感不對，把珍珠奶茶機全部收回、重新研發改良了好幾代。",
        "每一段失敗後面，都跟著一句他的話。2013 年收掉外送平台、一度懷疑「也許我就是那個不適合創業的人」之後，把他帶回來的是那句「念念不忘的事，才是你真正想做的事」；珍珠打掉重練的那一頁寫著「可以失敗，但不能對自己妥協」；貫穿整場的則是「你可以失敗，但不能停止嘗試」。",
        "從完全歸零到七個國家，這場演講其實只講了一件事：會失敗，但不要氣餒。他把這句話活成了證明。"
      ]
    }
  },
  {
    speaker: "tina-cheng",
    content: {
      en: [
        "Tina Cheng's talk was literally titled \"Your life is not a straight line\", and her résumé is the proof: a UCLA civil engineering degree, then finance (JP Morgan, investment banking), a nightlife venture along the way, then six startups, including Jigocity, an e-commerce platform sold to a listed company for US$65 million. Her major never decided her destination.",
        "Her first framework was three circles: Passion × Expertise × Market Demand, with your \"holy grail\" at the intersection. The line that mattered most was the caveat: \"You don't find it first and then start; you discover it through action.\"",
        "Framework two: stackable, transferable skills. Stackable means each skill amplifies the next; financial analysis plus user insight plus digital marketing compound into something hard to replace. Transferable means negotiation, storytelling and data literacy travel across industries and roles. Her own formula, \"engineering logic × financial thinking × consumer brands × e-commerce marketing\", is what she called the foundation of six startups.",
        "Careers, in her telling, are step functions, not lines. Banking trained her financial mind, engineering gave her systematic problem-solving, and every failed venture was a data point; each step stacks chips for the next, and none is wasted. She normalized failure in one breath: \"If it works, keep going; if it doesn't, analyze why, then move forward.\"",
        "The AI section had the line that stuck with me most: \"AI is the co-pilot, not the pilot: the steering wheel stays in your hands.\" AI can generate a business plan in 30 seconds, but judging, verifying and setting direction remain your job. Her six most durable skills for the AI era: critical thinking, innovation, taste, cross-domain integration, communication and persuasion, and networking. Then the \"unfair advantage\": ask yourself why me, and why now. Your background, languages, culture, network and lived experience form a moat AI can never copy.",
        "Her closing advice was unexpectedly practical: \"Asking for help is the most underrated superpower.\" It's strategy, not weakness: be specific about what you need, do your homework first, give back what you learn, and follow up. And the young have a natural edge, because people genuinely want to help promising young people. The only thing you can lose is the chance you never asked for."
      ],
      zh: [
        "Tina Cheng 的題目就叫「你的人生，不是一條直線」，而她的履歷是這句話最好的證明：UCLA 土木工程畢業，先進金融業（從 JP Morgan 到投資銀行），中間開過夜店，接著連續創業六次，其中電商平台 Jigocity 以 6,500 萬美元出售給上市公司。主修，從來沒有決定她的終點。",
        "她給的第一個框架是三個圓圈：Passion（你熱愛的）×Expertise（你擅長的）×Market Demand（市場需要的），交集就是你的聖杯。重點是那句補充：「不是找到它才開始，而是在行動中逐漸發現它。」",
        "第二個框架是「可堆疊的可轉移技能」。可堆疊，指每個技能會強化下一個，像財務分析＋用戶洞察＋數位行銷這種彼此加乘的組合；可轉移，指談判、說故事、數據解讀這些跨產業帶著走的能力。她自己的公式是「工程邏輯 × 金融思維 × 消費者品牌 × 電商行銷」，她說這是六次創業的底氣。",
        "職涯觀是 Linear vs Step-Function：路徑不是直線，是階梯式跳躍。投行訓練了財務思維、工程背景給了系統化解題、每一次創業失敗都是一個資料點；每一步都在為下一步累積籌碼，沒有一步是浪費的。她把失敗講得很日常：「對了繼續，錯了分析原因，然後前進。」",
        "AI 時代的段落我印象最深的是那句「AI 是副駕駛，不是駕駛：方向盤永遠在你手上」。AI 可以在 30 秒生成一份商業計畫書，但判斷、驗證、給方向的必須是你。她列的六項最保值能力是批判性思考、創新、品味、跨域整合、溝通說服、建立人脈。接著是「不公平優勢」，問自己「為什麼是我？為什麼是現在？」你的背景、語言、文化、人脈與親身經歷，是 AI 永遠無法複製的護城河。",
        "最後的建議意外地實用：「開口求助，是最被低估的超能力。」求助不是軟弱，是策略：要具體說明你需要什麼、先做功課再提問、把學習成果回饋給幫你的人、持續跟進。年輕人有個天然優勢，人們天生願意幫助有潛力的年輕人；你唯一會失去的，是沒有開口的那個機會。"
      ]
    }
  },
  {
    speaker: "jonathan-lin",
    content: {
      en: [
        "Closing the summit was Jonathan Lin, whose twenty years span operating companies, investment banking and private equity: CFO of AT&T Taiwan, chairman and CEO of a major beverage company, head roles at a global drink chain, investment banking at Deutsche Bank, UBS and Credit Suisse, then partner at Summitview Capital, Dawei Capital and Andra Capital. At Wharton he studied technology and biotech management, where, as he put it, his professors and classmates were mostly healthcare experts and CEOs; in a room like that, the network is part of the curriculum.",
        "The clearest thread of the talk was his taste in deals: he likes backing companies that change an industry and unseat its leader, and working on era-defining M&A. The case list on his slides spanned three decades, from AOL and Time Warner, Comcast's acquisition of AT&T's cable business, and the Hong Kong IPOs of ICBC and Alibaba, up to the Musk ecosystem's Twitter take-private and the merger of X into xAI, plus a full page of Taiwan deals: Fairchild and System General, MediaTek and NuCORE, the E Ink acquisition that made Amazon's Kindle possible, and Taiwan High Speed Rail's pioneering offshore convertible bond. Behind every deal, a reshuffling of an industry's competitive structure.",
        "He went deep on one current case: NVIDIA's roughly US$20 billion acquisition of Groq in December 2025. The deal used an unusual \"asset purchase plus non-exclusive license\" structure to lower antitrust risk; in substance it was an acqui-hire, buying the IP outright and folding the core engineering team in; strategically, Groq's LPU patches the GPU's weakness in real-time, low-latency inference. One transaction, played simultaneously on the technology, legal and talent boards: era-defining M&A, happening in real time.",
        "As for what he does now: Andra Capital focuses on the world's top pre-IPO software and AI companies, and he mentioned Google as an investment partner. My biggest takeaway from the closing talk: at the top of the investing world, judgment and networks are themselves a form of capital. After the summit I did a round of independent homework on Andra Capital and turned it into a site of its own; see \"follow-up deep dives\" below."
      ],
      zh: [
        "壓軸的林家振合夥人，二十年橫跨企業經營、投資銀行與私募基金：當過 AT&T 台灣財務長、波蜜董事長兼總經理、連鎖飲品公司總經理，歷練過德意志銀行、瑞銀與瑞士信貸的投行部門，再到武岳峰資本、達為資本與 Andra Capital 的合夥人。他在 Wharton 讀科技管理與生醫管理，說當時的老師與同學多是醫療領域的專家和 CEO；在那樣的環境裡，人脈網絡本身就是課程的一部分。",
        "整場最清楚的一條主軸，是他對投資的品味：喜歡投「會改變產業、換掉龍頭」的企業，做「改變時代的併購案」。投影片上列的案例橫跨三十年，從 AOL 併時代華納、Comcast 併 AT&T 有線電視、工商銀行與阿里巴巴的香港上市，一路到馬斯克生態系的 Twitter 私有化與 X、xAI 的整併；台灣線也有一整頁：Fairchild 併崇貿、聯發科併 Nucore、元太併 E Ink 促成了亞馬遜 Kindle、台灣高鐵首開先例的海外可轉債。每一筆交易背後，都是產業競爭結構的重新洗牌。",
        "他挑了一個最新的個案講深：2025 年 12 月 NVIDIA 以約 200 億美元收購 Groq。交易採「資產收購＋非獨家授權」的特殊架構以降低反壟斷審查風險；本質上是一場 acqui-hire，買斷 IP、把核心工程團隊納入麾下；戰略上則用 Groq 的 LPU 補上 GPU 在即時推論與低延遲應用的短板。一樁交易，同時是技術、法務與人才的棋局，大概就是「改變時代的併購案」正在進行式的樣子。",
        "回到他現在做的事：Andra Capital 專注投資全球軟體科技與 AI 領域最頂尖的未上市企業，他也提到 Google 是投資夥伴之一。聽完整場，我最深的感想是：在頂級投資的世界裡，判斷力與人脈網絡，本身就是資本。會後我也對 Andra Capital 做了一輪獨立的研究功課，整理成一個網站，放在下方的「會後延伸整理」。"
      ]
    }
  }
];

/* ---------- follow-up deep-dive sites (my own, hosted on *.peteraim.com) ---------- */
window.SITE_EXTRAS = [
  {
    slug: "triz-40",
    url: "https://triz-40.peteraim.com/",
    icon: "lightbulb",
    from: "chih-yao-wu",
    title: { en: "TRIZ 40 Inventive Principles", zh: "TRIZ 萃思 40 項發明原則" },
    desc: {
      en: "A bilingual field guide to Altshuller's 40 inventive principles — definitions, sub-principles and 400+ examples from ancient crafts to AI, with flashcards and a quiz. Sparked by Chih-Yao Wu's talk on TRIZ.",
      zh: "聽完吳智堯執行長介紹 TRIZ 後掉進的坑：把 40 項發明原則整理成雙語圖鑑——每項原則附定義、子原則與從古代工藝到 AI 的 400+ 個案例，還有翻卡與隨堂測驗。"
    }
  },
  {
    slug: "impact-investing",
    url: "https://impact-investing.peteraim.com/",
    icon: "volunteer_activism",
    from: "ray-chen",
    title: { en: "Impact Investing & B Corps", zh: "影響力投資與 B 型企業圖鑑" },
    desc: {
      en: "A field guide to impact investing and the B Corp movement — concepts, history, Yunus and Grameen Bank, cases by country, key people and Taiwan's ecosystem. Sparked by Ray Chen's talk.",
      zh: "從陳一強總經理的影響力投資分享延伸的功課：概念與歷史、B 型企業運動、尤努斯與窮人銀行、各國案例、關鍵人物與台灣生態系，全站附來源連結。"
    }
  },
  {
    slug: "andra-capital",
    url: "https://andra-capital.peteraim.com/",
    icon: "account_balance",
    from: "jonathan-lin",
    title: { en: "Andra Capital Notes", zh: "Andra Capital 安卓樂資本筆記" },
    desc: {
      en: "An independent research site on Andra Capital — company profile, key people, portfolio, SEC filings and the Silicon Valley Coin, every number with a source. Follow-up to Jonathan Lin's talk.",
      zh: "聽完林家振教授的分享後做的獨立研究站：Andra Capital 公司概況、主要投資人、投資組合、SEC 申報與 Silicon Valley Coin，每個數字都附來源。"
    }
  }
];

/* ---------- context: the Stanford statement quoted by the organizer ---------- */
window.SITE_LETTER = {
  title: {
    en: "“We Must Act Now” — the statement behind the organizer's pitch",
    zh: "「We Must Act Now」——主辦方宣傳引用的公開聲明"
  },
  intro: {
    en: "The organizer's promotion leaned heavily on an open letter from the Stanford Digital Economy Lab. The letter is real, and the organizer's description of it is essentially accurate. Key details:",
    zh: "主辦方的宣傳文大量引用一封 Stanford Digital Economy Lab 的公開信。這封信確實存在，且主辦方的描述基本準確。重點如下："
  },
  points: [
    {
      en: "Official name: “We Must Act Now: A Statement on AI's Transformation of the Economy”, published 2026-07-13 — six days before the summit.",
      zh: "正式名稱「We Must Act Now: A Statement on AI's Transformation of the Economy」，2026-07-13 發布——峰會前六天。"
    },
    {
      en: "Initiated by four economists — Erik Brynjolfsson (Stanford), Ajay Agrawal (Toronto), Anton Korinek (UVA/Anthropic), Tom Cunningham (METR) — and published via the Stanford Digital Economy Lab.",
      zh: "由四位經濟學家發起——Erik Brynjolfsson（Stanford）、Ajay Agrawal（Toronto）、Anton Korinek（UVA/Anthropic）、Tom Cunningham（METR）——經 Stanford Digital Economy Lab 發布。"
    },
    {
      en: "200+ signatories including 16 Nobel laureates (Acemoglu, Stiglitz, Krugman, Bernanke…), OpenAI chief economist Ronnie Chatterji, Anthropic chief economist Peter McCrory, and former Google CEO Eric Schmidt.",
      zh: "逾 200 位連署人，含 16 位諾貝爾獎得主（Acemoglu、Stiglitz、Krugman、Bernanke 等）、OpenAI 首席經濟學家 Ronnie Chatterji、Anthropic 首席經濟學家 Peter McCrory、Google 前執行長 Eric Schmidt。"
    },
    {
      en: "The statement is just three short paragraphs: AI may become extremely powerful within a decade, could drive an economic transformation larger than the Industrial Revolution on a far shorter timeline, and economists, policymakers and technologists must act now to build the incentives, guardrails and institutions for it to benefit society.",
      zh: "全文僅三段：AI 可能在十年內變得極為強大，或帶來大於工業革命、但時程遠更短的經濟變革；經濟學家、政策制定者與科技領袖必須立即行動，建立讓 AI 造福社會的誘因、護欄與制度。"
    }
  ],
  links: [
    { label: { en: "Original statement & signatories", zh: "原始聲明與連署名單" }, url: "https://wemustactnow.ai/" },
    { label: { en: "Stanford Digital Economy Lab announcement", zh: "Stanford 官方新聞稿" }, url: "https://digitaleconomy.stanford.edu/news/wemustactnow/" },
    { label: { en: "AP / ABC News coverage", zh: "AP／ABC News 報導" }, url: "https://abcnews.com/Technology/wireStory/hundreds-economists-act-now-ais-economic-impact-job-134719082" }
  ]
};

/* ---------- fact-check methodology + highlights ---------- */
window.SITE_FACTCHECK = {
  method: {
    en: "Every claim from the organizer's materials was checked one by one against independent sources — official websites, government/company registries, SEC filings and press coverage — in two rounds on 2026-07-20. Round two re-examined every unresolved claim with Internet Archive snapshots, SEC EDGAR, FINRA BrokerCheck and the subjects' own recently endorsed bios; two first-round “organizer claim only” items were overturned in the subjects' favor, others hardened. Each claim carries one of three statuses. Full research notes with all source links are in the repo's /research folder.",
    zh: "主辦方文案中的每一項聲稱，都在 2026-07-20 分兩輪逐項與獨立來源比對——官方網站、政府與公司登記、SEC 文件與媒體報導。第二輪針對所有未解項目加開 Wayback Machine 歷史快照、SEC EDGAR、FINRA BrokerCheck 與當事人近年親自背書的簡介複查；兩項第一輪標「僅主辦方宣稱」的項目獲得平反，其餘則更加確定。每項聲稱標注三種查證狀態之一，完整查核筆記與全部來源連結收錄於 repo 的 /research 資料夾。"
  },
  legend: [
    { status: "verified", label: { en: "Verified", zh: "已驗證" }, desc: { en: "Confirmed by independent sources.", zh: "有獨立來源可證。" } },
    { status: "partial", label: { en: "Partially verified", zh: "部分吻合" }, desc: { en: "Core claim holds; details differ from independent records.", zh: "核心屬實，細節與獨立紀錄有出入。" } },
    { status: "claimed", label: { en: "Organizer claim only", zh: "僅主辦方宣稱" }, desc: { en: "No independent source found.", zh: "查無獨立來源。" } }
  ],
  highlights: {
    title: { en: "What didn't fully check out", zh: "與獨立來源不符的重點" },
    items: [
      {
        en: "Jonathan Lin's “all-star Andra team” and portfolio list trace verbatim to his own NTU faculty bio (added between 2022 and 2025) — the organizer copied it. Of six team names, two hold up in some form (an ex-Cisco VP whose title got inflated to “president”, and an ex-Goldman MD); four are untraceable anywhere. Scale AI, Neuralink and Databricks appear in neither ten years of Andra site snapshots nor Lin's own bio; his banking roles were associate/VP level, and one deal claim conflicts with the SEC's own filing.",
        zh: "林家振的「Andra 豪華團隊」與投資組合清單，逐字出自他本人的台大官網 bio（2022→2025 版之間新增），主辦方為照抄。六項團隊頭銜中兩項有其人（前 Cisco VP 被說成「總裁」、前高盛 MD 屬實），四項全網查無；Scale AI、Neuralink、Databricks 連十年 Andra 官網快照與林本人自述都沒有；其投行職級實為協理／VP 級，且一項交易聲稱與 SEC 文件牴觸。"
      },
      {
        en: "Tina Cheng's “GVA Managing Partner” title has no independent source — three recent bios she herself endorsed omit it, and no such institution can be found. She is also not among JigoCity's officially named founders (her own bios say Greater China CEO; the $65M deal was capped stock + warrants).",
        zh: "Tina Cheng 的「GVA 執行合夥人」查無獨立來源——她本人近兩年背書的三份正式簡介都沒有這個頭銜，且全網查無此機構；JigoCity 官方新聞稿列名創辦人也不含她（本人簡介寫大中華區 CEO；6,500 萬美元為上限股票對價）。"
      },
      {
        en: "Andy Lin's “hundreds of machines” exceeds independent reporting (~150–200), and SoftBank Robotics is a partner, not an investor.",
        zh: "Andy Lin 的「數百台設備」高於獨立報導（約 150–200 台／據點）；SoftBank Robotics 為合作夥伴而非投資人。"
      },
      {
        en: "Several “founder” titles are actually co-founder roles (Ray Chen at B Current, Edgar Chiu at SparkLabs Taiwan), and two academic titles are inflated (adjunct professor / consulting expert, not “visiting professor”).",
        zh: "多個「創辦人」實為共同創辦人（陳一強之於活水、邱彥錡之於 SparkLabs Taiwan）；兩個學術頭銜有放大（實為兼任教授／諮詢專家，非「客座教授」）。"
      },
      {
        en: "The event itself: the email domain and Accupass account were created seven weeks before the organizing company legally existed; “invitation/review-based” was in reality a plain NT$500 ticket flow; “sold out” is unverifiable; the “14-year-old initiator” story appears only in the organizer's own posts; zero media coverage, and none of the eight speakers ever mentioned the summit on their own channels.",
        zh: "活動本身：信箱域名與 Accupass 帳號比主辦公司合法存在早了七週；「邀請與審核制」實為一般 NT$500 購票流程；「售完」無法驗證；「14 歲發起人」僅見主辦方自述貼文；零媒體報導，且八位講者本人的頻道皆未提及這場峰會。"
      },
      {
        en: "For balance: two first-round “organizer claim only” items were overturned in round two — David Wu really is the Taiwan Future Society's current chairman (the society's English pages were stale 2020 copy), and Andy Lin really did move to the US in 2004 (UC Irvine 2004–2006 per his own timeline). Sometimes the claim is right and the website is old.",
        zh: "平衡起見：兩項第一輪標「僅主辦方宣稱」的項目在第二輪獲得平反——吳德威確為陽明山未來學社現任理事長（學社英文版頁面是 2020 年舊文案），Andy Lin 也確實於 2004 年赴美（本人年表載 UC Irvine 2004–2006）。有時不是聲稱錯了，是網站太舊。"
      }
    ]
  }
};
