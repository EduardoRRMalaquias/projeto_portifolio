/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion-diferenciais.js":
/*!**********************************************!*\
  !*** ./js/modules/accordion-diferenciais.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordionDiferenciais)\n/* harmony export */ });\nfunction initAccordionDiferenciais() {\n  // diferenciais\n\n  var diferenciais = document.querySelectorAll(\".diferencial-item button\");\n  function ativarDesativarDiferencial(event) {\n    var diferencial = event.currentTarget;\n    var controls = diferencial.getAttribute(\"aria-controls\");\n    var descricao = document.getElementById(controls);\n    descricao.classList.toggle(\"ativo\");\n    var ativo = descricao.classList.contains(\"ativo\");\n    diferencial.setAttribute(\"aria-expanded\", ativo);\n  }\n  function clickDiferenciais(diferencial) {\n    diferencial.addEventListener(\"click\", ativarDesativarDiferencial);\n  }\n  diferenciais.forEach(clickDiferenciais);\n}\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/accordion-diferenciais.js?");

/***/ }),

/***/ "./js/modules/copy-area.js":
/*!*********************************!*\
  !*** ./js/modules/copy-area.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initCopyArea)\n/* harmony export */ });\nfunction initCopyArea() {\n  if (window.ClipboardJS) {\n    new ClipboardJS(\".copy-area\");\n  }\n\n  // copy area\n\n  var copyAreas = document.querySelectorAll(\".copy-area\");\n  function eventoCopia(copyArea) {\n    copyArea.addEventListener(\"click\", confirmarCopia);\n    function confirmarCopia() {\n      copyArea.classList.add(\"copiado\");\n      setTimeout(removerConfirmacao, 2000);\n      function removerConfirmacao() {\n        copyArea.classList.remove(\"copiado\");\n      }\n    }\n  }\n  copyAreas.forEach(eventoCopia);\n}\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/copy-area.js?");

/***/ }),

/***/ "./js/modules/link-menu-ativo.js":
/*!***************************************!*\
  !*** ./js/modules/link-menu-ativo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initLinkMenuAtivo)\n/* harmony export */ });\nfunction initLinkMenuAtivo() {\n  // Menu ativo\n  var links = document.querySelectorAll(\".menu-link\");\n  var secoes = document.querySelectorAll(\".secao\");\n  window.addEventListener(\"scroll\", linksMenuAtivo);\n  function linksMenuAtivo() {\n    secoes.forEach(capturarSecoes);\n    function capturarSecoes(secao) {\n      var topo = window.scrollY;\n      var topoSecao = secao.offsetTop - 90;\n      var alturaSecao = secao.offsetHeight;\n      var idSecao = secao.getAttribute(\"id\");\n      if (topo >= topoSecao && topo < topoSecao + alturaSecao) {\n        links.forEach(ativarDesativarMenu);\n      }\n      function ativarDesativarMenu(link) {\n        link.classList.remove(\"ativo\");\n        document.querySelector(\".menu-link[href*='\".concat(idSecao, \"']\")).classList.add(\"ativo\");\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/link-menu-ativo.js?");

/***/ }),

/***/ "./js/modules/menu-hamburguer.js":
/*!***************************************!*\
  !*** ./js/modules/menu-hamburguer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuHamburguer)\n/* harmony export */ });\nfunction initMenuHamburguer() {\n  // Menu Hamburguer\n\n  var menuHaburguer = document.querySelector(\".menu-hamburguer\");\n  var nav = document.querySelector(\"nav\");\n  function abrirFecharMenu(event) {\n    if (event.type === \"touchstart\") event.preventDefault();\n    nav.classList.toggle(\"visivel\");\n    var ativo = nav.classList.contains(\"visivel\");\n    event.currentTarget.setAttribute(\"aria-expanded\", ativo);\n    if (ativo) {\n      event.currentTarget.setAttribute(\"aria-label\", \"Fechar Menu\");\n    } else {\n      event.currentTarget.setAttribute(\"aria-label\", \"Abrir Menu\");\n    }\n  }\n  menuHaburguer.addEventListener(\"click\", abrirFecharMenu);\n  menuHaburguer.addEventListener(\"touchstart\", abrirFecharMenu);\n}\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/menu-hamburguer.js?");

/***/ }),

/***/ "./js/modules/visibilidade-menu.js":
/*!*****************************************!*\
  !*** ./js/modules/visibilidade-menu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VisibilidadeMenu)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n// alternar visibilidade do menu de acordo com o scroll\nvar VisibilidadeMenu = /*#__PURE__*/function () {\n  function VisibilidadeMenu(menus) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, VisibilidadeMenu);\n    this.menus = document.querySelectorAll(menus);\n    this.orientacaoRolagem = 0;\n    this.visibilidadeMenu = this.visibilidadeMenu.bind(this);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(VisibilidadeMenu, [{\n    key: \"addEventoScroll\",\n    value: function addEventoScroll() {\n      window.addEventListener(\"scroll\", this.visibilidadeMenu, {\n        passive: true\n      });\n    }\n\n    // alternar a visibilidade do menu de acordo com scroll\n  }, {\n    key: \"visibilidadeMenu\",\n    value: function visibilidadeMenu(event) {\n      if (scrollY > this.orientacaoRolagem) {\n        // Rolagem para baixo\n        this.menus.forEach(function (item) {\n          item.classList.remove(\"visivel\");\n        });\n      } else if (scrollY < this.orientacaoRolagem) {\n        // Rolagem para cima\n        this.menus.forEach(function (item) {\n          if (!item.hasAttribute(\"data-fechado\")) {\n            item.classList.add(\"visivel\");\n          }\n        });\n      } // previnir de rolagem lateral\n      this.orientacaoRolagem = scrollY <= 0 ? 0 : scrollY;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.addEventoScroll();\n      return this;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/visibilidade-menu.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_visibilidade_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/visibilidade-menu.js */ \"./js/modules/visibilidade-menu.js\");\n/* harmony import */ var _modules_link_menu_ativo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/link-menu-ativo.js */ \"./js/modules/link-menu-ativo.js\");\n/* harmony import */ var _modules_menu_hamburguer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu-hamburguer.js */ \"./js/modules/menu-hamburguer.js\");\n/* harmony import */ var _modules_copy_area_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/copy-area.js */ \"./js/modules/copy-area.js\");\n/* harmony import */ var _modules_accordion_diferenciais_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordion-diferenciais.js */ \"./js/modules/accordion-diferenciais.js\");\n\n\n\n\n\nvar visibilidadeMenu = new _modules_visibilidade_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-visibilidade]\");\nvisibilidadeMenu.init();\n(0,_modules_link_menu_ativo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_menu_hamburguer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_copy_area_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_accordion_diferenciais_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://projeto_portifolio/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(a, n) {\n  if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\n}\n\n\n//# sourceURL=webpack://projeto_portifolio/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(e, r) {\n  for (var t = 0; t < r.length; t++) {\n    var o = r[t];\n    o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o.key), o);\n  }\n}\nfunction _createClass(e, r, t) {\n  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", {\n    writable: !1\n  }), e;\n}\n\n\n//# sourceURL=webpack://projeto_portifolio/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction toPrimitive(t, r) {\n  if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n\n\n//# sourceURL=webpack://projeto_portifolio/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction toPropertyKey(t) {\n  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t, \"string\");\n  return \"symbol\" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i) ? i : i + \"\";\n}\n\n\n//# sourceURL=webpack://projeto_portifolio/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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