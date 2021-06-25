import './App.css';
import React from 'react';
import  {Login} from 'components/Login';
import {Header} from 'components/Header';
import './index.css';
import {ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

// const queryClient=new QueryClient();

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <QueryClientProvider client={queryClient}> */}
      <Header/>
         <Login/>
         {/* </QueryClientProvider> */}
      </ChakraProvider>
  );
}

export default App;
