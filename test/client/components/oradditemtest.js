require('./mockdom')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var ReactDOM = require('react-dom');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing surgeon add', function() {
    jsdom({ skipWindowCheck: true });
    var ORAdd = require('../../../app/components/ORAddItem.jsx');

    it('div should match class', function() {
        var myDiv = TestUtils.renderIntoDocument(
            <ORAdd/>
        );
        var divClass = TestUtils.scryRenderedDOMComponentsWithTag(myDiv, 'div');

        expect(divClass[0].className).to.be.eql('myDiv');
    });

    it('Button should match text', function() {
        this.renderedComponent = TestUtils.renderIntoDocument(
            <ORAdd/>
        );
        this.renderedDOM = () => ReactDOM.findDOMNode(this.renderedComponent);
        let renderedButtons = this.renderedDOM().querySelectorAll("Button");
        expect(renderedButtons[0].textContent).to.be.eql('Add Operating Room');
    });

    it('getInitialState test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <ORAdd/>
        );

        expect(myComponent.getInitialState()).to.be.eql({show: false});
    });

    it('handle label input test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <ORAdd/>
        );
        myComponent.handleLabelInput({target: {value: 5}})
        expect(myComponent.state.label).to.be.eql(5);
    });

    it('handle room input test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <ORAdd/>
        );
        myComponent.handleRoomInput({target: {value: "eye"}})
        expect(myComponent.state.OR_room_input).to.be.eql("eye");
    });

    it('show modal test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <ORAdd/>
        );
        myComponent.showModal();
        expect(myComponent.state.show).to.be.eql(true);
    });

    it('hide modal test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <ORAdd/>
        );
        myComponent.hideModal();
        expect(myComponent.state.show).to.be.eql(false);
    });

    it('validation State false test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <ORAdd/>
        );
        myComponent.state = {
            label:"", OR_room_input:""
        };
        expect(myComponent.validationState()).to.be.eql(false);
    });

    it('validation State true test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <ORAdd/>
        );
        myComponent.state = {
            label:"1", OR_room_input:"2"
        };
        expect(myComponent.validationState()).to.be.eql(true);
    });

    it('add surgeon test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <ORAdd/>
        );
        myComponent.addORItem();
        ORStore.setOR([]);
        expect(myComponent.state.label).to.be.eql("");
    });
});
