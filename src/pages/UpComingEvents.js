import React from "react";
import 'components/Wrapper/style.css';
import {Box,Divider,Heading} from '@chakra-ui/react'
import image from "components/images/logo.png";
import {Link} from 'react-router-dom';

function UpcomingEvents(){
  return (
          <div className="container-fluid col-md-4 mt-5">
            <Box p="4" width="650px" marginLeft="-300px" height="200px">
         
            <img src={image} alt="ptaImage" />
            </Box>
             <Box bg="tomato" w="100%" p={4} color="white" marginTop="-150px">
            <Heading fontSize="20px" textAlign="center">UpcomingEvents</Heading>
            </Box>
             <Divider orientation="horizontal" />
            <Box bg="gray.500" w="100%" p={4} color="white">
              <h1><strong>AHPTA Upcoming events</strong></h1><br />
              <h3><strong>Austin High PTA Virtual Annual Convention July 15, 2021
              </strong></h3>

              <p>We will virtually hold Convention 2021 on Thursday, July 15th.

              The AHPTA Convention presents a one-of-a-kind opportunity to engage and learn from across the state and is designed for youth, parents, teachers, principals, central office staff, and community organizers/partners.</p>
            </Box>
           </div>
        );
}
export default UpcomingEvents;