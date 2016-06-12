// config/express.js

// O require() carrega o modulo (armazenando uma funcao). 
var express = require('express');

// Objeto disponivel implicitamente em cada modulo.
module.exports = function() {
	// Quando chamado retorna uma instancia do modulo armazenado.
	var app = express();
	return app;
}