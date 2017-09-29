// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema, bcrypt = require('bcrypt'), SALT_WORK_FACTOR = 10;

var AreaSchema = new Schema({
    area_name: String,
    area_pincode: Number,
    area_status: { type: Number, default: 0},
    area_state: { type: mongoose.Schema.Types.ObjectId, ref: 'States' },
    area_city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' }
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Area', AreaSchema);