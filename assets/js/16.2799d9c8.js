(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{431:function(s,t,a){"use strict";a.r(t);var e=a(1),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h4",{attrs:{id:"scss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scss"}},[s._v("#")]),s._v(" scss")]),s._v(" "),t("div",{staticClass:"language-使用 extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('scss是sass的升级版\n\n安装scss\nnpm i sass\n\n使用\nlang="scss"\n')])])]),t("h6",{attrs:{id:"全局变量在全局设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局变量在全局设置"}},[s._v("#")]),s._v(" 全局变量在全局设置")]),s._v(" "),t("div",{staticClass:"language-sass extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable-line"}},[s._v("$变量")]),s._v("\n")])])]),t("h6",{attrs:{id:"属性变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#属性变量"}},[s._v("#")]),s._v(" 属性变量")]),s._v(" "),t("div",{staticClass:"language-scss extra-class"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("#{$side}")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h6",{attrs:{id:"嵌套"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#嵌套"}},[s._v("#")]),s._v(" 嵌套")]),s._v(" "),t("div",{staticClass:"language-sass extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("<div class='a'>")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("<div class='a-b></div>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("<div>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("-------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".a{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("&-b{                      //属性嵌套")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("background{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("color：red         //属性嵌套")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("hover{")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("red")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" 伪类嵌套")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n\n")])])]),t("h6",{attrs:{id:"继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[s._v("#")]),s._v(" 继承")]),s._v(" "),t("div",{staticClass:"language-sass extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".class1{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("red")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".class2{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule-line"}},[t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@extend")]),s._v(" .class1;         // 相关于 继承clasa1的color")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property-line"}},[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("14px;")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])])]),t("h6",{attrs:{id:"混合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#混合"}},[s._v("#")]),s._v(" 混合")]),s._v(" "),t("div",{staticClass:"language-sass extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v(" "),t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@mixin")]),s._v(" left($value:10px){   // 混合 left名 变量value  默认是10px")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("red;")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".class{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@include")]),s._v(" left（4px）；")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])])]),t("h6",{attrs:{id:"引用外部样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用外部样式"}},[s._v("#")]),s._v(" 引用外部样式")]),s._v(" "),t("div",{staticClass:"language-sass extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token atrule-line"}},[t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@import")]),s._v(" './'    // 不建议使用")]),s._v("\n")])])]),t("h6",{attrs:{id:"sass-运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sass-运算"}},[s._v("#")]),s._v(" sass 运算")]),s._v(" "),t("div",{staticClass:"language-sass extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("-- 加减乘除 --")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable-line"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("10px;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("$width")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" 10px;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("$width")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" 10px")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("(10px")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" 2)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("-- 拼接 --")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("content：'hello'+'11';")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])])]),t("h6",{attrs:{id:"命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[s._v("#")]),s._v(" 命令")]),s._v(" "),t("div",{staticClass:"language-sass extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token atrule-line"}},[t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@mixin")]),s._v(" isHidden($bool:true){")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@if")]),s._v(" $bool{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("block;")])]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("\t"),t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@else")]),s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("none;")])]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])])]),t("h6",{attrs:{id:"循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#循环"}},[s._v("#")]),s._v(" 循环")]),s._v(" "),t("div",{staticClass:"language-sass extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token atrule-line"}},[t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@for")]),s._v(" $i from 1 to 10 {")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".margin-#{$i}{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("left")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("#{$i}px;")])]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("---each---")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule-line"}},[t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@each")]),s._v(" $item in a,b,c,d{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".#$(item){                // 注意属性变量需要#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);