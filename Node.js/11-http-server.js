// server.mjs
import { createServer } from 'node:http';

// Exemple de Requete HTTP
// GET /index.html HTTP/1.1
// Host: localhost:3000
// User-Agent: curl/7.64.1

// POST /subscribe HTTP/1.1
// Host: localhost:3000
// User-Agent: curl/7.64.1
// Content-Type: application/json
// Content-Length: 38
//
// {"email": "romain.bohdanowicz@formation.tech"}

// Exemple réponse HTTP
// HTTP/1.1 200 OK
// Content-Type: text/plain
// Content-Length: 13
//
// Hello World!\n

// Réponse HTML
// HTTP/1.1 200 OK
// Content-Type: text/html
// Content-Length: 13
//
// <html>
// <head>...

// Réponse JSON
// HTTP/1.1 200 OK
// Content-Type: application/json
// Content-Length: 38
//
// {"data": "Hello World!"}

const server = createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h2>Home page!</h2>\n');
  } else if (req.url === '/api/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ data: 'Hello World!' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.on('error', (err) => {
  console.error('Erreur du serveur :', err);
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
// run with `node --watch 11-http-server.js`
