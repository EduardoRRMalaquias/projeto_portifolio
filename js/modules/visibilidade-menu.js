// alternar visibilidade do menu de acordo com o scroll
export default class VisibilidadeMenu {
  constructor(header) {
    this.header = document.querySelector(header);
    this.orientacaoRolagem = 0;
    this.visibilidadeMenu = this.visibilidadeMenu.bind(this);
  }

  addEventoScroll() {
    window.addEventListener("scroll", this.visibilidadeMenu, { passive: true });
  }

  // alternar a visibilidade do menu de acordo com scroll
  visibilidadeMenu(event) {
    console.log(window);
    if (scrollY > this.orientacaoRolagem) {
      // Rolagem para baixo
      this.header.classList.remove("visivel");
    } else if (scrollY < this.orientacaoRolagem) {
      // Rolagem para cima
      this.header.classList.add("visivel");
    } // previnir de rolagem lateral
    this.orientacaoRolagem = scrollY <= 0 ? 0 : scrollY;
  }

  init() {
    this.addEventoScroll();
    return this;
  }
}
