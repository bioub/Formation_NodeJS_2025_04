import hello from './hello.js';
import { multiply, sum as add } from './my-math.js';
import * as Random from './lib.cjs'

console.log(hello('World'));
console.log(add(1, 2));
console.log(multiply(2, 3));
console.log(Random.getRandomInt(0, 10));

// chemin absolu du fichier courant (ici main.js)
console.log(import.meta.filename);

// chemin absolu du dossier courant (ici commonjs)
console.log(import.meta.dirname);

// ATTENTION à date (Node.js 23.11.0)
// import.meta.filename et import.meta.dirname 
// sont encore en phase expérimentale (release candidate)
// il existe un risque que ces propriétés soient supprimées ou modifiées à l'avenir