import fs from 'node:fs';

// Enchainer 2 opérations
// - lire un fichier
// - écrire ce fichier ailleurs
// Ça pourrait être fait en une seule opération
// avec fs.copyFile ou fs.cp (récursif)

// Synchrone
// Avantage lisibilité :
// - pas d'effet de pyramide dans le code (pyramid of doom)
// - gestion centrale des erreurs
try {
  const buffer = fs.readFileSync('./.prettierrc');
  fs.writeFileSync('./.prettierrc.copy', buffer);
  console.log('File copied synchronously');
}
catch (err) {
  console.error('Error copying file synchronously:', err);
}
// call stack
// ^
// |
// |
// |    
// |[readFileSync    ][writeFileSync    ][log]
// +-----------------------------------------> time
//

// Asynchrone
// Avantage Performances :
// - pas de blocage du thread principal
fs.readFile('./.prettierrc', (err, buffer) => {
  if (err) {
    console.error('Error copying file synchronously:', err);
    return;
  }
  fs.writeFile('./.prettierrc.copy', buffer, (err) => {
    if (err) {
      console.error('Error copying file synchronously:', err);
      return;
    }
    console.log('File copied asynchronously');
  });
});

// call stack
// ^
// |
// |
// |                 [writeFile    ]       [log]
// |[readFile]⟳      [taskReadFile ]⟳      [taskWriteFile]
// +-----------------------------------------> time
//
