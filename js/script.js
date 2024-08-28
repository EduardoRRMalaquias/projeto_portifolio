import VisibilidadeMenu from "./modules/visibilidade-menu.js";
import initLinkMenuAtivo from "./modules/link-menu-ativo.js";
import initMenuHamburguer from "./modules/menu-hamburguer.js";
import initCopyArea from "./modules/copy-area.js";
import initAccordionDiferenciais from "./modules/accordion-diferenciais.js";

const visibilidadeMenu = new VisibilidadeMenu("[data-visibilidade]");
visibilidadeMenu.init();

initLinkMenuAtivo();
initMenuHamburguer();
initCopyArea();
initAccordionDiferenciais();
