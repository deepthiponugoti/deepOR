require('./mockdom')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('assert');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Canary test', function() {
    jsdom({ skipWindowCheck: true });

    it('should pass', function() {
        expect(true).to.be.eql(true);
    });
});

describe('Testing operation', function() {
    jsdom({ skipWindowCheck: true });

  it('div should match class', function() {
        var Operation = require('../../../app/components/Operation.jsx');
        var myDiv = TestUtils.renderIntoDocument(
            <Operation operation ="{operationName: 1}"/>
        );
        var divText = TestUtils.findRenderedDOMComponentWithTag(myDiv, 'div');

        expect(divText.className).to.be.eql('');
  });
});