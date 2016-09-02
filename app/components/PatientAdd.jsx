var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var Input = require('react-bootstrap/lib/Input');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
var validator = require('validator');
var ValidatedInput = require('react-bootstrap-validation/lib/ValidatedInput');
var Form = require('react-bootstrap-validation/lib/Form');

module.exports = React.createClass({
    handleIDInput: function (e) {
        this.setState({patientID: e.target.value});
    },

    handleFirstInput: function (e) {
        this.setState({patientFirst: e.target.value});
    },

    handleLastInput: function (e) {
        this.setState({patientLast: e.target.value});
    },

    handleGenderInput: function (e) {
        this.setState({patientGender: e.target.value});
    },

    handleBirthDateInput: function (e) {
        this.setState({patientBirthDate: e.target.value});
    },

    handleSocialInput: function (e) {
        this.setState({patientSocial: e.target.value});
    },

    handleDonorInput: function (e) {
        this.setState({patientDonor: e.target.value});
    },

    handleAddressInput: function (e) {
        this.setState({patientAddress: e.target.value});
    },

    handlePhoneInput: function (e) {
        this.setState({patientPhone: e.target.value});
    },

    addPatientItems: function (e) {
        patientAction.add(dispatcher, {
            value:this.state.patientFirst+" "+this.state.patientLast,
            label:this.state.patientFirst+" "+this.state.patientLast,
            patientID: this.state.patientID,
            patientFirst: this.state.patientFirst,
            patientLast: this.state.patientLast,
            patientGender: this.state.patientGender,
            patientBirthDate: this.state.patientBirthDate,
            patientSocial: this.state.patientSocial,
            patientDonor: this.state.patientDonor,
            patientAddress: this.state.patientAddress,
            patientPhone: this.state.patientPhone
        });

        this.setState({
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
        });
        this.hideModal();

    },

    getInitialState(){
        return {show: false};
    },

    showModal(){
        this.setState({show: true});
    },

    hideModal(){
        this.setState({show: false});
    },

    validationState: function () {
        "use strict";
        let length = this.state.patientID.length,
            length1 = this.state.patientFirst.length,
            length2 = this.state.patientLast.length,
            length3 = this.state.patientGender.length,
            length4 = this.state.patientBirthDate.length,
            length5 = this.state.patientSocial.length,
            length6 = this.state.patientDonor.length,
            length7 = this.state.patientAddress.length,
            length8 = this.state.patientPhone.length;
        if (length > 0 && length1 > 0 && length2 > 0 && length3 > 0 && length4 > 0 && length5 > 0 && length6 > 0 && length7 > 0 && length8 > 0)

            return true;
        else return false;
    },

    render: function () {
        return (
            <div className="myDiv">
                <ButtonToolbar>
                    <Button bsStyle = "primary" bsSize = "large" onClick = {this.showModal}>
                        Add Patient
                    </Button>
                    <Modal
                        {...this.props}
                        show = {this.state.show}
                        onHide = {this.hideModal}
                        sSize = "small">
                        <Modal.Header>
                            <Modal.Title id = "contained-modal-title-lg">Add Patient</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onValidSubmit = {this.addPatientItems}>

                                <ValidatedInput
                                    onChange = {this.handleIDInput}
                                    type = 'text'
                                    label = 'Patient ID: '
                                    name = 'patientID'
                                    validate = 'required'
                                    errorHelp = {{
                                    required: 'Please enter Patient ID'
                        }}/>

                                <ValidatedInput
                                    onChange = {this.handleFirstInput}
                                    type = 'text'
                                    label = 'First Name: '
                                    name = 'patientFirst'
                                    validate = 'required'
                                    errorHelp = {{
                                    required: 'Please enter First Name'
                        }}/>

                                <ValidatedInput
                                    onChange = {this.handleLastInput}
                                    type = 'text'
                                    label = 'Last Name: '
                                    name = 'patientLast'
                                    validate = 'required'
                                    errorHelp = {{
                                    required: 'Please enter Last Name'
                        }}/>

                                <ValidatedInput
                                    onChange = {this.handleGenderInput}
                                    type = 'select'
                                    label = 'Gender: '
                                    name = 'patientGender'
                                    validate = 'required'
                                    errorHelp = {{
                                    required: 'Please enter Gender'
                        }}>
                                    <option value = "">Select...</option>
                                    <option value = "Male">Male</option>
                                    <option value = "Female">Female</option>

                                </ValidatedInput>

                                <ValidatedInput
                                    onChange = {this.handleBirthDateInput}
                                    type = 'date'
                                    label = 'Birth Date:'
                                    name = 'patientBirthDate'
                                    validate = 'required'
                                    errorHelp = {{
                                    required: 'Please enter Birth Date'
                        }}/>

                                <ValidatedInput
                                    onChange = {this.handleSocialInput}
                                    type = 'text'
                                    label = 'Social Security: '
                                    name = 'patientSS'
                                    validate = 'required'
                                    errorHelp = {{
                                    required: 'Please enter Social Security'
                        }}/>

                                <ValidatedInput
                                    onChange = {this.handleDonorInput}
                                    type = 'select'
                                    label = 'Is Patient an Organ Donor?'
                                    name = 'patientOrganDonor'
                                    validate = 'required'
                                    errorHelp = {{
                                    required: 'Please answer if Patient is an Organ Donor'
                        }}>
                                    <option value = "">Select...</option>
                                    <option value = "Yes">Yes</option>
                                    <option value = "No">No</option>


                                </ValidatedInput>

                                <ValidatedInput
                                    onChange = {this.handleAddressInput}
                                    type = 'text'
                                    label = 'Address: '
                                    name = 'patientAddress'
                                    validate = 'required'
                                    errorHelp = {{
                                    required: 'Please enter Address'
                        }}/>

                                <ValidatedInput
                                    onChange = {this.handlePhoneInput}
                                    type = 'text'
                                    label = 'Phone Number: '
                                    name = 'patientPhone'
                                    validate = 'required'
                                    errorHelp = {{
                                    required: 'Please enter Phone Number'
                        }}/>

                                <Button type = "submit" bsStyle = "primary">Add Patient</Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick = {this.hideModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </ButtonToolbar>
            </div>
        );
    }
});

