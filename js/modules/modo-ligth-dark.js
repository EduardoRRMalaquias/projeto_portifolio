export default class DarkLigthMode {
  constructor(btnDarkLightMode, checkDarkLightMode) {
    this.btnDarkLightMode = document.querySelector(btnDarkLightMode);
    this.checkDarkLightMode = document.querySelector(checkDarkLightMode);
    this.temaUsuario = window.matchMedia("(prefers-color-scheme: dark)");
    this.temaSalvo = localStorage.getItem("temaUsuario");

    this.mudarTemaCheck = this.mudarTemaCheck.bind(this);
    this.detectarPreferenciaSistema =
      this.detectarPreferenciaSistema.bind(this);
  }

  ativarDesativarCheck(ativacao) {
    this.checkDarkLightMode.checked = ativacao;
  }

  removerAddClasse(ativacaoLigth, ativacaoDark) {
    const html = document.querySelector("html");
    html.classList[ativacaoLigth]("ligth");
    html.classList[ativacaoDark]("dark");
  }

  detectarPreferenciaSistema() {
    this.removerAddClasse("remove", "remove");
    this.ativarDesativarCheck(this.temaUsuario.matches);
  }

  mudarTemaCheck() {
    if (this.checkDarkLightMode.checked) {
      this.removerAddClasse("remove", "add");
    } else {
      this.removerAddClasse("add", "remove");
    }
  }

  addEventosTema() {
    this.temaUsuario.addEventListener(
      "change",
      this.detectarPreferenciaSistema
    );
    this.checkDarkLightMode.addEventListener("change", this.mudarTemaCheck);
  }

  init() {
    this.detectarPreferenciaSistema();
    this.addEventosTema();
  }
}
