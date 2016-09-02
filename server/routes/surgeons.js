module.exports = function (app){

    var Surgeon = require('./../models/Surgeon.js');

    var route1 = app.route('/api/surgeons')
        route1.get(function(req, res){
            Surgeon.find(function(error, doc){
                res.send(doc)
            })

        })
        route1.post(function(req,res){
            var surgeon = req.body;
            var surgeonS = new Surgeon(surgeon);
            surgeonS.save(function(err, data){
                res.status(300).send();
            })
        });

    var route2 = app.route('/api/surgeons/:id')
        route2.delete(function(req,res){
            Surgeon.findOne({
                _id:req.params.id
            }).remove();
        })

        route2.patch(function(req, res){
            Surgeon.findOne({
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