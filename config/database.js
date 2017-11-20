// config/database.js
var mongoose = require('mongoose');

// Debug no console para todas as consultas.
mongoose.set('debug',true);

module.exports = function(uri) {
    // Para trabalhar com mais de um banco/conexão, use a função createConnection.
    mongoose.connect(uri, { server: { poolSize: 15 }});
    // Apresenta o status da conexão.
    mongoose.connection.on('connected', function() {
        console.log('Mongoose! Conectado em ' + uri);
    });
    mongoose.connection.on('error', function(erro) {
        console.log('Mongoose! Erro na conexão: ' + erro);
    });
    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose! Desconectado de ' + uri);
    });

    // Fechando a conexão.
    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Mongoose! Desconectado pelo término da aplicação');
            // 0 indica que a finalização ocorreu sem erros.
            process.exit(0);
        });
    });
}
