export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botoesAbrir = document.querySelectorAll(botaoAbrir);
    this.botoesFechar = document.querySelectorAll(botaoFechar);
    this.containersModals = document.querySelectorAll(containerModal);
    this.class = "ativo";

    this.abrirfecharModal = this.abrirfecharModal.bind(this);
    this.fecharClickForaModal = this.fecharClickForaModal.bind(this);
  }

  abrirfecharModal(event) {
    event.preventDefault();
    const modal = event.currentTarget;
    const idModal = modal.getAttribute("data-containermodal");
    

    this.containersModals.classList.toggle(this.class);
  }

  // fecha o modal a clicar do lado de fora
  fecharClickForaModal(event) {
    if (event.target === this.containersModals) {
      this.abrirfecharModal(event);
    }
  }

  // chamar o adicionador dos eventos nos componentes do modal
  chamarModalEventos() {
    this.addModalEventos(this.botoesAbrir, this.abrirfecharModal);
    this.addModalEventos(this.botoesFechar, this.abrirfecharModal);
    this.addModalEventos(this.containersModals, this.fecharClickForaModal);
  }

  //adicionar os eventos do modalx
  addModalEventos(items, callback) {
    items.forEach((item) => {
      item.addEventListener("click", callback);
    });
  }

  init() {
    this.chamarModalEventos();
    return this;
  }
}
