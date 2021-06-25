import {Box,Heading} from "@chakra-ui/react";

function Header(){

    return(
           <Box bg="#4A5568" w="100%" height="55px" color="white" paddingTop="1"  >
            <Heading as="h1" size="4x1" fontSize="30px" textAlign="center">PTA-Collab</Heading>
           {/* <img src={process.env.PUBLIC_URL+"logo.png"} alt="APTA logo" width="55" height="55" /> */}
      </Box>
    )
}

export default Header;