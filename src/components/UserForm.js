import React, { Component } from 'react'
import R from 'ramda'
import { Field, reduxForm } from 'redux-form'
import { Input, Select } from './Form'
import SelectUI from 'material-ui/Select'
import TextField from 'material-ui/TextField'
import { validationUserForm, driveAge } from 'utils/helpers'
import { cars } from 'utils/fakeData'

const carsToArr = (arr) => 
  (R.map((item) => R.is(Object)(item) ? R.prop('code', item) : item, arr))
const prepareCars = R.pipe(R.toPairs, R.map(carsToArr), R.map(R.zipObj(['key', 'value'])))(cars)

class UserForm extends Component {
  render() {
    const { handleSubmite } = this.props
    return (
      <div className="user user--form">
        <form onSubmit={handleSubmite}>
          <Field name="name" component={Input} label="Name" />
          <Field name="email" component={Input} label="Email" />          
          <Field
            label="Cars"
            name="cars"
            component={Select}
            items={prepareCars}
          />
          <Field
            label="Drive Age(years)"
            name="drive-age"
            component={Select}
            items={driveAge(30)} 
          /> 
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'userForm', validate: validationUserForm })(UserForm)
