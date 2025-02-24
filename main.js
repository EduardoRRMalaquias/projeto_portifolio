/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/***/ (function(module) {

eval("!function(e,t){ true?module.exports=t():0}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p=\"dist/\",t(0)}([function(e,t,n){\"use strict\";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:\"ease\",duration:400,disable:!1,once:!1,startEvent:\"DOMContentLoaded\",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute(\"data-aos\"),e.node.removeAttribute(\"data-aos-easing\"),e.node.removeAttribute(\"data-aos-duration\"),e.node.removeAttribute(\"data-aos-delay\")})},S=function(e){return e===!0||\"mobile\"===e&&p.default.mobile()||\"phone\"===e&&p.default.phone()||\"tablet\"===e&&p.default.tablet()||\"function\"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\\n      aos: MutationObserver is not supported on this browser,\\n      code mutations observing has been disabled.\\n      You may have to call \"refreshHard()\" by yourself.\\n    '),x.disableMutationObserver=!0),document.querySelector(\"body\").setAttribute(\"data-aos-easing\",x.easing),document.querySelector(\"body\").setAttribute(\"data-aos-duration\",x.duration),document.querySelector(\"body\").setAttribute(\"data-aos-delay\",x.delay),\"DOMContentLoaded\"===x.startEvent&&[\"complete\",\"interactive\"].indexOf(document.readyState)>-1?j(!0):\"load\"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener(\"resize\",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener(\"orientationchange\",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener(\"scroll\",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready(\"[data-aos]\",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){\"use strict\";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if(\"function\"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S=\"maxWait\"in n,y=S?x(u(n.maxWait)||0,t):y,_=\"trailing\"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if(\"function\"!=typeof e)throw new TypeError(s);return i(o)&&(r=\"leading\"in o?!!o.leading:r,a=\"trailing\"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t=\"undefined\"==typeof e?\"undefined\":c(e);return!!e&&(\"object\"==t||\"function\"==t)}function r(e){return!!e&&\"object\"==(\"undefined\"==typeof e?\"undefined\":c(e))}function a(e){return\"symbol\"==(\"undefined\"==typeof e?\"undefined\":c(e))||r(e)&&k.call(e)==d}function u(e){if(\"number\"==typeof e)return e;if(a(e))return f;if(i(e)){var t=\"function\"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+\"\":t}if(\"string\"!=typeof e)return 0===e?e:+e;e=e.replace(l,\"\");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e},s=\"Expected a function\",f=NaN,d=\"[object Symbol]\",l=/^\\s+|\\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y=\"object\"==(\"undefined\"==typeof t?\"undefined\":c(t))&&t&&t.Object===Object&&t,g=\"object\"==(\"undefined\"==typeof self?\"undefined\":c(self))&&self&&self.Object===Object&&self,h=y||g||Function(\"return this\")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){\"use strict\";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if(\"function\"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S=\"maxWait\"in n,y=S?k(a(n.maxWait)||0,t):y,_=\"trailing\"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t=\"undefined\"==typeof e?\"undefined\":u(e);return!!e&&(\"object\"==t||\"function\"==t)}function i(e){return!!e&&\"object\"==(\"undefined\"==typeof e?\"undefined\":u(e))}function r(e){return\"symbol\"==(\"undefined\"==typeof e?\"undefined\":u(e))||i(e)&&w.call(e)==f}function a(e){if(\"number\"==typeof e)return e;if(r(e))return s;if(o(e)){var t=\"function\"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+\"\":t}if(\"string\"!=typeof e)return 0===e?e:+e;e=e.replace(d,\"\");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e},c=\"Expected a function\",s=NaN,f=\"[object Symbol]\",d=/^\\s+|\\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v=\"object\"==(\"undefined\"==typeof t?\"undefined\":u(t))&&t&&t.Object===Object&&t,y=\"object\"==(\"undefined\"==typeof self?\"undefined\":u(self))&&self&&self.Object===Object&&self,g=v||y||Function(\"return this\")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){\"use strict\";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,\"__esModule\",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){\"use strict\";function n(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function o(){return navigator.userAgent||navigator.vendor||window.opera||\"\"}Object.defineProperty(t,\"__esModule\",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,\"value\"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i,u=/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:\"phone\",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:\"mobile\",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:\"tablet\",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute(\"data-aos-once\");t>e.position?e.node.classList.add(\"aos-animate\"):\"undefined\"!=typeof o&&(\"false\"===o||!n&&\"true\"!==o)&&e.node.classList.remove(\"aos-animate\")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){\"use strict\";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,\"__esModule\",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add(\"aos-init\"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){\"use strict\";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,\"__esModule\",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute(\"data-aos-offset\"),anchor:e.getAttribute(\"data-aos-anchor\"),anchorPlacement:e.getAttribute(\"data-aos-anchor-placement\")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case\"top-bottom\":break;case\"center-bottom\":n+=e.offsetHeight/2;break;case\"bottom-bottom\":n+=e.offsetHeight;break;case\"top-center\":n+=i/2;break;case\"bottom-center\":n+=i/2+e.offsetHeight;break;case\"center-center\":n+=i/2+e.offsetHeight/2;break;case\"top-top\":n+=i;break;case\"bottom-top\":n+=e.offsetHeight+i;break;case\"center-top\":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-(\"BODY\"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-(\"BODY\"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var n=function(e){return e=e||document.querySelectorAll(\"[data-aos]\"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});\n\n//# sourceURL=webpack://projeto_portifolio/./node_modules/aos/dist/aos.js?");

/***/ }),

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n// accordion\nvar Accordion = /*#__PURE__*/function () {\n  function Accordion(botaoAccordion) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Accordion);\n    this.botaoAccordion = document.querySelectorAll(botaoAccordion);\n    this[\"class\"] = \"ativo\";\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Accordion, [{\n    key: \"ativarDesativarDiferencial\",\n    value: function ativarDesativarDiferencial(diferencial) {\n      var controls = diferencial.getAttribute(\"aria-controls\");\n      var descricao = document.getElementById(controls);\n      descricao.classList.toggle(this[\"class\"]);\n      var ativo = descricao.classList.contains(this[\"class\"]);\n      diferencial.setAttribute(\"aria-expanded\", ativo);\n    }\n  }, {\n    key: \"addEventoBotaoAccordiao\",\n    value: function addEventoBotaoAccordiao() {\n      var _this = this;\n      this.botaoAccordion.forEach(function (diferencial) {\n        diferencial.addEventListener(\"click\", function () {\n          return _this.ativarDesativarDiferencial(diferencial);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.botaoAccordion.length) {\n        this.addEventoBotaoAccordiao();\n      }\n      return this;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/click-outside.js":
/*!*************************************!*\
  !*** ./js/modules/click-outside.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOutside)\n/* harmony export */ });\nfunction clickOutside(element, events, callback) {\n  var html = document.documentElement;\n  var outside = \"data-outside\";\n\n  // adiciona os eventos passados ao html e adiciona o atributo no element caso ele não tenha os evento\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        return html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, \"\");\n  }\n\n  // remove o evento e o atributo do html e executa a funcao passada caso o usuario clique fora\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n}\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/click-outside.js?");

/***/ }),

/***/ "./js/modules/copy-area.js":
/*!*********************************!*\
  !*** ./js/modules/copy-area.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CopyArea)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n// copy area\nvar CopyArea = /*#__PURE__*/function () {\n  function CopyArea(copyAreas) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CopyArea);\n    if (window.ClipboardJS) {\n      new ClipboardJS(copyAreas);\n    }\n    this.copyAreas = document.querySelectorAll(copyAreas);\n    this.confirmarCopia = this.confirmarCopia.bind(this);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CopyArea, [{\n    key: \"addEventoCopia\",\n    value: function addEventoCopia() {\n      var _this = this;\n      this.copyAreas.forEach(function (copyArea) {\n        copyArea.addEventListener(\"click\", _this.confirmarCopia);\n      });\n    }\n  }, {\n    key: \"confirmarCopia\",\n    value: function confirmarCopia(event) {\n      var _this2 = this;\n      var copyarea = event.currentTarget;\n      copyarea.classList.add(\"copiado\");\n      setTimeout(function () {\n        _this2.removerConfirmacao(copyarea);\n      }, 2000);\n    }\n  }, {\n    key: \"removerConfirmacao\",\n    value: function removerConfirmacao(copyarea) {\n      copyarea.classList.remove(\"copiado\");\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.addEventoCopia();\n      return this;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/copy-area.js?");

/***/ }),

/***/ "./js/modules/link-menu-ativo.js":
/*!***************************************!*\
  !*** ./js/modules/link-menu-ativo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkMenuAtivo)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n// Links de Menu ativo\nvar LinkMenuAtivo = /*#__PURE__*/function () {\n  function LinkMenuAtivo(links, secoes) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, LinkMenuAtivo);\n    this.links = document.querySelectorAll(links);\n    this.secoes = document.querySelectorAll(secoes);\n    this.capturarDadosSecoes = this.capturarDadosSecoes.bind(this);\n    this.capturarSecoes = this.capturarSecoes.bind(this);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(LinkMenuAtivo, [{\n    key: \"addEventoScroll\",\n    value: function addEventoScroll() {\n      window.addEventListener(\"scroll\", this.capturarDadosSecoes);\n    }\n  }, {\n    key: \"capturarDadosSecoes\",\n    value: function capturarDadosSecoes() {\n      this.secoes.forEach(this.capturarSecoes);\n    }\n  }, {\n    key: \"capturarSecoes\",\n    value: function capturarSecoes(secao) {\n      var _this = this;\n      var topo = window.scrollY;\n      var topoSecao = secao.offsetTop - 90;\n      var alturaSecao = secao.offsetHeight;\n      var idSecao = secao.getAttribute(\"id\");\n      if (topo >= topoSecao && topo < topoSecao + alturaSecao) {\n        this.links.forEach(function (link) {\n          _this.ativarDesativarMenu(link, idSecao);\n        });\n      }\n    }\n  }, {\n    key: \"ativarDesativarMenu\",\n    value: function ativarDesativarMenu(link, idSecao) {\n      link.classList.remove(\"ativo\");\n      document.querySelector(\".menu-link[href*='\".concat(idSecao, \"']\")).classList.add(\"ativo\");\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.addEventoScroll();\n      return this;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/link-menu-ativo.js?");

/***/ }),

/***/ "./js/modules/menu-hamburguer.js":
/*!***************************************!*\
  !*** ./js/modules/menu-hamburguer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuHamburguer)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _click_outside_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./click-outside.js */ \"./js/modules/click-outside.js\");\n\n\n\n\n// Menu Hamburguer\nvar MenuHamburguer = /*#__PURE__*/function () {\n  function MenuHamburguer(menuHaburguer, navegacao, classeAtivadora, eventos) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MenuHamburguer);\n    this.menuHaburguer = document.querySelector(menuHaburguer);\n    this.navegacao = document.querySelector(navegacao);\n    this.classeAtivadora = classeAtivadora;\n\n    // define os eventos de clique e toque como eventos padrao\n    if (eventos === undefined) this.eventos = [\"touchstart\", \"click\"];else this.eventos = eventos;\n    this.abrirFecharMenu = this.abrirFecharMenu.bind(this);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MenuHamburguer, [{\n    key: \"abrirFecharMenu\",\n    value: function abrirFecharMenu(event) {\n      var _this = this;\n      if (event.type === \"touchstart\") event.preventDefault();\n      this.navegacao.classList.toggle(this.classeAtivadora);\n      (0,_click_outside_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.navegacao, this.eventos, function () {\n        _this.navegacao.classList.remove(_this.classeAtivadora);\n      });\n      this.verificarAcessibilidade();\n    }\n  }, {\n    key: \"verificarAcessibilidade\",\n    value: function verificarAcessibilidade() {\n      var ativo = this.navegacao.classList.contains(this.classeAtivadora);\n      this.menuHaburguer.setAttribute(\"aria-expanded\", ativo);\n      if (ativo) {\n        this.menuHaburguer.setAttribute(\"aria-label\", \"Fechar Menu\");\n      } else {\n        this.menuHaburguer.setAttribute(\"aria-label\", \"Abrir Menu\");\n      }\n    }\n  }, {\n    key: \"addMenuHamburguerEventos\",\n    value: function addMenuHamburguerEventos() {\n      var _this2 = this;\n      this.eventos.forEach(function (evento) {\n        return _this2.menuHaburguer.addEventListener(evento, _this2.abrirFecharMenu);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.menuHaburguer && this.navegacao) {\n        this.addMenuHamburguerEventos();\n      }\n      return this;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/menu-hamburguer.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(botaoAbrir, botaoFechar, containerModal) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Modal);\n    this.botoesAbrir = document.querySelectorAll(botaoAbrir);\n    this.botoesFechar = document.querySelectorAll(botaoFechar);\n    this.containersModals = document.querySelectorAll(containerModal);\n    this[\"class\"] = \"ativo\";\n    this.abrirModal = this.abrirModal.bind(this);\n    this.fecharModal = this.fecharModal.bind(this);\n    this.fecharClickForaModal = this.fecharClickForaModal.bind(this);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Modal, [{\n    key: \"fecharModal\",\n    value: function fecharModal() {\n      var _this = this;\n      this.containersModals.forEach(function (modal) {\n        modal.classList.remove(_this[\"class\"]);\n      });\n    }\n  }, {\n    key: \"abrirModal\",\n    value: function abrirModal(event) {\n      event.preventDefault();\n      var btnModal = event.currentTarget;\n      var idModal = btnModal.getAttribute(\"data-abrimodal\");\n      var modal = document.getElementById(idModal);\n      modal.classList.add(this[\"class\"]);\n    }\n\n    // fecha o modal a clicar do lado de fora\n  }, {\n    key: \"fecharClickForaModal\",\n    value: function fecharClickForaModal(event) {\n      var _this2 = this;\n      this.containersModals.forEach(function (modal) {\n        if (event.target === modal) {\n          _this2.fecharModal(event);\n        }\n      });\n    }\n\n    // chamar o adicionador dos eventos nos componentes do modal\n  }, {\n    key: \"chamarModalEventos\",\n    value: function chamarModalEventos() {\n      this.addModalEventos(this.botoesAbrir, this.abrirModal);\n      this.addModalEventos(this.botoesFechar, this.fecharModal);\n      this.addModalEventos(this.containersModals, this.fecharClickForaModal);\n    }\n\n    //adicionar os eventos do modals\n  }, {\n    key: \"addModalEventos\",\n    value: function addModalEventos(items, callback) {\n      items.forEach(function (item) {\n        item.addEventListener(\"click\", callback);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.botoesAbrir.length && this.botoesFechar && this.containersModals) {\n        this.chamarModalEventos();\n      }\n      return this;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/modo-ligth-dark.js":
/*!***************************************!*\
  !*** ./js/modules/modo-ligth-dark.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DarkLigthMode)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar DarkLigthMode = /*#__PURE__*/function () {\n  function DarkLigthMode(btnDarkLightMode, checkDarkLightMode) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, DarkLigthMode);\n    this.btnDarkLightMode = document.querySelector(btnDarkLightMode);\n    this.checkDarkLightMode = document.querySelector(checkDarkLightMode);\n    this.temaUsuario = window.matchMedia('(prefers-color-scheme: dark)');\n    this.temaSalvo = localStorage.getItem('temaUsuario');\n    this.mudarTemaCheck = this.mudarTemaCheck.bind(this);\n    this.detectarPreferenciaSistema = this.detectarPreferenciaSistema.bind(this);\n    this.mudarPreferenciaSistema = this.mudarPreferenciaSistema.bind(this);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DarkLigthMode, [{\n    key: \"ativarDesativarCheck\",\n    value: function ativarDesativarCheck(ativacao) {\n      this.checkDarkLightMode.checked = ativacao;\n    }\n  }, {\n    key: \"removerAddClasse\",\n    value: function removerAddClasse(ativacaoLigth, ativacaoDark) {\n      var html = document.querySelector('html');\n      html.classList[ativacaoLigth]('ligth');\n      html.classList[ativacaoDark]('dark');\n    }\n  }, {\n    key: \"detectarPreferenciaSistema\",\n    value: function detectarPreferenciaSistema() {\n      if (this.temaSalvo) {\n        if (this.temaSalvo === 'true') {\n          this.removerAddClasse('remove', 'add');\n        } else {\n          this.removerAddClasse('add', 'remove');\n        }\n        this.ativarDesativarCheck(this.temaSalvo === 'true');\n      } else {\n        this.removerAddClasse('remove', 'remove');\n        this.ativarDesativarCheck(this.temaUsuario.matches);\n      }\n    }\n  }, {\n    key: \"mudarPreferenciaSistema\",\n    value: function mudarPreferenciaSistema() {\n      this.removerAddClasse('remove', 'remove');\n      this.ativarDesativarCheck(this.temaUsuario.matches);\n      localStorage.removeItem('temaUsuario');\n    }\n  }, {\n    key: \"mudarTemaCheck\",\n    value: function mudarTemaCheck() {\n      if (this.checkDarkLightMode.checked) {\n        this.removerAddClasse('remove', 'add');\n      } else {\n        this.removerAddClasse('add', 'remove');\n      }\n      localStorage.setItem('temaUsuario', this.checkDarkLightMode.checked);\n    }\n  }, {\n    key: \"addEventosTema\",\n    value: function addEventosTema() {\n      this.temaUsuario.addEventListener('change', this.mudarPreferenciaSistema);\n      this.checkDarkLightMode.addEventListener('change', this.mudarTemaCheck);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.detectarPreferenciaSistema();\n      this.addEventosTema();\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/modo-ligth-dark.js?");

/***/ }),

/***/ "./js/modules/visibilidade-menu.js":
/*!*****************************************!*\
  !*** ./js/modules/visibilidade-menu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VisibilidadeMenu)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n// alternar visibilidade do menu de acordo com o scroll\nvar VisibilidadeMenu = /*#__PURE__*/function () {\n  function VisibilidadeMenu(menus, classeAtivadora) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, VisibilidadeMenu);\n    this.menus = document.querySelectorAll(menus);\n    this.orientacaoRolagem = 0;\n    this.visibilidadeMenu = this.visibilidadeMenu.bind(this);\n    this.classeAtivadora = classeAtivadora;\n  }\n\n  //adicionar evento de scrrol a pagina\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(VisibilidadeMenu, [{\n    key: \"addEventoScroll\",\n    value: function addEventoScroll() {\n      window.addEventListener(\"scroll\", this.visibilidadeMenu, {\n        passive: true\n      });\n    }\n\n    // alternar a visibilidade do menu de acordo com scroll\n  }, {\n    key: \"visibilidadeMenu\",\n    value: function visibilidadeMenu() {\n      var _this = this;\n      if (scrollY > this.orientacaoRolagem) {\n        // Rolagem para baixo\n        this.menus.forEach(function (item) {\n          item.classList.remove(_this.classeAtivadora);\n        });\n      } else if (scrollY < this.orientacaoRolagem) {\n        // Rolagem para cima\n        this.menus.forEach(function (item) {\n          if (item.dataset.visibilidade === \"\") {\n            item.classList.add(_this.classeAtivadora);\n          }\n        });\n      } // previnir de rolagem lateral\n      this.orientacaoRolagem = scrollY <= 0 ? 0 : scrollY;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.addEventoScroll();\n      return this;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/visibilidade-menu.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_visibilidade_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/visibilidade-menu.js */ \"./js/modules/visibilidade-menu.js\");\n/* harmony import */ var _modules_link_menu_ativo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/link-menu-ativo.js */ \"./js/modules/link-menu-ativo.js\");\n/* harmony import */ var _modules_menu_hamburguer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu-hamburguer.js */ \"./js/modules/menu-hamburguer.js\");\n/* harmony import */ var _modules_copy_area_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/copy-area.js */ \"./js/modules/copy-area.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _modules_modo_ligth_dark_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modo-ligth-dark.js */ \"./js/modules/modo-ligth-dark.js\");\n\n\n\n\n\n\n\n\nvar darkLigthMode = new _modules_modo_ligth_dark_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('[data-ligth-dark-mode=\"botao\"]', '[data-ligth-dark-mode=\"check\"]');\ndarkLigthMode.init();\nvar classeAtivadoraHeader = \"visivel\";\nvar visibilidadeMenu = new _modules_visibilidade_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-visibilidade]\", classeAtivadoraHeader);\nvisibilidadeMenu.init();\nvar menuHamburguer = new _modules_menu_hamburguer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-menu=\"hamburguer\"]', '[data-menu=\"navegacao\"]', classeAtivadoraHeader);\nmenuHamburguer.init();\nvar linksMenuAtivo = new _modules_link_menu_ativo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-link]\", \"[data-secao]\");\nlinksMenuAtivo.init();\nvar copyArea = new _modules_copy_area_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"[data-copyarea]\");\ncopyArea.init();\nvar accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-accordion=\"button\"]');\naccordion.init();\nvar modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"[data-abrimodal]\", '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\naos__WEBPACK_IMPORTED_MODULE_6___default().init();\n\n//# sourceURL=webpack://projeto_portifolio/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(a, n) {\n  if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\n}\n\n\n//# sourceURL=webpack://projeto_portifolio/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(e, r) {\n  for (var t = 0; t < r.length; t++) {\n    var o = r[t];\n    o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o.key), o);\n  }\n}\nfunction _createClass(e, r, t) {\n  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", {\n    writable: !1\n  }), e;\n}\n\n\n//# sourceURL=webpack://projeto_portifolio/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction toPrimitive(t, r) {\n  if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n\n\n//# sourceURL=webpack://projeto_portifolio/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction toPropertyKey(t) {\n  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t, \"string\");\n  return \"symbol\" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i) ? i : i + \"\";\n}\n\n\n//# sourceURL=webpack://projeto_portifolio/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n\n//# sourceURL=webpack://projeto_portifolio/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;