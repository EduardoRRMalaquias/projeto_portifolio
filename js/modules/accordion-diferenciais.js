export default function initAccordionDiferenciais() {
  // diferenciais

  const diferenciais = document.querySelectorAll(".diferencial-item button");

  function ativarDesativarDiferencial(event) {
    const diferencial = event.currentTarget;
    const controls = diferencial.getAttribute("aria-controls");
    const descricao = document.getElementById(controls);

    descricao.classList.toggle("ativo");
    const ativo = descricao.classList.contains("ativo");
    diferencial.setAttribute("aria-expanded", ativo);
  }

  function clickDiferenciais(diferencial) {
    diferencial.addEventListener("click", ativarDesativarDiferencial);
  }
  diferenciais.forEach(clickDiferenciais);
}
