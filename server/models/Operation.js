var mongoose = require('mongoose');

var OperationSchema = {
    _id:String,
    operationName:String,
    surgeonName:String,
    patientName:String,
    typeOfSurgery:String,
    id:String,
    title:String,
    startDate:String,
    actualStartDate: String,
    actualDuration: String,
    duration:Number,
    resource:String
};

var Operation = mongoose.model('Operation', OperationSchema, "operations");

module.exports = Operation;