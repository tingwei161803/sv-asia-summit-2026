# 第二輪深挖查證（2026-07-20）

第一輪標「查無獨立來源」的項目，以進階手段複查：Wayback Machine（CDX API＋歷史快照）、SEC EDGAR（Form D、S-4）、FINRA BrokerCheck／SEC IAPD、公司登記、podcast 官方 show notes、講者本人近年背書的正式簡介。結果摘要：

| 項目 | 第一輪 | 第二輪 | 關鍵證據 |
|---|---|---|---|
| 吳德威「陽明山未來學社理事長」 | ❌ | ✅ **翻案** | 學社中文版首頁＋2026-03 官方活動報導 |
| Andy Lin「2004 年赴美」 | ❌ | ✅ **翻案** | 本人 LinkedIn：UC Irvine 2004–2006，時間軸全吻合 |
| 林家振「Andra 豪華團隊」 | ❌ | ⚠️ 部分 | 源頭是他本人台大 bio；6 項中 2 項有其人、4 項查無 |
| 林家振投資組合缺 4 家 | ⚠️ | Palantir ⚠️／其餘 ❌ 更確定 | Wayback 十年快照＋本人 bio 皆無 Scale AI/Neuralink/Databricks |
| Tina Cheng「GVA 執行合夥人」 | ❌ | ❌ **更確定** | 本人近兩年三份正式簡介皆無 GVA；查無此機構 |
| Tina Cheng「創辦 JigoCity」 | ⚠️ | ⚠️ 應更正措辭 | 官方新聞稿列名三位創辦人不含她 |
| 活動「邀請與審核制」「售完」 | ⚠️ | ❌ | 實為單一 NT$500 一般購票；無售完快照 |
| 主辦公司代表人 | 陳若旻（誤） | **陳若羚**（更正） | g0v 公司登記 API |

---

## 一、吳德威 —「陽明山未來學社理事長」→ ✅ 已驗證

- 學社官網**中文版首頁**明載：「朱嘉明先生為創始人暨榮譽理事長；葉匡時先生為榮譽理事長；**現任理事長由吳德威先生出任**」。<https://www.taiwanfuturesociety.org/zh/>
- 學社 2026-03-17 Google 板橋參訪報導直接稱「理事長吳德威」「吳德威理事長撰文」。
- 第一輪矛盾的來源：官網**英文版與「關於我們」頁停留在 2020 年第三屆舊文案**（葉匡時）未更新。
- Wayback 定位換屆時間窗：2025-03-12 快照仍為葉匡時、2025-10-18 起為吳德威；FB 旁證指向 2025 年 6 月就任。
  - <https://web.archive.org/web/20250312094247/https://taiwanfuturesociety.org/zh/>
  - <https://web.archive.org/web/20251018083321/https://taiwanfuturesociety.org/zh/>
- 無任何新聞報導此換屆（僅 2020 葉匡時就任有舊聞）；2025-02 遠見作者簡介與 2023 出書作者簡介均未列此頭銜，與 2025 年中就任時序一致。

## 二、林志鴻 Andy Lin —「2004 年前往美國」→ ✅ 可證（本人年表＋多方交叉吻合）

- 本人 LinkedIn 公開預覽：UC Irvine **2004–2006**、台大 1997–2001。<https://www.linkedin.com/in/andylin838>
- 第三方 LinkedIn 鏡像（Highperformr）：M.S. EECS UC Irvine 2004；ASE 經歷含 **ASE (U.S.) Inc.**（2013–2016）等，至 2018。<https://www.highperformr.ai/people/andylin838>
- 交叉驗證：數位時代 2021-09「42 歲」→ 約 1979 年生；2006 年入職日月光 → 「半導體 12 年」（2006–2018）；壹蘋 2025：「曾在美國矽谷擔任日月光工程師」（即 ASE (U.S.) Inc., Sunnyvale）。
- 結論：「2004 年前往美國」＝赴 UC Irvine 讀碩士（2004–2006），其後留美。媒體皆未明寫 2004，屬本人年表可推證。

## 三、林家振 — 源頭確認與逐項比對

### 說法源頭（關鍵發現）

「Cisco 全球企業發展總裁、Broadcom 與 LSI 總裁、高盛 MD、IBM 前創新長、Siri 發明人、雷曼與大摩高層共同擔任 Andra 合夥人」與投資組合清單，**逐字出自林家振本人放在台大管理學院官網的自述 bio（2025 快照）**；2020、2022 版快照無此段落，屬後期加入。主辦方為照抄，非自行編造。

- 2025 版：<https://web.archive.org/web/20250915230954/https://management.ntu.edu.tw/faculty/teacher/sn/385>
- 2020 版（無此段）：<https://web.archive.org/web/20200805135801/http://www.management.ntu.edu.tw/faculty/teacher/sn/385>

### 「豪華管理團隊」六項逐一比對 → ⚠️（2 有其人、4 查無）

| 說法 | 結果 |
|---|---|
| Cisco 全球企業發展「總裁」 | 有其人：Charles Carmel（2022–2024 官網 Managing Partner／Crunchbase 列 Vice Chairman，現已移除）；但 Cisco 職銜為 **VP of Corporate Development**，「總裁」灌水一級 |
| 高盛董事總經理 | 屬實：Kathy Park，2022-10 官方新聞稿加入 Andra 任 Partner（前高盛 18 年 MD）。<https://www.prweb.com/releases/Andra_Capital_expands_Leadership_Team_with_Kathy_Park_joining_as_Partner/prweb19044855.htm> |
| Broadcom 與 LSI 總裁 | 查無此人與 Andra 之連結 |
| IBM 創新長 | 查無（含 Bernie Meyerson 交叉搜尋） |
| Apple Siri 發明人 | 查無（Adam Cheyer／Dag Kittlaus／Tom Gruber 逐一交叉，零連結） |
| 雷曼／摩根士丹利高層 | 查無對應人物 |

- Wayback 歷年 team 頁：2022–2024 為 Haba／Tuan／Carmel 三人；2018–19 SVC 時期團隊 12 人名單中亦無上述大咖。
- SEC Form D（2026-05）related persons 僅列 Haba、Tuan。<https://www.sec.gov/Archives/edgar/data/1884136/000188413626000006/primary_doc.xml>
- 公平性保留：Kathy Park 未曾上過官網 team 頁，證明官網名單不完整，故四項「查無」無法 100% 證偽。

### 投資組合

- **Palantir → ⚠️**：Andra 官網 /portfolio 自 2022-05 快照起持續展示（<https://web.archive.org/web/20220529012125/https://www.andracapital.com/portfolio/>）；無第三方確認（二級市場／SPV 持股本質難驗）。
- **Scale AI、Neuralink、Databricks → ❌ 更確定**：對 2016–2026 全部快照 grep 零命中；**連林本人台大 bio 的 16 家清單都沒有這三家**——連「自稱」層級都構不上，最可能為活動文宣添加。
- Andra 規模（Form D）：Andra Capital Fund LP 累計實募 3.5 億美元、260 位投資人；2018 Silicon Valley Coin 僅申報售出 130 萬美元。

### 投行經歷 → 維持 ⚠️，補具體事實

- FINRA BrokerCheck／SEC IAPD 逐筆核對無匹配；**限制：FINRA 公開資料僅保留最近十年**，無法證實亦無法證偽。
- 本人自述職級：AT&T **台灣分公司**財務長、CSFB 紐約「協理」、UBS 協理（AVP）、德銀「副總裁（VP）兼台灣投行主管」——皆中階職級，任何「高層」表述屬轉述灌水。
- 「協助 Comcast 收購 AT&T 寬頻」與 CSFB 任職相容 ✅；「協助 AOL 併時代華納」**與 SEC S-4 牴觸**（主顧問為 Salomon Smith Barney 與 Morgan Stanley）。<https://www.sec.gov/Archives/edgar/data/0001105705/000094018000000639/0000940180-00-000639.txt>
- 台大 bio 2020→2025 有頭銜與事蹟「逐年升級」現象（例：UBS 段落）。

### Wharton 學歷 → ⚠️

- 2017 台灣 MBA 高峰論壇以 Wharton 校友身分受訪（<https://sabinahuang.com/2017-taiwan-mba-forum-wharton-info-session/>）；無反證。
- 但學程名稱各處不一（金融與策略管理研究所／科技管理與生醫管理研究所／MBA），Wharton 並無上述「研究所」單位；名冊不公開無法查畢業年份。

## 四、鄭文婷 Tina Cheng

### 「GVA 執行合夥人」→ ❌ 更確定

她本人參與、近兩年的三份正式簡介**全部沒有 GVA**：

1. SparkLabs Taiwan CORE 3 講師簡介（2024，Accupass 官方頁）：<https://www.accupass.com/go/core3>
2. 超真實商談 Real Biz Chat EP#10 官方介紹（2025-03-28）：<https://podcasts.apple.com/ae/podcast/id1784659353>
3. Bonhope Capital 官網 bio（Venture Partner）：<https://www.bonhopecapital.com/team>

另：lava.org 個人頁零 Wayback 快照；全網查無名為 "Global Venture Accelerator" 的機構（僅 Global Venture Alliance gva.vc 與 GVA Capital，團隊皆無她）。此頭銜唯一出處＝主辦方文案。

### 「創辦 JigoCity」→ 應更正措辭

- FriendFinder 官方新聞稿逐字列名創辦人：Tony Bobulinski（Founder & CEO）、Michael Dorman、Joshua Mallamud——**不含她**；socaltech 同。
- 她本人背書的 SparkLabs 簡介也只寫「大中華區首席執行官」。RocketReach 快照：CEO of Greater China, 2010–2013。
- 官方規模：150 名員工／20+ 城市（她自述 200+／六國，同量級略有出入）。
- 建議措辭：「曾任 JigoCity 大中華區 CEO（2010–2013，自述），該公司 2011 年由 FriendFinder Networks 以上限 $65M 股票＋認股權證收購」。

### 「台灣大型月子中心」→ 維持自述級

- VoyageLA 原文僅一句 "a postpartum maternity center in Taiwan"，**「大型」是主辦方文案添加**。
- 第二個自述來源：RBC EP#10 章節「(12:33) 轉型投入月子中心的契機」。
- 疑似名稱線索 "PURE Maternity Retreat"（LinkedIn 摘要）但精確搜尋查無此業者；LinkedIn 有一段新竹經歷相容。零第三方紀錄。

### 附帶新背景（可信，來自 Bonhope 官網與各簡介）

Bear Stearns 私人客戶投資組合管理、精品投行 MD、Coordinates Collection COO、UCLA 土木工程學士、USC Marshall MBA（2000–2002）、CFA。

## 五、活動與主辦方

- **代表人姓名更正：陳若羚**（第一輪誤記「陳若旻」）。唯一董事、出資額 50 萬（全額）；名下無其他公司；網路查無任何公開足跡。<https://company.g0v.ronny.tw/api/show/62064078>
- **時序**：sv-asia-venture-hub.org 網域與 Accupass 主辦帳號**同日建立（2026-04-26）**，早於公司設立（2026-06-15）約 7 週；活動頁 2026-07-11 建立（活動前 8 天）。此為該帳號唯一活動，非系列活動。主辦帳號有通過 Accupass 身分認證（isVerify: true），追蹤者 242。
- **「邀請與審核制」→ ❌**：只存在於主辦方自撰文案；Accupass 系統實為單一票種 NT$500 的一般購票流程，無審核機制痕跡。頁面互動：970 瀏覽／13 喜歡。
- **「實體票售完」→ 無法驗證**：活動頁從未被 Internet Archive 存檔（CDX 零筆）；現存頁面按鈕狀態為 EventExpired（活動結束）而非 EventSoldout。
- **講者方零公開佐證**：八位講者的個人社群、官網、所屬組織均未提及此峰會（活動前後皆無）。註：**當天六位講者出席為本站作者現場第一手記錄**，此觀察僅說明「講者陣容宣傳無第三方轉發」，不影響活動真實性。
- 活動後 24 小時內查無參加者公開心得貼文（Google 索引可能滯後，建議一週後複掃）。
