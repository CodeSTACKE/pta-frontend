import {FormControl,FormLabel,Input,Button,Box,Flex,Spacer,Heading,props} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React from "react";

function Signup({handler}) {
  return(
    <div>
      <Flex color="grey" marginTop="40px" direction="row" {...props} maxW={{xl:"90%"}}>
            <Box p="4" width="550px" alignItems="left" height="200px" >
                    <Heading as="h5" size="xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
                            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </Heading>
            </Box>
            
      
      <Spacer/>

        <Box width="650px" height="1000px">
        <Heading  fontSize="20px" textAlign="center">Signup Form </Heading>
               <form className="flex flex-col gap-4 mb-8"  onsubmit={handler}> 
                  <FormControl id="username" isRequired>
                  <FormLabel htmlFor="name">username </FormLabel>
                    <Input type="text" placeholder="username" name="username" id="name" />
                   </FormControl>
                  <FormControl id="password" isRequired>
                        <FormLabel>password </FormLabel>
                      <Input type="password" placeholder="******" id="password" name="password" />
                     </FormControl>
                     <FormControl id="email" isRequired>
                        <FormLabel>Email </FormLabel>
                      <Input type="email" placeholder="email" name="email" />
                     </FormControl>
                          <Button mt={4} colorScheme="teal" type="submit" className="max-w-xs">Signup</Button>
              </form>
          </Box>
         </Flex>
     </div>
   
  )
   
  }
  Signup.propTypes = {
    handler: PropTypes.func.isRequired,
    username:PropTypes.string,
    password:PropTypes.string,
    email:PropTypes.string,
    
  }
  export default Signup;