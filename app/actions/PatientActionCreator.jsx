var patientAction = {
    add:function(dispatcher, patient_item){
        dispatcher.dispatch({
            payload:patient_item,
            type:'patient_item:add'
        })
    },
    delete:function(dispatcher, patient_item){
        dispatcher.dispatch({
            payload:patient_item,
            type:'patient_item:delete'
        })
    }
}