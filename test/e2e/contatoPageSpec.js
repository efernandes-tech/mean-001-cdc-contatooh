// test/e2e/contatoPageSpec.js

describe('Cadastro de contatos', function() {
    beforeEach(function() {
        browser.get('http://localhost:3000/#/contato');
    });
    it('Deve cadastrar um contato', function() {
        var aleatorio = Math.floor((Math.random() * 10000000) + 1);
        var nome = 'teste' + aleatorio;
        var email = 'teste@email' + aleatorio;
        element(by.model('contato.nome')).sendKeys(nome);
        element(by.model('contato.email')).sendKeys(email);
        element(by.css('option[value="0"]')).click();
        element(by.css('.btn-primary')).click();
        expect(element(by.binding('mensagem.texto'))
            .getText())
            .toContain('sucesso');
    });
});
