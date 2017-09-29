var Roles = require('../app/models/roles_model'); // User DB

module.exports = (router) => {

    router.get('/role/', (req, res) => {
        Roles.find({ roles_status: 0 }, 'roles_name', function (err, roles) {
            if (!err) {
                res.json(roles);
            } else {
                res.json({ message: err });
            }
        });
    });

    router.post('/role/save', (req, res) => {
        var RolesTB = new Roles({
            roles_name: req.body.role_name
        });

        RolesTB.save(function (err, results) {
            if (!err) {
                res.json({ message: "Roles Added Successfully" });
            } else {
                res.json({ message: "Data already exists..." });
            }
        });
    });

    return router;
}