require('./mockdom')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var ReactDOM = require('react-dom');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing surgeon add', function() {
    jsdom({ skipWindowCheck: true });
    var LoginAdd = require('../../../app/components/LoginAddItem.jsx');

    it('div should match class', function() {
        var myDiv = TestUtils.renderIntoDocument(
            <LoginAdd/>
        );
        var divClass = TestUtils.scryRenderedDOMComponentsWithTag(myDiv, 'div');

        expect(divClass[0].className).to.be.eql('myDiv');
    });

    it('Button should match text', function() {
        this.renderedComponent = TestUtils.renderIntoDocument(
            <LoginAdd/>
        );
        this.renderedDOM = () => ReactDOM.findDOMNode(this.renderedComponent);
        let renderedButtons = this.renderedDOM().querySelectorAll("Button");
        expect(renderedButtons[0].textContent).to.be.eql('Add User');
    });

    it('getInitialState test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <LoginAdd/>
        );

        expect(myComponent.getInitialState()).to.be.eql({show: false});
    });

    it('handle user test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <LoginAdd/>
        );
        myComponent.handleUser({target: {value: "deeps"}})
        expect(myComponent.state.user).to.be.eql("deeps");
    });

    it('handle password test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <LoginAdd/>
        );
        myComponent.handlePassword({target: {value: "eye"}})
        expect(myComponent.state.pass).to.be.eql("eye");
    });

    it('show modal test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <LoginAdd/>
        );
        myComponent.showModal();
        expect(myComponent.state.show).to.be.eql(true);
    });

    it('hide modal test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <LoginAdd/>
        );
        myComponent.hideModal();
        expect(myComponent.state.show).to.be.eql(false);
    });

    it('add surgeon test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <LoginAdd/>
        );

        var event = {
            preventDefault: function(){}
        }
        myComponent.addUser(event);
        LoginStore.setUserData([]);
        expect(myComponent.state.user).to.be.eql("");
    });
});
