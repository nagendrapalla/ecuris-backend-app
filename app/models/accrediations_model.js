// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema, bcrypt = require('bcrypt'), SALT_WORK_FACTOR = 10;

var AccrediationsSchema = new Schema({
    accr_name: String,
    accr_logo: String,
    accr_status: { type: Number, default: 0}
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Accrediations', AccrediationsSchema);