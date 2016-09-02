var React = require('react');
var Patient = require('./Patient.jsx');

module.exports = React.createClass({
    render:function(){
        return (
            <div>
                <div>
                    {
                        this.props.items.map(function (patient, index) {
                            return(
                                <Patient patient ={patient} key = {"patient" + index} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
})