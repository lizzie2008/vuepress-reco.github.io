(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{334:function(t,a,s){t.exports=s.p+"assets/img/kanbannaing_1.9d4605aa.png"},335:function(t,a,s){t.exports=s.p+"assets/img/kanbanniang_2.ef1f6e5b.png"},395:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"introduce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduce"}},[t._v("#")]),t._v(" Introduce "),e("GitHubLink",{attrs:{repo:"vuepress-reco/vuepress-plugin-kan-ban-niang/"}})],1),t._v(" "),e("p",[e("img",{attrs:{src:s(334),alt:"demo.png"}})]),t._v(" "),e("p",[t._v("kan-ban-niang plugin for vuepress-theme-reco or other vuepress theme.")]),t._v(" "),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("As plugin")]),t._v(": "),e("code",[t._v("@vuepress-reco/vuepress-plugin-kan-ban-niang")])]),t._v(" "),e("li",[e("strong",[t._v("As component")]),t._v(": "),e("code",[t._v("KanBanNiang")]),t._v("（自动出现在页面中，无需添加额外代码）")])]),t._v(" "),e("h3",{attrs:{id:"buttons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#buttons"}},[t._v("#")]),t._v(" Buttons")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("按钮")]),t._v(" "),e("th",[t._v("作用")]),t._v(" "),e("th",[t._v("默认提示语")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("home")]),t._v(" "),e("td",[t._v("回到博客主页")]),t._v(" "),e("td",[t._v("心里的花，我想要带你回家。")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("显示主人寄语")]),t._v(" "),e("td",[t._v("'欢迎来到 ' + 您的站点名称（$site.title）")])]),t._v(" "),e("tr",[e("td",[t._v("theme")]),t._v(" "),e("td",[t._v("更换模型主题")]),t._v(" "),e("td",[t._v("好吧，希望你能喜欢我的其他小伙伴。")])]),t._v(" "),e("tr",[e("td",[t._v("close")]),t._v(" "),e("td",[t._v("关闭看板娘")]),t._v(" "),e("td",[t._v("你知道我喜欢吃什么吗？痴痴地望着你。")])]),t._v(" "),e("tr",[e("td",[t._v("info")]),t._v(" "),e("td",[t._v("跳转插件github")]),t._v(" "),e("td",[t._v("想知道关于我的更多信息吗？")])])])]),t._v(" "),e("h2",{attrs:{id:"option-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#option-api"}},[t._v("#")]),t._v(" Option API")]),t._v(" "),e("blockquote",[e("p",[t._v("以下为插件注入时的参数。")])]),t._v(" "),e("p",[e("strong",[t._v("Attributes")])]),t._v(" "),e("h3",{attrs:{id:"theme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#theme"}},[t._v("#")]),t._v(" theme")]),t._v(" "),e("ul",[e("li",[t._v("description: 默认模型主题")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Array")])]),t._v(" "),e("li",[t._v("default: "),e("code",[t._v("['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']")])]),t._v(" "),e("li",[t._v("accepted-values:\n"),e("ul",[e("li",[t._v("theme仅包含一个值是默认为此主题并隐藏更换主题按钮")]),t._v(" "),e("li",[t._v("theme为多个值时初始化默认为第一个主题，点击更换主题按钮随机更换数组内的其他主题")]),t._v(" "),e("li",[t._v("请注意主题名的大小写")]),t._v(" "),e("li",[t._v("可选主题见最后")])])])]),t._v(" "),e("h3",{attrs:{id:"clean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clean"}},[t._v("#")]),t._v(" clean")]),t._v(" "),e("ul",[e("li",[t._v("description: 是否开启clean模式(隐藏所有按钮)")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Boolean")])]),t._v(" "),e("li",[t._v("default: "),e("code",[t._v("false")])]),t._v(" "),e("li",[t._v("accepted-values: "),e("code",[t._v("true | false")])])]),t._v(" "),e("h3",{attrs:{id:"messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[t._v("#")]),t._v(" messages")]),t._v(" "),e("ul",[e("li",[t._v("description: 按钮提示语")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Object")])]),t._v(" "),e("li",[t._v("default:"),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    welcome"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '欢迎来到 ' + 您的站点名称（$site.title）"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    home"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '心里的花，我想要带你回家。'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    theme"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '好吧，希望你能喜欢我的其他小伙伴。'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    close"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '你知道我喜欢吃什么吗？痴痴地望着你。'\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])]),t._v(" "),e("li",[t._v("accepted-values: 见最后")])]),t._v(" "),e("h3",{attrs:{id:"messagestyle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#messagestyle"}},[t._v("#")]),t._v(" messageStyle")]),t._v(" "),e("ul",[e("li",[t._v("description: 自定义消息框样式")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Object")])]),t._v(" "),e("li",[t._v("default:"),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  position"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'fixed'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  right"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("px'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  bottom"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("195")]),t._v("px'\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])])]),t._v(" "),e("h3",{attrs:{id:"modelstyle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modelstyle"}},[t._v("#")]),t._v(" modelStyle")]),t._v(" "),e("ul",[e("li",[t._v("description: 自定义模型样式")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Object")])]),t._v(" "),e("li",[t._v("default:"),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  position"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'fixed'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  right"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v("px'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  bottom"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("-20")]),t._v("px'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  opacity"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),t._v("'\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])])]),t._v(" "),e("h3",{attrs:{id:"width"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#width"}},[t._v("#")]),t._v(" width")]),t._v(" "),e("ul",[e("li",[t._v("description: 模型宽度")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Number")])]),t._v(" "),e("li",[t._v("default: "),e("code",[t._v("150")])])]),t._v(" "),e("h3",{attrs:{id:"height"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#height"}},[t._v("#")]),t._v(" height")]),t._v(" "),e("ul",[e("li",[t._v("description: 模型高度")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Number")])]),t._v(" "),e("li",[t._v("default: "),e("code",[t._v("220")])])]),t._v(" "),e("h2",{attrs:{id:"可选主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可选主题"}},[t._v("#")]),t._v(" 可选主题")]),t._v(" "),e("p",[e("img",{attrs:{src:s(335),alt:"themes.png"}})]),t._v(" "),e("h2",{attrs:{id:"about"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[t._v("#")]),t._v(" About")]),t._v(" "),e("ul",[e("li",[t._v("参考插件: "),e("a",{attrs:{href:"https://github.com/QiShaoXuan",target:"_blank",rel:"noopener noreferrer"}},[t._v("@Qi"),e("OutboundLink")],1),t._v(" https://github.com/QiShaoXuan/vuepress-plugin-cat")]),t._v(" "),e("li",[t._v("模型库： "),e("a",{attrs:{href:"https://github.com/QiShaoXuan",target:"_blank",rel:"noopener noreferrer"}},[t._v("@Qi"),e("OutboundLink")],1),t._v(" https://github.com/QiShaoXuan/live2DModel")]),t._v(" "),e("li",[t._v("模型加载失败时会自动隐藏")]),t._v(" "),e("li",[t._v("加载静态资源速度不稳定")]),t._v(" "),e("li",[t._v("想使用本插件之外的其他模型可以将插件下载到本地引入更换模型url")])])])}),[],!1,null,null,null);a.default=n.exports}}]);