var Input = require('react-bootstrap/lib/Input')

import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import auth from './LogAuth.jsx'
var AddUser = require('../components/LoginAddItem.jsx')

const App = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            error: false,
            username:'',
            password:'',
            loggedIn: auth.loggedIn()
        }
    },
    updateAuth(loggedIn) {
        this.setState({
            loggedIn: loggedIn
        })
    },

    componentWillMount() {
        auth.onChange = this.updateAuth
        auth.login()
    },

    
    handleUsernameChange: function(e) {
        this.setState({username: e.target.value});
    },

    handlePasswordChange: function(e) {
        this.setState({password: e.target.value});
    },

    handleSubmit(event) {
        event.preventDefault()

        var user = this.state.username
        var pass = this.state.password

        auth.login(user, pass, (loggedIn) => {
            if (!loggedIn)
                return this.setState({ error: true })

            const { location } = this.props

            if (location.state && location.state.nextPathname) {
                this.context.router.replace(location.state.nextPathname)
            } else {
                this.context.router.replace('/')
            }
        })
    },

    render() {
        return (
        
            <div className="login-box">
                <div id="header">
                    <div id="cont-lock">Log In</div>
                    <div id="bottom-head"></div>
                </div>
                {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
                {this.state.loggedIn ? (
                    <p><Link to="/logout" size="large">Log out</Link></p>
                ) : (
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <div className="group">
                        <input className="inputMaterial" type="text" value={this.state.username}
                               onChange={this.handleUsernameChange} required>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Username</label>
                        </input>
                    </div>
                    <div className="group">
                        <input className="inputMaterial" type="password" value={this.state.password}
                               onChange={this.handlePasswordChange} required>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Password</label>
                        </input>
                    </div>
                    <button id="buttonlogintoregister" type="submit">Sign In</button>
                    <div className="addUser"> <AddUser/></div>
                    {this.state.error && (
                    <p>Username or password is incorrect</p>
                )}
                    
                </form>)
                }
                
            </div>
        )
    }
})


const Logout = React.createClass({
    componentDidMount() {
        auth.logout()
    },

    render() {
        return <p>You are now logged out</p>
    }
})

module.exports = React.createClass({

render:function(){
    return(

    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="logout" component={Logout} />
            <Route path="adduser" component={AddUser}/>
        </Route>
    </Router>
    )
    }
})