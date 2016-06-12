// config/express.js

// O require() carrega o modulo (armazenando uma funcao).
var express = require('express');

// Carrega o modulo com as rotas (DEPRECATED - Agora usando 'express-load').
// var home = require('../app/routes/home');

// Carrega o modulo que carrega as dependencias.
var load = require('express-load');

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

	// Inicia o modulo com as rotas (DEPRECATED - Agora usando 'express-load').
	// home(app);

	// O load() carrega todos os scripts dentro de 'app/models', 'app/controllers' e 'app/routes' seguindo a ordem correta 'model -> controller -> route'.
	// O 'cwd' foi necessario pois por padrao os diretorios sao procurados na raiz.
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
}