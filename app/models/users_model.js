// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema, bcrypt = require('bcrypt'), SALT_WORK_FACTOR = 10;

var UsersSchema = new Schema({
    username:  { type: String, unique: true },    
    email:  { type: String, unique: true },
    mobile:  { type: String, unique: true },
    password: String,
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Roles' },
    status: { type: Number, default: 0},
    created_time: { type: Date, default: Date.now }
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Users', UsersSchema);