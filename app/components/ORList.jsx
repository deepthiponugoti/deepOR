var React = require('react');
var OR = require('./OR.jsx');
var ORAdd = require('./ORAddItem.jsx');
var Table = require('react-bootstrap/lib/Table')

module.exports = React.createClass({
    render:function(){
        return (
            <div>
                <div>
                    {
                        this.props.items.map(function (operationRoom, index) {
                            return(
                                <OR operationRoom={operationRoom} key={"operationRoom"+index} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
})