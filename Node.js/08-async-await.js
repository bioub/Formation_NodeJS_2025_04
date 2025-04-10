// Depuis ES2017, JavaScript a introduit les mots-clés async et await pour simplifier la gestion des promesses.
// Ces mots-clés permettent d'écrire du code asynchrone de manière plus lisible et séquentielle, en évitant la syntaxe de promesse imbriquée.
// Dit autrement on pourra écrire du code asynchrone comme du code synchrone (restera asynchrone et donc performant)

// Pour pouvoir utiliser async/await il faut déclarer une fonction
// (ça change en ES2022 avec Top-Level Await)

// try {
//   const buffer = fs.readFileSync('./.prettierrc');
//   fs.writeFileSync('./.prettierrc.copy', buffer);
//   console.log('File copied synchronously');
// }
// catch (err) {
//   console.error('Error copying file synchronously:', err);
// }
import fs from 'node:fs/promises';

async function copyFile() {
  try {
    const buffer = await fs.readFile('./.prettierrc');
    await fs.writeFile('./.prettierrc.copy', buffer);
    console.log('File copied with async/await');
  } catch (err) {
    console.error('Error', err);
  }
}

copyFile();

// Async / await : le meilleurs des deux mondes
// - lisibilité du code synchrone
// - performances du code asynchrone
// - gestion centralisée des erreurs
