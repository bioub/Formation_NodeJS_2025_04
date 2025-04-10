import { Buffer } from 'node:buffer';

const buf1 = Buffer.from('Hello World'); // Crée un buffer à partir d'une chaîne de caractères
const buf2 = Buffer.from([65, 66, 67]); // Crée un buffer à partir d'un tableau d'octets

console.log(buf2.toString('utf-8')); // Convertit le buffer en chaîne de caractères (UTF-8)
console.log(buf2.toString('ascii')); // Convertit le buffer en chaîne de caractères (ASCII)
console.log(buf2.toString('latin1')); // Convertit le buffer en chaîne de caractères (Latin1)

const concatBuf = Buffer.concat([buf1, buf2]); // Concatène deux buffers
