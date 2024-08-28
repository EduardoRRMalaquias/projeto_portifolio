export default function initLinkMenuAtivo() {
  // Menu ativo
  let links = document.querySelectorAll(".menu-link");
  let secoes = document.querySelectorAll(".secao");

  window.addEventListener("scroll", linksMenuAtivo);

  function linksMenuAtivo() {
    secoes.forEach(capturarSecoes);

    function capturarSecoes(secao) {
      let topo = window.scrollY;
      let topoSecao = secao.offsetTop - 90;
      let alturaSecao = secao.offsetHeight;
      let idSecao = secao.getAttribute("id");

      if (topo >= topoSecao && topo < topoSecao + alturaSecao) {
        links.forEach(ativarDesativarMenu);
      }
      function ativarDesativarMenu(link) {
        link.classList.remove("ativo");
        document
          .querySelector(`.menu-link[href*='${idSecao}']`)
          .classList.add("ativo");
      }
    }
  }
}
