import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import Input from './Form/Input'
import Select from 'material-ui/Select';
import { InputLabel } from 'material-ui/Input'
import { userFormValidate } from 'utils/helpers'

class UserForm extends Component {
  render() {
    const { handleSubmite } = this.props
    return (
      <div>
        <form onSubmit={handleSubmite}>
          <Field name="name" component={Input} label="Name" />
          <div className="input">
            <label>Age</label>
          </div>
          <Select native >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
          <div className="input">
            <label>Car</label>
          </div>
          <Select native >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
          <Field name="email" component={Input} label="Email" />          
        </form>
      </div>
    );
  }
}


export default reduxForm({ form: 'userForm', validate: userFormValidate })(UserForm)
