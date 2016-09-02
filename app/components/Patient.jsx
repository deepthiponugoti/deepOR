var React = require('react');

module.exports = React.createClass({

    render:function(){
        return(
            <div>
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                    <tr>
                    <td> {this.props.patient.patientID} </td>
                    <td> {this.props.patient.patientFirst} </td>
                    <td> {this.props.patient.patientLast}</td>
                    <td> {this.props.patient.patientGender}</td>
                    <td> {this.props.patient.patientBirthDate}</td>
                    <td> {this.props.patient.patientSocial}</td>
                    <td> {this.props.patient.patientDonor}</td>
                    <td> {this.props.patient.patientAddress}</td>
                    <td> {this.props.patient.patientPhone}</td>
                    </tr>
                    </tbody>
                </table>
                </div>

        )
    }
})