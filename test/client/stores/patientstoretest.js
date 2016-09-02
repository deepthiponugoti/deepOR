describe('PatientStore test', function () {
    it('add a patient item', function(){

        var expected = [{ patientID: 4, operationType: 'Heart Surgery', patientName: 'xx yy'}];

        patientStore.addPatientItems({
            patientID: 4,
            patientName: "xx yy",
            operationType: "Heart Surgery"
        });
        expect(patientStore.getPatientItems()).to.eql(expected);
    });

    it('delete a patient item', function(){
        var expected = [];
        patientStore.deletePatientItems({ patientID: 4, operationType: 'Heart Surgery', patientName: 'xx yy'});

        expect(patientStore.getPatientItems()).to.eql(expected);
    });

    it('on change test', function(){
        var isListen = false;

        patientStore.onChange(function(items){
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

        patientStore.triggerListeners(listeners);
        expect(itemsList).to.eql(expected);

    });

    it('dispatcher register test', function(){
        var isCalled = false;
        var dispatcher = {
            register: function(callback){
                isCalled = true;
            }
        }
        patientStore.dispatcherRegister(dispatcher);
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
                    return ['patient_item', "add"];
                }
            },
            payload: { patientID: 5, operationType: 'Eye Surgery', patientName: 'nikitha kotha'}
        }

        patientStore.registerEvent(event);
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
                    return ['patient_item', "delete"];
                }
            },
            payload: { patientID: 5, operationType: 'Eye Surgery', patientName: 'nikitha kotha'}
        }

        patientStore.registerEvent(event);
        expect(isCalled).to.eql(true);
    });
});
