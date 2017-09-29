const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://localhost:27017/ecuris-db-main',
    secret: crypto,
    db: 'ecuris-db-main'
}