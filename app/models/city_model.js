// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema, bcrypt = require('bcrypt'), SALT_WORK_FACTOR = 10;

var CitySchema = new Schema({
    city_name: { type: String, unique: true },
    city_status: { type: Number, default: 0},
    city_state: { type: mongoose.Schema.Types.ObjectId, ref: 'States' }
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('City', CitySchema);