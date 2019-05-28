import React from 'react';

// routes
import Routes from '../../routes'
// style
import './style.css'
// components
import TopBar from '../TopBar'

const App = () => (
  <div className="container-app" data-testid="app-test">
    <TopBar />
    <div className="container-routes">
      <Routes />
    </div>
    <footer className="footer">
      <h5>copyright © 2019 MARVEL</h5>
    </footer>
  </div >
);

export default App;
