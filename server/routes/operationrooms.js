module.exports = function (app){

    var OperationRoom = require('./../models/OperationRoom.js');

    var route1 = app.route('/api/operationrooms')
    route1.get(function(req, res){
        OperationRoom.find(function(error, doc){
            res.send(doc)
        })
    });

    route1.post(function(req,res){
        var operationRoom = req.body;
        var operationRooms = new OperationRoom(operationRoom);
        operationRooms.save(function(err, data){
            res.status(300).send();
        })
    });

    var route2 = app.route('/api/operationRooms/:id')
        route2.delete(function(req,res){
            OperationRoom.findOne({
                _id: req.params.id
            }).remove();
        });

        route2.patch(function(req, res){
            OperationRoom.findOne({
                _id:req.body._id
            }, function(error,doc){
                for (var key in req.body){
                    doc[key] =req.body[key];
                }
                doc.save();
                res.status(200).send();
            })
        });
}