import React from 'react'
import { render } from 'react-dom'
import Scheduler from './src/scheduler.jsx'
import RangeDate from './src/range_date'
import DateRange from './src/date_range.jsx'
var Grid = require('react-bootstrap/lib/Grid')
var Row = require('react-bootstrap/lib/Row')
var Col = require('react-bootstrap/lib/Col')
var OperationList = require('./OperationList.jsx');
var operationStore = require('./../stores/OperationStore.jsx');

var resources = ['one', 'two', 'three', 'four', 'five'],
    day = new Date(),
    today = new RangeDate(day.setHours(8)),
    events = operationStore.getItems();
    // events =
    // [{
    //     operationName: "Store",
    //     patientName: "Adrian Garcia",
    //     typeOfSurgery: "Open Heart",
    //     id: 'bar',
    //     title: 'From the Store',
    //     startDate: today.advance('hours', 1).toRef(),
    //     duration: 5,
    //     resource: 'two'
    // },{
    //     operationName: "Store",
    //     patientName: "Adrian Garcia",
    //     typeOfSurgery: "Open Heart",
    //     id: 'foo',
    //     title: 'Also from Store',
    //     startDate: today.advance('hours', 3).toRef(),
    //     duration: 5,
    //     resource: 'three'
    // }];

class Basic extends React.Component {
    constructor(props) {
        super(props)
        let from = new RangeDate()
        let to = from.advance('hours', 10)
        this.state = {
            events: props.events,
            range: new DateRange(from, to)
        }
    }

    eventChanged(props) {
        const index = this.state.events.findIndex(event => event.id === props.id)
        const newEvents = this.state.events
        newEvents[index] = props
        this.setState({ ...props, events: newEvents })
        //console.log(props)
    }

    eventResized(props) {
        const index = this.state.events.findIndex(event => event.id === props.id)
        const newEvents = this.state.events
        newEvents[index] = props
        this.setState({ ...props, events: newEvents })
        //console.log(props)
    }

    eventClicked(props) {
        alert(`${props.title} clicked!`)
        //console.log(props)
    }

    cellClicked(resource, date) {
        alert(`You clicked on ${resource} - ${date}`)
        //console.log(resource, date)
    }

    rangeChanged(range) {
        this.setState({ range: range })
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={2} md={2}><OperationList items={events}/></Col>
                    <Col xs={10} md={10}>
                        <Scheduler
                            from={today}
                            to={today.advance('weeks',2)}
                            resources={resources}
                            events={events}
                            width={930}
                            rowHeight={50}
                            onEventChanged={::this.eventChanged}
                            onEventResized={::this.eventResized}
                            onEventClicked={::this.eventClicked}
                            onCellClicked={::this.cellClicked}
                            onRangeChanged={::this.rangeChanged}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }

}

module.exports = React.createClass({
    render: function () {
        return (
            <Basic resources={resources} events={events}/>

        )
    }
})
    
operationStore.onChange(function(items){
    events = items
})
      
