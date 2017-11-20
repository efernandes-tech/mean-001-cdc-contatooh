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
        },
        emergencia: {
            type: mongoose.Schema.ObjectId,
            ref: 'Contato' // Autorelacionamento com model.
        }
    });

/*
    schema.pre('save', function(next) {
        console.log('chamou callback');
        var hoje = Date.now;
        this.alteracao = hoje;
        if(!this.inclusao) {
            this.inclusao = hoje;
        }
        console.log(this);
        next();
    });
*/

    return mongoose.model('Contato', schema);
};
