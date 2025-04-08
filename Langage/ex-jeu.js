function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà essayé : ' + essais.join(', '));
  }
  rl.question('Saisissez un nombre entre 0 et 100 : ', (saisie) => {
    console.log('Vous avez saisi :', saisie);

    const entierSaisi = Number.parseInt(saisie, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log("Ce n'est pas un nombre !");
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit !');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand !');
      jouer();
    } else {
      console.log('Bravo ! Vous avez trouvé le nombre !');
      rl.close();
    }
  });
}

const entierAlea = getRandomInt(0, 100);
const essais = [];
jouer();

// call stack
// ^
// |
// |                     [question]                 [question]
// |[question]           [jouer   ]                 [jouer   ]
// |[jouer   ] ⟳         [task    ] ⟳               [task    ] ⟳
// +---------------------20ENTREE-------------------40ENTREE--> time
//
