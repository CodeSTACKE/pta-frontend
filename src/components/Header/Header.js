import {Box,Heading} from "@chakra-ui/react";
import {AuthenticationService} from 'components/Services';
import { withRouter,Link } from "react-router-dom"

function Header(){
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  console.log(isUserLoggedIn);
    return(
           <div>
           <Box bg="#4A5568" w="100%" height="55px" color="white" paddingTop="1" p={4}>
            <Heading as="h1" size="4x1" fontSize="30px" textAlign="center">PTA-Collab
           {isUserLoggedIn && <li style={{alignContent:"left", color:"Black"}}><Link to="/Logout" onClick={AuthenticationService.logout}>Logout</Link> </li>}
           </Heading>    
         </Box>
 
       </div>
    )
}

export default withRouter(Header);