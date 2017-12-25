// public/js/directives/meus-componentes/meus-componentes.js

angular.module('meusComponentes', [])
.directive('meuPainel', function() {
    var directive = {};

    directive.restrict = "EA";

    directive.template =
    '<div class="panel panel-default">' +
        '<div class="panel-heading">' +
            '<h3 class="panel-title">{{titulo}}</h3>' +
        '</div>' +
        '<div class="panel-body">' +
        '</div>' +
    '</div>';

    return directive;
});