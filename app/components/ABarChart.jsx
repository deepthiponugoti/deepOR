var React = require('react')
var rd3 = require('react-d3')
var BarChart = rd3.BarChart;


var barData = [
    {
        "name": "Weekly",
        "values": [
            { "x": "05/01/2016", "y":  26},
            { "x": "05/02/2016", "y":  22},
            { "x": "05/03/2016", "y":  30},
            { "x": "05/04/2016", "y":  0},
            { "x": "05/05/2016", "y":  0},
            { "x": "05/06/2016", "y":  0},
            { "x": "05/07/2016", "y":  0}]
    }];


module.exports = React.createClass(
    {
        render: function () {
            return (<BarChart
                data={barData}
                width={800}
                height={300}
                fill={'#3182bd'}
                title='Weekly Turnover Rate'
            />);
        }
    });
