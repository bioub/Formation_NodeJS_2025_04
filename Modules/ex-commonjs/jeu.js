// Importer Random.getRandomInt en CommonJS
// Et exporter Jeu
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