// alternar visibilidade do menu de acordo com o scroll
export default class VisibilidadeMenu {
  constructor(menus) {
    this.menus = document.querySelectorAll(menus);
    this.orientacaoRolagem = 0;
    this.visibilidadeMenu = this.visibilidadeMenu.bind(this);
  }

  addEventoScroll() {
    window.addEventListener("scroll", this.visibilidadeMenu, { passive: true });
  }

  // alternar a visibilidade do menu de acordo com scroll
  visibilidadeMenu(event) {
    if (scrollY > this.orientacaoRolagem) {
      // Rolagem para baixo
      this.menus.forEach((item) => {
        item.classList.remove("visivel");
      });
    } else if (scrollY < this.orientacaoRolagem) {
      // Rolagem para cima
      this.menus.forEach((item) => {
        if (!item.hasAttribute("data-fechado")) {
          item.classList.add("visivel");
        }
      });
    } // previnir de rolagem lateral
    this.orientacaoRolagem = scrollY <= 0 ? 0 : scrollY;
  }

  init() {
    this.addEventoScroll();
    return this;
  }
}
