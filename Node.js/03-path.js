import path from 'node:path';

console.log(path.basename('C:/Users/benja/Documents/Dev/NodeJS/NodeJS-2023/03-path.js')); // Nom du fichier (03-path.js)
console.log(path.dirname('C:/Users/benja/Documents/Dev/NodeJS/NodeJS-2023/03-path.js')); // Répertoire du fichier (C:/Users/benja/Documents/Dev/NodeJS/NodeJS-2023)
console.log(path.extname('C:/Users/benja/Documents/Dev/NodeJS/NodeJS-2023/03-path.js')); // Extension du fichier (.js)

console.log(path.parse('C:/Users/benja/Documents/Dev/NodeJS/NodeJS-2023/03-path.js')); // Objet avec les informations du fichier

console.log(path.join('..', 'Node.js', '03-path.js')); // Chemin relatif du fichier
console.log(path.resolve('..', 'Node.js', '03-path.js')); // Chemin absolu du fichier par rapport au répertoire de travail

console.log(path.join(import.meta.dirname, '..', 'Node.js', '03-path.js')); // Chemin relatif du fichier
console.log(path.resolve(import.meta.dirname, '..', 'Node.js', '03-path.js')); // Chemin absolu du fichier par rapport au répertoire de travail
