import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Route path='/' render={props => <Navigation {...props}/>} />
      <Route exact path='/' render={props => <Home {...props}/>} />
      <Route exact path='/register' render={props => <Registration {...props}/>} />
      <Route exact path='/login' render={props => <Login {...props}/>} />
    </div>
  );
}

export default App;
