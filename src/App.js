import React from 'react';
import { Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Route path='/' render={props => <Navigation {...props}/>} />
      <Route exact path='/register' render={props => <Registration {...props}/>} />
    </div>
  );
}

export default App;
