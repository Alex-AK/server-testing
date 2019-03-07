const express = require('express');
const server = express();

const userRouter = require('../user/user-routes');

server.use(express.json());
server.use('/api/user', userRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'working' });
});

module.exports = server;
