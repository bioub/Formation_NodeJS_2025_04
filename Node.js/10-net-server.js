import net from 'node:net';

const server = net.createServer((socket) => {
  console.log('Nouvelle connexion');
  socket.write('Bienvenue sur le serveur !\n');
  // Hello world serveur est souvent un echo
  // c'est à dire que le serveur renvoie
  // ce qu'il reçoit
  socket.pipe(socket);
});

server.on('error', (err) => {
  console.error('Erreur du serveur :', err);
});

server.listen(8080, () => {
  // Le callback est appelé lorsque le serveur
  // est prêt à accepter des connexions (event listening)
  console.log('Serveur en écoute sur le port 8080');
});

// Le paramètre de la fonction createServer
// est le connection listener c'est à dire
// le callback appelé sur l'événement connection :
// server.on('connection', (socket) => {
//   console.log('Nouvelle connexion');
//   socket.write('Bienvenue sur le serveur !\n');
//   socket.pipe(socket);
// });
