// app/controllers/contato.js

var sanitize = require('mongo-sanitize');

module.exports = function(app) {
	var Contato = app.models.Contato;

	var controller = {};

	controller.listaTodos = function(req, res) {
		// Usa a funcao "find" herdada do obj do mongoose.
		Contato.find().populate('emergencia').exec()
		.then(
			function(contatos) {
				res.json(contatos);
			},
			function(erro) {
				console.error(erro)
				res.status(500).json(erro);
			}
		);
	};

	controller.obtemContato = function(req, res) {
		console.log('Id do contato' + req.params.id);
		var _id = req.params.id;
		Contato.findById(_id).exec()
			.then(
				function(contato) {
					if (!contato)
                        throw new Error("Contato não encontrado!");
					res.json(contato)
				},
				function(erro) {
					console.log(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.removeContato = function(req, res) {
		console.log('API: removeContato: ' + req.params.id);	
		var _id = sanitize(req.params.id);
		Contato.remove({"_id" : _id}).exec()
			.then(
				function() {
					res.status(204).end();
				},
				function(erro) {
					return console.error(erro);
				}
			);
	};

/*
	controller.salvaContato = function(req, res) {
		var _id = req.body._id;
		console.log('chamou salvaContato')
		if(_id) {
			var promise = Contato.findOne({ "_id": _id }).exec();
			promise.then(function(contato) {
				if(!contato) throw "Contato não encontrado"
				contato.email = req.body.email;
				contato.nome = req.body.nome;
				contato.save(function(erro, contatoAtualizado) {
					if(erro) {
						res.status(304).json(erro);
						return console.log(erro);
					}	
					console.log("deu pau?" + contatoAtualizado);		
					res.json(contatoAtualizado);	
				});
			}, function(erro) {
				console.log(erro);
				res.status(404).json(erro);
			});
		} else {
			new Contato(req.body).save(function(erro, contato) {
			  	if (erro) {
			  		res.status(500).json(erro);
			  		return console.error(erro);
			  	}
			  	console.log('novo: ' + contato)
			  	res.json(contato);
			});
		}
	};
    // Create é do model e retorna uma promisse, save é do model e não retorna uma promise.
*/

	controller.salvaContato = function(req, res) {
		var _id = req.body._id;

		/*
		Independente da quantidade de parâmetros,
		apenas selecionamos o nome, email e emergencia:
		*/
		var dados = {
			"nome" : req.body.nome,
			"email" : req.body.email,
			"emergencia" : req.body.emergencia || null // Testando por undefined.
		};

		if(_id) { // Editar.
			Contato.findByIdAndUpdate(_id, dados).exec()
				.then(
					function(contato) {
						res.json(contato);
					},
					function(erro) {
						console.error(erro);
						res.status(500).json(erro);
					}
				);
		} else { // Cadastra.
			Contato.create(dados)
				.then(
					function(contato) {
						res.status(201).json(contato);
					},
					function(erro) {
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};

	return controller;
};
