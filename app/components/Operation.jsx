var React = require('react');

module.exports = React.createClass({
    render:function(){
        return(
            <div>
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                    <tr>
                        <td> {this.props.operation.operationName} </td>
                        <td> {this.props.operation.patientName} </td>
                        <td> {this.props.operation.typeOfSurgery}</td>
                        <td> {this.props.operation.duration}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
})