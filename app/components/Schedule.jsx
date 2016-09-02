import React from 'react'
import { render } from 'react-dom'
import Scheduler from './src/scheduler.jsx'
import RangeDate from './src/range_date'
import DateRange from './src/date_range.jsx'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
var Grid = require('react-bootstrap/lib/Grid')
var Row = require('react-bootstrap/lib/Row')
var Col = require('react-bootstrap/lib/Col')
var events =  operationStore.getItems();
var operatingRooms = ORStore.getOR();
var OperationList = require('./OperationList.jsx');

var resources = [];
for (var i = 0; i < operatingRooms.length; i++){
    resources.push(operatingRooms[i].value);
}

var day = new Date(),
    today = new RangeDate(day.setHours(8))
    today = new RangeDate(day.setMinutes(0))

@DragDropContext(HTML5Backend)
class Basic extends React.Component {
    constructor(props) {
        super(props)
        let from = new RangeDate()
        let to = from.advance('hours',8)
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
        operationAction.patch(dispatcher, props);
    }

    eventResized(props) {
        const index = this.state.events.findIndex(event => event.id === props.id)
        const newEvents = this.state.events
        newEvents[index] = props
        this.setState({ ...props, events: newEvents })
        operationAction.patch(dispatcher, props);
    }

    eventClicked(props) {
        alert(`${props.title} clicked!`)
    }

    cellClicked(resource, date) {
        alert(`You clicked on ${resource} - ${date}`)
    }

    rangeChanged(range) {
        this.setState({ range: range })
    }

    render() {

        const { events, range } = this.state,
            { from, to } = range

        var newFrom = from.setHours(8)
       // newForm = newForm.setMinutes(0)
        var newTo = from.setHours(18)
        //newTo = newTo.setMinutes(0)

        return (
            <Scheduler
                from={newFrom}
                to={newTo}
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

ORStore.onChange(function(items){
    resources.length = 0
    for (var i = 0; i < items.length; i++){
        resources.push(items[i].value);
    }
})


