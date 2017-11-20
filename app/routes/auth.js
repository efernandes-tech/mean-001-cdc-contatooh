// app/routes/auth.js

var passport = require('passport');

module.exports = function(app) {

    app.get('/logout', function(req, res) {
        req.logOut(); // Exposto pelo passport.
        res.redirect('/');
    });

    app.get('/auth/github',
        passport.authenticate('github'));
    app.get('/auth/github/callback',
        passport.authenticate('github', {
            successRedirect: '/'
        }));

    // Verificando autenticação do usuário.
    app.get('/', function(req, res, next) {
        if(req.isAuthenticated()) {
            // permite que outras rotas sejam processadas
            return next();
        } else {
            // renderiza auth.ejs
            res.render("auth");
        }
    });
}
