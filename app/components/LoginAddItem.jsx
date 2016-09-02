var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var Input = require('react-bootstrap/lib/Input');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');

module.exports = React.createClass({
    //getInitialState:function(){
    //    return {
    //        user:"",
    //        pass:""
    //    };
    //},
    handleUser:function(e){
        this.setState({user : e.target.value});

    },
    handlePassword:function(e){
        this.setState({pass : e.target.value});

    },
    addUser:function(e){
        e.preventDefault();


            loginAction.add(dispatcher, {
                userName: this.state.user,
                password: this.state.pass,
                role: "user"
            });

            this.setState({
                user:"",
                pass:""
            });
            this.hideModal();

    },
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
                            Add User
                        </Button>
                    <Modal
                        {...this.props}
                        show={this.state.show}
                        onHide={this.hideModal}
                        sSize="small">
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title-lg">Add User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={this.addUser}>
                                UserName:
                                <Input
                                    type="text"
                                    onChange={this.handleUser} />
                                <br/>

                                Password:
                                <Input
                                    type="text"
                                    onChange={this.handlePassword} />
                                <br/>

                                <Button className="btn-primary" type="submit" >Add User</Button>
                            </form>

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