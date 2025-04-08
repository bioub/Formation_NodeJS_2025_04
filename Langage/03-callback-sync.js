const names = ['Alice', 'Bob', 'Charlie'];

/**
 * Greet a user with a message.
 * @param {string} name The name of the user to greet.
 * @returns {string} A greeting message.
 */
function greet(name) {
  return `Hello, ${name}!`;
}

names
  .filter((n) => n.length > 3)
  .map((n) => n.toUpperCase())
  .forEach((n) => {
    console.log(greet(n));
  });

console.log('FIN');

// call stack
// ^
// |
// |
// |              [=>][=>][=>]
// |[forEach for {            } ] [=>]
// +-----------------------------------------------------------------> time
//                Ali   Bob Char   FIN
