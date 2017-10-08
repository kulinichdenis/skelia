import R from 'ramda'

export const tokenSelector = (state) => {
  const { token } = state.user.data
  return token
}

export const draftSelector = (state) => state.user.draftId
export const emailSelector = (state) => state.user.emailStore

/* Validation Form */
const validEmail = ({ values, errors }) => {
  const error = R.clone(errors)
  if (!values.email) {
    error.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = 'Invalid email address'
  }
  return { values, errors: error }
}

const validInput = (fieldName) => ({ values, errors }) => {
  const error = R.clone(errors)
  if (!values[fieldName]) {
    error[fieldName] = 'Required'
  } else if (values[fieldName].length <= 6) {
    error[fieldName] = 'Must be 6 characters or more'
  }
  return { values, errors: error }
}

const validSelector = (fieldName) => ({ values, errors }) => {
  const error = R.clone(errors)
  if (!values[fieldName]) {
    error[fieldName] = 'Required'
  }
  return { values, errors: error }
}

export const validationUserForm = values => {
  const { errors } = R.pipe(validEmail, validInput('name'), validSelector('cars'), validSelector('drive-age'))({values, errors: {}})
  return errors
}

export const inputValidate = values => {
  const { errors } = R.pipe(validEmail, validInput('password'))({values, errors: {}})
  return errors
}

/* Validation Form End */

export const driveAge = (maxYears) => {
  return R.map((item) => ({ key: item, value: item }))(R.range(1, maxYears))
} 