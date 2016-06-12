// app/controllers/home.js

module.exports = function() {
	var controller = {};
	// Inseri no objeto a propriedade que recebe a requisicao e a resposta.
	controller.index = function(req, res) {
		// Retorna a pagina 'index.ejs' com os dados ja processados.
		res.render('index', {nome: 'Éderson'});
	}
	return controller;
}