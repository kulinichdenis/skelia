import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LoginUser from '../src/containers/LoginUser'
import Login from '../src/components/Login'
import Progress from '../src/components/UI/Progress'
import store from '../src/store'

import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('component <LoginUser />', () => {
  it('should have Login and doen\'t have Progress', () => {
    const loginUser = shallow(<LoginUser />, { context: { store } }).dive()
    expect(loginUser.find('.login')).to.have.length(1)
    expect(loginUser.find(Login)).to.have.length(1)
    expect(loginUser.find(Progress)).to.have.length(0)
  })
  
  it('should show progress', () => {
    const loginUser = shallow(<LoginUser />, { context: { store } }).dive()
    expect(loginUser.find(Login)).to.have.length(1)
    expect(loginUser.find(Progress)).to.have.length(0)
  })
})

