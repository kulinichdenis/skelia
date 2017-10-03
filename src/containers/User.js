import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Button from 'material-ui/Button'
import { logout } from 'reducers/user'

class User extends Component {
  constructor() {
    super()
    this.getUser = this.getUser.bind(this)
  }
  getUser() {
    const { data: { userId }, logout, history } = this.props
    const logoutSetArgsHistory = logout.bind(null, history)
    return (
      <div>
        User: { userId }
        <Button onClick={logoutSetArgsHistory}>Logout</Button>
      </div>
    )
  }
  render() {
    const { userId } = this.props.data
    return (
      <div>
        { userId ? this.getUser() : <Redirect to='/' /> }
      </div>
    );
  }
}

const mapToProps = (state) => ({ data: state.user.data })

export default connect(mapToProps, { logout })(User)
