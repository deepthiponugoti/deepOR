require('./mockdom')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing operation', function() {
    jsdom({ skipWindowCheck: true });
    var Surgeon = require('../../../app/components/Surgeon.jsx');

it('div should match class', function() {
    var myDiv = TestUtils.renderIntoDocument(
        <Surgeon surgeon ="{surgeon_ID: 1}"/>
    );
    var divText = TestUtils.findRenderedDOMComponentWithTag(myDiv, 'div');

    expect(divText.className).to.be.eql('divList');
});
});