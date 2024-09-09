(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function i(t){var i=function(t){if("object"!=e(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,"string");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(i)?i:i+""}function a(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,i(o.key),o)}}function o(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}var n=function(){return o((function e(i,a){t(this,e),this.menus=document.querySelectorAll(i),this.orientacaoRolagem=0,this.visibilidadeMenu=this.visibilidadeMenu.bind(this),this.classeAtivadora=a}),[{key:"addEventoScroll",value:function(){window.addEventListener("scroll",this.visibilidadeMenu,{passive:!0})}},{key:"visibilidadeMenu",value:function(){var t=this;scrollY>this.orientacaoRolagem?this.menus.forEach((function(e){e.classList.remove(t.classeAtivadora)})):scrollY<this.orientacaoRolagem&&this.menus.forEach((function(e){""===e.dataset.visibilidade&&e.classList.add(t.classeAtivadora)})),this.orientacaoRolagem=scrollY<=0?0:scrollY}},{key:"init",value:function(){return this.addEventoScroll(),this}}])}(),r=function(){return o((function e(i,a){t(this,e),this.links=document.querySelectorAll(i),this.secoes=document.querySelectorAll(a),this.capturarDadosSecoes=this.capturarDadosSecoes.bind(this),this.capturarSecoes=this.capturarSecoes.bind(this)}),[{key:"addEventoScroll",value:function(){window.addEventListener("scroll",this.capturarDadosSecoes)}},{key:"capturarDadosSecoes",value:function(){this.secoes.forEach(this.capturarSecoes)}},{key:"capturarSecoes",value:function(t){var e=this,i=window.scrollY,a=t.offsetTop-90,o=t.offsetHeight,n=t.getAttribute("id");i>=a&&i<a+o&&this.links.forEach((function(t){e.ativarDesativarMenu(t,n)}))}},{key:"ativarDesativarMenu",value:function(t,e){t.classList.remove("ativo"),document.querySelector(".menu-link[href*='".concat(e,"']")).classList.add("ativo")}},{key:"init",value:function(){return this.addEventoScroll(),this}}])}(),s=function(){return o((function e(i,a,o,n){t(this,e),this.menuHaburguer=document.querySelector(i),this.navegacao=document.querySelector(a),this.classeAtivadora=o,this.eventos=void 0===n?["touchstart","click"]:n,this.abrirFecharMenu=this.abrirFecharMenu.bind(this)}),[{key:"abrirFecharMenu",value:function(t){var e=this;"touchstart"===t.type&&t.preventDefault(),this.navegacao.classList.toggle(this.classeAtivadora),function(t,i){var a=document.documentElement,o="data-outside";function n(r){t.contains(r.target)||(t.removeAttribute(o),i.forEach((function(t){a.removeEventListener(t,n)})),e.navegacao.classList.remove(e.classeAtivadora))}t.hasAttribute(o)||(i.forEach((function(t){setTimeout((function(){return a.addEventListener(t,n)}))})),t.setAttribute(o,""))}(this.navegacao,this.eventos),this.verificarAcessibilidade()}},{key:"verificarAcessibilidade",value:function(){var t=this.navegacao.classList.contains(this.classeAtivadora);this.menuHaburguer.setAttribute("aria-expanded",t),t?this.menuHaburguer.setAttribute("aria-label","Fechar Menu"):this.menuHaburguer.setAttribute("aria-label","Abrir Menu")}},{key:"addMenuHamburguerEventos",value:function(){var t=this;this.eventos.forEach((function(e){return t.menuHaburguer.addEventListener(e,t.abrirFecharMenu)}))}},{key:"init",value:function(){return this.menuHaburguer&&this.navegacao&&this.addMenuHamburguerEventos(),this}}])}(),c=function(){return o((function e(i){t(this,e),window.ClipboardJS&&new ClipboardJS(i),this.copyAreas=document.querySelectorAll(i),this.confirmarCopia=this.confirmarCopia.bind(this)}),[{key:"addEventoCopia",value:function(){var t=this;this.copyAreas.forEach((function(e){e.addEventListener("click",t.confirmarCopia)}))}},{key:"confirmarCopia",value:function(t){var e=this,i=t.currentTarget;i.classList.add("copiado"),setTimeout((function(){e.removerConfirmacao(i)}),2e3)}},{key:"removerConfirmacao",value:function(t){t.classList.remove("copiado")}},{key:"init",value:function(){return this.addEventoCopia(),this}}])}(),u=function(){return o((function e(i){t(this,e),this.botaoAccordion=document.querySelectorAll(i),this.class="ativo"}),[{key:"ativarDesativarDiferencial",value:function(t){var e=t.getAttribute("aria-controls"),i=document.getElementById(e);i.classList.toggle(this.class);var a=i.classList.contains(this.class);t.setAttribute("aria-expanded",a)}},{key:"addEventoBotaoAccordiao",value:function(){var t=this;this.botaoAccordion.forEach((function(e){e.addEventListener("click",(function(){return t.ativarDesativarDiferencial(e)}))}))}},{key:"init",value:function(){return this.botaoAccordion.length&&this.addEventoBotaoAccordiao(),this}}])}(),l=function(){return o((function e(i,a,o,n){t(this,e),this.botoesAbrir=document.querySelectorAll(i),this.botoesFechar=document.querySelectorAll(a),this.containersModals=document.querySelectorAll(o),this.class="ativo",this.abrirModal=this.abrirModal.bind(this),this.fecharModal=this.fecharModal.bind(this),this.fecharClickForaModal=this.fecharClickForaModal.bind(this)}),[{key:"fecharModal",value:function(){var t=this;this.containersModals.forEach((function(e){e.classList.remove(t.class)}))}},{key:"abrirModal",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("data-abrimodal");document.getElementById(e).classList.add(this.class)}},{key:"fecharClickForaModal",value:function(t){var e=this;this.containersModals.forEach((function(i){t.target===i&&e.fecharModal(t)}))}},{key:"chamarModalEventos",value:function(){this.addModalEventos(this.botoesAbrir,this.abrirModal),this.addModalEventos(this.botoesFechar,this.fecharModal),this.addModalEventos(this.containersModals,this.fecharClickForaModal)}},{key:"addModalEventos",value:function(t,e){t.forEach((function(t){t.addEventListener("click",e)}))}},{key:"init",value:function(){return this.chamarModalEventos(),this}}])}(),d="visivel";new n("[data-visibilidade]",d).init(),new s('[data-menu="hamburguer"]','[data-menu="navegacao"]',d).init(),new r("[data-link]","[data-secao]").init(),new c("[data-copyarea]").init(),new u('[data-accordion="button"]').init(),new l("[data-abrimodal]",'[data-modal="fechar"]','[data-modal="container"]').init()})();