(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{575:function(e,a,t){"use strict";t.r(a);var s=t(5),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"react的diffing算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react的diffing算法"}},[e._v("#")]),e._v(" React的Diffing算法")]),e._v(" "),t("h2",{attrs:{id:"虚拟dom中key的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom中key的作用"}},[e._v("#")]),e._v(" 虚拟DOM中Key的作用")]),e._v(" "),t("p",[e._v("简单的说： key是虚拟DOM对象的标识，在更新显示时key起着重要作用。")]),e._v(" "),t("p",[e._v("详细的说： 当状态中的数据发生变化时，react会根据 新数据 生成 新的虚拟DOM，")]),e._v(" "),t("p",[e._v("​                    然后，React进行新虚拟DOM与旧虚拟DOM的diff比较，规则如下：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1. 旧虚拟DOM找到了与新虚拟DOM相同的Key：\n     - 若虚拟DOM中内容没变，直接使用之前的真实DOM\n     - 若虚拟DOM内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM\n2. 旧虚拟DOM中未找到与新虚拟DOM相同的Key：\n     - 根据数据创建新的真实DOM，随后渲染到页面上\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("h2",{attrs:{id:"用index做key的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用index做key的问题"}},[e._v("#")]),e._v(" 用index做key的问题")]),e._v(" "),t("ol",[t("li",[e._v("若对数据进行： 逆序添加，逆序删除等破坏顺序操作，会产生没必要的真实DOM更新，页面效果没问题，但是效率低")]),e._v(" "),t("li",[e._v("如果结构中包含输入类的DOM， 会产生错误DOM更新，导致界面出问题")]),e._v(" "),t("li",[e._v("如过不存在破坏顺序的操作，仅用于列表战士，用index 也可")])]),e._v(" "),t("h2",{attrs:{id:"如何选择key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何选择key"}},[e._v("#")]),e._v(" 如何选择key")]),e._v(" "),t("p",[e._v("唯一标识： ID,身份证,学号...")])])}),[],!1,null,null,null);a.default=n.exports}}]);