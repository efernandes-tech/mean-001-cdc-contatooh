// public/js/main.js

// O objeto 'angular' é disponibilizado globalmente.
// Assim é possivel criar o modulo passando um array com as dependencias.
angular.module('contatooh', ['ngRoute', 'ngResource'])

	.config(function($routeProvider) {

		// Redireciona caso a rota acessada não exista.
		$routeProvider.otherwise({redirectTo: '/contatos'});

		// Funcao do ngRoute que define o template e o controller para a rota.
		$routeProvider.when('/contatos', {
			templateUrl: 'partials/contatos.html',
			controller: 'ContatosController'
		});

		// Rota que recebe um curinga.
		$routeProvider.when('/contato/:contatoId', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController'
		});

	});