// Vendor Libraries chart
import React, { PropTypes, Component } from 'react'

// Local Libraries
import Event from './event.jsx'

// Styles
//import { chart, cellWrapper } from './styles'

var ProductTable = React.createClass({
    render: function() {
        const {filterText, rowHeight, eventChanged, eventResized, eventClicked} = this.props
        return (
            <div>
                {   this.props.products.map(function (operation) {
                    if(operation.startDate == null && operation.title.indexOf(filterText) > -1) {
                        return (
                            <Event
                                {...operation}
                                rowHeight={rowHeight}
                                eventChanged={eventChanged}
                                eventResized={eventResized}
                                eventClicked={eventClicked}
                            />
                        )
                    }
                })
                }
            </div>
        )
    }
});

var SearchBar = React.createClass({
    handleChange: function() {
        this.props.onUserInput(
            this.refs.filterTextInput.value
        );
    },
    render: function() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this.handleChange}
                />
            </form>
        );
    }
});

var FilterableProductTable = React.createClass({
    getInitialState: function() {
        return {
            filterText: ''
        };
    },

    handleUserInput: function(filterText) {
        this.setState({
            filterText: filterText
        });
    },

    render: function() {
        const { rowHeight, eventChanged, eventResized, eventClicked } = this.props
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput}
                />
                <ProductTable
                    rowHeight={rowHeight}
                    eventChanged={eventChanged}
                    eventResized={eventResized}
                    eventClicked={eventClicked}
                    products={this.props.products}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
});

export default class EventsContainer extends Component {
    static propTypes = {
        events: PropTypes.array.isRequired,
        eventChanged: PropTypes.func.isRequired,
        eventResized: PropTypes.func.isRequired,
        eventClicked: PropTypes.func.isRequired,
        rowHeight: PropTypes.number.isRequired,
    }

    render() {
        const { rowHeight, eventChanged, eventResized, eventClicked } = this.props
        {
            return(
                <FilterableProductTable
                     rowHeight={rowHeight}
                     eventChanged={eventChanged}
                     eventResized={eventResized}
                     eventClicked={eventClicked}
                     products={this.props.events} />
            )
        }
    }
}