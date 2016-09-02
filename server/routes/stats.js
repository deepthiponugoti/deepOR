module.exports = function (app){

    var Stat = require('./../models/Stat.js');

    var route1 = app.route('/api/stats')
    route1.get(function(req, res){
        Stat.find(function(error, doc){
            res.send(doc)
        })
    });

    route1.post(function(req,res){
        var stat = req.body;
        var stats = new Stat(stat);
        stats.save(function(err, data){
            res.status(300).send();
        })
    });

    var route2 = app.route('/api/stats/:id')
    route2.delete(function(req,res){
        Stat.findOne({
            _id: req.params.id
        }).remove();
    });

    route2.patch(function(req, res){
        Stat.findOne({
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