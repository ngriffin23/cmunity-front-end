import React, {Fragment} from 'react';
import Navbar from './layout/Navbar.js/Navbar';
import Landing from './layout/Landing.js/Landing';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <Landing/>
    </Fragment>
  );
}

export default App;
