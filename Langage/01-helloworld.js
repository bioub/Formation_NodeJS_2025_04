const names = ['Alice', 'Bob', 'Charlie'];

function greet(name) {
  return `Hello, ${name}!`;
}

for (const n of names) {
  console.log(greet(n));
}
