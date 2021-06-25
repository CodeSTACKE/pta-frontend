import './App.css';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import  {Signup} from 'components/Signup';

import  {Login} from 'components/Login';
import {Header} from 'components/Header';
import './index.css';
import {ChakraProvider, theme } from '@chakra-ui/react';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>

    <Switch>

         <Route exact path="/" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        {/* <Route exact path="/Browse" render={props => <Browse {...props} dispatch={dispatch} state={state} loggedInAs={state.loggedInAs} handleLogout={handleLogout} />} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Browse/:userId" render={props => <Search {...props} loggedInAs={state.loggedInAs} />} /> */}
      </Switch>
      </ChakraProvider>
  );
}

export default App;
