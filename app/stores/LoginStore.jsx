var LoginStore = function() {

    var userData  = [];
    var listeners = [];

    var setListeners = function(newListeners){
        listeners = newListeners;
    }

    var setUserData = function(newData){
        userData = newData;
    }

    var updateUserData = function(data){
        userData = data;
        triggerListeners(listeners);
    }

    var helperCall = function(helper){
        helper.get("api/users")
            .then(updateUserData)
    }

    helperCall(helper);

    var addLoginItem = function(user) {
        userData.push(user);
        triggerListeners(listeners);
        helper.post("api/users", user);
    }

    function getItems(){
        return userData;
    }

    function onChange(listener){
        listeners.push(listener);
        return listeners;
    }

    function triggerListeners(listeners) {
        listeners.forEach(function(listener) {
            listener(userData);
        })
    };

    var registerEvent = function (event) {
        var split = event.type.split(':');
        if (split[0] === 'login-item') {
            switch (split[1]) {
                case "add":
                    addLoginItem(event.payload);
                    break;
            }
        }
    }

    var dispatchRegister = function(dispatcher) {
        dispatcher.register(registerEvent);
    }

    dispatchRegister(dispatcher);
    return{
        getItems: getItems,
        onChange: onChange,
        triggerListeners: triggerListeners,
        updateUserData: updateUserData,
        helperCall: helperCall,
        setListeners: setListeners,
        setUserData: setUserData
    }
}();