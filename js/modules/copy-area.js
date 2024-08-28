export default function initCopyArea() {
  if (window.ClipboardJS) {
    new ClipboardJS(".copy-area");
  }

  // copy area

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
}
