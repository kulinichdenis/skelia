import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import LoginUser from './LoginUser'
import User from './User'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <LoginUser {...props} />} />
          <Route path='/user' render={(props) => <User {...props} /> } />
        </Switch>
      </Router>
    );
  }
}

export default App
