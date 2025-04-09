// En JS, on manipule souvent des objets existants

// Qui peuvent être définis par le langage :
// Ex:
console.log(Math.PI); // 3.141592653589793
console.log(Math.sqrt(16)); // 4
console.log(JSON.stringify({ x: 1 })); // {"x":1}
console.log("abc".toUpperCase()); // ABC
console.log([].filter((x) => x > 0)); // []

// Ou par la plateforme

// Ex dans Node.js :
console.log(process.version); // v18.16.0
console.log(typeof console); // object
console.log(typeof global); // object
console.log(typeof module); // object

// Ex dans le navigateur :
console.log(typeof window); // undefined
console.log(typeof document); // undefined

// Il existe 2 syntaxes pour accéder au contenu d'un objet :
// 1. La notation par point :
console.log(Math.PI); // 3.141592653589793

// 2. La notation par crochets :
console['log'](Math['PI']); // 3.141592653589793

// La syntaxe avec les crochets est plus dynamique, car elle permet d'accéder à des propriétés dont le nom est stocké dans une variable ou qui contiennent des caractères spéciaux (comme des espaces ou des tirets). Par exemple :
const method = 'log';
const property = 'PI';
console[method](Math[property]); // 3.141592653589793

// Un objet est un système de clés/valeurs extensible.
// On peut ajouter ou supprimer des propriétés à tout moment.

console.log(Math.sum); // undefined

Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3
console.log(Math.sum); // [Function: sum]

// On peut aussi supprimer une propriété :
delete Math.sum;
console.log(Math.sum); // undefined

// MAUVAISE PRATIQUE
// Etendre un objet qu'on n'a pas défini (comme Math) est une mauvaise pratique.
// En effet, cela peut créer des conflits avec d'autres bibliothèques ou versions futures du langage.
// Il est préférable de créer un objet séparé pour vos propres fonctions utilitaires.

// Pour créer ses propres objets, on peut utiliser la syntaxe littérale d'objet :
const MyMath = {
  sum: (a, b) => a + b,
};

console.log(MyMath.sum(1, 2)); // 3

// Object literal
// A utiliser :
// - pour créer des namespaces objects (ex: MyMath, devenu une mauvaise pratique depuis peu)
// - pour créer des objets de configuration
// - pour créer des objets de type "dictionnaire" (ex: { 'key1': 'value1', 'key2': 'value2' })
// - pour créer des objets de type "enregistrement" (ex: { 'name': 'John', 'age': 30, 'city': 'New York' })
// Plus généralement des objets qui ne vont êtres créé qu'une fois
// ou s'ils sont créés plusieurs fois, qui ne contiennent pas de méthodes (fonctions)

const coordsA = {
  x: 1,
  y: 2,
  // compute() {}
};

const coordsB = {
  x: 3,
  y: 4,
  // compute() {}
};

// Pour les cas où on a besoin de créer plusieurs objets similaires avec des méthodes, on utilise les constructeurs.
// Un constructeur est une fonction qui crée un objet.
// Un constructeur permet d'identifier un type d'objet.

// On utilise la convention de nommer les constructeurs avec une majuscule au début.

// Exemple de constructeur :
// function User(name) {
//   this.name = name;
  // Déclarer une méthode dans le constructeur
  // n'est pas une bonne pratique, car cela crée une nouvelle méthode
  // pour chaque instance de l'objet.
  // Cela consomme de la mémoire et peut ralentir le programme.
  // Il est préférable de déclarer les méthodes sur le prototype de l'objet.
  // this.greet = function () {
  //   return `Hello, ${this.name}!`;
  // };
// }

// On peut aussi déclarer des méthodes sur le prototype de l'objet.
// Le prototype est un objet qui est partagé entre toutes les instances de l'objet.
// Cela permet de partager des méthodes entre toutes les instances de l'objet.
// User.prototype.greet = function () {
//   return `Hello, ${this.name}!`;
// };

// Depuis ES6, on peut aussi utiliser la syntaxe de classe pour créer des objets.
// class est du sucre syntaxique pour la syntaxe de constructeur.
// Cela permet de créer des objets de manière plus lisible et plus concise.
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}!`;
  }
}

console.log(typeof User); // function
console.log(typeof User.prototype); // object
console.log(typeof User.prototype.greet); // function


const user1 = new User('John');
delete user1.name; // Supprime la méthode greet de l'objet user
console.log(user1.greet()); // Hello, undefined!

const user2 = new User('Alice');
console.log(user2.greet());

console.log(user1.greet === user2.greet); // true

if (user1 instanceof User) {
  console.log('user est une instance de User');
}
