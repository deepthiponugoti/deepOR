var surgeonAction= {
    add:function(dispatcher, surgeon_item){
        dispatcher.dispatch({
            payload:surgeon_item,
            type:'surgeon_item:add'
        })

    },

    delete:function(dispatcher, surgeon_item){
        dispatcher.dispatch({
            payload:surgeon_item,
            type:'surgeon_item:delete'
        })
    }
}