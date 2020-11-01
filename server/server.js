const express = require('express');
const server = express();
const routes = require('./src/routes.js');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

server.use(express.json());
server.use(bodyparser.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/scheduledata', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
    
server.use(routes);
server.listen(3003, console.log('Servidor rodando na porta 3003'));