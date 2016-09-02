var mongoose = require('mongoose');

var UserSchema = {
    userName:String,
    password:String,
    role:String
};

var User = mongoose.model('User', UserSchema, "users");

module.exports = User;