// data.js
const courseJourney = {
    title: "網頁開發大冒險",
    units: [
        {
            id: "unit-html-basics",
            title: "HTML 基礎探秘",
            description: "啟程！探索網頁結構的奧秘。",
            themeColor: "#1CB0F6", // Duolingo Blue
            levels: [
                {
                    id: "level-html-intro",
                    title: "初識 HTML",
                    iconType: "star",
                    xp: 10,
                    modules: [
                        { type: "info", content: "HTML (HyperText Markup Language) 是創建網頁的標準標記語言，如同建築的骨架，定義了網頁的結構。" },
                        { type: "info", content: "所有你看到的網頁，背後都有 HTML 在支撐著文字、圖片和連結等元素的排列。" },
                    ]
                },
                {
                    id: "level-first-webpage",
                    title: "我的第一頁",
                    iconType: "code",
                    xp: 15,
                    modules: [
                        { type: "info", content: "一個基本的 HTML 文件結構包含 `&lt;!DOCTYPE html&gt;`, `&lt;html&gt;`, `&lt;head&gt;`, 和 `&lt;body&gt;`。" },
                        { type: "code_example", language: "html", code: "&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n    &lt;title&gt;我的第一個網頁&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;h1&gt;你好，世界！&lt;/h1&gt;\n    &lt;p&gt;這是一個段落。&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;", explanation: "`&lt;head&gt;` 包含元信息，`&lt;body&gt;` 包含可見內容。" },
                        {
                            type: "quiz",
                            config: {
                                question: "網頁上主要給用戶看到的內容，應該放在哪個 HTML 標籤裡面？",
                                questionType: "mcq",
                                options: ["&lt;head&gt;", "&lt;body&gt;", "&lt;title&gt;", "&lt;html&gt;"],
                                answer: `<body>`,
                                correctMessage: "完全正確！`<body>` 裡就是我們瀏覽網頁時看到的一切。",
                                incorrectMessage: "再想想看，哪個標籤代表網頁的「身體」部分呢？"
                            }
                        }
                    ]
                },
                {
                    id: "level-html-tags",
                    title: "常用標籤",
                    iconType: "book",
                    xp: 10,
                    modules: [
                        { type: "info", content: "HTML 有很多標籤，例如 `&lt;h1&gt;` 到 `&lt;h6&gt;` 用於標題，`&lt;p&gt;` 用於段落，`&lt;a&gt;` 用於連結，`&lt;img&gt;` 用於圖片。" },
                        {
                            type: "quiz",
                            config: {
                                question: "要創建一個指向 'https://example.com' 的超連結，文字是 '點我'，哪個 HTML 寫法是正確的？",
                                questionType: "mcq",
                                options: [
                                    "&lt;link href='https://example.com'&gt;點我&lt;/link&gt;",
                                    "&lt;a src='https://example.com'&gt;點我&lt;/a&gt;",
                                    "&lt;a href='https://example.com'&gt;點我&lt;/a&gt;",
                                    "&lt;url link='https://example.com'&gt;點我&lt;/url&gt;"
                                ],
                                answer: "<a href='https://example.com'>點我</a>",
                                correctMessage: "太棒了！`<a>;` 標籤的 `href` 屬性用來指定連結目標。",
                                incorrectMessage: "提示：超連結使用 `<a>` 標籤和 `href` 屬性哦。"
                            }
                        }
                    ]
                },
                {
                    id: "level-html-lists",
                    title: "列表清單",
                    iconType: "code",
                    xp: 15,
                    modules: [
                        { type: "info", content: "HTML 提供無序列表 (`&lt;ul&gt;`) 和有序列表 (`&lt;ol&gt;`) 來組織條目。每個列表項都使用 `&lt;li&gt;` 標籤。" },
                        {
                            type: "code_example", language: "html",
                            code: "&lt;h2&gt;我的購物清單 (無序)&lt;/h2&gt;\n&lt;ul&gt;\n  &lt;li&gt;蘋果&lt;/li&gt;\n  &lt;li&gt;香蕉&lt;/li&gt;\n  &lt;li&gt;牛奶&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;h2&gt;待辦事項 (有序)&lt;/h2&gt;\n&lt;ol&gt;\n  &lt;li&gt;寫作業&lt;/li&gt;\n  &lt;li&gt;運動&lt;/li&gt;\n  &lt;li&gt;閱讀&lt;/li&gt;\n&lt;/ol&gt;",
                            explanation: "`&lt;ul&gt;` 顯示項目符號，`&lt;ol&gt;` 顯示數字編號。"
                        },
                        {
                            type: "quiz",
                            config: {
                                question: "哪個標籤用於定義有序列表中的單個列表項？",
                                questionType: "mcq",
                                options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;item&gt;"],
                                answer: "<li>",
                                correctMessage: "非常棒！`<li>` 用於表示列表中的每一個項目。",
                                incorrectMessage: "回想一下 List Item 的縮寫是什麼呢？"
                            }
                        }
                    ]
                },
                {
                    id: "level-html-images",
                    title: "網頁圖片",
                    iconType: "star",
                    xp: 15,
                    modules: [
                        { type: "info", content: "`&lt;img&gt;` 標籤用於在網頁中嵌入圖片。它是一個空標籤，只需要屬性。" },
                        { type: "info", content: "最重要的屬性是 `src` (圖片來源路徑) 和 `alt` (替代文本，當圖片無法顯示時或為螢幕閱讀器提供信息)。" },
                        {
                            type: "code_example", language: "html",
                            code: "&lt;img src=\"cute_cat.jpg\" alt=\"一隻可愛的小貓\"&gt;\n\n&lt;img src=\"https://picsum.photos/200/300\" alt=\"隨機圖片\"&gt;",
                            explanation: "`alt` 文本對於無障礙訪問和 SEO 都非常重要！"
                        },
                        {
                            type: "quiz",
                            config: {
                                question: "在 `&lt;img&gt;` 標籤中，哪個屬性指定圖片的來源路徑？（只需填寫屬性名）",
                                questionType: "fill_blank",
                                answer: "src",
                                correctMessage: "答對了！`src` 就是 Source 的縮寫。",
                                incorrectMessage: "提示：這個屬性告訴瀏覽器去哪裡「尋找」圖片。"
                            }
                        }
                    ]
                },
                {
                    id: "level-html-tables",
                    title: "結構化數據：表格",
                    iconType: "code",
                    xp: 20,
                    modules: [
                        { type: "info", content: "HTML 表格用於以行和列的形式展示數據。\n核心標籤包括：\n- `&lt;table&gt;`: 定義表格本身。\n- `&lt;tr&gt;` (Table Row): 定義表格中的一行。\n- `&lt;td&gt;` (Table Data): 定義表格中的一個單元格 (標準數據單元格)。\n- `&lt;th&gt;` (Table Header): 定義表頭單元格，通常顯示為粗體並居中。" },
                        { type: "info", content: "表格還可以有 `&lt;thead&gt;` (表頭內容區), `&lt;tbody&gt;` (表格主體內容區), 和 `&lt;tfoot&gt;` (表尾內容區) 來進一步組織結構，儘管 `&lt;tbody&gt;` 是最常用的，瀏覽器通常也會自動添加它如果沒寫。" },
                        {
                            type: "code_example", language: "html",
                            code: "&lt;table border=\"1\"&gt; &lt;!-- border=\"1\" 僅為演示，推薦用CSS設定邊框 --&gt;\n  &lt;thead&gt;\n    &lt;tr&gt;\n      &lt;th&gt;姓名&lt;/th&gt;\n      &lt;th&gt;年齡&lt;/th&gt;\n      &lt;th&gt;城市&lt;/th&gt;\n    &lt;/tr&gt;\n  &lt;/thead&gt;\n  &lt;tbody&gt;\n    &lt;tr&gt;\n      &lt;td&gt;小明&lt;/td&gt;\n      &lt;td&gt;25&lt;/td&gt;\n      &lt;td>台北&lt;/td&gt;\n    &lt;/tr&gt;\n    &lt;tr&gt;\n      &lt;td&gt;小華&lt;/td&gt;\n      &lt;td>30&lt;/td&gt;\n      &lt;td>高雄&lt;/td&gt;\n    &lt;/tr>\n  &lt;/tbody&gt;\n&lt;/table&gt;",
                            explanation: "注意表格的嵌套結構：`&lt;table>` 包含 `&lt;tr&gt;`，`&lt;tr&gt;` 包含 `&lt;td&gt;` 或 `&lt;th&gt;`。"
                        },
                        {
                            type: "quiz",
                            config: {
                                question: "在 HTML 表格中，哪個標籤用於定義一行？",
                                questionType: "mcq",
                                options: ["&lt;table&gt;", "&lt;td&gt;", "&lt;th&gt;", "&lt;tr&gt;"],
                                answer: "<tr>",
                                correctMessage: "正確！Table Row 的縮寫就是 `<tr>`。",
                                incorrectMessage: "提示：每一行都由一個特定的標籤開始和結束。"
                            }
                        }
                    ]
                },
                {
                    id: "checkpoint-html-basics",
                    title: "基礎檢定",
                    iconType: "trophy",
                    isCheckpoint: true,
                    xp: 25,
                    modules: [
                        { type: "info", content: "恭喜即將完成 HTML 基礎！來個快速測驗鞏固一下吧！" },
                        {
                            type: "quiz",
                            config: {
                                question: "HTML 的全名是什麼？",
                                questionType: "mcq",
                                options: ["Hyper Transfer Markup Language", "HyperText Markup Language", "HighText Machine Language"],
                                answer: "HyperText Markup Language",
                                correctMessage: "你真是個 HTML 小專家！",
                                incorrectMessage: "提示：Text 和 Markup 是關鍵字。"
                            }
                        },
                                                {
                            type: "quiz",
                            config: {
                                question: "用於創建項目符號列表（無序列表）的 HTML 標籤是？",
                                questionType: "fill_blank",
                                answer: "ul", // 假設用戶只需填寫標籤名
                                correctMessage: "完全正確！就是 `<ul>` (Unordered List)。",
                                incorrectMessage: "提示：不是有序的，開頭字母是 U。"
                            }
                        },
                        {
                            type: "quiz",
                            config: {
                                question: "要定義一個段落，應該使用哪個標籤？（只需填寫標籤名，不含尖括號）",
                                questionType: "fill_blank",
                                answer: "p",
                                correctMessage: "沒錯，就是 `<p>` 標籤！",
                                incorrectMessage: "想想看，段落的英文是 Paragraph。"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: "unit-css-styling",
            title: "CSS 樣式魔法書",
            description: "學習用 CSS 為你的網頁施展美化魔法。",
            themeColor: "#58CC02", // Duolingo Green
            levels: [
                {
                    id: "level-css-intro",
                    title: "CSS 是什麼？",
                    iconType: "star",
                    xp: 10,
                    modules: [
                        { type: "info", content: "CSS (Cascading Style Sheets) 用於描述 HTML 元素的呈現樣式。HTML 管結構，CSS 管外觀！" },
                        { type: "info", content: "有了 CSS，你可以控制顏色、字體、間距、佈局等等，讓網頁焕然一新。" }
                    ]
                },
                {
                    id: "level-css-selectors",
                    title: "CSS 選擇器",
                    iconType: "code",
                    xp: 15,
                    modules: [
                        { type: "info", content: "要改變特定 HTML 元素的樣式，你需要 CSS 選擇器來「選中」它們。比如用 `p` 可以選中所有段落。" },
                        { type: "code_example", language: "css", code: "p {\n  color: blue;\n  font-size: 18px;\n}", explanation: "這段 CSS 會讓所有 `&lt;p&gt;` 段落的文字變成藍色，字體大小為 18px。" },
                        {
                            type: "quiz",
                            config: {
                                question: "在 CSS 中，要選中所有 `&lt;h1&gt;` 標籤，應該使用哪個選擇器？",
                                questionType: "mcq",
                                options: [".h1", "#h1", "h1", "&lt;h1.&gt;"],
                                answer: "h1",
                                correctMessage: "正確！直接使用標籤名稱即可選中該類型的所有元素。",
                                incorrectMessage: "標籤選擇器很直接，不需要額外的符號。"
                            }
                        }
                    ]
                },
                {
                    id: "level-css-colors",
                    title: "色彩斑斕",
                    iconType: "book",
                    xp: 10,
                    modules: [
                        { type: "info", content: "CSS 提供了多種方式設定顏色，常用的有：顏色名稱 (如 `red`, `blue`)、十六進制碼 (如 `#FF0000`, `#0000FF`) 和 RGB 值 (如 `rgb(255,0,0)`)。" },
                        {
                            type: "code_example", language: "css",
                            code: "h1 { color: navy; }\np { color: #333333; } /* 深灰色 */\n.highlight { background-color: rgb(255, 255, 0); } /* 黃色背景 */",
                            explanation: "選擇合適的顏色表示方式可以讓你的代碼更易讀或更精確。"
                        },
                        {
                            type: "quiz",
                            config: {
                                question: "CSS 中，`#00FF00` 代表什麼顏色？",
                                questionType: "mcq",
                                options: ["紅色 (Red)", "綠色 (Green)", "藍色 (Blue)", "黑色 (Black)"],
                                answer: "綠色 (Green)",
                                correctMessage: "聰明！這是綠色的十六進制表示。",
                                incorrectMessage: "提示：十六進制顏色碼遵循 #RRGGBB 的格式。"
                            }
                        }
                    ]
                },
                {
                    id: "level-css-boxmodel",
                    title: "盒模型奧秘",
                    iconType: "code",
                    xp: 20,
                    modules: [
                        { type: "info", content: "在 CSS 中，每個 HTML 元素都被視為一個矩形盒子。這個「盒模型」由四個部分組成：內容 (content)、內邊距 (padding)、邊框 (border) 和外邊距 (margin)。" },
                        {
                            type: "code_example", language: "html", /* Note: language here means the displayed code type, context is CSS */
                            code: "<style>\n.my-box {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid blue;\n  margin: 30px;\n  background-color: lightgray;\n}\n</style>\n<div class=\"my-box\">這是一個盒子</div>",
                            explanation: "理解盒模型對於精確控制元素佈局至關重要。"
                        },
                        { type: "info", content: "Padding 是內容與邊框之間的空間，Border 是圍繞 Padding 的線條，Margin 是邊框之外與其他元素之間的空間。" },
                        {
                            type: "quiz",
                            config: {
                                question: "CSS 盒模型中，直接圍繞內容 (content) 的是哪一部分？",
                                questionType: "mcq",
                                options: ["Margin (外邊距)", "Padding (內邊距)", "Border (邊框)", "Outline (輪廓)"],
                                answer: "Padding (內邊距)",
                                correctMessage: "答對了！Padding 是內容和邊框之間的緩衝區。",
                                incorrectMessage: "想想看，最靠近內容的是什麼「填充物」呢？"
                            }
                        }
                    ]
                },
                {
                    id: "checkpoint-css-styling",
                    title: "樣式檢定",
                    iconType: "trophy",
                    isCheckpoint: true,
                    xp: 20,
                    modules: [
                        { type: "info", content: "CSS 的基礎魔法你掌握了嗎？來驗收成果！" },
                        {
                            type: "quiz",
                            config: {
                                question: "哪個 CSS 屬性用來改變文字的顏色？",
                                questionType: "fill_blank",
                                answer: "color",
                                correctMessage: "答對了，就是 `color` 屬性！",
                                incorrectMessage: "提示：與「顏色」的英文單字相同。"
                            }
                        },
                        {
                            type: "quiz",
                            config: {
                                question: "要設定一個元素的內邊距 (padding) 上下為 10px，左右為 20px，以下哪個寫法是正確的？",
                                questionType: "mcq",
                                options: [
                                    "padding: 10px 20px 10px 20px;",
                                    "padding: 10px 20px;",
                                    "padding: 20px 10px;",
                                    "padding-top-bottom: 10px; padding-left-right: 20px;"
                                ],
                                answer: "padding: 10px 20px;",
                                correctMessage: "太棒了！當 `padding` (或 `margin`) 提供兩個值時，第一個代表上下，第二個代表左右。",
                                incorrectMessage: "CSS 的簡寫屬性很有用，想想看兩個值的順序代表什麼。"
                            }
                        }
                    ]
                }
            ]
        }
        // Future units like JavaScript can be added here
    ]
};
