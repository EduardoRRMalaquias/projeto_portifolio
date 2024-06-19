//visibilidade do menu
const header = document.querySelector("header");
let orientacaoRolagem = 0;

window.addEventListener("scroll", visibilidadeMenu, { passive: true });
// funcao que alterna a visibilidade do menu de acordo com scroll
function visibilidadeMenu() {
  console.log("scroll");
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



//visibilidade do menu
