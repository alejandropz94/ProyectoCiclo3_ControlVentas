import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import './Style/estilos.css';
import Head from './components/Head';
import Login from './components/Login';
import Main from './components/Main';
import MainUser from './components/MainUser';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ventas">
          <Head></Head>
          <Main></Main>
        </Route>

        <Route path="/productos">
          <Head></Head>
          <Main></Main>
        </Route>

        <Route path="/usuarios">
          
            <Head> </Head>
            <MainUser></MainUser>
          
        </Route>

        <Route exact path="/">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
