!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=9)}([function(e,n,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function s(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],c=n.base?i[0]+n.base:i[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=s(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:m(p,n),references:1}),r.push(d)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function p(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,y=0;function m(e,n){var t,r,o;if(n.singleton){var i=y++;t=h||(h=l(n)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=l(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=s(t[r]);a[o].references--}for(var i=c(e,n),l=0;l<t.length;l++){var d=s(t[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=i}}}},function(e,n,t){var r=t(3),o=t(4),i=t(5);n=r(!1);var a=o(i);n.push([e.i,"input{\r\n    \r\n    margin-top: 10px;\r\n    width:20%;\r\n    height:7%;\r\n    padding-left: 2%;\r\n    font-size: 16px;\r\n    border-radius: 30px;\r\n    border-color: gold;\r\n}\r\n\r\nbutton{\r\npadding: 10px;\r\nborder-radius: 10px;\r\nborder-color: gold;\r\nfont-size: 16px;;\r\n}\r\n\r\n#date{\r\n    font-size: 26px;\r\n    padding-top:20px;\r\n    display: none;\r\n}\r\n\r\n.display{\r\n    padding-top: 10px;\r\n    font-size: 40px;\r\n    display: none;\r\n    color:white;\r\n    width:40%;\r\n    position: relative;\r\n    font-weight: bold;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.info{\r\n  width:60%;\r\n}\r\n\r\np{\r\n   float:left;\r\n}\r\n\r\nimg{\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0.3;\r\n}\r\n\r\n.content{\r\n    height:1000px;\r\n    background-attachment: fixed;\r\n    background-image: url("+a+");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    text-align: center;\r\n    display:flex;\r\n}\r\n\r\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"9395227fa3ed9ff699489290f11bd964.jpg"},function(e,n,t){var r=t(7),o=t(8),i="undefined"!=typeof Promise;function a(e,n){if(n)return n(e);if(i)return Promise.reject(e);throw new Error(e)}var s=function(e){if("string"==typeof e||null==e)this.apiKey=e||"dc6zaTOxFJmzC",e={};else{if("object"!=typeof e)throw new Error("Invalid options passed to giphy-api");this.apiKey=e.apiKey||"dc6zaTOxFJmzC"}this.https=e.https,this.timeout=e.timeout||3e4,this.httpService=o.create(this.https)};s.prototype={search:function(e,n){return e?this._request({api:e.api||"gifs",endpoint:"search",query:"string"==typeof e?{q:e}:e},n):a("Search phrase cannot be empty.",n)},id:function(e,n){var t=Array.isArray(e);return!e||t&&0===e.length?a("Id required for id API call",n):(t&&(e=e.join()),this._request({api:"gifs",query:{ids:e}},n))},translate:function(e,n){return e?this._request({api:e.api||"gifs",endpoint:"translate",query:"string"==typeof e?{s:e}:e},n):a("Translate phrase cannot be empty.",n)},random:function(e,n){var t={api:(e?e.api:null)||"gifs",endpoint:"random"};return"string"==typeof e?t.query={tag:e}:"object"==typeof e?t.query=e:"function"==typeof e&&(n=e),this._request(t,n)},trending:function(e,n){var t={endpoint:"trending"};return t.api=(e?e.api:null)||"gifs",e&&delete e.api,"object"==typeof e&&0!==Object.keys(e).length?t.query=e:"function"==typeof e&&(n=e),this._request(t,n)},_request:function(e,n){if(!n&&!i)throw new Error("Callback must be provided if promises are unavailable");var t,a="";e.endpoint&&(a="/"+e.endpoint);if(void 0!==e.query&&"object"==typeof e.query){if(0===Object.keys(e.query).length)return n?n(new Error("Options object should not be empty")):Promise.reject(new Error("Options object should not be empty"));e.query.api_key=this.apiKey,t=r(e.query)}else t=r({api_key:this.apiKey});var s={httpService:this.httpService,request:{host:"api.giphy.com",path:"/v1/"+e.api+a+t},timeout:this.timeout,fmt:e.query&&e.query.fmt,https:this.https},c=function(e,n){o.get(s,e,n)};if(!n){if(!i)throw new Error("Callback must be provided unless Promises are available");return new Promise((function(e,n){c(e,n)}))}c((function(e){n(null,e)}),(function(e){n(e)}))}},e.exports=function(e,n){return new s(e,n)}},function(e,n){var t=Object.prototype.hasOwnProperty;e.exports=function(e){var n=[];for(var r in e)t.call(e,r)&&n.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return n.length?"?"+n.join("&"):""}},function(e,n){n.create=function(){return this},n.get=function(e,n,t){var r=e.request,o=e.timeout,i=e.fmt,a=setTimeout((function(){t(new Error("Timeout while fetching asset"))}),o),s=new XMLHttpRequest;s.withCredentials=!1;var c=function(e){clearTimeout(a),e=e||new Error("Giphy API request failed!"),t(e)};s.addEventListener("error",c),s.addEventListener("abort",c),s.addEventListener("load",(function(){clearTimeout(a);var e=s.response;"html"!==i&&(e=JSON.parse(e)),n(e)}));var l=(e.https?"https":"http")+"://"+r.host+r.path;s.open("GET",l,!0),s.send()}},function(e,n,t){"use strict";t.r(n);t(0),t(10);let r;const o=t(6)("1ciWQ3R3BbnLWyjnSWHUIKmeC1TMV1wH");async function i(e){try{return(await o.search(e)).data[2].images.original.url}catch(e){return e}}async function a(e){let n,t;try{const r=await fetch(e,{mode:"cors"});n=await r.json();const{temp:o}=n.main,{description:i}=n.weather[0],{country:a}=n.sys,{name:s}=n;t={temp:o,description:i,country:a,name:s}}catch(e){return"204"}return t}const s=document.getElementById("degrees"),c=document.getElementById("check"),l=document.getElementById("far"),d=document.querySelector("input"),u=document.querySelector(".lds-roller"),p=(e,n)=>{document.getElementById(e).textContent=n,document.querySelector(".display").style.display="block",document.getElementById("date").style.display="none"},f=()=>{u.style.display="block"},h=e=>{"204"===e?(document.querySelector(".display").style.display="none",document.getElementById("date").style.display="block",u.style.display="none"):(p("desc",e.description),p("country",e.country),p("town",e.name),u.style.display="none")},y=e=>`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=7c933702219e1d26960b3cc11edb864c`;async function m(e){const n=await a(y(e)),t=await i(n.description),r=Math.round(parseFloat(n.temp)-273.15);p("temp",r),document.querySelector("img").src=t,h(n)}async function v(e){const n=await a(y(e)),t=await i(n.description),o=Math.round(parseFloat(n.temp)-273.15);var s;p("temp",(s=o,r=Math.round(9*parseFloat(s,10)/5+32),r)),document.querySelector("img").src=t,h(n)}c.addEventListener("click",()=>{m(d.value),s.textContent="C",f()}),l.addEventListener("click",()=>{v(d.value),s.textContent="F",f()}),m("vancouver"),s.textContent="C"},function(e,n,t){var r=t(1),o=t(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,n,t){(n=t(3)(!1)).push([e.i,'.lds-roller {\r\n    margin: 0px auto;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n    display: none;\r\n  }\r\n  .lds-roller div {\r\n    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    transform-origin: 40px 40px;\r\n  }\r\n  .lds-roller div:after {\r\n    content: " ";\r\n    display: block;\r\n    position: absolute;\r\n    width: 7px;\r\n    height: 7px;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    margin: -4px 0 0 -4px;\r\n  }\r\n  .lds-roller div:nth-child(1) {\r\n    animation-delay: -0.036s;\r\n  }\r\n  .lds-roller div:nth-child(1):after {\r\n    top: 63px;\r\n    left: 63px;\r\n  }\r\n  .lds-roller div:nth-child(2) {\r\n    animation-delay: -0.072s;\r\n  }\r\n  .lds-roller div:nth-child(2):after {\r\n    top: 68px;\r\n    left: 56px;\r\n  }\r\n  .lds-roller div:nth-child(3) {\r\n    animation-delay: -0.108s;\r\n  }\r\n  .lds-roller div:nth-child(3):after {\r\n    top: 71px;\r\n    left: 48px;\r\n  }\r\n  .lds-roller div:nth-child(4) {\r\n    animation-delay: -0.144s;\r\n  }\r\n  .lds-roller div:nth-child(4):after {\r\n    top: 72px;\r\n    left: 40px;\r\n  }\r\n  .lds-roller div:nth-child(5) {\r\n    animation-delay: -0.18s;\r\n  }\r\n  .lds-roller div:nth-child(5):after {\r\n    top: 71px;\r\n    left: 32px;\r\n  }\r\n  .lds-roller div:nth-child(6) {\r\n    animation-delay: -0.216s;\r\n  }\r\n  .lds-roller div:nth-child(6):after {\r\n    top: 68px;\r\n    left: 24px;\r\n  }\r\n  .lds-roller div:nth-child(7) {\r\n    animation-delay: -0.252s;\r\n  }\r\n  .lds-roller div:nth-child(7):after {\r\n    top: 63px;\r\n    left: 17px;\r\n  }\r\n  .lds-roller div:nth-child(8) {\r\n    animation-delay: -0.288s;\r\n  }\r\n  .lds-roller div:nth-child(8):after {\r\n    top: 56px;\r\n    left: 12px;\r\n  }\r\n  @keyframes lds-roller {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  ',""]),e.exports=n}]);