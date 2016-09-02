var React = require('react');
var Modal = require('react-bootstrap/lib/Modal')
var Button = require('react-bootstrap/lib/Button')
var Input = require('react-bootstrap/lib/Input')
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar')
var DateTimeField = require('react-datetime');
import RangeDate from './src/range_date'
var Select = require('react-select')
var ORItems = ORStore.getOR();
var PatientItems = patientStore.getPatientItems();
var SurgeonItems= surgeonStore.getSurgeons();
var SurgeryTypes= SurgeryTypeStore.getSurgeryTypes();

var yesterday = DateTimeField.moment().subtract(1,'day');
var valid = function( current ) {
    return current.isAfter(yesterday);
}

module.exports = React.createClass({
    getInitialState:function(){
        return {
            title:"",
            surgeonName:"",
            patientName:"",
            typeOfSurgery:"",
            duration:"",
            resource:"",
            startDate:"1",
            error: false
        };
    },
    handleTitle:function(e){
        this.setState({title : e.target.value});

    },

    handleSurgeonName:function(e){
        this.setState({surgeonName: e})
    },

    handlePatientName:function(e){
        this.setState({patientName : e});

    },

    handleTypeOfSurgery:function(e){
        this.setState({typeOfSurgery : e});

    },

    handleDuration:function(e){
        this.setState({duration : e.target.value});

    },

    handleResource:function(e){
        //this.setState({resource : e.target.value});
         this.setState({resource : e});
    },

    handleStartDate:function(e){
        var date = new RangeDate(e._d)
        this.setState({startDate : date.toRef()});
    },

    addItem:function(e){
        e.preventDefault();

        if(this.validationState()) {
            var guid = Guid.create();
            if(this.state.duration == null)
            {
                this.state.duration = "1"
            }
            operationAction.add(dispatcher, {
                operationName: this.state.title,
                surgeonName: this.state.surgeonName,
                patientName: this.state.patientName,
                typeOfSurgery: this.state.typeOfSurgery,
                duration: this.state.duration,
                resource: this.state.resource,
                title: this.state.title,
                startDate: this.state.startDate,
                id: guid.value,
                _id: guid.value
            });

            this.setState({
                title: "",
                patientName: "",
                surgeonName:"",
                typeOfSurgery: "",
                duration: "",
                resource: "",
                startDate: "1"
            });
            this.hideModal();
        }
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
        let length = this.state.title.length,
            length2 = this.state.patientName.length,
            length3 = this.state.typeOfSurgery.length

        if(length >0 && length2 >0 && length3 >0)

            return true;
        else return false;
    },

    render:function(){
        return(
            <div className="myDiv">
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large" onClick={this.showModal}>
                        Add Operation
                    </Button>

                    <Modal
                        {...this.props}
                        show={this.state.show}
                        onHide={this.hideModal}
                        sSize="small">
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title-lg">Add Operation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={this.addItem}>
                                Operation Name:
                                <Input
                                    type="text"
                                    onChange={this.handleTitle} />
                                <br/>

                                Surgeon Name:
                                <Select
                                    options={SurgeonItems}
                                    value={this.state.surgeonName}
                                    onChange={this.handleSurgeonName}
                                    searchable='True' />
                                <br/>

                                Patient Name:
                                <Select
                                    options={PatientItems}
                                    value={this.state.patientName}
                                    onChange={this.handlePatientName}
                                    searchable='True' />
                                <br/>

                                Type of Surgery:

                                <Select
                                    options={SurgeryTypes}
                                    value={this.state.typeOfSurgery}
                                    onChange={this.handleTypeOfSurgery}
                                    searchable='True' />
                                <br/>
                                Start Date
                                <DateTimeField
                                    onChange={this.handleStartDate}
                                    isValidDate={ valid } />
                                <br/>

                                Operating Room:
                                <Select
                                    options={ORItems}
                                    value={this.state.resource}
                                    onChange={this.handleResource}
                                    searchable='True' />
                                <br/>

                                Duration:
                                <Input
                                    type='number'
                                    onChange={this.handleDuration} />
                                <br/>

                                <Button className="btn-primary" type="submit" >Add Item</Button>
                            </form>

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

ORStore.onChange(function(items){
    ORItems = items;
})

patientStore.onChange(function(items){
    PatientItems = items;
})

surgeonStore.onChange(function(items){
    SurgeonItems = items;
})

SurgeryTypeStore.onChange(function(items)
{
    SurgeryTypes = items;
})

