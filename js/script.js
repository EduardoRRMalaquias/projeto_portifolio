import VisibilidadeMenu from "./modules/visibilidade-menu.js";
import LinkMenuAtivo from "./modules/link-menu-ativo.js";
import MenuHamburguer from "./modules/menu-hamburguer.js";
import CopyArea from "./modules/copy-area.js";
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
menuHamburguer.init();

const linksMenuAtivo = new LinkMenuAtivo("[data-link]", "[data-secao]");
linksMenuAtivo.init();

const copyArea = new CopyArea("[data-copyarea]");
copyArea.init()

initAccordionDiferenciais();
