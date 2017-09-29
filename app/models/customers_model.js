// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;
var SALT_WORK_FACTOR = 10;

var AddressSchema = new Schema({
    address_title: String,
    address_flat_no: String,
    address_street: String,
    address_landmark: String,
    address_city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
    address_state: { type: mongoose.Schema.Types.ObjectId, ref: 'States' },
    address_status: { type: String, default: "0" },
    addres_lat_lng: { 
        lat: String, lng: String
    }
});

var FamilySchema = new Schema({
    member_name: String,
    member_age: Number,
    member_gender: String,
    member_status: { type: String, default: "0" },
    member_added_at: { type: Date, default: Date.now },
    member_relation: String
});

var CustomerSchema = new Schema({
    customer_name: {
        type: String,
        trim: true,
        required: 'Customer Name is Required'
    },
    customer_email: {
        type: String,
        trim: true,
        lowercase: true,
        index: { unique: true },
        required: 'Email address is required',
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: '{VALUE} is not a valid Email Address!'
        }
    },
    customer_mobile: {
        type: String,
        index: { unique: true },
        required: 'Mobile Number is required',
        validate: {
            validator: function (v) {
                return /d{10}/.test(v);
            },
            message: '{VALUE} is not a valid Mobile Number!'
        }
    },    
    pwd: { type: String, required: true },
    customer_dob: {
        type: Date,
        required: "Date Of Birth is Required"
    },
    customer_gender: String,
    customer_referral_code: String,
    customer_referred_by: {type: mongoose.Schema.Types.ObjectId, ref: 'Customers'},
    account_created_time:  { type: Date, default: Date.now },
    account_status: { type: String, default: "00" },
    customer_address: [AddressSchema],
    customer_family: [FamilySchema]
});

CustomerSchema.pre('save', function(next) {
    var customer = this;

    // only hash the password if it has been modified (or is new)
    if (!customer.isModified('pwd')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(customer.pwd, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            customer.password = hash;
            next();
        });
    });
});

CustomerSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.pwd, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Customers', CustomerSchema);
module.exports = mongoose.model('Address', AddressSchema);
module.exports = mongoose.model('Family', FamilySchema);