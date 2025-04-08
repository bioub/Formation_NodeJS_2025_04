const names = ['Alice', 'Bob', 'Charlie'];

/**
 * Greet a user with a message.
 * @param {string} name The name of the user to greet.
 * @returns {string} A greeting message.
 */
function greet(name) {
  return `Hello, ${name.toUpperCase()}!`;
}

for (const n of names) {
  console.log(greet(n));
}
