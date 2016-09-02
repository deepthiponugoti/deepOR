describe('Dispatcher test', function () {   
  afterEach(function() {
    listeners = {};
  });
  
 it('canary is passing', function () {
     expect(true).to.eql(true);
 });
 
 it('check if callback is getting called in register', function(){
     var isCalled = false;
     var callback = function () {
         isCalled = true;
     }
     var id = dispatcher.register(callback);
     var expected = callback;
     expect(listeners[id]).to.eql(expected);
 });
 
 it('test for dispatch', function (done) {
     var event = {}
                         
     var callback = function (thearg) {
       expect(thearg).to.be.eql(event);
       done();
     }
 
     dispatcher.register(callback);
     dispatcher.dispatch(event);
     expect(isCalled).to.eql(true);
 });
});