export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botoesAbrir = document.querySelectorAll(botaoAbrir);
    this.botoesFechar = document.querySelectorAll(botaoFechar);
    this.containersModals = document.querySelectorAll(containerModal);
    this.class = "ativo";

    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
    this.fecharClickForaModal = this.fecharClickForaModal.bind(this);
  }

  fecharModal() {
    this.containersModals.forEach((modal) => {
      modal.classList.remove(this.class);
    });
  }

  abrirModal(event) {
    event.preventDefault();
    const btnModal = event.currentTarget;
    const idModal = btnModal.getAttribute("data-abrimodal");
    const modal = document.getElementById(idModal);
    modal.classList.add(this.class);
  }

  // fecha o modal a clicar do lado de fora
  fecharClickForaModal(event) {
    this.containersModals.forEach((modal) => {
      if (event.target === modal) {
        this.fecharModal(event);
      }
    });
  }

  // chamar o adicionador dos eventos nos componentes do modal
  chamarModalEventos() {
    this.addModalEventos(this.botoesAbrir, this.abrirModal);
    this.addModalEventos(this.botoesFechar, this.fecharModal);
    this.addModalEventos(this.containersModals, this.fecharClickForaModal);
  }

  //adicionar os eventos do modals
  addModalEventos(items, callback) {
    items.forEach((item) => {
      item.addEventListener("click", callback);
    });
  }

  init() {
    if (this.botoesAbrir.length && this.botoesFechar && this.containersModals) {
      this.chamarModalEventos();
    }
    return this;
  }
}
