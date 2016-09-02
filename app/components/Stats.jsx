var React = require('react');
var Modal = require('react-bootstrap/lib/Modal')
var Button = require('react-bootstrap/lib/Button')
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar')
var BarChart = require('./BarChart.jsx');
var ABarChart = require('./ABarChart.jsx');

module.exports = React.createClass({

    getInitialState() {
        return {show: false};
    },

    showModal() {
        this.setState({show: true});
    },

    hideModal() {
        this.setState({show: false});
    },



    render:function(){
        return(
            <div className="myDiv">
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large" onClick={this.showModal}>
                        Stats
                    </Button>

                    <Modal
                        {...this.props}
                        show={this.state.show}
                        onHide={this.hideModal}
                        dialogClassName="modal-stats"
                        sSize="large">
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title-lg">Stats</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <BarChart />

                            <ABarChart />

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.hideModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </ButtonToolbar>
            </div>

        )
    }
})

