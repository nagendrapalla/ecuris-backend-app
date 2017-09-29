// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema, bcrypt = require('bcrypt'), SALT_WORK_FACTOR = 10;

var StatesSchema = new Schema({
    state_name: { type: String, unique: true },
    state_status: { type: Number, default: 0}
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('States', StatesSchema);