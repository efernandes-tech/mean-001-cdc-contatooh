// server.js

// Dependencia para subir o servidor.
var http = require('http');
var express = require('express');
// Modulo criado com as configuracoes.
var app = require('./config/express')();
// Inicializando a conexão.
require('./config/passport')();
require('./config/database')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express Server escutando na porta ' + app.get('port'));
});