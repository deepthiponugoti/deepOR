module.exports = function (app){

    var SurgeryType = require('./../models/SurgeryType.js');

    var route1 = app.route('/api/surgerytypes')
    route1.get(function(req, res){
        SurgeryType.find(function(error, doc){
            res.send(doc)
        })

    })
    route1.post(function(req,res){
        var surgerytype = req.body;
        var surgerytypeS = new SurgeryType(surgerytype);
        surgerytypeS.save(function(err, data){
            res.status(300).send();
        })
    });


}