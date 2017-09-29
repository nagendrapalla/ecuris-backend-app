var States = require('../app/models/states_model'); // User DB

module.exports = (router) => {

    router.get('/state/', (req, res) => {
        States.find({ state_status: 0 }, 'state_name', function (err, states) {
            if (!err) {
                res.json(states);
            } else {
                res.json({ message: err });
            }
        });
    });

    router.post('/state/save', (req, res) => {
        var StatesTB = new States({
            state_name: req.body.state_name,
            state_status: 1
        });

        StatesTB.save(function (err, results) {
            if (!err) {
                res.json({ message: "State Inserted Successfully" });
            } else {
                res.json({ message: "Data already exists..." });
            }
        });
    });

    return router;
}