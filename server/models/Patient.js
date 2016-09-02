var mongoose = require('mongoose');

var PatientSchema  = {
    value:String,
    label:String,
    patientID:String,
    patientFirst:String,
    patientLast:String,
    patientGender:String,
    patientBirthDate:String,
    patientSocial:String,
    patientDonor:String,
    patientAddress:String,
    patientPhone:String
};

var Patient = mongoose.model('Patient', PatientSchema, "patient");

module.exports = Patient;