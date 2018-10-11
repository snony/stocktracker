import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'
import KeyStats from '../keystats'
import { mockKeyStats } from './__mock__/mockData'

describe('testing for keystats component', () => {
  it('should render key stats when keystats state updated', () => {
    const keystats = mockKeyStats
    const wrapper = shallow(<KeyStats keystats={keystats} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})