// app/controller/contato.js

var contatos = [
	{_id: 1, nome: 'Contato Exemplo 1', email: 'cont1@empresa.com.br'},
	{_id: 2, nome: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
	{_id: 3, nome: 'Contato Exemplo 3', email: 'cont3@empresa.com.br'},
];

module.exports = function() {
	var controller = {};

	controller.listaContatos = function(req, res) {
		// Retorna os dados no formato JSON.
		res.json(contatos);
	};

	controller.obtemContato = function(req, res) {
		// Armazena o parametro passado pelo curinga.
		var idContato = req.params.id;

		// Busca o contato na lista de contatos.
		var contato = contatos.filter(function(contato) {
			return contato._id == idContato;
		})[0];

		// Retorna o contato encontrado ou retorna a msg.
		contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
	};

	controller.removeContato = function(req, res) {

		var idContato = req.params.id;

		console.log('API: removeContato: ' + idContato);

		contatos = contatos.filter(function(contato) {
			return contato._id != idContato;
		});
		res.send(204).end();
	};

	return controller;
};