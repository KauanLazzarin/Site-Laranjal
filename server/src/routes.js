const express = require('express');
const server = express();
const controller = require('../controllers/register-controller.js');
const nunjucks = require('nunjucks');

server.use('/public', express.static('public'));

nunjucks.configure('pages', {
    autoescape: true,
    express: server
});

server.get('/', (req, res) => {
    return res.render('index.html');
});

server.get('/contact', (req, res) => {
    return res.render('contact.html');
});

server.get('/about', (req, res) => {
    return res.render('about.html');
});

server.post('/contact', controller.createSchedule);

module.exports = server