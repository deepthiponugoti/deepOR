var React = require('react')
var d3 = require('d3')
//var D3Donut = require('./D3Donut.jsx')

var tau = Math.PI * 2;

// D3.js Donut Graph
var D3Donut = function() {};
D3Donut.prototype.create = function(el, props, state) {
    var self = this;
    var width = props.width;
    var height = props.height;
    var radius = Math.min(width, height) / 2;

    var arc = this.arc = d3.svg.arc()
        .innerRadius(radius - 10)
        .outerRadius(radius - 40)
        .startAngle(0);

    var svg = this.svg = d3.select(el).append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('class', 'd3-points')
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");;

    this.percent = 0;

    var text = this.text = svg.append("text")
        .attr("text-anchor", "middle")
        .attr("font-size", "20px");
    var background = svg.append("path")
        .datum({endAngle: tau})
        .style("fill", "#ddd")
        .attr("d", arc);

    var color = d3.scale.category20();

    this.foreground = svg.append("path")
        .datum({endAngle: tau * (this.percent / 100)})
        .style("fill", function(d, i) { return color(i); })
        .attr("d", arc);

    setTimeout(function() {
        self.update(el, props, state);
    }, 450);
    // this.update(el, props, state);
};
D3Donut.prototype.update = function(el, props, state) {
    this.text.text(state.percent + "%")

    if (this.percent === state.percent) return;
    this._draw(el, props, state.percent);
    this.percent = state.percent;
};
D3Donut.prototype.destroy = function(el) {
};
D3Donut.prototype._arcTween = function(transition, newAngle) {
    var arc = this.arc;
    transition.attrTween("d", function(d) {
        var interpolate = d3.interpolate(d.endAngle, newAngle);
        return function(t) {
            d.endAngle = interpolate(t);
            return arc(d);
        };

    });
};
D3Donut.prototype._draw = function(el, props, newPercent) {

    this.foreground.transition()
        .duration(750)
        .call(this._arcTween.bind(this), tau * (newPercent / 100));
};


// Donut Graph React component
module.exports = React.createClass({
    getInitialState: function() {
        return {
            donut: new D3Donut(),
        }
    },
    propTypes: {
        percent: React.PropTypes.number,
    },
    getChartState: function() {
        return {
            percent: this.props.percent,
        };
    },
    componentDidMount: function() {
        var donut = this.state.donut;
        var el = this.getDOMNode();

        donut.create(el, {
            width: 200,
            height: 200,
        }, this.getChartState());
    },
    componentDidUpdate: function() {
        var donut = this.state.donut;
        var el = this.getDOMNode();
        donut.update(el, {
            width: 200,
            height: 200,
        }, this.getChartState());
    },
    render: function() {
        return (
            <div className="chart"></div>
        );
    },
});