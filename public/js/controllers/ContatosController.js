// public/js/controllers/ContatosController.js

// Criando o controller passando as dependencias.
angular.module('contatooh').controller('ContatosController', function($scope, $http) {
	// Iniciando as propriedades que serao utilizadas pela view.
	$scope.contatos = [];
	// $scope.total = 0;
	$scope.filtro = '';

	// Funcao chamada por diretivas.
	// $scope.incrementa = function() {
	// 	$scope.total++;
	// };

	// O '$http' e diferente do '$.ajax()' do jQuery, ele retorna uma 'promise'.
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
		});
});