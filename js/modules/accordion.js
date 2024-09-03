// accordion
export default class Accordion {
  constructor(botaoAccordion) {
    this.botaoAccordion = document.querySelectorAll(botaoAccordion);

    this.class = "ativo";
  }

  ativarDesativarDiferencial(diferencial) {
    const controls = diferencial.getAttribute("aria-controls");
    const descricao = document.getElementById(controls);

    descricao.classList.toggle(this.class);
    const ativo = descricao.classList.contains(this.class);
    diferencial.setAttribute("aria-expanded", ativo);
  }

  addEventoBotaoAccordiao() {
    this.botaoAccordion.forEach((diferencial) => {
      diferencial.addEventListener("click", () =>
        this.ativarDesativarDiferencial(diferencial)
      );
    });
  }

  init() {
    if (this.botaoAccordion.length) {
      this.addEventoBotaoAccordiao();
    }
    return this;
  }
}
