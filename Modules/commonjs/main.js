const hello = require("./hello");
const MyMath = require("./my-math");
const chalk = require("chalk");

// On peut également importer un fichier JSON
// (pour être plus explicite ce serait mieux de spécifier l'extension .json)
const config = require("./config");

// On peut importer un dossier si le fichier index.js est présent
// (pour être plus explicite ce serait mieux de spécifier le fichier index.js)
const Functions = require("./functions");

// Le fichier du dossier lib peut être configuré
// à la clé main du package.json
const Lib = require("./lib");

// Le require d'un module ES6 (import) est possible
// depuis Node.js 23 (ajouté aussi dans la 22)
const RandomLib = require("./random-lib.mjs");

console.log(RandomLib.getRandomInt(1, 10)); // Affiche un nombre aléatoire entre 1 et 10

Lib.helloworld();
console.log(Functions.getRandom()); // Affiche un nombre aléatoire
console.log(chalk.red(hello(config.name)));
console.log(MyMath.sum(1, 2));
console.log(MyMath.multiply(2, 3));

// chemin absolu du fichier courant (ici main.js)
console.log(__filename);

// chemin absolu du dossier courant (ici commonjs)
console.log(__dirname);
