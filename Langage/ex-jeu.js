const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function jouer() {
  rl.question('Saisissez un nombre entre 0 et 100 ', (saisie) => {
    console.log('Vous avez saisi :', saisie);

    // Rejouer
    jouer();

    // Quitter la partie
    // rl.close();
  });
}

jouer();

// call stack
// ^
// |
// |                     [question]                 [question]
// |[question]           [jouer   ]                 [jouer   ]
// |[jouer   ] ⟳         [task    ] ⟳               [task    ] ⟳
// +---------------------20ENTREE-------------------40ENTREE--> time
//
