describe('LoginStore test', function () {
    afterEach(function() {
        LoginStore.setListeners([]);
        LoginStore.setUserData([]);
    });

    it('on change test', function(){
        var isListen = false;

        var listenersArray = LoginStore.onChange(isListen);

        expect(listenersArray).to.eql([false]);
    });

    it('get items test', function(){
        expect(LoginStore.getItems()).to.eql([]);
    });

    it('trigger listener test', function(){
        var itemsList = [];
        var listener1 = function(items){
            itemsList = items;
        }
        var listeners = [listener1];

        var expected = [];

        LoginStore.triggerListeners(listeners);
        expect(itemsList).to.eql(expected);

    });

    it('helperCall test', function(){
        var isCalled = false;
        var restHelper = {
            get: function(){
                return this;
            },
            then: function(callback){
                isCalled = true;
            }
        }

        LoginStore.helperCall(restHelper);
        expect(isCalled).to.eql(true);

    });

    it('update user data test', function(){
        var isListen = [false];

        LoginStore.updateUserData(isListen);

        expect(LoginStore.getItems()).to.eql([false]);
    });
});
