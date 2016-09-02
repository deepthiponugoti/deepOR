var React = require('react')
var d3 = require('d3')
var DonutGraph = require('./DonutGraph.jsx')

module.exports = React.createClass({
    getInitialState: function() {
        return {efficiency: 0};
    },

    propTypes: {
        efficiency: React.PropTypes.number,
    },
    getChartState: function() {
        return {
            efficiency: this.props.efficiency,
        };
    },

    render: function() {
        var donut;

        if(this.props.efficiency == undefined)
            donut = <DonutGraph percent = {0} />;

        if (this.props.efficiency !== undefined) {
            donut = <DonutGraph percent={this.props.efficiency} />;
        }
        return (
            <div className="sleep">

                <div>
                    Room Efficiency<br />

                </div>

                {donut}

            </div>
        );
        },
});