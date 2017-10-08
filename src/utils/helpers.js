import R from 'ramda'

export const tokenSelector = (state) => {
  const { token } = state.user.data
  return token
}

export const draftSelector = (state) => state.user.draftId
export const emailSelector = (state) => state.user.emailStore

export const inputValidate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length <= 6) {
    errors.password = 'Must be 6 characters or more'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

export const userFormValidate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length <= 6) {
    errors.name = 'Must be 6 characters or more'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.cars) {
    errors.cars = 'Required'
  }
  if (!values['drive-age']) {
    errors['drive-age'] = 'Required'
  } 
  return errors
}

export const driveAge = (maxYears) => {
  return R.map((item) => ({ key: item, value: item }))(R.range(1, maxYears))
} 