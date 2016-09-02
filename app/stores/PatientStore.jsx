var patientStore = function() {
    var patients = [];
    var listeners = [];

    helper.get("api/patients")
        .then(function(data){
            patients = data;
            triggerListeners(listeners);
        })

    var getPatientItems = function(){
        return patients;
    }

    var setPatientItems = function(newPatients){
        patients = newPatients;
    }

    var addPatientItems = function(patient) {
        patients.push(patient);
        triggerListeners(listeners);
        helper.post("api/patients", patient);
    }

    var deletePatientItems = function(patient) {
        var newPatientItem;
        patients.filter(function(patientItem, newPatient) {
            if (patientItem.patientID == patient.patientID) {
                newPatientItem = newPatient;
            }
        });
        patients.splice(patient, 1);
        triggerListeners(listeners);
    }

    var onChange = function (listens) {
        listeners.push(listens);
        return listeners;
    }

    var triggerListeners = function (listeners) {
        listeners.forEach(function (listener) {
            listener(patients);
        })
    }

    var registerEvent = function (event) {
        var split = event.type.split(':');
        if (split[0] === 'patient_item') {
            switch (split[1]) {
                case "add":
                    addPatientItems(event.payload);
                    break;
                case "delete":
                    deletePatientItems(event.payload);
                    break;
            }
        }
    }

    var dispatcherRegister = function (dispatcher) {
        dispatcher.register(registerEvent);
    }

    dispatcherRegister(dispatcher);

    return {
        getPatientItems: getPatientItems,
        addPatientItems: addPatientItems,
        deletePatientItems: deletePatientItems,
        onChange: onChange,
        triggerListeners: triggerListeners,
        registerEvent: registerEvent,
        dispatcherRegister: dispatcherRegister,
        setPatientItems: setPatientItems
    }
}();