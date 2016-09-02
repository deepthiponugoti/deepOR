require('./mockdom')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var ReactDOM = require('react-dom');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing stats add', function() {
    jsdom({ skipWindowCheck: true });
    var Stats = require('../../../app/components/Stats.jsx');

    it('div should match class', function() {
        var myDiv = TestUtils.renderIntoDocument(
            <Stats/>
        );
        var divClass = TestUtils.scryRenderedDOMComponentsWithTag(myDiv, 'div');

        expect(divClass[0].className).to.be.eql('myDiv');
    });

    it('Button should match text', function() {
        this.renderedComponent = TestUtils.renderIntoDocument(
            <Stats/>
        );
        this.renderedDOM = () => ReactDOM.findDOMNode(this.renderedComponent);
        let renderedButtons = this.renderedDOM().querySelectorAll("Button");
        expect(renderedButtons[0].textContent).to.be.eql('Stats');
    });

    it('getInitialState test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <Stats/>
        );

        expect(myComponent.getInitialState()).to.be.eql({show: false});
    });

    it('show modal test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <Stats/>
        );
        myComponent.showModal();
        expect(myComponent.state.show).to.be.eql(true);
    });

    it('hide modal test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <Stats/>
        );
        myComponent.hideModal();
        expect(myComponent.state.show).to.be.eql(false);
    });
});
