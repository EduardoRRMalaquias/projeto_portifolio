// accordion
export default class Accordion {
  constructor(botaoAccordion) {
    this.botaoAccordion = document.querySelectorAll(botaoAccordion);

    this.ativarDesativarDiferencial =
      this.ativarDesativarDiferencial.bind(this);
  }

  ativarDesativarDiferencial(event) {
    const diferencial = event.currentTarget;
    const controls = diferencial.getAttribute("aria-controls");
    const descricao = document.getElementById(controls);

    descricao.classList.toggle("ativo");
    const ativo = descricao.classList.contains("ativo");
    diferencial.setAttribute("aria-expanded", ativo);
  }

  addEventoBotaoAccordiao() {
    this.botaoAccordion.forEach((diferencial) => {
      diferencial.addEventListener("click", this.ativarDesativarDiferencial);
    });
  }

  init() {
    this.addEventoBotaoAccordiao();
    return this;
  }
}
