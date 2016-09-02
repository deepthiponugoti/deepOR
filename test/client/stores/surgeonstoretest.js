describe('SurgeonStore test', function () {
    it('add a surgeon item', function(){

        var expected = [{ surgeon_ID: 4, surgeonType: 'Heart Surgery', surgeonName: 'xx yy'}];

        surgeonStore.addSurgeonItem({
            surgeon_ID: 4,
            surgeonName: "xx yy",
            surgeonType: "Heart Surgery"
        });
        expect(surgeonStore.getSurgeons()).to.eql(expected);
    });

    it('delete a surgeon item', function(){
        var expected = [];
        surgeonStore.deleteSurgeonItem({ surgeon_ID: 4, surgeonType: 'Heart Surgery', surgeonName: 'xx yy'});

        expect(surgeonStore.getSurgeons()).to.eql(expected);
    });

    it('on change test', function(){
        var isListen = false;

        surgeonStore.onChange(function(items){
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

        surgeonStore.triggerListeners(listeners);
        expect(itemsList).to.eql(expected);

    });

    it('dispatcher register test', function(){
        var isCalled = false;
        var dispatcher = {
            register: function(callback){
                isCalled = true;
            }
        }
        surgeonStore.dispatcherRegister(dispatcher);
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
                    return ['surgeon_item', "add"];
                }
            },
            payload: { surgeon_ID: 5, surgeonType: 'Eye Surgery', surgeonName: 'nikitha kotha'}
        }

        surgeonStore.registerEvent(event);
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
                    return ['surgeon_item', "delete"];
                }
            },
            payload: { surgeon_ID: 5, surgeonType: 'Eye Surgery', surgeonName: 'nikitha kotha'}
        }

        surgeonStore.registerEvent(event);
        expect(isCalled).to.eql(true);
    });
});
