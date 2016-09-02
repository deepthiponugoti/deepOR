describe('Operation action creator test', function () {
    it('check if dispatcher dispatch is getting called in add', function(){
        var isCalled = false;
        var dispatcher = {
            dispatch: function(event){
                isCalled = true;
            }
        };

        operationAction.add(dispatcher, {});;
        expect(isCalled).to.eql(true);
    });

    it('check if dispatcher dispatch is getting called in delete', function(){
        var isCalled = false;
        var dispatcher = {
            dispatch: function(event){
                isCalled = true;
            }
        };

        operationAction.delete(dispatcher, {});;
        expect(isCalled).to.eql(true);
    });
});