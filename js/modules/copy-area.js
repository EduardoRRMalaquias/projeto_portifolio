// copy area
export default class CopyArea {
  constructor(copyAreas) {
    if (window.ClipboardJS) {
      new ClipboardJS(copyAreas);
    }

    this.copyAreas = document.querySelectorAll(copyAreas);

    this.confirmarCopia = this.confirmarCopia.bind(this);
  }

  addEventoCopia() {
    this.copyAreas.forEach((copyArea) => {
      copyArea.addEventListener("click", this.confirmarCopia);
    });
  }

  confirmarCopia(event) {
    const copyarea = event.currentTarget;
    copyarea.classList.add("copiado");
    setTimeout(() => {
      this.removerConfirmacao(copyarea);
    }, 2000);
  }

  removerConfirmacao(copyarea) {
    copyarea.classList.remove("copiado");
  }

  init() {
    this.addEventoCopia();
    return this;
  }
}
