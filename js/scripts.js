//visibilidade do menu
const header = document.querySelector("header");
let orientacaoRolagem = 0;

window.addEventListener("scroll", visibilidadeMenu, { passive: true });

// alternar a visibilidade do menu de acordo com scroll
function visibilidadeMenu() {
  var { scrollY } = window;
  if (scrollY > orientacaoRolagem) {
    // Rolagem para baixo
    header.classList.remove("visivel");
  } else if (scrollY < orientacaoRolagem) {
    // Rolagem para cima
    header.classList.add("visivel");
  } // previnir de rolagem lateral
  orientacaoRolagem = scrollY <= 0 ? 0 : scrollY;
}

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
