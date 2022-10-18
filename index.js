const dotenv = require('dotenv');
dotenv.config();

const Server=require('./app/models/server');
const server = new Server();

server.listen();

//Arrancar api: npm run serve