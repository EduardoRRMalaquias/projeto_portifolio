import VisibilidadeMenu from "./modules/visibilidade-menu.js";
import initLinkMenuAtivo from "./modules/link-menu-ativo.js";
import MenuHamburguer from "./modules/menu-hamburguer.js";
import initCopyArea from "./modules/copy-area.js";
import initAccordionDiferenciais from "./modules/accordion-diferenciais.js";

const classeAtivadora = "visivel";

const visibilidadeMenu = new VisibilidadeMenu(
  "[data-visibilidade]",
  classeAtivadora
);
visibilidadeMenu.init();

const menuHamburguer = new MenuHamburguer(
  '[data-menu="hamburguer"]',
  '[data-menu="navegacao"]',
  classeAtivadora
);
menuHamburguer.init()

initLinkMenuAtivo();
initCopyArea();
initAccordionDiferenciais();
