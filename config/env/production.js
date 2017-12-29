// contatooh/config/env/production.js

module.exports = {
    env: 'production',
    db: process.env.MONGODB_URI + 'contatooh',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    port: process.env.PORT,
    address: 'http://mean-001-cdc-contatooh.herokuapp.com',
    domain: 'http://mean-001-cdc-contatooh.herokuapp.com'
};
