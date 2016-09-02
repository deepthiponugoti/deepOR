var expect = require('chai').expect;
var sinon = require('sinon');
var express = require('express');
var OperationRoom = require('./../../server/models/OperationRoom.js');
var operationrooms = require('./../../server/routes/operationrooms.js')

describe('operationrooms routes test', function() {
    it('canary test', function() {
        expect(true).to.be.true;
    });

    var sandbox;
    var app;
    var get;
    var post;
    var delete1;
    var patch;

    beforeEach(function() {
        sandbox = sinon.sandbox.create();

        app = express();
        get = sandbox.spy();
        post = sandbox.spy();
        delete1 = sandbox.spy();
        patch = sandbox.spy();

        sandbox.stub(app, 'route').returns({
            get: get,
            post: post,
            delete: delete1,
            patch: patch
        });

        operationrooms(app);
    });

    afterEach(function() {
        sandbox.restore();
    });

    var stubResSend = function(expected, done) {
        return { send: function(data) {
            expect(data).to.be.eql(expected);
            done();
        }};
    }

    it('should register route for path /api/operationrooms', function() {
        expect(app.route.calledWith('/api/operationrooms')).to.be.true;
    });

    it('get handler should call find on OperationRoom and return the result', function(done) {
        var handler = get.firstCall.args[0];

        var req = {};
        var res = stubResSend('stuff', done);

        var findStub = sandbox.stub(OperationRoom, 'find');
        handler(req, res);

        var callback = findStub.firstCall.args[0];

        callback(null, 'stuff');
    });

    it('should register route for path /api/operationRooms/:id', function() {
        expect(app.route.calledWith('/api/operationRooms/:id')).to.be.true;
    });

    it('delete handler should call find on OperationRoom and remove the result', function() {
        var handler = delete1.firstCall.args[0];

        var req = {params: {
            id: {}
        }};
        var res = {};
        var isCalled = false;
        var dummy = {
            remove: function(){
                isCalled = true;
            }
        }

        var findStub = sandbox.stub(OperationRoom, 'findOne').returns(dummy);
        handler(req, res);

        expect(isCalled).to.be.eql(true);
    });

    it('patch handler test', function() {
        var handler = patch.firstCall.args[0];
        var isCalled = false;
        var req = {body: [0]};
        var res = {
            status: function(code){}
        };
        var dummy = {
            send: function(){
                isCalled = true;
            }
        }
        var doc = {
            save: function(){}
        };
        var docStub = sandbox.stub(doc, 'save');
        var resStub = sandbox.stub(res, 'status').returns(dummy);

        var findStub = sandbox.stub(OperationRoom, 'findOne');
        handler(req, res);
        var handler2 = findStub.firstCall.args[1];
        handler2(null, doc);

        expect(isCalled).to.be.eql(true);
    });

    //it('post handler should retrieve OperationRoom and save it', function(done) {
    //    var handler = post.firstCall.args[0];
    //    var isCalled = false;
    //    //var operationRooms = new OperationRoom()
    //    OperationRoom = {
    //        save: function(){}
    //    }
    //    var saveStub = sandbox.stub(OperationRoom, 'save');
    //
    //    var req = {body: {}};
    //    var res = {
    //        status: function(statusCode){
    //            var send = function(){
    //                isCalled = true;
    //            }
    //        }
    //    }
    //
    //    handler(req, res);
    //    var callback = saveStub.firstCall.args[0];
    //
    //    callback(null, {});
    //    expect(isCalled).to.be.eql(true);
    //});
});
