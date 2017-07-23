// app/models/contato.js
var mongoose = require('mongoose');

module.exports = function() {
    // Criando o esquema, onde atributos só aceitam string e são obrigatorios.
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        }
    });
};