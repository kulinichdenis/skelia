import React from 'react'
import { shallow, mount } from 'enzyme'
import Input from '../src/components/Form/Input'
import Select from '../src/components/Form/Select'

describe('component <Input />', () => {
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

describe('component <Select />', () => {
  const props = {
    label: 'Select',
    meta: {
      touched: false,
      error: ''
    },
    input: {
      onChange: () => true
    }
  }
  const items = [
    { key: '1', value: '1' },
    { key: '2', value: '2' },
    { key: '3', value: '3' }
  ]

  it('should render Select and items', () => {
    const select = mount(<Select items={items} {...props} />)
    expect(select.find('label').text()).to.equal('Select')
    expect(select.find('option')).to.have.length(4)
  })
})