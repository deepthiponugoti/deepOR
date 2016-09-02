var expect = require('chai').expect;
var sinon = require('sinon');
var express = require('express');
var Operation = require('./../../server/models/Operation.js');
var operations = require('./../../server/routes/operations.js')

describe('operations routes test', function() {
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

        operations(app);
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

        it('should register route for path /api/operations', function() {
            expect(app.route.calledWith('/api/operations')).to.be.true;
        });

        it('get handler should call find on Operation and return the result', function(done) {
            var handler = get.firstCall.args[0];

            var req = {};
            var res = stubResSend('stuff', done);

            var findStub = sandbox.stub(Operation, 'find');
        handler(req, res);

        var callback = findStub.firstCall.args[0];

        callback(null, 'stuff');
    });

    it('should register route for path /api/operations/:id', function() {
        expect(app.route.calledWith('/api/operations/:id')).to.be.true;
    });

    it('delete handler should call find on Operation and remove the result', function() {
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

        var findStub = sandbox.stub(Operation, 'findOne').returns(dummy);
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

        var findStub = sandbox.stub(Operation, 'findOne');
        handler(req, res);
        var handler2 = findStub.firstCall.args[1];
        handler2(null, doc);

        expect(isCalled).to.be.eql(true);
    });
});
