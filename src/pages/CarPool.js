import React from "react";
import 'components/Wrapper/style.css';
import {Box,Divider,Heading} from '@chakra-ui/react'
import image from "components/images/logo.png";
import {Link} from 'react-router-dom';

function CarPool(){
  return (
          <div className="container-fluid col-md-4 mt-5">
            <Box p="4" width="650px" marginLeft="-300px" height="200px">
         
            <img src={image} alt="ptaImage" />
            </Box>
             <Box bg="tomato" w="100%" p={4} color="white" marginTop="-150px">
            <Heading fontSize="20px" textAlign="center">List of Topics</Heading>
            </Box>
             <Divider orientation="horizontal" />
            <Box bg="gray.500" w="100%" p={4} color="white">
              
            </Box>
           </div>
        );
}
export default CarPool;