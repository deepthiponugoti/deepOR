var surgeonStore = function(){

    var surgeons=[];
    var listeners=[];

    helper.get("api/surgeons")
        .then(function(data){
            surgeons = data;
            triggerListeners(listeners);
        })

    var setSurgeons = function(newSurgeons){
        surgeons = newSurgeons;
    }

    var getSurgeons = function(){
        return surgeons;
    }

    var addSurgeon = function(surgeon) {
        surgeons.push(surgeon);
        triggerListeners(listeners);
        helper.post("api/surgeons", surgeon);
    }

    var deleteSurgeon = function(surgeon) {
        var index;
        surgeons.filter(function (_surgeon, _index) {
            if(_surgeon.surgeon_ID==surgeon.surgeon_ID){
                index= _index;
            }
        });
        surgeons.splice(index, 1);
        triggerListeners(listeners);
    }

    var onChange = function(listener){
        listeners.push(listener);
    }

    var triggerListeners = function(listeners) {
        listeners.forEach(function(listener) {
            listener(surgeons);
        })
    };

    var registerEvent = function (event) {
        var split = event.type.split(':');
        if (split[0] === 'surgeon_item') {
            switch (split[1]) {
                case "add":
                    addSurgeon(event.payload);
                    break;
                case "delete":
                    deleteSurgeon(event.payload);
                    break;
            }
        }
    }

    var dispatcherRegister = function (dispatcher) {
        dispatcher.register(registerEvent);
    }

    dispatcherRegister(dispatcher);

    return{
        getSurgeons:getSurgeons,
        onChange:onChange,
        addSurgeonItem:addSurgeon,
        deleteSurgeonItem:deleteSurgeon,
        triggerListeners:triggerListeners,
        registerEvent: registerEvent,
        dispatcherRegister: dispatcherRegister,
        setSurgeons: setSurgeons
    }

}();
