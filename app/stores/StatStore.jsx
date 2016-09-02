var StatStore = function(){
    var stats = [];
    var listeners = [];

    helper.get("api/stats")
        .then(function(data){
            stats = data;
            triggerListeners(listeners);
        })

    var getStat = function(){
        return stats;
    }

    var addStat = function(stat) {
        stats.push(stat);
        triggerListeners(listeners);
        helper.post("api/stats", stat);
    }

    var deleteStat = function (stat) {
        var index;
        stats.filter(function (_stat, _index) {
            if (_stat.stat_id == stat.stat_id) {
                index = _index;
            }
        });
        stats.splice(stat, 1);
        triggerListeners(listeners);

    }

    var onChange = function(listener){
        listeners.push(listener);
        return listeners;
    }

    var triggerListeners = function(listeners) {
        listeners.forEach(function(listener) {
            listener(stats);
        })
    }

    var registerEvent = function(event){
        var split = event.type.split(':');
        if (split[0] === 'OR_item') {
            switch (split[1]) {
                case "add":
                    addStat(event.payload);
                    break;
                case "delete":
                    deleteStat(event.payload);
                    break;
            }
        }
    }

    var dispatchRegister = function(dispatcher) {
        dispatcher.register(registerEvent);
    }

    dispatchRegister(dispatcher);

    return {
        getStat: getStat,
        onChange: onChange,
        addStat: addStat,
        deleteStat: deleteStat,
        triggerListeners: triggerListeners,
        registerEvent: registerEvent,
        dispatchRegister: dispatchRegister
    }
}();