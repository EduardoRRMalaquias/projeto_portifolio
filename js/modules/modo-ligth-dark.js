export default class DarkLigthMode {
  constructor(btnDarkLightMode, checkDarkLightMode) {
    this.btnDarkLightMode = document.querySelector(btnDarkLightMode);
    this.checkDarkLightMode = document.querySelector(checkDarkLightMode);
    this.temaUsuario = window.matchMedia("(prefers-color-scheme: dark)");
  }

  ativarDesativarCheck(ativacao) {
    this.checkDarkLightMode.checked = ativacao;
  }

  detectarTema() {
    this.temaUsuario.addEventListener("change", () => {
      this.ativarDesativarCheck(this.temaUsuario.matches);
    });
  }

  init() {
    this.ativarDesativarCheck(this.temaUsuario.matches);
    console.log(this.btnDarkLightMode);
    console.log(this.checkDarkLightMode);
    console.log((this.temaUsuario.onchange = true));
    this.detectarTema();
  }
}
