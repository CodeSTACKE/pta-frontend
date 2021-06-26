import {FormControl,FormLabel,Input,Button,Box,Flex,Spacer,Heading,props, Container} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React,{Component} from "react";
import {AuthenticationService} from 'components/Services';
import { withRouter } from "react-router-dom";

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      hasLoginFailed:false,
      showSuccessMsg:false,
    };
  
  this.handleChange = this.handleChange.bind(this);
  this.loginClicked = this.loginClicked.bind(this);

}
handleChange(event) {
      this.setState({
    [event.target.name]: event.target.value,
  });
}
loginClicked(event){
  event.preventDefault(); 
   AuthenticationService
  .executeJWTAuthenticationService(this.state.username,this.state.password)
  .then((response)=>{
    console.log(response) ;
     AuthenticationService.registerSucessfulLoginForJWT(this.state.username,response.data.jwt_token)
        this.props.history.push(`/welcome/${this.state.username}`);
             
     
    }
  ).catch(
    ()=>{
      this.setState({hasLoginFailed:true})
      this.setState({showSuccessMsg:false})
    }
  )
 
}

render(){
  return(
    <div>
    {this.state.hasLoginFailed && <div className="alert alert-warning" style={{color:"red",textAlign:"center", fontSize:"20px"}}>Invalid Credentials</div>}
    <Container maxW="xl" centerContent>
      
      <div>
      <Flex color="grey" marginTop="40px" direction="row" {...props} maxW={{xl:"90%"}}>
      
            <Box p="4" width="550px" alignItems="left" height="200px" >
                    <Heading as="h5" size="xs">Welcome to the Austin High PTA!
PTA is a vital resource at Austin High. Our goal has always been to make sure our teachers, staff, and parents have the resources they need to make high school meaningful and successful for every student. We remain steadfast Our goal. Everything we do is made possible by PTA members, who give money and time to help make Austin High the amazing school that it is. Please consider  becoming a member, or making a donation. If you have any questions about what we do or how to get involved, please reach out! Email us at austinhighpta@gmail.com We look forward to hearing from you!
                    </Heading>
            </Box>
      <Spacer/>
        <Box width="650px" height="1000px">
        <Heading  fontSize="20px" textAlign="center">Login Form </Heading>
               <form className="flex flex-col gap-4 mb-8" > 
                  <FormControl id="username" isRequired>
                  <FormLabel htmlFor="name">username </FormLabel>
                    <Input type="text"
                    placeholder="username" 
                    name="username" 
                    id="name" 
                    value={this.state.username} 
                    onChange={this.handleChange} />
                   </FormControl>
                  <FormControl id="password" isRequired>
                        <FormLabel>password </FormLabel>
                      <Input type="password" placeholder="******" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                     </FormControl>
                     <Button mt={4} colorScheme="teal" type="submit" className="max-w-xs" onClick={this.loginClicked}>Login</Button>
              </form>
                   <a href="/Signup"> <Button mt={2} colorScheme="teal" type="submit" className="max-w-xl">New User? Sign Up</Button></a>
          </Box>
         </Flex>
     </div>
    </Container>
    </div>
  )
  }
  }
  LoginForm.propTypes = {
    username:PropTypes.string,
    password:PropTypes.string,
   
  }
  export default withRouter(LoginForm);