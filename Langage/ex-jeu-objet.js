// Exercice 1 :
// Créer un namespace object Random et y définir
// les 4 fonctions ci-dessous :
// Il faudra appeler la fonction getRandomInt :
// Random.getRandomInt(0, 100)
const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  },
};

const readline = require('node:readline');

class Jeu {
  constructor(options = {}) {
    // Nullish coalescing operator
    const min = options.min ?? 0;
    const max = options.max ?? 100;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Random.getRandomInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà essayé : ' + this.essais.join(', '));
    }
    this.rl.question('Saisissez un nombre entre 0 et 100 : ', (saisie) => {
      console.log('Vous avez saisi :', saisie);

      const entierSaisi = Number.parseInt(saisie, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log("Ce n'est pas un nombre !");
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit !');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand !');
        this.jouer();
      } else {
        console.log('Bravo ! Vous avez trouvé le nombre !');
        this.rl.close();
      }
    });
  }
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


const jeu = new Jeu();
jeu.jouer();

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
