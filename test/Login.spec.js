import React from 'react';
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import store from '../src/store'
import Login from '../src/components/Login'

describe('component <Login />', () => {
  let login, onSubmit, onSave
  
  const testValue = "aaaa"
  
  onSubmit = sinon.spy()
  
  const props = {
    onSubmit 
  }

  beforeEach(() => {
    login = mount(<Provider store={store}><Login {...props} /></Provider>)
  })

  it('should show form Login', () => {
    expect(login.find('form')).to.have.length(1)
    expect(login.find('input')).to.have.length(2)
    expect(login.find('button')).to.have.length(1)
    login.unmount()
  })
  
  it('should check to fill fields: email and password', () => {
    const email = login.find('input').first()
    const password = login.find('input').last()
    email.simulate('blur')
    password.simulate('blur')
    const errorEmail = login.find('.error--input').first()
    const errorPass = login.find('.error--input').last()
    expect(errorEmail.text()).to.equal('Required')
    expect(errorPass.text()).to.equal('Required')
    login.unmount()
  })

  it('should correct fill fields password and email', () => {
    const email = login.find('input').first()
    const password = login.find('input').last()
    email.simulate('change', { target: { value: testValue }})
    email.simulate('blur')
    password.simulate('change', { target: { value: testValue }})
    password.simulate('blur')
    expect(login.find('.error--input').first().text()).to.equal('Invalid email address')
    expect(login.find('.error--input').last().text()).to.equal('Must be 6 characters or more')
    login.unmount()
  })

  it('should click submit', () => {
    const form = login.find('form')
    const inputFirst = login.find('input').first()
    const inputSecond = login.find('input').last()
    inputFirst.simulate('change', { target: { value: 'qqqq@ewrewr.com' }})
    inputSecond.simulate('change', { target: { value: '1111111' }})
    form.simulate('submit')
    expect(onSubmit.callCount).to.equal(1)
    login.unmount()
  })
}) 
