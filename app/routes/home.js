// app/routes/home.js

// DEPRECATED - Agora usando 'express-load'.
// var controller = require('../controllers/home')();

module.exports = function(app) {

	// Carrega o controller.
	var controller = app.controllers.home;

	// Registra a rota.
	app.get('/', controller.index);
	app.get('/index', controller.index);
}