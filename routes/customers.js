var Customers = require('../app/models/customers_model'); // User DB

module.exports = (router) => {

    router.get('/customer/', (req, res) => {
        res.json({ message: 'Welcome to the coolest API on earth!: Customer' });
    });

    router.post('/customer/save', (req, res) => {
        
    });

    return router;
}