var mongoose = require('mongoose');

var StatSchema = {
    stat_id:Number,
    OR_id_input: Number,
    date:{type:Date, default: '01/01/2016'},
    OR_up_time: Number,
    OR_down_time: Number
};

var Stat = mongoose.model('Stat', StatSchema, "stats");

module.exports = Stat;