// config/express.js

// O require() carrega o modulo (armazenando uma funcao).
var express = require('express');

// Objeto disponivel implicitamente em cada modulo.
module.exports = function() {
	// Quando chamado retorna uma instancia do modulo armazenado.
	var app = express();

	// Define variavel de ambiente (chave, valor).
	app.set('port', 3000);

	// Middleware.
	app.use(express.static('./public'));

	// Configuracao do template.

	// Define o 'ejs' como template utilizado.
	app.set('view engine', 'ejs');
	// Define o diretorio que contera as views.
	app.set('views', './app/views');

	return app;
}