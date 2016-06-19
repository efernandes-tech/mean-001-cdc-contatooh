// app/routes/contato.js

module.exports = function(app) {

	// Carrega o controller.
	var controller = app.controllers.contato;

	// Registra a rota.
	app.get('/contatos', controller.listaContatos);
};