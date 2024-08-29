// alternar visibilidade do menu de acordo com o scroll
export default class VisibilidadeMenu {
  constructor(menus, classeAtivadora) {
    this.menus = document.querySelectorAll(menus);
    this.orientacaoRolagem = 0;
    this.visibilidadeMenu = this.visibilidadeMenu.bind(this);
    this.classeAtivadora = classeAtivadora;
  }

  //adicionar evento de scrrol a pagina
  addEventoScroll() {
    window.addEventListener("scroll", this.visibilidadeMenu, { passive: true });
  }

  // alternar a visibilidade do menu de acordo com scroll
  visibilidadeMenu() {
    if (scrollY > this.orientacaoRolagem) {
      // Rolagem para baixo
      this.menus.forEach((item) => {
        item.classList.remove(this.classeAtivadora);
      });
    } else if (scrollY < this.orientacaoRolagem) {
      // Rolagem para cima
      this.menus.forEach((item) => {
        if (item.dataset.visibilidade === "") {
          item.classList.add(this.classeAtivadora);
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
