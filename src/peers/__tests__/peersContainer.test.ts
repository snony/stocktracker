import { GlobalState } from 'types'

import { mockGlobalState } from '__mock__/data.mock'
import { mapStateToProps } from '../peersContainer'

describe('test for mapStateToProps from peersContainer', () => {
  it('should return the peers state', () => {
    const mockState = { peers: mockGlobalState.peers }
    const returnState = mapStateToProps(mockGlobalState as GlobalState)

    expect(returnState).toEqual(mockState)
  })
})
