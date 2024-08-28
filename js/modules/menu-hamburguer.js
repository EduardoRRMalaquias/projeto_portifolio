export default function initMenuHamburguer() {
  // Menu Hamburguer

  const menuHaburguer = document.querySelector(".menu-hamburguer");
  const nav = document.querySelector("nav");

  function abrirFecharMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    nav.classList.toggle("visivel");
    const ativo = nav.classList.contains("visivel");
    event.currentTarget.setAttribute("aria-expanded", ativo);
    if (ativo) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
  }

  menuHaburguer.addEventListener("click", abrirFecharMenu);
  menuHaburguer.addEventListener("touchstart", abrirFecharMenu);
}
