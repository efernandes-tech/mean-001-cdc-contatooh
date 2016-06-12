// app/routes/home.js

var controller = require('../controllers/home')();

module.exports = function(app) {

	// Registra a rota.
	app.get('/', controller.index);
	app.get('/index', controller.index);
}