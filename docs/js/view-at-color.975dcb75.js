(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-at-color"],{"0941":function(t,r,o){"use strict";o.r(r);var a=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{staticClass:"view view-at-color"},[o("h3",[t._v("Color")]),o("hr"),o("div",{staticClass:"color-swatches color-swatches-gray"},[o("h4",[t._v("Gray")]),o("div",{staticClass:"color-swatches__row"},t._l(t.gray,(function(t){return o("AtColorCard",{key:t,attrs:{color:t.repeat(3),label:t}})})),1)])])},e=[],n=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{staticClass:"at-color-card",style:{background:"#"+t.color,color:t.HSB.B<.6?"#CCC":void 0}},[t._v(" "+t._s(t.label?t.label:t.color)+" ")])},c=[],l=(o("07ac"),o("2909")),s={name:"AtColorCard",props:{color:{type:String,required:!0,default:"000000",validator:function(t){return/[0-9a-fA-F]{6}/g.test(t)}},label:{type:String,default:void 0}},computed:{RGB:function(){return{R:parseInt(this.color.substr(0,2),16),G:parseInt(this.color.substr(2,2),16),B:parseInt(this.color.substr(4,2),16)}},HSB:function(){var t=this,r=Math.max.apply(Math,Object(l["a"])(Object.values(this.RGB))),o=Math.min.apply(Math,Object(l["a"])(Object.values(this.RGB))),a=Math.round(r/255*1e3)/1e3,e=function(){return 0===a||r===o?0:1-o/r}(),n=function(){return r===o?0:t.RGB.G===r?(t.RGB.B-t.RGB.R)/(r-o)*60+120:t.RGB.B===r?(t.RGB.R-t.RGB.G)/(r-o)*60+240:(t.RGB.G-t.RGB.B)/(r-o)*60+(t.RGB.B>t.RGB.G?360:0)}();return{H:n,S:e,B:a}}}},i=s,u=(o("e042"),o("2877")),d=Object(u["a"])(i,n,c,!1,null,null,null),f=d.exports,B={name:"ViewAtColor",components:{AtColorCard:f},data:function(){return{gray:["00","1A","33","66","99","CC","E6","F4","FF"],colors:["00","33","66","99","CC","FF"]}}},p=B,v=(o("7c6f"),Object(u["a"])(p,a,e,!1,null,null,null));r["default"]=v.exports},2281:function(t,r,o){},"4cd6":function(t,r,o){},"7c6f":function(t,r,o){"use strict";var a=o("4cd6"),e=o.n(a);e.a},e042:function(t,r,o){"use strict";var a=o("2281"),e=o.n(a);e.a}}]);
//# sourceMappingURL=view-at-color.975dcb75.js.map