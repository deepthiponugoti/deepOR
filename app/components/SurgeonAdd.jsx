var React = require('react');
var Modal = require('react-bootstrap/lib/Modal')
var Button = require('react-bootstrap/lib/Button')
var Input = require('react-bootstrap/lib/Input')
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar')
var validator = require('validator');
var ValidatedInput = require('react-bootstrap-validation/lib/ValidatedInput');
var Form = require('react-bootstrap-validation/lib/Form');

module.exports = React.createClass({
    handleSurgeonID:function(e){
        this.setState({surgeon_ID : e.target.value});
    },

    handleSurgeonSpecialty:function(e){
        this.setState({surgeon_specialty : e.target.value});

    },

    handleSurgeonFirst:function(e){
        this.setState({surgeon_first : e.target.value});

    },

    handleSurgeonLast:function(e){
        this.setState({surgeon_last : e.target.value});

    },

    addSurgeon:function(e){
            surgeonAction.add(dispatcher, {
                value:this.state.surgeon_ID,
                label:this.state.surgeon_first+" "+this.state.surgeon_last,
                surgeon_ID: this.state.surgeon_ID,
                surgeon_specialty: this.state.surgeon_specialty,
                surgeon_first: this.state.surgeon_first,
                surgeon_last: this.state.surgeon_last
            });

            this.setState({
                value:"",
                label:"",
                surgeon_ID: "",
                surgeon_specialty: "",
                surgeon_first: "",
                surgeon_last: ""
            });
            this.hideModal();
        
    },
    getInitialState() {
        return {show: false};
    },

    showModal() {
        this.setState({show: true});
    },

    hideModal() {
        this.setState({show: false});
    },

    validationState: function(){
        "use strict";
        let length = this.state.surgeon_ID.length,
            length2 = this.state.surgeon_specialty.length,
            length3 = this.state.surgeon_first.length,
            length4 = this.state.surgeon_last.length

        if(length >0 && length2 >0 && length3 >0 && length4 >0)

            return true;
        else return false;
    },

    render:function(){
        return(
            <div className="myDiv">
                <ButtonToolbar className="myButton">
                    <Button bsStyle="primary" bsSize="large" onClick={this.showModal}>
                        Add Surgeon
                    </Button>

                    <Modal
                        {...this.props}
                        show={this.state.show}
                        onHide={this.hideModal}
                        sSize="small">
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title-lg">Add Surgeon</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onValidSubmit={this.addSurgeon}>

                                <ValidatedInput
                                    onChange={this.handleSurgeonID}
                                    type='text'
                                    label='Surgeon ID: '
                                    name='surgeonID'
                                    validate='required'
                                    errorHelp={{
                                    required: 'Please enter Surgeon ID'
                        }} />

                                <ValidatedInput
                                    onChange={this.handleSurgeonFirst}
                                    type='text'
                                    label='First Name: '
                                    name='surgeonFirst'
                                    validate='required'
                                    errorHelp={{
                                    required: 'Please enter First Name'
                        }} />

                                <ValidatedInput
                                    onChange={this.handleSurgeonLast}
                                    type='text'
                                    label='Last Name: '
                                    name='surgeonLast'
                                    validate='required'
                                    errorHelp={{
                                    required: 'Please enter Last Name'
                        }} />

                                <ValidatedInput
                                    onChange={this.handleSurgeonSpecialty}
                                    type='text'
                                    label='Surgeon Specialty: '
                                    name='surgeonSpecialty'
                                    validate='required'
                                    errorHelp={{
                                    required: 'Please enter Surgeon Specialty'
                        }} />
                                <Button className="btn-primary" type="submit" >Add Surgeon</Button>
                            </Form>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.hideModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </ButtonToolbar>
            </div>


        )
    }
})
