require('./mockdom')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var ReactDOM = require('react-dom');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing surgeon add', function() {
    jsdom({ skipWindowCheck: true });
    var SurgeonAdd = require('../../../app/components/SurgeonAdd.jsx');

    it('div should match class', function() {
        var myDiv = TestUtils.renderIntoDocument(
            <SurgeonAdd surgeon ="{surgeon_ID: 1}"/>
        );
        var divClass = TestUtils.scryRenderedDOMComponentsWithTag(myDiv, 'div');

        expect(divClass[0].className).to.be.eql('myDiv');
    });

    it('Button should match text', function() {
        this.renderedComponent = TestUtils.renderIntoDocument(
            <SurgeonAdd show={false} surgeon ="{surgeon_ID: 1}"/>
        );
        this.renderedDOM = () => ReactDOM.findDOMNode(this.renderedComponent);
        let renderedButtons = this.renderedDOM().querySelectorAll("Button");
        expect(renderedButtons[0].textContent).to.be.eql('Add Surgeon');
    });

    it('getInitialState test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <SurgeonAdd surgeon ="{surgeon_ID: 1}"/>
        );

        expect(myComponent.getInitialState()).to.be.eql({show: false});
    });

    it('handle surgeon id test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <SurgeonAdd/>
        );
        myComponent.handleSurgeonID({target: {value: 5}})
        expect(myComponent.state.surgeon_ID).to.be.eql(5);
    });

    it('handle surgeon speciality test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <SurgeonAdd/>
        );
        myComponent.handleSurgeonSpecialty({target: {value: "eye"}})
        expect(myComponent.state.surgeon_specialty).to.be.eql("eye");
    });

    it('handle surgeon first test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <SurgeonAdd/>
        );
        myComponent.handleSurgeonFirst({target: {value: "deepthi"}})
        expect(myComponent.state.surgeon_first).to.be.eql("deepthi");
    });

    it('handle surgeon last test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <SurgeonAdd/>
        );
        myComponent.handleSurgeonLast({target: {value: "ponugoti"}})
        expect(myComponent.state.surgeon_last).to.be.eql("ponugoti");
    });

    it('show modal test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <SurgeonAdd/>
        );
        myComponent.showModal();
        expect(myComponent.state.show).to.be.eql(true);
    });

    it('hide modal test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <SurgeonAdd/>
        );
        myComponent.hideModal();
        expect(myComponent.state.show).to.be.eql(false);
    });

    it('validation State false test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <SurgeonAdd/>
        );
        myComponent.state = {
            surgeon_ID: "",
            surgeon_specialty: "",
            surgeon_first: "",
            surgeon_last: ""
        };
        expect(myComponent.validationState()).to.be.eql(false);
    });

    it('validation State true test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <SurgeonAdd/>
        );
        myComponent.state = {
            surgeon_ID: "1",
            surgeon_specialty: "eye",
            surgeon_first: "deep",
            surgeon_last: "ponugoti"
        };
        expect(myComponent.validationState()).to.be.eql(true);
    });

    it('add surgeon test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <SurgeonAdd/>
        );
        myComponent.addSurgeon();
        surgeonStore.setSurgeons([]);
        expect(myComponent.state.value).to.be.eql("");
    });
});
