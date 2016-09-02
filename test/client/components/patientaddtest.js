require('./mockdom')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var ReactDOM = require('react-dom');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing patient add', function() {
    jsdom({ skipWindowCheck: true });
    var PatientAdd = require('../../../app/components/PatientAdd.jsx');

    it('div should match class', function() {
        var myDiv = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        var divClass = TestUtils.scryRenderedDOMComponentsWithTag(myDiv, 'div');

        expect(divClass[0].className).to.be.eql('myDiv');
    });

    it('Button should match text', function() {
        this.renderedComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        this.renderedDOM = () => ReactDOM.findDOMNode(this.renderedComponent);
        let renderedButtons = this.renderedDOM().querySelectorAll("Button");
        expect(renderedButtons[0].textContent).to.be.eql('Add Patient');
    });

    it('getInitialState test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );

        expect(myComponent.getInitialState()).to.be.eql({show: false});
    });

    it('handle id test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        myComponent.handleIDInput({target: {value: 5}})
        expect(myComponent.state.patientID).to.be.eql(5);
    });

    it('handle patient gender test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        myComponent.handleGenderInput({target: {value: "F"}})
        expect(myComponent.state.patientGender).to.be.eql("F");
    });

    it('handle patient first test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        myComponent.handleFirstInput({target: {value: "deepthi"}})
        expect(myComponent.state.patientFirst).to.be.eql("deepthi");
    });

    it('handle patient last test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        myComponent.handleLastInput({target: {value: "ponugoti"}})
        expect(myComponent.state.patientLast).to.be.eql("ponugoti");
    });

    it('handle birthdate test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        myComponent.handleBirthDateInput({target: {value: "03/21/1991"}})
        expect(myComponent.state.patientBirthDate).to.be.eql("03/21/1991");
    });

    it('handle social test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        myComponent.handleSocialInput({target: {value: 123456789}})
        expect(myComponent.state.patientSocial).to.be.eql(123456789);
    });

    it('handle address test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        myComponent.handleAddressInput({target: {value: "2111 holly hall apartments"}})
        expect(myComponent.state.patientAddress).to.be.eql("2111 holly hall apartments");
    });

    it('handle phone test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        myComponent.handlePhoneInput({target: {value: 2148032514}})
        expect(myComponent.state.patientPhone).to.be.eql(2148032514);
    });

    it('handle donor test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        myComponent.handleDonorInput({target: {value: "deep"}})
        expect(myComponent.state.patientDonor).to.be.eql("deep");
    });

    it('show modal test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        myComponent.showModal();
        expect(myComponent.state.show).to.be.eql(true);
    });

    it('hide modal test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        myComponent.hideModal();
        expect(myComponent.state.show).to.be.eql(false);
    });

    it('validation State false test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        myComponent.state = {
            value:"",
            label:"",
            patientID: "",
            patientFirst: "",
            patientLast: "",
            patientGender: "",
            patientBirthDate: "",
            patientSocial: "",
            patientDonor: "",
            patientAddress: "",
            patientPhone: ""
        };
        expect(myComponent.validationState()).to.be.eql(false);
    });

    it('validation State true test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        myComponent.state = {
            value:"1",
            label:"a",
            patientID: "2",
            patientFirst: "deep",
            patientLast: "ponugoti",
            patientGender: "F",
            patientBirthDate: "03/21/1991",
            patientSocial: "123456",
            patientDonor: "organ",
            patientAddress: "2111 holly hall",
            patientPhone: "123456789"
        };
        expect(myComponent.validationState()).to.be.eql(true);
    });

    it('add surgeon test', function() {
        var myComponent = TestUtils.renderIntoDocument(
            <PatientAdd/>
        );
        myComponent.addPatientItems();
        patientStore.setPatientItems([]);
        expect(myComponent.state.value).to.be.eql("");
    });
});
