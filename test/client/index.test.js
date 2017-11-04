import React from 'react'
import { shallow, mount } from 'enzyme'

import Header from '../../client/components/Header'
import './setup-dom'

Header.prototype.componentDidMount = () => {}

test('Kai Time! renders on Header', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper.find('h1').text()).toBe('Kai Time!')
})
