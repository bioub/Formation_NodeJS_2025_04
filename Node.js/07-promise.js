// Promise
// Un API apparu d'abord sous forme de bibliothèques (Q, Bluebird, etc.)
// Puis intégré dans le langage en 2015 (ES6)
// Un objet qui représente la valeur d'une opération asynchrone
// il a 3 états :
// - pending (en attente)
// - fulfilled (réussie)
// - rejected (échouée)

// La plupart du temps, on ne va pas utiliser les promesses directement
// Mais utiliser des APIs qui les retournent
// Comme par exemple fs/promises

import fs from 'node:fs/promises';

// La promesse norme l'API asynchrone
// .then(callbackSuccess)
// .catch(callbackError)

// Exemple avec toujours le callback hell
// Toujours le même problème de pyramide
// et de gestion des erreurs dupliquée
// fs.readFile('./.prettierrc')
//   .then((buffer) => {
//     fs.writeFile('./.prettierrc.copy', buffer)
//       .then(() => {
//         console.log('File copied with promises');
//       })
//       .catch((err) => {
//         console.error('Error', err);
//       });
//   })
//   .catch((err) => {
//     console.error('Error', err);
//   });

// Astuce pour résoudre le problème de pyramide
// Si vous êtes dans le callback d'une promesse
// (.then ou .catch) et que vous retournez une promesse à nouveau
// le .then ou .catch suivant (non-imbriqué) portera sur la promesse
// retournée

// Plus de pyramide et une gestion des erreurs centralisée
fs.readFile('./.prettierrc')
  .then((buffer) => {
    return fs.writeFile('./.prettierrc.copy', buffer)
  })
  .then(() => {
    console.log('File copied with promises');
  })
  .catch((err) => {
    console.error('Error', err);
  });
