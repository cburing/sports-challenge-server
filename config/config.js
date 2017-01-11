var Config = {
    db: {
        host: process.env.dbhost || 'localhost:27017',
        name: process.env.dbname || 'sports',
        user: process.env.user || '',
        pass: process.env.pass || ''
    },
    app: {
        port: process.env.PORT || 4000
    },
    auth: {
        jwtSecret: process.env.jwtsecret || "very secret secret"
    }
};

module.exports = Config;
