// app/routes/contato.js

module.exports = function(app) {

	// Carrega o controller.
	var controller = app.controllers.contato;

	// Registra a rota.
	app.get('/contatos', controller.listaContatos);
	// Registra a rota usando um curinga.
	app.get('/contatos/:id', controller.obtemContato);

	app.delete('/contatos/:id', controller.removeContato);
};