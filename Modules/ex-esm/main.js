// Importer Jeu en ESM
// (penser à faire d'ESM le type de module dans package.json)

import Jeu from "./jeu.js";

const jeu = new Jeu();
jeu.jouer();