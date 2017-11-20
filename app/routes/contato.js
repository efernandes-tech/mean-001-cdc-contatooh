// app/routes/contato.js

// var verificaAutenticacao = require('../../config/auth');

function verificaAutenticacao(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado');
    }
}

module.exports = function(app) {

	// Carrega o controller.
	var controller = app.controllers.contato;

	// Registra rota.
	// app.get('/contatos', controller.listaContatos);
	// app.post('/contatos', controller.salvaContato);
	app.route('/contatos')
		.get(verificaAutenticacao, controller.listaContatos)
		.post(verificaAutenticacao, controller.salvaContato);

	// Registra rota usando um curinga.
	// app.get('/contatos/:id', controller.obtemContato);
	// app.delete('/contatos/:id', controller.removeContato);
	app.route('/contatos/:id')
		.get(verificaAutenticacao, controller.obtemContato)
		.delete(verificaAutenticacao, controller.removeContato);
};
