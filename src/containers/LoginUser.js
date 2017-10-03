import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from 'reducers/user'
import { Login } from 'components'
import { Progress } from 'components/UI'

class LoginUser extends Component {
  constructor() {
    super()
    this.login = this.login.bind(this)
  }
  login() {
    const { fetchUser, history } = this.props
    fetchUser({ email: 'test+exercice@qover.com', password: 'qoverexercise'}, history)
  }

  render() {
    const { progress, error } = this.props
    return (
      <div className="login">
        { progress.status ? 
          <Progress/> :
          <Login onSubmit={this.login} serverError={error}/>
        }
      </div>
    );
  }
}

const mapProps = (state) => ({ progress: state.progress, error: state.user.error  })

export default connect(mapProps, { fetchUser })(LoginUser)
