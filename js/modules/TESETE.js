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
