// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema, bcrypt = require('bcrypt'), SALT_WORK_FACTOR = 10;

var RolesSchema = new Schema({
    roles_name: { type: String, unique: true },
    roles_status: { type: Number, default: 0}
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Roles', RolesSchema);