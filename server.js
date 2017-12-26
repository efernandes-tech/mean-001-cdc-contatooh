// server.js

var config = require('./config/config')();
// Dependencia para subir o servidor.
var http = require('http');
var express = require('express');
// Modulo criado com as configuracoes.
var app = require('./config/express')();
// Inicializando a conexão.
require('./config/passport')();
require('./config/database')(config.db);

http.createServer(app).listen(config.port, config.address, function(){
	console.log('Express Https Server '
        + config.address
        + ' (' + config.env
        + ') escutando na porta ' + config.port);
});
