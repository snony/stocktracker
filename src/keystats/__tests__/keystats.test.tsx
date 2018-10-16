import { mockFailedGlobalState, mockGlobalState } from '__mock__/globalstate.mock'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import KeyStats from 'keystats/keystats'
import React from 'react'

describe('Keystats Component', () => {
  it('should render key stats when keystats state updated', () => {
    const keystats = mockGlobalState.keystats
    const wrapper = shallow(<KeyStats keystats={keystats} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render status when keystats state is not SUCCESS', () => {
    const keystats = mockFailedGlobalState.keystats
    const wrapper = shallow(<KeyStats keystats={keystats} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
