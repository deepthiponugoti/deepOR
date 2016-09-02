var operationAction = {
    add:function(dispatcher, operation){
        dispatcher.dispatch({
            payload:operation,
            type:'operation-item:add'
        })
    },
    delete:function(dispatcher, operation){
        dispatcher.dispatch({
            payload:operation,
            type:'operation-item:delete'
        })
    },
    patch:function(dispatcher, operation){
        dispatcher.dispatch({
            payload:operation,
            type:'operation-item:patch'
        })
    }
}