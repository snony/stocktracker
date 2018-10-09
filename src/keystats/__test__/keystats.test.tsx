import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJSON from 'enzyme-to-json'
import React from 'react'
import KeyStats from '../keystats'
import { mockKeyStats } from './mockData'

Enzyme.configure({
  adapter: new Adapter()
})

describe('testing for keystats component', () => {
  it('should render key stats when keystats state updated', () => {
    const keystats = mockKeyStats
    const wrapper = shallow(<KeyStats keystats={keystats} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})