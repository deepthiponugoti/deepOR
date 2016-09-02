var mongoose = require('mongoose');

var SurgeryTypeSchema = {
    value:String,
    label:String
};

var SurgeryType = mongoose.model('SurgeryType', SurgeryTypeSchema, "surgerytypes");

module.exports = SurgeryType;