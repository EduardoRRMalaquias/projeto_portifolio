// Menu Hamburguer
export default class MenuHamburguer {
  constructor(menuHaburguer, navegacao, classeAtivadora, eventos) {
    this.menuHaburguer = document.querySelector(menuHaburguer);
    this.navegacao = document.querySelector(navegacao);
    this.classeAtivadora = classeAtivadora;

    // define os eventos de clique e toque como eventos padrao
    if (eventos === undefined) this.eventos = ["touchstart", "click"];
    else this.eventos = eventos;

    this.abrirFecharMenu = this.abrirFecharMenu.bind(this);
  }

  abrirFecharMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    this.navegacao.classList.toggle(this.classeAtivadora);
    this.verificarAcessibilidade();
  }

  verificarAcessibilidade() {
    const ativo = this.navegacao.classList.contains(this.classeAtivadora);
    this.menuHaburguer.setAttribute("aria-expanded", ativo);
    if (ativo) {
      this.menuHaburguer.setAttribute("aria-label", "Fechar Menu");
    } else {
      this.menuHaburguer.setAttribute("aria-label", "Abrir Menu");
    }
  }

  addMenuHamburguerEventos() {
    this.eventos.forEach((evento) =>
      this.menuHaburguer.addEventListener(evento, this.abrirFecharMenu)
    );
  }

  init() {
    if (this.menuHaburguer && this.navegacao) {
      this.addMenuHamburguerEventos();
    }
    return this;
  }
}
