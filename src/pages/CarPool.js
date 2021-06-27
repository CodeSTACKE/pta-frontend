import React from "react";
import 'components/Wrapper/style.css';
import {Box,Divider,Heading,ListItem,ListIcon,List,MdCheckCircle} from '@chakra-ui/react'
import image from "components/images/logo.png";
import {Link} from 'react-router-dom';

function CarPool(){
  return (
          <div className="container-fluid col-md-4 mt-5">
            <Box p="4" width="650px" marginLeft="-300px" height="200px">
         
            <img src={image} alt="ptaImage" />
            </Box>
             <Box bg="tomato" w="100%" p={4} color="white" marginTop="-150px">
            <Heading fontSize="20px" textAlign="center">Carpool</Heading>
            </Box>
             <Divider orientation="horizontal" />
            <Box bg="gray.500" w="100%" p={4} color="white">
            <p><strong>Driving your kids every day and have extra seats?</strong></p> You can make it count by inviting others to carpool.
            Sharing the drives to school, parties, and activities through carpooling will not only lower your stress levels, but it also builds relationships.<br />

            <br />Carpooling is also better for the environment and can help build a better world for our kids to grow up in. By carpooling with 2 other families that’s 2 cars off the road each time your group drives.
            </Box>
           </div>
        );
}
export default CarPool;