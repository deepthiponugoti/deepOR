describe('OperationStore test', function () {

    afterEach(function() {
        operationStore.setListeners([]);
        operationStore.setOperations([]);
    });

    it('canary is passing', function() {
        expect(true).to.eql(true);
    });

    it('add an operation item', function(){
        var expected = [{ name: 'Operation 4', operationType: 'Heart Surgery', patientName: 'xx yy'}];
        operationStore.addOperationItem({
            name: "Operation 4",
            patientName: "xx yy",
            operationType: "Heart Surgery"
        });

        expect(operationStore.getItems()).to.eql(expected);
    });

    it('delete an operation item', function(){
        var expected = [];
        operationStore.deleteOperationItem({ name: 'Operation 4', operationType: 'Heart Surgery', patientName: 'xx yy'});

        expect(operationStore.getItems()).to.eql(expected);
    });

    it('on change test', function(){
        var isListen = false;
        var listenersArray = operationStore.onChange(isListen);

        expect(listenersArray).to.eql([false]);
    });

    it('trigger listener test', function(){
        var itemsList = [];
        var listener1 = function(items){
            itemsList = items;
        }
       var listeners = [listener1];
        var expected = [];
        operationStore.triggerListeners(listeners);

        expect(itemsList).to.eql(expected);

    });

    it('dispatcher register test', function(){
        var isCalled = false;
       var dispatcher = {
           register: function(callback){
               isCalled = true;
           }
       }
        operationStore.dispatchRegister(dispatcher);
        expect(isCalled).to.eql(true);
    });

    it('register event test for add', function(){
        var isCalled = false;
        var callback = function(){
        }

        var event = {
            type: {
                split: function(param){
                    isCalled = true;
                    return ['operation-item', 'add'];
                }
            },
            payload: { name: 'Operation 5', operationType: 'Eye Surgery', patientName: 'nikitha kotha'}
        }

        operationStore.registerEvent(event);
        expect(isCalled).to.eql(true);
    });

    it('register event test for delete', function(){
        var isCalled = false;
        var callback = function(){
        }

        var event = {
            type: {
                split: function(param){
                    isCalled = true;
                    return ['operation-item', 'delete'];
                }
            },
            payload: { name: 'Operation 5', operationType: 'Eye Surgery', patientName: 'nikitha kotha'}
        }

        operationStore.registerEvent(event);
        expect(isCalled).to.eql(true);
    });

    it('update operations test', function(){
        var isListen = [false];
        operationStore.updateOperations(isListen);

        expect(operationStore.getItems()).to.eql([false]);
    });
});
