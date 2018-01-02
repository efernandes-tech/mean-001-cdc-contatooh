// contatooh/config/env/production.js

module.exports = {
    env: 'production',
    db: process.env.MONGODB_URI,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    port: process.env.PORT,
    address: process.env.ADDRESS,
    domain: process.env.DOMAIN
};
