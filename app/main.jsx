//var React = require('react');
//var Master =  require('./components/MasterPage.jsx');
var LoginInitial = require('./auth/LogApp.jsx');
var initial = operationStore.getItems();
var OperationList = require('./components/OperationList.jsx');
var OperationAdd = require('./components/OperationAddItem.jsx');

// using an ES6 transpiler, like babel (Navigation)
//import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
//import { render } from 'react-dom'
// Local React classes

var Schedule = require('./components/Schedule.jsx');

//Operation Room requires
var ORInitial = ORStore.getOR();
var ORAddItem = require('./components/ORAddItem.jsx');
var ORList = require('./components/ORList.jsx');
var OREff = require('./components/OperationRoomEfficiency.jsx')

//Surgeon requires
var SurgeonInitial = surgeonStore.getSurgeons();
var SurgeonList= require('./components/SurgeonList.jsx');
var SurgeonAdd=require('./components/SurgeonAdd.jsx');
var Table = require('react-bootstrap/lib/Table')


//Patient requires
var PatientInitial = patientStore.getPatientItems();
var PatientList = require('./components/PatientList.jsx');
var PatientAdd = require('./components/PatientAdd.jsx');



import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router'
import auth from './auth/LogAuth.jsx'

const ACTIVE = { color: 'red' }

class Navigation extends React.Component {
    render()
    {
        return (
            <div>
                <nav>
                    <ul id ="navigation">
                        <li>
                            <img className="two" src="DeepOr.png" alt="DeepOr Logo"/>
                        </li>
                        <li className="two"><Link className="navItem" to="/schedule" activeStyle={ACTIVE}>Schedule</Link></li>
                        <li className="three"><Link className="navItem" to="/operations" activeStyle={ACTIVE}>Operations</Link></li>
                        <li className="four"><Link className="navItem" to="/surgeons" activeStyle={ACTIVE}>Surgeons</Link></li>
                        <li className="five"><Link className="navItem" to="/operationRooms" activeStyle={ACTIVE}>Operating Room</Link></li>
                        <li className="six"><Link className="navItem" to="/patients" activeStyle={ACTIVE}>Patients</Link></li>
                        <li className="seven"><Link className="navItem" to="/login" activeStyle={ACTIVE}>Sign In</Link></li>
                    </ul>
                    {this.props.children}
                </nav>
            </div>
        )
    }
}

class Surgeons extends React.Component {
    render()
    {
        return (
            <div>
                <SurgeonAdd />
                <SurgeonList items={SurgeonInitial}/>
            </div>
        )
    }
}

class Operations extends React.Component {
    render()
    {
        return (
            <div>
                <OperationAdd/>
                <h1>Operations</h1>
                <div  class="tbl-header">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                        <tr>
                            <th>Operation Name</th>
                            <th>Patient Name</th>
                            <th>Type of Surgery</th>

                        </tr>
                        </thead>
                    </table>
                    <OperationList showAllItems="true" items={initial}/>
                </div>
            </div>
        )
    }
}

class Patients extends React.Component {
    render()
    {
        return (
            <div>
                <PatientAdd/>
                <h1>Patients</h1>
                <div  class="tbl-header">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Birth Date</th>
                            <th>Social Security</th>
                            <th>Donor</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                        </thead>
                    </table>
                <PatientList items={PatientInitial}/>
                </div>
            </div>
        )
    }
}

class OperationRooms extends React.Component {
    render()
    {
        return (
            <div>
                <ORAddItem/>
                <div className ="w3-row-padding">
                     <ORList items={ORInitial}/> 
                </div>

            </div>

        )
    }
}

class Login extends React.Component {
    render()
    {
        return (
            <div>

                <LoginInitial/>
            </div>
        )
    }
}


function Render(){
    render((
        <Router history={hashHistory}>
            <Route path="/" component={Navigation}>
                <IndexRoute component={Login}/>
                <Route path="/operations" component={Operations} onEnter={requireAuth}/>
                <Route path="schedule" component={Schedule} onEnter={requireAuth}/>
                <Route path="/operationRooms" component={OperationRooms} onEnter={requireAuth}/>
                <Route path="/surgeons" component={Surgeons} onEnter={requireAuth}/>
                <Route path="/login" component={Login} />
                <Route path="/patients" component={Patients} onEnter = {requireAuth}/>
            </Route>
        </Router>
    ), app)
}

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}
Render();

operationStore.onChange(function(items){
    initial = items;
    Render();
})

surgeonStore.onChange(function(items){
    SurgeonInitial = items;
    Render();
})

ORStore.onChange(function(items){
    ORInitial = items;
    Render();
})

patientStore.onChange(function(items){
    PatientInitial = items;
    Render();
})


