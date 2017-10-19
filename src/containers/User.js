import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Button from 'material-ui/Button'
import { logout, sendEmail, setUserEmail } from 'reducers/user'
import { Price, UserForm } from 'components'
import { Progress } from 'components/UI'

class User extends Component {
  constructor() {
    super()
    this.getUser = this.getUser.bind(this)
    this.handlePrice = this.handlePrice.bind(this)
  }
  
  handlePrice({ email }) {
    const { setUserEmail, sendEmail } = this.props
    setUserEmail(email)
    sendEmail()
  }  
  getUser() {
    const { data: { userId }, logout, history,
            progress, prices, emailStore: { email, statusText } } = this.props
    return (
      <div className="user">
      { progress.status ? <Progress className="progress" /> :
          <div>
            <div className="user--header">
              UserID: { userId }
              <Button onClick={logout}>Logout</Button>
            </div>
            { email && statusText && <p className="user--status">{statusText}</p> }
            <UserForm onSubmit={this.handlePrice} />
            <div className="content">
              { prices.map((props, index) =>
                  <Price key={index.toString()} {...props} handlePrice={this.handlePrice} />
                )
              }
            </div>
          </div>
        }  
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

const mapToProps = (state) => ({
  data: state.user.data,
  prices: state.user.prices,
  emailStore: state.user.emailStore,
  progress: state.progress
})

export default connect(mapToProps, { logout, sendEmail, setUserEmail })(User)
