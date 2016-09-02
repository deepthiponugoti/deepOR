var React = require('react');
var Surgeon = require('./Surgeon.jsx');
var SurgeonAdd = require('./SurgeonAdd.jsx');


module.exports = React.createClass({
    render:function(){
        return (
            <div className="myDiv">
                <div>
                    {
                        this.props.items.map(function (surgeon, index) {
                            return(
                                <Surgeon surgeon={surgeon} key={"surgeon"+index} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
})