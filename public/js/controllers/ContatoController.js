// public/js/controllers/ContatoController.js

angular.module('contatooh').controller('ContatoController', function($scope, $routeParams, $resource) {
		console.log($routeParams.contatoId);

		// Aqui continua no plura, e a rota no lado do servidor.
		var Contato = $resource('/contatos/:id');

		if ($routeParams.contatoId) {
			Contato.get(
				{id: $routeParams.contatoId},
				function(contato) {
					$scope.contato = contato;
				},
				function(erro) {
					$scope.mensagem = {
						texto: 'Não foi possível obter o contato.'
					};
					console.log(erro);
				}
			);
		} else {
			$scope.contato = {};
		}
});