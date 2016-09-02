var mongoose = require('mongoose');

var SurgeonSchema = {
    value:String,
    label:String,
    surgeon_ID:String,
    surgeon_specialty:String,
    surgeon_first:String,
    surgeon_last:String
};

var Surgeon = mongoose.model('Surgeon', SurgeonSchema, "surgeon");

module.exports = Surgeon;