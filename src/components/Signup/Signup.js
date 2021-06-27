import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Flex,
  Spacer,
  Heading,
  props,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { Component } from "react";
import image from "components/images/logo.png";
import {AuthenticationService} from 'components/Services';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      hasSingupFailed:"",
     };
    this.handleChange = this.handleChange.bind(this);
    this.Signup = this.Signup.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  Signup(event){
      event.preventDefault(); 
console.log(this.state.username)
    if(this.state.username==="" && this.state.password==="" && this.state.email===""){
      this.setState({hasSingupFailed:true})
      this.setState({showSuccessMsg:false})
    }
    else {

    
       AuthenticationService
      .executeSingupService(this.state.username,this.state.password,this.state.email)
      .then((response)=>{
        console.log(response)
         this.props.history.push(`/`);
                
         
        }
      ).catch(
        ()=>{
          this.setState({hasSingupFailed:true})
          this.setState({showSuccessMsg:false})
        }
      )
      }
  }

  render() {
    return (
      <div>
          {this.state.hasSingupFailed && <div className="alert alert-warning" style={{color:"red",textAlign:"center", fontSize:"20px"}}>Invalid Credentials Please Enter again</div>}
          <Flex
          color="grey"
          marginTop="40px"
          marginLeft="500px"
          direction="row"
          {...props}
          maxW={{ xl: "90%" }}
        >
          <Box p="4" width="650px" marginLeft="-300px" height="200px">
            <img src={image} alt="ptaImage" />
           </Box>

          <Spacer />

          <Box marginRight="550px" height="500px" width="1000px">
            <Heading fontSize="20px" textAlign="center">
              Signup Form{" "}
            </Heading>
            <form className="flex flex-col gap-4 mb-8">
              <FormControl id="username" isRequired>
                <FormLabel htmlFor="name">username </FormLabel>
                <Input
                  type="text"
                  placeholder="username"
                  name="username"
                  id="name"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>password </FormLabel>
                <Input
                  type="password"
                  placeholder="******"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email </FormLabel>
                <Input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormControl>
              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                className="max-w-xs"
                onClick={this.Signup}
              >Signup
              </Button>
            </form>
          </Box>
        </Flex>
      </div>
    );
  }
}
Signup.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  email: PropTypes.string,
};
export default Signup;
