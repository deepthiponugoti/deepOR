describe('OperationStore test', function () {
    it('add an OR', function(){

        var expected = [{OR_id_input: 123, operationType: 'Heart Surgery'}];
        ORStore.addOR({
            OR_id_input: 123, operationType: 'Heart Surgery'
        });

        expect(ORStore.getOR()).to.eql(expected);
    });

    it('delete an OR', function(){

        var expected = [];
        ORStore.deleteOR({OR_id_input: 123, operationType: 'Heart Surgery'});

        expect(ORStore.getOR()).to.eql(expected);
    });

    it('on change test', function(){
        var isListen = false;

        ORStore.onChange(function(items){
            items = true;
        });

        expect(isListen).to.eql(false);
    });

    it('trigger listener test', function(){
        var itemsList = [];
        var listener1 = function(items){
            itemsList = items;
        }
        var listeners = [listener1];

        var expected = [];

        ORStore.triggerListeners(listeners);
        expect(itemsList).to.eql(expected);

    });

    it('dispatcher register test', function(){
        var isCalled = false;
        var dispatcher = {
            register: function(callback){
                isCalled = true;
            }
        }
        ORStore.dispatchRegister(dispatcher);
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
                    return ['OR_item', 'add'];
                }
            },
            payload: { OR_id_input: 5, operationType: 'Eye Surgery', patientName: 'nikitha kotha'}
        }

        ORStore.registerEvent(event);
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
                    return ['OR_item', 'delete'];
                }
            },
            payload: { OR_id_input: 5, operationType: 'Eye Surgery', patientName: 'nikitha kotha'}
        }

        ORStore.registerEvent(event);
        expect(isCalled).to.eql(true);
    });
});
