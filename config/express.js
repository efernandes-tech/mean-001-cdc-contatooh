// config/express.js

// O require() carrega o modulo (armazenando uma funcao).
var express = require('express');

// Carrega o modulo com as rotas (DEPRECATED - Agora usando 'express-load').
// var home = require('../app/routes/home');

// Carrega o modulo que carrega as dependencias.
var load = require('express-load');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

// Objeto disponivel implicitamente em cada modulo.
module.exports = function() {
	// Quando chamado retorna uma instancia do modulo armazenado.
	var app = express();

	app.use(cookieParser());
	app.use(session({
		secret: 'jessi gorda',
		resave: true,
		saveUninitialized: true
	}));
	app.use(passport.initialize());
	app.use(passport.session());

	// Define variavel de ambiente (chave, valor).
	app.set('port', 3000);

	// Middlewares.
	app.use(express.static('./public'));

	// Middlewares 'body-parser' e 'method-override'.
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

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
		.then('routes/auth.js')
		.then('routes')
		.into(app);

	return app;
}