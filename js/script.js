import VisibilidadeMenu from "./modules/visibilidade-menu.js";
import LinkMenuAtivo from "./modules/link-menu-ativo.js";
import MenuHamburguer from "./modules/menu-hamburguer.js";
import CopyArea from "./modules/copy-area.js";
import Accordion from "./modules/accordion.js";
import Modal from "./modules/modal.js";
import AOS from "aos";
import DarkLigthMode from "./modules/modo-ligth-dark.js";

const darkLigthMode = new DarkLigthMode(
  '[data-ligth-dark-mode="botao"]',
  '[data-ligth-dark-mode="check"]'
);
darkLigthMode.init();

const classeAtivadoraHeader = "visivel";

const visibilidadeMenu = new VisibilidadeMenu(
  "[data-visibilidade]",
  classeAtivadoraHeader
);
visibilidadeMenu.init();

const menuHamburguer = new MenuHamburguer(
  '[data-menu="hamburguer"]',
  '[data-menu="navegacao"]',
  classeAtivadoraHeader
);
menuHamburguer.init();

const linksMenuAtivo = new LinkMenuAtivo("[data-link]", "[data-secao]");
linksMenuAtivo.init();

const copyArea = new CopyArea("[data-copyarea]");
copyArea.init();

const accordion = new Accordion('[data-accordion="button"]');
accordion.init();

const modal = new Modal(
  "[data-abrimodal]",
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

AOS.init();
