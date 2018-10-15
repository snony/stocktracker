import { mockGlobalState } from '__mock__/globalstate.mock'
import { mapStateToProps } from 'peers/peersContainer'

describe('test for mapStateToProps from peersContainer', () => {
  it('should return the peers state', () => {
    const mockState = { peers: mockGlobalState.peers }
    const returnState = mapStateToProps(mockGlobalState)

    expect(returnState).toEqual(mockState)
  })
})
