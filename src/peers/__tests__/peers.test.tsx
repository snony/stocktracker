import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'

import { mockGlobalState } from '../../__mock__/data.mock'
import Peers from '../peers'
import { initialState } from '../peersReducer'

describe('tests for peers component', () => {
  it('should render Peers with loading... when peers state is empty', () => {
    const peers = initialState
    const wrapper = shallow(<Peers peers={peers} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render Peers with peers state data correctly', () => {
    const wrapper = shallow(<Peers peers={ mockGlobalState.peers} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
