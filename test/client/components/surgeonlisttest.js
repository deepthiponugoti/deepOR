//require('./mockdom')('<html><body></body></html>');
//
//var jsdom = require('mocha-jsdom');
//var React = require('react');
//var TestUtils = require('react-addons-test-utils');
//
//describe('Testing operation', function() {
//    jsdom({ skipWindowCheck: true });
//    var SurgeonList = require('../../../app/components/SurgeonList.jsx');
//
//    it('div should match class', function() {
//        var mapFn = function(surgeon, index){
//        }
//        var myDiv = TestUtils.renderIntoDocument(
//            <SurgeonList surgeon ="{surgeon_ID: 1}" items="{map: mapFn}"/>
//        );
//        var divText = TestUtils.findRenderedDOMComponentWithTag(myDiv, 'div');
//
//        expect(divText.className).to.be.eql('myDiv');
//    });
//});