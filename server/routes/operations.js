module.exports = function (app){

    var Operation = require('./../models/Operation.js');

    var route1 = app.route('/api/operations')
        route1.get(function(req, res){
                Operation.find(function(error, doc){
                    res.send(doc)
                })

            });
        route1.post(function(req,res){
                var operation = req.body;
                var operationS = new Operation(operation);
                operationS.save(function(err, data){
                    res.status(300).send();
                })
            });

    var route2 = app.route('/api/operations/:id')
        route2.delete(function(req,res){
                    Operation.findOne({
                        _id:req.params.id
                    }).remove();
                })
        route2.patch(function(req, res){
                    Operation.findOne({
                        _id:req.body._id
                    }, function(error,doc){
                        for (var key in req.body){
                            doc[key] =req.body[key];

                        }
                        doc.save();
                        res.status(200).send();
                    })
                })
}