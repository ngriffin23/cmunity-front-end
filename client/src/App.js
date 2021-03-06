import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar.js/Navbar';
import Landing from './layout/Landing.js/Landing';
import Register from './auth/Register/Register';
import Login from './auth/Login/Login';
import Alert from './components/Alert';
import Posts from './components/Posts/PostsContainer';
import Post from './components/Post/Post';
import PrivateRoute from './components/routing/PrivateRoute';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken  from './utils/setAuthToken';

import './App.css';

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar/>
        <Route exact path='/' component={Landing} />
        <section className="container">
          <Alert/>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/posts' component={Posts} />
            <PrivateRoute exact path='/posts/:id' component={Post} />
          </Switch>
        </section>
      </Fragment>
    </Provider>
  );
};

export default App;
