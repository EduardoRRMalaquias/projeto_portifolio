// Links de Menu ativo
export default class LinkMenuAtivo {
  constructor(links, secoes) {
    this.links = document.querySelectorAll(links);
    this.secoes = document.querySelectorAll(secoes);

    this.capturarDadosSecoes = this.capturarDadosSecoes.bind(this);
    this.capturarSecoes = this.capturarSecoes.bind(this);
  }

  addEventoScroll() {
    window.addEventListener("scroll", this.capturarDadosSecoes);
  }

  capturarDadosSecoes() {
    this.secoes.forEach(this.capturarSecoes);
  }

  capturarSecoes(secao) {
    let topo = window.scrollY;
    let topoSecao = secao.offsetTop - 90;
    let alturaSecao = secao.offsetHeight;
    let idSecao = secao.getAttribute("id");

    if (topo >= topoSecao && topo < topoSecao + alturaSecao) {
      this.links.forEach((link) => {
        this.ativarDesativarMenu(link, idSecao);
      });
    }
  }

  ativarDesativarMenu(link, idSecao) {
    link.classList.remove("ativo");
    document
      .querySelector(`.menu-link[href*='${idSecao}']`)
      .classList.add("ativo");
  }

  init() {
    this.addEventoScroll();
    return this;
  }
}
