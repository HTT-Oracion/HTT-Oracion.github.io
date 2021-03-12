(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{569:function(e,r,t){"use strict";t.r(r);var s=t(5),n=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("referer")]),e._v(" "),t("p",[e._v("实际上是 referrer")]),e._v(" "),t("p",[e._v("做项目的时候使用别人提供的API 发现很多图片请求返回403")]),e._v(" "),t("p",[e._v("原因：")]),e._v(" "),t("p",[e._v("发送请求的时候，请求头会携带一个 referer ，服务器接收到后对referer进行识别，如果识别通过，返回图片地址， 如果不通过 则返回 403")]),e._v(" "),t("p",[e._v("解决：  不发送 referer ，这样服务器就识别不出你是从哪里请求的，就会当做是自己人")]),e._v(" "),t("p",[e._v("解决方法1： 统一设置")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//meta\n<meta name="referrer" content="no-referrer">\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("解决方法2： 单独设置")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<img src="http:// ..." referrerPolicy="no-referrer">\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])}),[],!1,null,null,null);r.default=n.exports}}]);