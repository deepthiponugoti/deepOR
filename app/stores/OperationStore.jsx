var operationStore = function(){
    var operations = [];
    var listeners = [];

    var setOperations = function(newOperations){
        operations = newOperations;
    }

    var setListeners = function(newListeners){
        listeners = newListeners;
    }

    var updateOperations = function(data){
            operations = data;
            triggerListeners(listeners);
    }

    var helperCall = function(helper){
        helper.get("api/operations")
            .then(updateOperations);
    }

    helperCall(helper);

    function getItems(){
        return operations;
    };

    var addOperationItem = function(operation) {
        operations.push(operation);
        triggerListeners(listeners);
        helper.post("api/operations", operation);
    }

    var deleteOperationItem = function (operation) {
        var index;
        operations.filter(function (_operation, _index) {
            if (_operation.name == operation.name) {
                index = _index;
            }
        });
        triggerListeners(listeners);

        //added this
        helper.del('api/operations/'+ operation._id);
    }

    var modifyOperationItem = function(operation){
        var _operation = operations.filter(function(a){ return a.operationName == operation.operationName})[0];

        triggerListeners(listeners);

        helper.patch('api/operations/'+ _operation._id,_operation);
    }

    var onChange = function(listener){
        listeners.push(listener);
        return listeners;
    }

    var triggerListeners = function(listeners) {
        listeners.forEach(function(listener) {
            listener(operations);
        })
    }

    var registerEvent = function (event) {
        var split = event.type.split(':');
        if (split[0] === 'operation-item') {
            switch (split[1]) {
                case "add":
                    addOperationItem(event.payload);
                    break;
                case "delete":
                    deleteOperationItem(event.payload);
                    break;
                case "patch":
                    modifyOperationItem(event.payload);
                    break;
            }
        }
    }

    var dispatchRegister = function(dispatcher) {
        dispatcher.register(registerEvent);
    }

    dispatchRegister(dispatcher);

    return {
        getItems: getItems,
        onChange: onChange,
        addOperationItem: addOperationItem,
        deleteOperationItem: deleteOperationItem,
        modifyOperationItem: modifyOperationItem,
        triggerListeners: triggerListeners,
        dispatchRegister: dispatchRegister,
        registerEvent: registerEvent,
        updateOperations: updateOperations,
        helperCall: helperCall,
        setOperations: setOperations,
        setListeners: setListeners
    }
}();