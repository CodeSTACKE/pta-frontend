import {Component} from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import  {Signup} from 'components/Signup';
import AuthenticatedRoute from 'components/Services/AuthenticatedRoute.js';
import Topic from 'pages/Topic.js';
import  {Login} from 'components/Login';
import {Header} from 'components/Header';
import {Logout} from 'components/Logout';
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
                        <AuthenticatedRoute path="/Logout"component={Logout}/>
                    </Switch>
                </>
            </Router>
        </div>
    );
}
}
export default PtaApp;