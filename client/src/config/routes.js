import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register/Register';
import Login from '../auth/Login/Login';
import Alert from '../components/Alert';
import Posts from '../components/Posts/PostsContainer';
import Post from '../components/Post/Post';
import PrivateRoute from '../components/routing/PrivateRoute';

 const routes = () => {
    return (
        <section className="container">
            <Alert/>
            <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/posts' component={Posts} />
            <PrivateRoute exact path='/posts/:id' component={Post} />
            </Switch>
    </section>
    )
};


export default routes;