import React from 'react'
import { shallow } from 'enzyme'
import Input from '../src/components/Form/Input'

describe('test component Input', () => {
  const props = {
    label: 'Label',
    meta: {
      touched: true,
      error: 'Error'
    }
  }
  it('should render component', () => {
    const input = shallow(<Input {...props} />)
    expect(input.find('label').text()).to.equal('Label')
    expect(input.find('.error')).to.have.length(1)
    expect(input.find('.error').text()).to.equal('Error')
  })
}) 