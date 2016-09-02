require('./mockdom')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing patient', function() {
    jsdom({ skipWindowCheck: true});
    var Patient = require('../../../app/components/Patient.jsx');
it('table property matching', function() {
    var myTable = TestUtils.renderIntoDocument(
        <Patient patient = "{patientID}"/>
    );
    var tableComponent = TestUtils.findRenderedDOMComponentWithTag(myTable, 'table');

    expect(tableComponent.cellPadding).to.be.eql('0');
    });
});

