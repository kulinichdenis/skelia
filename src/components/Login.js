import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import Input from './Form/Input'
import Button from 'material-ui/Button'
import { inputValidate } from 'utils/helpers'

class Login extends Component {
  render() {
    const { actionLogin, serverError, handleSubmit } = this.props
    return (
      <div>
        <p>{serverError}</p>
        <form onSubmit={handleSubmit}>
          <Field name="email" component={Input} label="Email" />
           <Field name="password" component={Input} type="password" label="Pass" />
          <Button raised color="primary" type="submit" >Login</Button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'login', validate: inputValidate })(Login)
