var Cities = require('../app/models/city_model'); // User DB

module.exports = (router) => {

    router.get('/city/', (req, res) => {
        res.json({ message: 'Welcome to the coolest API on earth! : City' });
    });

    router.post('/city/save', (req, res) => {
        
    });

    return router;
}