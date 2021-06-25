import {FormControl,FormLabel,Input,Button,Box,Flex,Spacer,Heading,props, Container} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React from "react";


function Login({handler}) {
  return(

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
               <form className="flex flex-col gap-4 mb-8"  onsubmit={handler}> 
                  <FormControl id="username" isRequired>
                  <FormLabel htmlFor="name">username </FormLabel>
                    <Input type="text" placeholder="username" name="username" id="name" />
                   </FormControl>
                  <FormControl id="password" isRequired>
                        <FormLabel>password </FormLabel>
                      <Input type="password" placeholder="******" id="password" name="password" />
                     </FormControl>
                     <Button mt={4} colorScheme="teal" type="submit" className="max-w-xs">Login
                     </Button>
              </form>
                   {/* <Box bg="Grey" w="270px" height="40px" borderRadius="lg"  color="white" >
                    <Heading  marginInlineStart="-50px" width="450" fontSize="20px" textAlign="center" >New User ? SignUp</Heading>                      
                  </Box> */}
                      <a href="/Signup"> <Button mt={2} colorScheme="teal" type="submit" className="max-w-xl">New User? Sign Up</Button></a>
          </Box>
         </Flex>
     </div>
     <Container maxW="xl" centerContent>
      <Box padding="4" bg="gray.100" maxW="3xl">
       There are many benefits to a joint design and development system. Not only
       does it bring benefits to the design team.
      </Box>
     </Container>
  </Container>
   
  )
   
  }
  Login.propTypes = {
    handler: PropTypes.func.isRequired,
    username:PropTypes.string,
    password:PropTypes.string,
    email:PropTypes.string,
    
  }
  export default Login;