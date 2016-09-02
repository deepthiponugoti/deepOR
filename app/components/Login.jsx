var React = require('react');
var Button = require('react-bootstrap/lib/Button')
var Input = require('react-bootstrap/lib/Input')
var loginStore = require('./../stores/LoginStore.jsx');

import { browserHistory, Router, Route, Link } from 'react-router'
var auth = require('./../auth/LogAuth.jsx')

module.exports = React.createClass
({
    getInitialState: function(){
        return{
            username:'',
            password:''
        };
    },
    handleUsernameChange: function(e) {
        this.setState({username: e.target.value});
    },

    handlePasswordChange: function(e) {
        this.setState({password: e.target.value});
    },

    handleLogin: function () {
        "use strict";
        console.log("Username: " + this.state.username);
        console.log("Password: " + this.state.password);


       var initial =  loginStore.getItems();

        initial.forEach(function(user)
        {
            if(user.userName == this.state.username)
            {
                if (user.password == this.state.password)
                    console.log("correct");
            }
            else
                console.log("wrong");
            console.log("nada")
        },this);


    },

    validationState: function(){
        "use strict";
        let length = this.state.username.length;
        if (length > 2) return 'success';
        else if (length > 0) return 'error';
    },


    render:function () {
        return (
            <form>
                Username<Input type="text"
                               name="username"
                               bsSize="large"
                               bsStyle={this.validationState()}
                               hasFeedback
                               onChange={this.handleUsernameChange}/>
                Password<Input type="password"
                               name="password"
                               bsSize="large"
                               onChange={this.handlePasswordChange}/>
                <Button bsStyle="success" type="button" onClick={this.handleLogin}>Login</Button>

            </form>


        )
    }
})