!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["index.js"]=t():e["index.js"]=t()}("undefined"!=typeof window?window:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t,n,r=!0){let o=parseFloat(e),u=parseFloat(t);o>3&&(o/=1e3),u>3&&(u/=1e3);const i=1e3*(o-u);let f=0;return f=r?76.08*(o-u)/(1.775-o)*(u/.794):i/7.642,{attenuation:i,levelBeforeBottle:f,level:f+parseFloat(n)/15.486}}function o(e,t,n){let r=0;return n.forEach(t=>{r+=parseFloat(t.weight)*parseFloat(t.yield)/100*parseFloat(e)/100}),{di:{value:1+383*r/t/1e3,label:"Densité initiale",suffix:""}}}function u(e){return e/.26417}function i(e){return 128*e}function f(e){return 33.814*e}function l(e){return.26417*e}function c(e){return 100*e}function a(e){return e/33.814}function d(e){return e/128}n.r(t),n.d(t,"getAlcohoLevel",(function(){return r})),n.d(t,"getSugarToBottling",(function(){return s})),n.d(t,"galToOz",(function(){return i})),n.d(t,"galToLiter",(function(){return u})),n.d(t,"literToOz",(function(){return f})),n.d(t,"literToGal",(function(){return l})),n.d(t,"literToCl",(function(){return c})),n.d(t,"ozToGal",(function(){return d})),n.d(t,"ozToLiter",(function(){return a})),n.d(t,"getTheoricalDenity",(function(){return o}));const p={2:1.59,3:1.54,4:1.48,5:1.43,6:1.38,7:1.33,8:1.29,9:1.24,10:1.2,11:1.16,12:1.12,13:1.08,14:1.04,15:1.01,16:.98,17:.94,18:.92,19:.89,20:.86,21:.84,22:.81,23:.79,24:.77,25:.76,26:.74,27:.73,28:.72,29:.71,30:.7};function s(e,t,n){let r=p[Math.round(n)];return console.log(e,t,n,r),Math.round(2*(2*e-2*r)*100)/100}}])}));