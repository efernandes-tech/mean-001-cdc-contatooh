// public/js/controllers/ContatosController.js

// Criando o controller passando as dependencias.
angular.module('contatooh').controller('ContatosController', function($scope, $resource) { // ... $scope, $http) {
	// Iniciando as propriedades que serao utilizadas pela view.
	$scope.contatos = [];
	$scope.filtro = '';

	// O '$resource' um objeto com funcoes proprias para REST.
	var Contato = $resource('/contatos');

	function buscaContatos() {
		// Realiza uma requisicao GET por baixo dos panos.
		Contato.query(
			function(contatos) {
				$scope.contatos = contatos;
			},
			function(erro) {
				console.log('Não foi possível obter a lista de contatos');
				console.log(erro);
			}
		);
	}

	buscaContatos();

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