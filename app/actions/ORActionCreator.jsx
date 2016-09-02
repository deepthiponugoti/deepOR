var orAction = {
    add:function(dispatcher, OR_item){
        dispatcher.dispatch({
            payload:OR_item,
            type:'OR_item:add'
        })
    },
    delete:function(dispatcher, OR_item){
        dispatcher.dispatch({
            payload:OR_item,
            type:'OR_item:delete'
        })
    }
}