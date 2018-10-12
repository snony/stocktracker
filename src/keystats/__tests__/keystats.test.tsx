import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'

import { mockGlobalState } from '__mock__/data.mock'
import KeyStats from '../keystats'

describe('test for keystats component', () => {
  it('should render key stats when keystats state updated', () => {
    const keystats = mockGlobalState.keystats
    const wrapper = shallow(<KeyStats keystats={keystats} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})