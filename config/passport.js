// config/passport.js

var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

module.exports = function() {

    passport.use(new GitHubStrategy({
        clientID: '2fa80f62ff589451fe17',
        clientSecret: 'b94536b97d938fff3c83f2ae0a2d3900e1812483',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {
    }));

};