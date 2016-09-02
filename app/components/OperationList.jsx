var React = require('react');
var Operation = require('./Operation.jsx');
var OperationAdd = require('./OperationAddItem.jsx');


module.exports = React.createClass({
    render:function(){
        var showallItems = this.props.showAllItems;
        return (
            <div>
                <div>
                    {
                        this.props.items.map(function (operation, index) {
                            if(showallItems == "true") {
                                return (
                                    <Operation operation={operation} key={"operation"+index}/>
                                )
                            }
                            if(operation.startDate == null) {
                                return (
                                    <Operation operation={operation} key={"operation"+index}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
})