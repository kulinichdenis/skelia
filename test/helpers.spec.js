import { driveAge, formValidation } from '../src/utils/helpers'

describe('helpers driveAge', () => {
  it('should return an array', () => {
    expect(driveAge(30)).to.be.an('array')
  })

  it('should correct count elements', () => {
    expect(driveAge(30)).to.have.lengthOf(29)
  })

  it('should has correct object', () => {
    const ages = driveAge(30)
    expect(ages[0]).to.deep.equal({ key: 1, value: 1 })
    expect(ages[9]).to.deep.equal({ key: 10, value: 10 })
  })
})

describe('validation form Email', () => {
  it('should email is empty', () => {
    const email = formValidation.validEmail({ values: { email: '' }, errors: {}}) 
    expect(email).to.have.deep.property('errors', { email: 'Required' })
  })

  it('should email has correct format', () => {
    const email = formValidation.validEmail({ values: { email: 'qqqqq@aaaa.com' }, errors: {}}) 
    expect(email).to.have.deep.property('errors', {})
  })

  it('should email has discorrect format', () => {
    const email = formValidation.validEmail({ values: { email: 'qqqq.com' }, errors: {}}) 
    expect(email).to.have.deep.property('errors', { email: 'Invalid email address' })
  })
})

describe('validation form Input', () => {
  it('should field is empty', () => {
    const input = formValidation.validInput('name')({ values: { name: '' }, errors: {} })
    expect(input).to.have.deep.property('errors', { name: 'Required' })
  })
  it('should field has few words', () => {
    const input = formValidation.validInput('name')({ values: { name: 'dddd' }, errors: {} })
    expect(input).to.have.deep.property('errors', { name: 'Must be 6 characters or more' })
  })

  it('should field is valid', () => {
    const input = formValidation.validInput('name')({ values: { name: 'ddddddd' }, errors: {} })
    expect(input).to.have.deep.property('errors', {})
  })
})
