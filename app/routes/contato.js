// app/routes/contato.js

module.exports = function(app) {

	// Carrega o controller.
	var controller = app.controllers.contato;

	// Registra rota.
	// app.get('/contatos', controller.listaContatos);
	// app.post('/contatos', controller.salvaContato);
	app.route('/contatos')
		.get(controller.listaContatos)
		.post(controller.salvaContato);

	// Registra rota usando um curinga.
	// app.get('/contatos/:id', controller.obtemContato);
	// app.delete('/contatos/:id', controller.removeContato);
	app.route('/contatos/:id')
		.get(controller.obtemContato)
		.delete(controller.removeContato);
};