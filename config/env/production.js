// contatooh/config/env/production.js

module.exports = {
    env: 'production',
    db: process.env.MONGODB_URI,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    port: process.env.PORT,
    address: 'localhost',
    domain: process.env.OPENSHIFT_APP_DNS + ':' + process.env.PORT
};
    // address: process.env.OPENSHIFT_NODEJS_IP,
