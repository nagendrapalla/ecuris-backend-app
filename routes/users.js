var Users = require('../app/models/users_model'); // User DB

module.exports = (router) => {    

    router.post('/user/login', (req, res) => {
        Users.find(
            {
                $and: [
                    { $or: [{ username: req.body.username }, { email: req.body.username }, { mobile: req.body.username }] },
                    { status: 0 }
                ]
            },
            'password',
            function (err, users) {
                if (!err) {
                    if (users.length > 0) {                        
                        if(users[0].password == req.body.pwd){
                            res.json({ message: "Login Successfull", status: 200 });
                        }else{
                            res.json({ message: "Password Wrong", status: 500 });
                        }                        
                    } else {
                        res.json({ message: "Username Wrong", status: 404 });
                    }
                } else {
                    res.json({ message: "Username Wrong", status: 404 });
                }
            }).limit(1);
    });

    router.post('/user/save', (req, res) => {

        var UsersTB = new Users({
            username: req.body.username,
            email: req.body.email,
            mobile: req.body.mobile,
            password: req.body.pwd,
            role: req.body.role_id
        });

        UsersTB.save(function (err, results) {
            if (!err) {
                res.json({ message: "User added successfully" });
            } else {
                res.json({ message: "User already exists..." });
            }
        });
    });

    return router;
}