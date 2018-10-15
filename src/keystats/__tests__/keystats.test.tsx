import { mockGlobalState } from '__mock__/globalstate.mock'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import KeyStats from 'keystats/keystats'
import React from 'react'

describe('test for keystats component', () => {
  it('should render key stats when keystats state updated', () => {
    const keystats = mockGlobalState.keystats
    const wrapper = shallow(<KeyStats keystats={keystats} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
