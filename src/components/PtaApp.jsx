import {Component} from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import  {Signup} from 'components/Signup';
import AuthenticatedRoute from 'components/Services/AuthenticatedRoute.js';
import Topic from 'pages/Topic.js';
import  {Login} from 'components/Login';
import {Header} from 'components/Header';
import {Logout} from 'components/Logout';
import {AddForm} from 'components/AddForm';
import Resource from 'pages/Resource';
import CarPool from 'pages/CarPool';
import UpcomingEvents from 'pages/UpComingEvents';
import {EditForm} from 'components/EditForm';

class PtaApp extends Component{
    render(){
    return(
        <div className="ptaApp">
            <Router>
                <>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/Signup/:showSignupMsg" exact component={Signup}/>
                        <AuthenticatedRoute path="/welcome/:name" component={Topic}/>
                        <AuthenticatedRoute path="/resource" component={Resource}/>
                        <AuthenticatedRoute path="/AddForm" component={AddForm}/>
                        <AuthenticatedRoute path="/EditForm" component={EditForm}/>
                        <AuthenticatedRoute path="/UpcomingEvents" component={UpcomingEvents}/>
                        <AuthenticatedRoute path="/CarPool" component={CarPool}/>
                        <AuthenticatedRoute path="/Logout"component={Logout}/>
                    </Switch>
                </>
            </Router>             
        </div>
    );
}
}
export default PtaApp;