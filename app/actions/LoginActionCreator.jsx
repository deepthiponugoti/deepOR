var loginAction = {
    add:function(dispatcher, operation){
        dispatcher.dispatch({
            payload:operation,
            type:'login-item:add'
        })
    }
}