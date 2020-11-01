const mongoose = require('mongoose');
const requireDir = require('require-dir');
requireDir('../models');

const Register = mongoose.model('Register');

async function createSchedule (req, res) {
    try {
        await Register.create(req.body);
        console.log('dados adiionados com sucesso! dados:', req.body);
        return res.render('index.html');
    } catch (error) {
        console.log(error);
    };
};

module.exports = {
    createSchedule
};