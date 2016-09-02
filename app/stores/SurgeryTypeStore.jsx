var SurgeryTypeStore = function() {
    var surgerytypes = [];
    var listeners = [];

    helper.get("api/surgerytypes")
        .then(function(data){
            surgerytypes = data;
            triggerListeners(listeners);
        })

    var getSurgeryTypes = function(){
        return surgerytypes;
    }

    var onChange = function (listens) {
        listeners.push(listens);
        return listeners;
    }

    var triggerListeners = function (listeners) {
        listeners.forEach(function (listener) {
            listener(surgerytypes);
        })
    }




    return {
        getSurgeryTypes: getSurgeryTypes,
        onChange: onChange,
        triggerListeners: triggerListeners,


    }
}();