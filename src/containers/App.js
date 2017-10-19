import React, { Component } from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import LoginUser from './LoginUser'
import User from './User'
import history from 'utils/history'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' render={(props) => <LoginUser {...props} />} />
          <Route path='/user' render={(props) => <User {...props} /> } />
        </Switch>
      </Router>
    );
  }
}

export default App
