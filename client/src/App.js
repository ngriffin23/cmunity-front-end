import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar.js/Navbar';
import Landing from './layout/Landing.js/Landing';
import Register from './auth/Register/Register';
import Login from './auth/Login/Login';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <Route exact path='/' component={Landing} />
      <section className="container">
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    </Fragment>
  );
}

export default App;
