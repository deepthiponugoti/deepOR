module.exports = function(app){

    var Patient = require('./../models/Patient.js');

    var route1 = app.route('/api/patients')
        route1.get(function(req, res) {
            Patient.find(function (error, doc) {
                res.send(doc)
            })

        });
        route1.post(function(req,res){
            var patient = req.body;
            var patientS = new Patient(patient);
            patientS.save(function(err, data){
                res.status(300).send();
            })
        });

    var route2 = app.route('/api/patients/:id')
        route2.delete(function(req,res){
            Patient.findOne({
                _id:req.params.id
            }).remove();
        })

        route2.patch(function(req, res){
            Patient.findOne({
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