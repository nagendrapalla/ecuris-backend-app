// =====================================
// get the packages we need ============
// =====================================
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file

// ====================================
// configuration ======================
// ====================================
var port = process.env.PORT || 2017; // used to create, sign, and verify tokens
mongoose.connect(config.uri, { useMongoClient: true, });
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// ====================================
// DB Models ==========================
// ====================================
// var User = require('./app/models/customers'); // User DB
// var City = require('./app/models/city'); // City DB
// var States = require('./app/models/states'); // State DB

// ====================================
// routes =============================
// ====================================
// basic route
app.get('/', function (req, res) {
    res.send("<h1>Welcome to ECURIS BACKEND</h1>");
});

// Route Files
const customers = require('./routes/customers')(router);
const states = require('./routes/states')(router);
const cities = require('./routes/cities')(router);
const users = require('./routes/users')(router);
const roles = require('./routes/roles')(router);

// API ROUTES -------------------
app.use('/api/', customers);
app.use('/api/', states);
app.use('/api/', cities);
app.use('/api/', users);
app.use('/api/', roles);

// ====================================
// start the server ===================
// ====================================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);