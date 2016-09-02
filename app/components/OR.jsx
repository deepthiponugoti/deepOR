var React = require('react');
var action = require('./../actions/ORActionCreator.jsx');
var ORE = require('./OperationRoomEfficiency.jsx');
var Table = require('react-bootstrap/lib/Table')
var OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger')
var Modal = require('react-bootstrap/lib/Modal')
var Stats = require('./Stats.jsx')

module.exports = React.createClass({

    render:function(){
        return(
                <div className="or-container">
                    <h3>{"Operating Room: "+ this.props.operationRoom.OR_room_input}</h3>
                    <ORE efficiency = {Math.round((this.props.operationRoom.OR_up_time / (this.props.operationRoom.OR_up_time + this.props.operationRoom.OR_down_time)) * 100)} />
                    <Stats ORvalue={this.props.operationRoom.value} />
                    <h5>Status: {this.props.operationRoom.OR_status_input}</h5>
                </div>
        )
    }
})