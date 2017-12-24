// test/e2e/contatosPageSpec.js

describe('Página principal', function() {

    beforeEach(function() {
        browser.get('http://localhost:3000/#/contatos');
    });

    it('Deve estar logado', function() {
        element(by.id('usuario-logado')).getText()
            .then(function(texto) {
                expect(texto.trim().length).toBeGreaterThan(0);
            });
    });

    it('Deve remover um contato da lista', function() {
        var totalAntes = element.all(by.repeater('contato in contatos')).count();

        element(by.repeater('contato in contatos').row(0))
            .element(by.css('.btn'))
            .click();

        var totalDepois = element.all(by.repeater('contato in contatos')).count();
        expect(totalDepois).toBeLessThan(totalAntes);
    });
});