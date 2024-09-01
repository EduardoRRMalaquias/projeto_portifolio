(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function i(t){var i=function(t){if("object"!=e(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,"string");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(i)?i:i+""}function a(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,i(n.key),n)}}function n(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}var r=function(){return n((function e(i,a){t(this,e),this.menus=document.querySelectorAll(i),this.orientacaoRolagem=0,this.visibilidadeMenu=this.visibilidadeMenu.bind(this),this.classeAtivadora=a}),[{key:"addEventoScroll",value:function(){window.addEventListener("scroll",this.visibilidadeMenu,{passive:!0})}},{key:"visibilidadeMenu",value:function(){var t=this;scrollY>this.orientacaoRolagem?this.menus.forEach((function(e){e.classList.remove(t.classeAtivadora)})):scrollY<this.orientacaoRolagem&&this.menus.forEach((function(e){""===e.dataset.visibilidade&&e.classList.add(t.classeAtivadora)})),this.orientacaoRolagem=scrollY<=0?0:scrollY}},{key:"init",value:function(){return this.addEventoScroll(),this}}])}(),o=function(){return n((function e(i,a){t(this,e),this.links=document.querySelectorAll(i),this.secoes=document.querySelectorAll(a),this.capturarDadosSecoes=this.capturarDadosSecoes.bind(this),this.capturarSecoes=this.capturarSecoes.bind(this)}),[{key:"addEventoScroll",value:function(){window.addEventListener("scroll",this.capturarDadosSecoes)}},{key:"capturarDadosSecoes",value:function(){this.secoes.forEach(this.capturarSecoes)}},{key:"capturarSecoes",value:function(t){var e=this,i=window.scrollY,a=t.offsetTop-90,n=t.offsetHeight,r=t.getAttribute("id");i>=a&&i<a+n&&this.links.forEach((function(t){e.ativarDesativarMenu(t,r)}))}},{key:"ativarDesativarMenu",value:function(t,e){t.classList.remove("ativo"),document.querySelector(".menu-link[href*='".concat(e,"']")).classList.add("ativo")}},{key:"init",value:function(){return this.addEventoScroll(),this}}])}(),s=function(){return n((function e(i,a,n,r){t(this,e),this.menuHaburguer=document.querySelector(i),this.navegacao=document.querySelector(a),this.classeAtivadora=n,this.eventos=void 0===r?["touchstart","click"]:r,this.abrirFecharMenu=this.abrirFecharMenu.bind(this)}),[{key:"abrirFecharMenu",value:function(t){var e=this;"touchstart"===t.type&&t.preventDefault(),this.navegacao.classList.toggle(this.classeAtivadora),function(t,i){var a=document.documentElement,n="data-outside";function r(o){t.contains(o.target)||(t.removeAttribute(n),i.forEach((function(t){a.removeEventListener(t,r)})),e.navegacao.classList.remove(e.classeAtivadora))}t.hasAttribute(n)||(i.forEach((function(t){setTimeout((function(){return a.addEventListener(t,r)}))})),t.setAttribute(n,""))}(this.navegacao,this.eventos),this.verificarAcessibilidade()}},{key:"verificarAcessibilidade",value:function(){var t=this.navegacao.classList.contains(this.classeAtivadora);this.menuHaburguer.setAttribute("aria-expanded",t),t?this.menuHaburguer.setAttribute("aria-label","Fechar Menu"):this.menuHaburguer.setAttribute("aria-label","Abrir Menu")}},{key:"addMenuHamburguerEventos",value:function(){var t=this;this.eventos.forEach((function(e){return t.menuHaburguer.addEventListener(e,t.abrirFecharMenu)}))}},{key:"init",value:function(){return this.menuHaburguer&&this.navegacao&&this.addMenuHamburguerEventos(),this}}])}(),c=function(){return n((function e(i){t(this,e),window.ClipboardJS&&new ClipboardJS(i),this.copyAreas=document.querySelectorAll(i),this.confirmarCopia=this.confirmarCopia.bind(this)}),[{key:"addEventoCopia",value:function(){var t=this;this.copyAreas.forEach((function(e){e.addEventListener("click",t.confirmarCopia)}))}},{key:"confirmarCopia",value:function(t){var e=this,i=t.currentTarget;i.classList.add("copiado"),setTimeout((function(){e.removerConfirmacao(i)}),2e3)}},{key:"removerConfirmacao",value:function(t){t.classList.remove("copiado")}},{key:"init",value:function(){return this.addEventoCopia(),this}}])}(),u=function(){return n((function e(i){t(this,e),this.botaoAccordion=document.querySelectorAll(i),this.ativarDesativarDiferencial=this.ativarDesativarDiferencial.bind(this)}),[{key:"ativarDesativarDiferencial",value:function(t){var e=t.currentTarget,i=e.getAttribute("aria-controls"),a=document.getElementById(i);a.classList.toggle("ativo");var n=a.classList.contains("ativo");e.setAttribute("aria-expanded",n)}},{key:"addEventoBotaoAccordiao",value:function(){var t=this;this.botaoAccordion.forEach((function(e){e.addEventListener("click",t.ativarDesativarDiferencial)}))}},{key:"init",value:function(){return this.addEventoBotaoAccordiao(),this}}])}(),l="visivel";new r("[data-visibilidade]",l).init(),new s('[data-menu="hamburguer"]','[data-menu="navegacao"]',l).init(),new o("[data-link]","[data-secao]").init(),new c("[data-copyarea]").init(),new u('[data-accordion="button"]').init()})();