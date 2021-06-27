// import {Box,Heading,Spacer} from "@chakra-ui/react";
import {AuthenticationService} from 'components/Services';
import { withRouter,Link } from "react-router-dom"
import React,{Component} from "react";
import image from "components/images/logo.png";


class Header extends Component{
  constructor(props){
    super(props)
    this.state={
      showSignupMsg:this.props.showSignupMsg ,
      }
  }
  
  render(){
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  console.log(isUserLoggedIn);
  console.log(this.props);
     return(
       <header>
      <nav className="navbar navbar-expand-md navbardark" style={{width:"100%", backgroundColor:"teal"}}>
          <div className="navbar-brand">
          <ul className="text-center">
            <img src={image} style={{width:"60px", height:"60px"}} alt="pta-collab"/></ul>
           </div>
           <ul className="navbar-brand justify-content-center">
          <li className="nav-link"style={{color:"white",fontSize:"35px", fontWeight:"bold"}}>PTA-Collab </li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
          {isUserLoggedIn && <li className="nav-link" style={{color:"white",fontSize:"20px"}}><Link className="nav-link" to="/welcome/jyoti">Dashboard</Link></li>}
          {this.state.showSignupMsg && <li className="nav-link" style={{color:"white",fontSize:"20px"}}><Link className="nav-link" to="/welcome/jyoti">Login</Link></li>}
          {isUserLoggedIn && <li className="nav-link"style={{color:"white",fontSize:"20px"}}><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link> </li>}

          </ul>
      </nav>
      </header>
    )
  }
}

export default withRouter(Header);