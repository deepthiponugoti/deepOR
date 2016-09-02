var ORStore = function(){
    var operationRooms = [];
    var listeners = [];

    helper.get("api/operationRooms")
          .then(function(data){
            operationRooms = data;
            triggerListeners(listeners);
          })

    var getOR = function(){
        return operationRooms;
    }

    var setOR = function(newORs){
        operationRooms = newORs;
    }

    var addOR = function(operationRoom) {
        operationRooms.push(operationRoom);
        triggerListeners(listeners);
        helper.post("api/operationRooms", operationRoom);
    }

    var deleteOR = function (operationRoom) {
        var index;
        operationRooms.filter(function (_operationRoom, _index) {
            if (_operationRoom.OR_id_input == operationRoom.OR_id_input) {
                index = _index;
            }
        });
        operationRooms.splice(operationRoom, 1);
        triggerListeners(listeners);

        //added this
        //helper.del('api/operationRooms'+item._id);
    }

    var onChange = function(listener){
        listeners.push(listener);
        return listeners;
    }

    var triggerListeners = function(listeners) {
        listeners.forEach(function(listener) {
            listener(operationRooms);
        })
    }

    var registerEvent = function(event){
        var split = event.type.split(':');
        if (split[0] === 'OR_item') {
            switch (split[1]) {
                case "add":
                    addOR(event.payload);
                    break;
                case "delete":
                    deleteOR(event.payload);
                    break;
            }
        }
    }

    var dispatchRegister = function(dispatcher) {
        dispatcher.register(registerEvent);
    }

    dispatchRegister(dispatcher);

    return {
        getOR: getOR,
        onChange: onChange,
        addOR: addOR,
        deleteOR: deleteOR,
        triggerListeners: triggerListeners,
        registerEvent: registerEvent,
        dispatchRegister: dispatchRegister,
        setOR: setOR
    }
}();