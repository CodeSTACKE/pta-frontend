import {Box,Heading} from "@chakra-ui/react";

function Header(){

    return(
       
     <Box bg="Grey" w="100%" height="40px" borderRadius="lg"  color="white" >
           <Heading as="h1" size="4x1" fontSize="30px"> PTA-Collab </Heading>
      </Box>
             
    )
}

export default Header;