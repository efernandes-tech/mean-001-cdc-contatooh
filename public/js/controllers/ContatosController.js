// public/js/controllers/ContatosController.js

// Criando o controller passando as dependencias.
angular.module('contatooh').controller('ContatosController', function(Contato, $scope) {
	// Iniciando as propriedades que serao utilizadas pela view.
	$scope.contatos = [];
	$scope.filtro = '';
	$scope.mensagem = {texto: ''};

	// O '$resource' um objeto com funcoes proprias para REST.
	// var Contato = $resource('/contatos/:id');

	function buscaContatos() {
		// Realiza uma requisicao GET por baixo dos panos.
		Contato.query(
			function(contatos) {
				$scope.contatos = contatos;
				$scope.mensagem = {};
			},
			function(erro) {
				console.log(erro);
				$scope.mensagem =  {
					texto: 'Não foi possível obter a lista de contatos.'
				};
			}
		);
	}

	// Definindo o que e executado na inicializacao do controller.
	// $scope.init = function() {
		buscaContatos();
		// ...
	// };

	// $scope.init();

	$scope.remove = function(contato) {
		Contato.delete(
			{id: contato._id},
			buscaContatos,
			function(erro) {
				$scope.mensagem = {
					texto: 'Não foi possível remover o contato.'
				};
				console.log(erro);
			}
		);
	};

	/*// Realiza uma requisicao GET por baixo dos panos.
	var promise = Contato.query().$promise;

	promise
		.then(function(contatos) {
			$scope.contatos = contatos;
		})
		.catch(function(erro) {
			console.log('Não foi possível obter a lista de contatos');
			console.log(erro);
		});*/

	/*// O '$http' e diferente do '$.ajax()' do jQuery, ele retorna uma 'promise'.
	// A 'promise' (promessa) e um objeto que fornecera um resultado futuro.
	// Dessa forma vc evita o 'Callback HELL' e a 'Pyramid Of Doom'.
	$http.get('/contatos')
		// Executado quando 'fulfilled'.
		.success(function(data) {
			$scope.contatos = data;
		})
		// Executado quando 'rejected' ou 'failed'.
		.error(function(statusText) {
			console.log('Não foi possível obter a lista de contatos.');
			console.log(statusText);
		});*/

	/*$scope.total = 0;

	Funcao chamada por diretivas.
	$scope.incrementa = function() {
		$scope.total++;
	};*/
});
