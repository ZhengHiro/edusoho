!function(t){var n={};function o(r){if(n[r])return n[r].exports;var e=n[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(r,e,t){o.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},o.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)o.d(t,n,function(r){return e[r]}.bind(null,n));return t},o.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(e,"a",e),e},o.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},o.p="/static-dist/",o(o.s=637)}({145:function(r,e,t){"use strict";t.d(e,"a",function(){return n});var n=function(r,e){r.keypress(function(r){13==r.which&&(e.trigger("click"),r.preventDefault())})}},637:function(r,e,t){"use strict";t.r(e);var n=t(145),o=$("#third-party-bind-form"),u=$(".js-submit-btn");o.validate({currentDom:u,ajax:!0,rules:{password:{required:!0}},submitSuccess:function(r){0===r.success?$(".js-password-error").length||u.prev().addClass("has-error").append('<p id="password-error" class="form-error-message js-password-error">'.concat(r.message,"</p>")):window.location.href=r.url}});$("#password").focus(function(){$(".js-password-error").remove()}),Object(n.a)(o,u)}});