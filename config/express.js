// config/express.js

var config = require('./config')();

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
// https://github.com/evilpacket/helmet
var helmet = require('helmet');

// Objeto disponivel implicitamente em cada modulo.
module.exports = function() {
	// Quando chamado retorna uma instancia do modulo armazenado.
	var app = express();

	// Define variavel de ambiente (chave, valor).
	app.set('port', config.port);

	// Configuracao do template.

	// Define o 'ejs' como template utilizado.
	app.set('view engine', 'ejs');
	// Define o diretorio que contera as views.
	app.set('views', './app/views');

	// Middlewares.
	app.use(express.static('./public'));

	// Middlewares 'body-parser' e 'method-override'.
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

	app.use(cookieParser());
	app.use(session({
		secret: 'Jessi',
		resave: true,
		saveUninitialized: true
	}));
	app.use(passport.initialize());
	app.use(passport.session());

	// app.use(helmet());

	app.use(helmet.xframe());

	app.use(helmet.xssFilter());

	app.use(helmet.nosniff());

	app.use(helmet.ienoopen());

	app.disable('x-powered-by');
	// ou.
	// app.use(helmet.hidePoweredBy({ setTo: 'PHP 5.5.14' }));

	// Inicia o modulo com as rotas (DEPRECATED - Agora usando 'express-load').
	// home(app);

	// O load() carrega todos os scripts dentro de 'app/models', 'app/controllers' e 'app/routes' seguindo a ordem correta 'model -> controller -> route'.
	// O 'cwd' foi necessario pois por padrao os diretorios sao procurados na raiz.
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes/auth.js')
		.then('routes')
		.into(app);

	// Se nenhum rota atender, direciona para página 404.
	app.get('*', function(req, res) {
		res.status(404).render('404');
	});

	return app;
};
