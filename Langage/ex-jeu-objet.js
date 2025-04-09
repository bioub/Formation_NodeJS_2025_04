// Exercice 1 :
// Créer un namespace object Random et y définir
// les 4 fonctions ci-dessous :
// Il faudra appeler la fonction getRandomInt :
// Random.getRandomInt(0, 100)
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

// Exercice 2
// Créer une classe Jeu
// Dans le constructeur, créer les 3 propriétés suivantes :
// rl, entierAlea, essais
// Créer une méthode jouer() qui contient le code de la fonction jouer() ci-dessus
// Il faudra appeler la méthode jouer() :
// const jeu = new Jeu();
// jeu.jouer();
// A ce stade le constructeur ne prend pas de paramètres

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const entierAlea = getRandomInt(0, 100);
const essais = [];
jouer();

// Exercice 3
// Modifier le constructeur de Jeu pour qu'il prenne
// un objet options en paramètre :
// constructor(options) { }
// Il faut que tous ces appels du contructeur
// fonctionnent :
// const jeu = new Jeu();
// const jeu = new Jeu({});
// const jeu = new Jeu({ min: 10, max: 20 });
// const jeu = new Jeu({ min: 10 });
// const jeu = new Jeu({ max: 20 });
// Prévoir des valeurs par défaut pour min et max (0 et 100)

// call stack
// ^
// |
// |                     [question]                 [question]
// |[question]           [jouer   ]                 [jouer   ]
// |[jouer   ] ⟳         [task    ] ⟳               [task    ] ⟳
// +---------------------20ENTREE-------------------40ENTREE--> time
//
