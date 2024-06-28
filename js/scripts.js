//visibilidade do menu
const header = document.querySelector("header");
let orientacaoRolagem = 0;

window.addEventListener("scroll", visibilidadeMenu, { passive: true });

// alternar a visibilidade do menu de acordo com scroll
function visibilidadeMenu() {
  var { scrollY } = window;
  if (scrollY > orientacaoRolagem) {
    // Rolagem para baixo
    header.classList.remove("visivel");
    nav.classList.remove("ativo");

    const ativo = nav.classList.contains("ativo");
    menuHaburguer.setAttribute("aria-expanded", ativo);
    if (!ativo) {
      menuHaburguer.setAttribute("aria-label", "Abrir Menu");
    }
  } else if (scrollY < orientacaoRolagem) {
    // Rolagem para cima
    header.classList.add("visivel");
  } // previnir de rolagem lateral
  orientacaoRolagem = scrollY <= 0 ? 0 : scrollY;
}

// Menu ativo
let links = document.querySelectorAll(".menu-link");
let secoes = document.querySelectorAll(".secao");

window.addEventListener("scroll", linksMenuAtivo);

function linksMenuAtivo() {
  secoes.forEach(capturarSecoes);

  function capturarSecoes(secao) {
    let topo = window.scrollY;
    let topoSecao = secao.offsetTop - 90;
    let alturaSecao = secao.offsetHeight;
    let idSecao = secao.getAttribute("id");

    if (topo >= topoSecao && topo < topoSecao + alturaSecao) {
      links.forEach(ativarDesativarMenu);
    }
    function ativarDesativarMenu(link) {
      link.classList.remove("ativo");
      document
        .querySelector(`.menu-link[href*='${idSecao}']`)
        .classList.add("ativo");
    }
  }
}

// Menu Hamburguer

const menuHaburguer = document.querySelector(".menu-hamburguer");
const nav = document.querySelector("nav");

function abrirFecharMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  nav.classList.toggle("ativo");
  const ativo = nav.classList.contains("ativo");
  event.currentTarget.setAttribute("aria-expanded", ativo);
  if (ativo) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

menuHaburguer.addEventListener("click", abrirFecharMenu);
menuHaburguer.addEventListener("touchstart", abrirFecharMenu);

// copy area
if (window.ClipboardJS) {
  new ClipboardJS(".copy-area");
}
const copyAreas = document.querySelectorAll(".copy-area");

function eventoCopia(copyArea) {
  copyArea.addEventListener("click", confirmarCopia);

  function confirmarCopia() {
    copyArea.classList.add("copiado");
    setTimeout(removerConfirmacao, 2000);

    function removerConfirmacao() {
      copyArea.classList.remove("copiado");
    }
  }
}
copyAreas.forEach(eventoCopia);

// modo claro e escuro

const html = document.querySelector("html");
const metaTheme = document.querySelector("meta[name=theme-color]");
const isPreferredThemeDark = window.matchMedia("(prefers-color-scheme: dark)");
const userTheme = localStorage.getItem("userTheme");
const themes = {
  light: {
    background: "#FDFDFD",
    background_alt: "rgba(218, 214, 214, 0.3)",
    text: "#25262a",
  },
  dark: {
    background: "#25262a",
    background_alt: "rgba(218, 214, 214, 0.1)",
    text: "#FFFFFF",
  },
};

// Change colors
function changeColors(theme) {
  const themeColors = themes[theme];

  Object.keys(themeColors).map(function (key) {
    html.style.setProperty(`--${key}`, themeColors[key]);
  });

  metaTheme.setAttribute("content", themeColors["background"]);
}

// Set Theme
function setTheme(theme) {
  changeColors(theme);
  window.__userTheme = theme;
  localStorage.setItem("userTheme", theme);
}

// Change event when user change theme in the OS
isPreferredThemeDark.addListener(function (event) {
  setTheme(event.matches ? "dark" : "light");
  themeToggle.checked = event.matches;
});

// Se existe um tema salvo, seta esse tema, caso contrário, pega o tema do sistema do usuário
if (userTheme) {
  setTheme(userTheme);
} else {
  setTheme(isPreferredThemeDark.matches ? "dark" : "light");
}

const themeToggle = document.querySelector("input[name=theme]");

if (window.__userTheme === "dark") {
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", function ({ target }) {
  const theme = target.checked ? "dark" : "light";
  setTheme(theme);
});
