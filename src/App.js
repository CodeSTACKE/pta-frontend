import './App.css';
import React from 'react';
import './index.css';
import {ChakraProvider, theme } from '@chakra-ui/react';
// import { QueryClient, QueryClientProvider } from 'react-query';
import './bootstrap.css';
import PtaApp from 'components/PtaApp';
// const queryClient=new QueryClient();



function App() {
  return (
    <ChakraProvider theme={theme}>
     <PtaApp/>
      </ChakraProvider>
  );
}

export default App;
