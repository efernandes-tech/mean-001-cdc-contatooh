// public/js/controllers/ContatosController.js

// Criando o controller passando as dependencias.
angular.module('contatooh').controller('ContatosController', function($scope) {
	// Adicionando a propriedade que sera utilizada pela view.
	$scope.total = 0;

	// Funcao chamada por diretivas.
	$scope.incrementa = function() {
		$scope.total++;
	};

	$scope.contatos = [
		{
			"_id": 1,
			"nome": "Contato Angular 1",
			"email": "cont1@empresa.com.br"
		},
		{
			"_id": 2,
			"nome": "Contato Angular 2",
			"email": "cont2@empresa.com.br"
		},
		{
			"_id": 1,
			"nome": "Contato Angular 3",
			"email": "cont3@empresa.com.br"
		}
	];
});