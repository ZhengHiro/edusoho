!function(e){var r={};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/static-dist/",o(o.s=113)}({11:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},113:function(t,n,e){"use strict";e.r(n);var r=e(56),o=e.n(r);!function(t){window.QiQiuYun||(window.QiQiuYun={});var n=new XMLHttpRequest;n.open("GET",t+"?"+~~(o()()/1e3/60),!1),n.send(null);var e=document.getElementsByTagName("script")[0],r=document.createElement("script");r.text=n.responseText,e.parentNode.insertBefore(r,e)}($(".js-cloud-url").data("url"));var u=$("#document-content");new QiQiuYun.Player({id:"document-content",playServer:app.cloudPlayServer,sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,resNo:u.data("resNo"),token:u.data("token"),user:{id:u.data("userId"),name:u.data("userName")}}),window.onmessage=function(t){var n,e;null==t||null==t||"boolean"==typeof(n=t.data)&&(e=$("#task-content-iframe",window.parent.document),n?(e.removeClass("screen-full"),e.width("100%")):(e.addClass("screen-full"),e.width(window.document.body.offsetWidth+"px")))}},114:function(t,n,e){e(115),t.exports=e(2).Date.now},115:function(t,n,e){var r=e(6);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},13:function(t,n,e){var r=e(16),o=e(26),u=e(22),i=Object.defineProperty;n.f=e(8)?Object.defineProperty:function(t,n,e){if(r(t),n=u(n,!0),r(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},14:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},15:function(t,n,e){var r=e(13),o=e(18);t.exports=e(8)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},16:function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},18:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},2:function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},21:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},22:function(t,n,e){var o=e(7);t.exports=function(t,n){if(!o(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!o(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},25:function(t,n,e){var u=e(21);t.exports=function(r,o,t){if(u(r),void 0===o)return r;switch(t){case 1:return function(t){return r.call(o,t)};case 2:return function(t,n){return r.call(o,t,n)};case 3:return function(t,n,e){return r.call(o,t,n,e)}}return function(){return r.apply(o,arguments)}}},26:function(t,n,e){t.exports=!e(8)&&!e(11)(function(){return 7!=Object.defineProperty(e(27)("div"),"a",{get:function(){return 7}}).a})},27:function(t,n,e){var r=e(7),o=e(5).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},5:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},56:function(t,n,e){t.exports=e(114)},6:function(t,n,e){var v=e(5),w=e(2),b=e(25),m=e(15),x=e(14),g="prototype",h=function(t,n,e){var r,o,u,i=t&h.F,c=t&h.G,a=t&h.S,f=t&h.P,l=t&h.B,s=t&h.W,p=c?w:w[n]||(w[n]={}),d=p[g],y=c?v:a?v[n]:(v[n]||{})[g];for(r in c&&(e=n),e)(o=!i&&y&&void 0!==y[r])&&x(p,r)||(u=o?y[r]:e[r],p[r]=c&&"function"!=typeof y[r]?e[r]:l&&o?b(u,v):s&&y[r]==u?function(r){function t(t,n,e){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(t);case 2:return new r(t,n)}return new r(t,n,e)}return r.apply(this,arguments)}return t[g]=r[g],t}(u):f&&"function"==typeof u?b(Function.call,u):u,f&&((p.virtual||(p.virtual={}))[r]=u,t&h.R&&d&&!d[r]&&m(d,r,u)))};h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,h.U=64,h.R=128,t.exports=h},7:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},8:function(t,n,e){t.exports=!e(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})}});