import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import UserShow from './components/UserShow';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
        user: null
    }
  }

  updateUser = (user) => {
    this.setState({
      user: user
    })
  }

  deleteUser = (user) => {
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    }).then(resp => resp.json).then(json => console.log(json))
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch >
          <Route exact path='/users' render={() => <UsersPage user={this.state.user} updateUser={this.updateUser}/>}/>
          <Route exact path='/users/:id' render={() => <UserShow user={this.state.user} deleteUser={this.deleteUser}/>}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
