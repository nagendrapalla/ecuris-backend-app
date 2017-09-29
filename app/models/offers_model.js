// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema, bcrypt = require('bcrypt'), SALT_WORK_FACTOR = 10;

var OffersSchema = new Schema({
    offer_code: String,
    offer_belongs_to: String,
    offer_percentage: Number,
    offer_max_amount: Number,
    offer_min_transaction: Number,
    offer_title: String,
    offer_description: String,
    offer_validity_start: Date,
    offer_validity_end: Date,
    offer_max_redeems: Number,
    offer_image: String,
    offer_status: { type: Number, default: 0},
    offer_created_time: String,
    offer_created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Offers', OffersSchema);