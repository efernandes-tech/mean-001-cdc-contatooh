// public/js/controllers/ContatosController.js

// Criando o controller passando as dependencias.
angular.module('contatooh').controller('ContatosController', function($scope) {
	// Adicionando a propriedade que sera utilizada pela view.
	$scope.total = 0;

	// Funcao chamada por diretivas.
	$scope.incrementa = function() {
		$scope.total++;
	};
});