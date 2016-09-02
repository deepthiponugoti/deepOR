var mongoose = require('mongoose');

var OperationRoomSchema = {
    value:String,
    label:String,
    OR_id_input:String,
    OR_room_input:String,
    OR_type_input:String,
    OR_status_input:String,
    OR_up_time: Number,
    OR_down_time: Number
};

var OperationRoom = mongoose.model('OperationRoom', OperationRoomSchema, "operationRooms");

module.exports = OperationRoom;