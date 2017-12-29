// contatooh/config/env/production.js

module.exports = {
    env: 'production',
    db: process.env.MONGODB_URI + 'contatooh',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    port: process.env.PORT,
    address: process.env.NODEJS_IP,
    domain: process.env.APP_DNS
};