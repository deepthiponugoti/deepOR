var mongoose = require('mongoose');
var Operation = require('./models/Operation.js');
var User = require("./models/User.js");
var Surgeon = require("./models/Surgeon.js");
var OperationRoom = require("./models/OperationRoom.js");
var Patient = require("./models/Patient.js");
var SurgeryType=require("./models/SurgeryType.js");
var RangeDate = require('./models/range_date.js');
var Stat = require('./models/Stat.js');

mongoose.connect('mongodb://matthew.allen:password@ds019068.mlab.com:19068/deepor', function(){

    mongoose.connection.db.dropDatabase();
    var day = new Date()

    var today = new RangeDate(day.setHours(8))

    var operations =   [{
        _id: "sdsdsd",
        operationName: "One",
        surgeonName: "Paul Walker",
        patientName: "Adrian Garcia",
        typeOfSurgery: "Amputation",
        id: 'klsj92jlk2ds',
        title: 'One: AG',
        startDate: today.advance('hours', 2).toRef(),
        actualStartDate: null,
        actualDuration: null,
        duration: 3,
        resource: 'one'
    },
    {
        _id: "swqererqwerw",
        operationName: "Two",
        surgeonName:"Pancho Villa",
        patientName: "Daniel Gonzalez",
        typeOfSurgery: "Lobectomy",
        id: 'sfsfsdfdsfsdfsfsf',
        title: 'Two: DG',
        startDate: null,
        actualStartDate: null,
        actualDuration: null,
        duration: 2,
        resource: null
    },
        {
            _id: "swqererSDqwerw",
            operationName: "Three",
            surgeonName:"Pancho Villa",
            patientName: "Erik Avellaneda",
            typeOfSurgery: "Mastectomy",
            id: 'sfsfsdfdsfsdSSDDfsfsf',
            title: 'Three: EA',
            startDate: "2016-05-04, 10",
            actualStartDate: "2016-05-04, 10",
            actualDuration: 3,
            duration: 3,
            resource: 'two'
        },
        {
            _id: "swqeasdrerSDEWDDqwerw",
            operationName: "Four",
            surgeonName:"Pancho Villa",
            patientName: "Linh Tong",
            typeOfSurgery: "Colectomy",
            id: 'sfsfsasddfdsWEDfsdSSD',
            title: 'Four: LT',
            startDate: null,
            actualStartDate: null,
            actualDuration: null,
            duration: 2,
            resource: null
        },
        {
            _id: "swqerasderSDWEDFqwerw",
            operationName: "Five",
            surgeonName:"Pancho Villa",
            patientName: "Nguyen Doan",
            typeOfSurgery: "Ear Tubes",
            id: 'sfsfsasdasdfdsfsdSSWEDEWDDDfsfsf',
            title: 'Five: ND',
            startDate: "2016-05-03, 14",
            actualStartDate: "2016-05-03, 15",
            actualDuration: 2,
            duration: 4,
            resource: 'three'
        },
        {
            _id: "sdijasdop83knwfsos",
            operationName: "Six",
            surgeonName: "Paul Walker",
            patientName: "Deepthi Ponugoti",
            typeOfSurgery: "Hysteroscopy",
            id: 'lj2jlkwdoisl',
            title: 'Six: DP',
            startDate: null,
            actualStartDate: null,
            actualDuration: null,
            duration: 3,
            resource: null
        },
        {
            _id: "sdilasjf982oij2lkjdk2lksdsd",
            operationName: "Seven",
            surgeonName: "Paul Walker",
            patientName: "Matthew Allen",
            typeOfSurgery: "Strabismus",
            id: 'sdflkjoiwkjdsl',
            title: 'Seven: MA',
            startDate: null,
            actualStartDate: null,
            actualDuration: null,
            duration: 5,
            resource: null
        }
    ];

    var users = [{
        userName: "matthewAllen",
        password: "password",
        role: "user"
    },{
        userName: "bob",
        password: "password",
        role: "HOR"
    }];

    var surgeons=[{
        value:1,
        label:"Paul Walker",
        surgeon_ID:1,
        surgeon_specialty:"Spinal",
        surgeon_first:"Paul",
        surgeon_last:"Walker"
    },{
        value:2,
        label:"Pancho Villa",
        surgeon_ID:2,
        surgeon_specialty:"Spinal",
        surgeon_first:"Pancho",
        surgeon_last:"Villa"
    }];

    var patients = [{
        value:"Joseph-Gordon Levitt",
        label:"Joseph-Gordon Levitt",
        patientID:1,
        patientFirst:"Joseph-Gordon",
        patientLast:"Levitt",
        patientGender:"Male",
        patientBirthDate:"2001-01-01",
        patientSocial:"343-932-3929",
        patientDonor:"Yes",
        patientAddress:"301",
        patientPhone:"932-292-29292"
    },{
        value:"Jesse Eisenburg",
        label:"Jesse Eisenburg",
        patientID:2,
        patientFirst:"Jesse",
        patientLast:"Eisenburg",
        patientGender:"Male",
        patientBirthDate:"2001-01-01",
        patientSocial:"343-33-3929",
        patientDonor:"No",
        patientAddress:"220",
        patientPhone:"932-292-29492"
    }

    ];


    var operationRooms = [{
        value: "one",
        label: "one",
        OR_id_input:1,
        OR_room_input:100,
        OR_type_input:"CARDIOLOGY",
        OR_status_input:"READY",
        OR_up_time: 8,
        OR_down_time: 3
    }, {
        value: "two",
        label: "two",
        OR_id_input:2,
        OR_room_input:201,
        OR_type_input:"NEUROLOGY",
        OR_status_input:"OCCUPIED",
        OR_up_time: 2,
        OR_down_time: 9
    },{
        value: "three",
        label: "three",
        OR_id_input:3,
        OR_room_input:300,
        OR_type_input:"CARDIOLOGY",
        OR_status_input:"READY",
        OR_up_time: 8,
        OR_down_time: 3
    }, {
        value: "four",
        label: "four",
        OR_id_input:4,
        OR_room_input:401,
        OR_type_input:"NEUROLOGY",
        OR_status_input:"OCCUPIED",
        OR_up_time: 5,
        OR_down_time: 6
    },{
        value: "five",
        label: "five",
        OR_id_input:5,
        OR_room_input:500,
        OR_type_input:"CARDIOLOGY",
        OR_status_input:"READY",
        OR_up_time: 7,
        OR_down_time: 4
    }];

    var surgerytypes=[
        {
            value:"Amputation",
            label:"Amputation"
        },
        {
            value:"Appendectomy",
            label:"Appendectomy "
        },
        {
            value:"Arthroscopy",
            label:"Arthroscopy "
        },
        {
            value:"Blepharoplasty",
            label:"Blepharoplasty "
        },
        {
            value:"Carpal Tunnel Release",
            label:"Carpal Tunnel Release"
        },
        {
            value:"Cataracts",
            label:"Cataracts"
        },
        {
            value:"Cholecystectomy",
            label:"Cholecystectomy"
        },
        {
            value:"Colectomy",
            label:"Colectomy"
        },
        {
            value:"Cystoscopy",
            label:"Cystoscopy"
        },
        {
            value:"Dilation and Curettage",
            label:"Dilation and Curettage"
        },
        {
            value:"Ear Tubes",
            label:"Ear Tubes"
        },
        {
            value:"Hemorrhoidectomy",
            label:"Hemorrhoidectomy"
        },
        {
            value:"Hysterectomy",
            label:"Hysterectomy"
        },
        {
            value:"Hysteroscopy",
            label:"Hysteroscopy"
        },
        {
            value:"Ileostomy",
            label:"Ileostomy"
        },
        {
            value:"Inguinal Hernia",
            label:"Inguinal Hernia"
        },
        {
            value:"Laminectomy",
            label:"Laminectomy"
        },
        {
            value:"Laparoscopy",
            label:"Laparoscopy"
        },
        {
            value:"Lobectomy",
            label:"Lobectomy"
        },
        {
            value:"Lumbar Fusion",
            label:"Lumbar Fusion"
        },
        {
            value:"Mastectomy",
            label:"Mastectomy"
        },
        {
            value:"Mediastinoscopy",
            label:"Mediastinoscopy"
        },
        {
            value:"Myringotomy Tubes",
            label:"Myringotomy Tubes"
        },
        {
            value:"Septoplasty",
            label:"Septoplasty"
        },
        {
            value:"Strabismus",
            label:"Strabismus"
        },
        {
            value:"Teeth Extraction",
            label:"Teeth Extraction"
        },
        {
            value:"Thoracoscopy",
            label:"Thoracoscopy"
        },
        {
            value:"Thyroidectomy",
            label:"Thyroidectomy"
        },
        {
            value:"Tracheostomy",
            label:"Tracheostomy"
        },
        {
            value:"Tonsillectomy and Adenoidectomy",
            label:"Tonsillectomy and Adenoidectomy"
        },
        {
            value:"Umbilical Hernia",
            label:"Umbilical Hernia"
        }
    ];

    var stats = [
        {   stat_id: 1,
            OR_id_input: 1,
            date: '05/01/2016',
            OR_up_time: 8,
            OR_down_time: 3

        },
        {
            stat_id: 1,
            OR_id_input: 1,
            date: '05/02/2016',
            OR_up_time: 7,
            OR_down_time: 4
        }
    ];

    stats.forEach(function(stat){
        new Stat(stat).save();
    })

    operations.forEach(function(operation){
        new Operation(operation).save();
    })

    users.forEach(function(user){
        new User(user).save();
    })

    surgeons.forEach(function(surgeon){
        new Surgeon(surgeon).save();
    })

    operationRooms.forEach(function(operationroom){
        new OperationRoom(operationroom).save();
    })

    patients.forEach(function(patient){
        new Patient(patient).save();
    })

    surgerytypes.forEach(function(surgerytype){
        new SurgeryType(surgerytype).save();
    })

})