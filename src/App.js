import './App.css';
import React from 'react';
import  {Login} from 'components/Login';
import {Header} from 'components/Header';
import './index.css';
import {ChakraProvider, theme } from '@chakra-ui/react';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
         <Login/>
      </ChakraProvider>
  );
}

export default App;
