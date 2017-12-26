// public/js/main.js

// O objeto 'angular' é disponibilizado globalmente.
// Assim é possivel criar o modulo passando um array com as dependencias.
angular.module('contatooh', ['ngRoute', 'ngResource', 'meusComponentes'])
.config(function($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('meuInterceptor');

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

	// Rota aux.
	$routeProvider.when('/contato', {
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController'
	});

    $routeProvider.when('/auth', {
        templateUrl: 'partials/auth.html'
    });

	// Redireciona caso a rota acessada não exista.
	$routeProvider.otherwise({redirectTo: '/contatos'});

}).run(function ($rootScope, $location) { //Insert in the function definition the dependencies you need.
    //Do your $on in here, like this:
    $rootScope.$on("$routeChangeStart",function(event, next, current){
        //Do your things
        if(next.templateUrl) {
            ga('send', 'pageview', { page: next.templateUrl });
          __insp.push([next.templateUrl]);
        }
    });
});