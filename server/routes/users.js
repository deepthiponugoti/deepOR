module.exports = function (app){

    var User = require('./../models/User.js');

    var route1 = app.route('/api/users')
        route1.get(function(req, res){
            User.find(function(error, doc){
                res.send(doc)
            })

        })
        route1.post(function(req,res){
            var user = req.body;
            console.log("Adding user...",user);
            var userS = new User(user);
            userS.save(function(err, data){
                res.status(300).send();
            })
        });

    /*
    app.route('/api/users/:userName')
        .get(function(req,res){
            User.findOne({
                _userName:req.params.userName})
                res.send(doc);
            })*/

    var route2 = app.route('/api/users/:id')
        route2.delete(function(req,res){
            User.findOne({
                _id:req.params.id
            }).remove();
        })

        route2.patch(function(req, res){
            User.findOne({
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