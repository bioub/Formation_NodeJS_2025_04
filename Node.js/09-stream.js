// Les Streams de Node.js sont une abstraction d'une
// suite d'octets accessible en lecture ou écriture.
// Ils permettent de traiter des données de manière
// asynchrone et efficace, en évitant de charger
// l'intégralité des données en mémoire.
// Il existe 4 types de streams :
// - Readable : pour lire des données
// - Writable : pour écrire des données
// - Duplex : pour lire et écrire des données
// - Transform : pour modifier des données pendant
// la lecture ou l'écriture

// Les streams sont utilisés pour traiter des fichiers,
// des requêtes HTTP, des sockets, etc.

// Exemple de copie de fichier avec des streams
import fs from 'node:fs';
import zlib from 'node:zlib';

const rs = fs.createReadStream('./.prettierrc');

// .on est une méthode qui permet
// d'écouter les événements, équivalent à addEventListener
// dans le navigateur
rs.on('data', (chunk) => {
  console.log('Nouvelle donnée reçue :');
  console.log(chunk);
});

// .pipe est une méthode qui permet de
// rediriger les données d'un stream vers un autre

// Ça ressemble aux pipes sous Unix
// cat file.txt | gunzip > file.zip
// const ws = fs.createWriteStream('./.prettierrc.zip');
// const ts = zlib.createGzip();
// rs.pipe(ts).pipe(ws);

fs.createReadStream('./.prettierrc')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('./prettierrc.gz'))

// process.stdin, process.stdout et process.stderr
// sont des streams prédéfinis
// process.stdin est un stream readable
// process.stdout est un stream writable
// process.stderr est un stream writable
