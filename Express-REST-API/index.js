import { createServer } from 'http';
import { connect } from 'mongoose';

import config from './config/index.js';
import app from './app.js';

connect('mongodb://127.0.0.1:27017/test');

const server = createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(config.port, () => {
  console.log('Server started on port ' + config.port);
});
