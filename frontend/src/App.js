import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom';
import UsersPage from './components/UsersPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch >
        <Route exact path='/users' render={() => <UsersPage/>}/>
      </Switch>
      
    </div>
  );
}

export default App;
