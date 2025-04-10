import express from 'express';

const app = express();

// Middleware
app.use(express.json()); // pour parser le corps de la requête en JSON

// app.use match toutes les requêtes HTTP
// app.use((req, res) => {
//   if (req.url === '/' && req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('<h2>Home page!</h2>\n');
//   } else if (req.url === '/api/users' && req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ data: 'Hello World!' }));
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 Not Found\n');
//   }
// });

// on peut également spécifier un préfixe
// ici /api match toutes les requêtes qui commencent par /api
// app.use('/api', (req, res) => {});

// all toutes les méthodes HTTP
// d'une URL fixe
// Ex : URL /api/users n'importe quelle méthode HTTP
// app.all('/api/users', (req, res) => {
//   // res.writeHead(200, { 'Content-Type': 'application/json' });
//   // res.end(JSON.stringify({ data: 'Hello World!' }));
//   res.json({ data: 'Hello World!' });
// });

// app.METHODE_HTTP
// Ex: URL / et METHOD GET
app.get('/api/users', (req, res) => {
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.end(JSON.stringify({ data: 'Hello World!' }));
    res.json({ data: 'Hello World!' });
  });

app.get('/', (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.end('<h2>Home page!</h2>\n');
  res.send('<h2>Home page!</h2>');
});

app.get('/hello/:username', (req, res) => {
  // req.params contient les paramètres d'URL
  // req.query contient les paramètres de requête
  console.log(req.params);
  console.log(req.query); // ?name=Romain&age=30 (ce qui suit le ? dans l'URL)
  res.send(`Hello ${req.params.username}`);
});

app.post('/api/users', (req, res) => {
  // req.body contient le corps de la requête
  console.log(req.body);

  res.json({msg: 'User created!'});
});

// On a déjà un 404 par défaut

// starts a simple http server locally on port 3000
app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
// run with `node --watch 12-express-server.js`
