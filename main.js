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

/***/ "./js/modules/click-outside.js":
/*!*************************************!*\
  !*** ./js/modules/click-outside.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOutside)\n/* harmony export */ });\nfunction clickOutside(element, events, callback) {\n  var html = document.documentElement;\n  var outside = \"data-outside\";\n\n  // adiciona os eventos passados ao html e adiciona o atributo no element caso ele não tenha os evento\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        return html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, \"\");\n  }\n\n  // remove o evento e o atributo do html e executa a funcao passada caso o usuario clique fora\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n}\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/click-outside.js?");

/***/ }),

/***/ "./js/modules/copy-area.js":
/*!*********************************!*\
  !*** ./js/modules/copy-area.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CopyArea)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n// copy area\nvar CopyArea = /*#__PURE__*/function () {\n  function CopyArea(copyAreas) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CopyArea);\n    if (window.ClipboardJS) {\n      new ClipboardJS(copyAreas);\n    }\n    this.copyAreas = document.querySelectorAll(copyAreas);\n    this.confirmarCopia = this.confirmarCopia.bind(this);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CopyArea, [{\n    key: \"addEventoCopia\",\n    value: function addEventoCopia() {\n      var _this = this;\n      this.copyAreas.forEach(function (copyArea) {\n        copyArea.addEventListener(\"click\", _this.confirmarCopia);\n      });\n    }\n  }, {\n    key: \"confirmarCopia\",\n    value: function confirmarCopia(event) {\n      var _this2 = this;\n      var copyarea = event.currentTarget;\n      copyarea.classList.add(\"copiado\");\n      setTimeout(function () {\n        _this2.removerConfirmacao(copyarea);\n      }, 2000);\n    }\n  }, {\n    key: \"removerConfirmacao\",\n    value: function removerConfirmacao(copyarea) {\n      copyarea.classList.remove(\"copiado\");\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.addEventoCopia();\n      return this;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/copy-area.js?");

/***/ }),

/***/ "./js/modules/link-menu-ativo.js":
/*!***************************************!*\
  !*** ./js/modules/link-menu-ativo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkMenuAtivo)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n// Links de Menu ativo\nvar LinkMenuAtivo = /*#__PURE__*/function () {\n  function LinkMenuAtivo(links, secoes) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, LinkMenuAtivo);\n    this.links = document.querySelectorAll(links);\n    this.secoes = document.querySelectorAll(secoes);\n    this.capturarDadosSecoes = this.capturarDadosSecoes.bind(this);\n    this.capturarSecoes = this.capturarSecoes.bind(this);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(LinkMenuAtivo, [{\n    key: \"addEventoScroll\",\n    value: function addEventoScroll() {\n      window.addEventListener(\"scroll\", this.capturarDadosSecoes);\n    }\n  }, {\n    key: \"capturarDadosSecoes\",\n    value: function capturarDadosSecoes() {\n      this.secoes.forEach(this.capturarSecoes);\n    }\n  }, {\n    key: \"capturarSecoes\",\n    value: function capturarSecoes(secao) {\n      var _this = this;\n      var topo = window.scrollY;\n      var topoSecao = secao.offsetTop - 90;\n      var alturaSecao = secao.offsetHeight;\n      var idSecao = secao.getAttribute(\"id\");\n      if (topo >= topoSecao && topo < topoSecao + alturaSecao) {\n        this.links.forEach(function (link) {\n          _this.ativarDesativarMenu(link, idSecao);\n        });\n      }\n    }\n  }, {\n    key: \"ativarDesativarMenu\",\n    value: function ativarDesativarMenu(link, idSecao) {\n      link.classList.remove(\"ativo\");\n      document.querySelector(\".menu-link[href*='\".concat(idSecao, \"']\")).classList.add(\"ativo\");\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.addEventoScroll();\n      return this;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/link-menu-ativo.js?");

/***/ }),

/***/ "./js/modules/menu-hamburguer.js":
/*!***************************************!*\
  !*** ./js/modules/menu-hamburguer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuHamburguer)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _click_outside_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./click-outside.js */ \"./js/modules/click-outside.js\");\n\n\n\n\n// Menu Hamburguer\nvar MenuHamburguer = /*#__PURE__*/function () {\n  function MenuHamburguer(menuHaburguer, navegacao, classeAtivadora, eventos) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MenuHamburguer);\n    this.menuHaburguer = document.querySelector(menuHaburguer);\n    this.navegacao = document.querySelector(navegacao);\n    this.classeAtivadora = classeAtivadora;\n\n    // define os eventos de clique e toque como eventos padrao\n    if (eventos === undefined) this.eventos = [\"touchstart\", \"click\"];else this.eventos = eventos;\n    this.abrirFecharMenu = this.abrirFecharMenu.bind(this);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MenuHamburguer, [{\n    key: \"abrirFecharMenu\",\n    value: function abrirFecharMenu(event) {\n      var _this = this;\n      if (event.type === \"touchstart\") event.preventDefault();\n      this.navegacao.classList.toggle(this.classeAtivadora);\n      (0,_click_outside_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.navegacao, this.eventos, function () {\n        _this.navegacao.classList.remove(_this.classeAtivadora);\n      });\n      this.verificarAcessibilidade();\n    }\n  }, {\n    key: \"verificarAcessibilidade\",\n    value: function verificarAcessibilidade() {\n      var ativo = this.navegacao.classList.contains(this.classeAtivadora);\n      this.menuHaburguer.setAttribute(\"aria-expanded\", ativo);\n      if (ativo) {\n        this.menuHaburguer.setAttribute(\"aria-label\", \"Fechar Menu\");\n      } else {\n        this.menuHaburguer.setAttribute(\"aria-label\", \"Abrir Menu\");\n      }\n    }\n  }, {\n    key: \"addMenuHamburguerEventos\",\n    value: function addMenuHamburguerEventos() {\n      var _this2 = this;\n      this.eventos.forEach(function (evento) {\n        return _this2.menuHaburguer.addEventListener(evento, _this2.abrirFecharMenu);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.menuHaburguer && this.navegacao) {\n        this.addMenuHamburguerEventos();\n      }\n      return this;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/menu-hamburguer.js?");

/***/ }),

/***/ "./js/modules/visibilidade-menu.js":
/*!*****************************************!*\
  !*** ./js/modules/visibilidade-menu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VisibilidadeMenu)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n// alternar visibilidade do menu de acordo com o scroll\nvar VisibilidadeMenu = /*#__PURE__*/function () {\n  function VisibilidadeMenu(menus, classeAtivadora) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, VisibilidadeMenu);\n    this.menus = document.querySelectorAll(menus);\n    this.orientacaoRolagem = 0;\n    this.visibilidadeMenu = this.visibilidadeMenu.bind(this);\n    this.classeAtivadora = classeAtivadora;\n  }\n\n  //adicionar evento de scrrol a pagina\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(VisibilidadeMenu, [{\n    key: \"addEventoScroll\",\n    value: function addEventoScroll() {\n      window.addEventListener(\"scroll\", this.visibilidadeMenu, {\n        passive: true\n      });\n    }\n\n    // alternar a visibilidade do menu de acordo com scroll\n  }, {\n    key: \"visibilidadeMenu\",\n    value: function visibilidadeMenu() {\n      var _this = this;\n      if (scrollY > this.orientacaoRolagem) {\n        // Rolagem para baixo\n        this.menus.forEach(function (item) {\n          item.classList.remove(_this.classeAtivadora);\n        });\n      } else if (scrollY < this.orientacaoRolagem) {\n        // Rolagem para cima\n        this.menus.forEach(function (item) {\n          if (item.dataset.visibilidade === \"\") {\n            item.classList.add(_this.classeAtivadora);\n          }\n        });\n      } // previnir de rolagem lateral\n      this.orientacaoRolagem = scrollY <= 0 ? 0 : scrollY;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.addEventoScroll();\n      return this;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://projeto_portifolio/./js/modules/visibilidade-menu.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_visibilidade_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/visibilidade-menu.js */ \"./js/modules/visibilidade-menu.js\");\n/* harmony import */ var _modules_link_menu_ativo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/link-menu-ativo.js */ \"./js/modules/link-menu-ativo.js\");\n/* harmony import */ var _modules_menu_hamburguer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu-hamburguer.js */ \"./js/modules/menu-hamburguer.js\");\n/* harmony import */ var _modules_copy_area_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/copy-area.js */ \"./js/modules/copy-area.js\");\n/* harmony import */ var _modules_accordion_diferenciais_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordion-diferenciais.js */ \"./js/modules/accordion-diferenciais.js\");\n\n\n\n\n\nvar classeAtivadora = \"visivel\";\nvar visibilidadeMenu = new _modules_visibilidade_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-visibilidade]\", classeAtivadora);\nvisibilidadeMenu.init();\nvar menuHamburguer = new _modules_menu_hamburguer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-menu=\"hamburguer\"]', '[data-menu=\"navegacao\"]', classeAtivadora);\nmenuHamburguer.init();\nvar linksMenuAtivo = new _modules_link_menu_ativo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-link]\", \"[data-secao]\");\nlinksMenuAtivo.init();\nvar copyArea = new _modules_copy_area_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"[data-copyarea]\");\ncopyArea.init();\n(0,_modules_accordion_diferenciais_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://projeto_portifolio/./js/script.js?");

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