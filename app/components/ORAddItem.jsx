var React = require('react');
var Modal = require('react-bootstrap/lib/Modal')
var Button = require('react-bootstrap/lib/Button')
var Input = require('react-bootstrap/lib/Input')
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar')
var Table = require('react-bootstrap/lib/Table')
var validator = require('validator');
var ValidatedInput = require('react-bootstrap-validation/lib/ValidatedInput');
var Form = require('react-bootstrap-validation/lib/Form');

module.exports = React.createClass({
    getInitialState:function(){
        return {label:"", OR_room_input:""};
    },

    handleLabelInput:function(e){
        this.setState({label:e.target.value});
    },


    handleRoomInput:function(e){
        this.setState({OR_room_input : e.target.value});

    },


    addORItem:function(e){

            orAction.add(dispatcher, {
                label:this.state.label,
                OR_room_input: this.state.OR_room_input
            });

            this.setState({
                label:"",
                OR_room_input: ""
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
        let length = this.state.label,
            length2 = this.state.OR_room_input.length


        if(length >0 && length2 >0)

            return true;
        else return false;
    },

    render:function(){
        return(
            <div className="myDiv">
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large"  onClick={this.showModal}>
                        Add Operating Room
                    </Button>
                    <Modal
                        {...this.props}
                        show={this.state.show}
                        onHide={this.hideModal}
                        sSize="small">
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title-lg">Add Operating Room</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onValidSubmit={this.addORItem}>



                                <ValidatedInput
                                    onChange={this.handleLabelInput}
                                    type='text'
                                    label='Label: '
                                    name='label'
                                    validate='required'
                                    errorHelp={{
                                    required: 'Please enter Label'
                        }} />



                                <ValidatedInput
                                    onChange={this.handleRoomInput}
                                    type='text'
                                    label='Operating Room Number: '
                                    name='orNumber'
                                    validate='required'
                                    errorHelp={{
                                    required: 'Please enter Operating Room Number'
                        }} />

  

                                <Button type="submit" bsStyle="primary">Add OR</Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.hideModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </ButtonToolbar>
            </div>


        );
    }
});
