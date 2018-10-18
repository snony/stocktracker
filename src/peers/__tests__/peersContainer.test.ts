import { mockGlobalState } from '__mock__/globalstate.mock'
import { mapStateToProps } from 'peers/peersContainer'

describe('Peers Container', () => {
  it('should mapStateToProps return the peers state', () => {
    const mockState = { peers: mockGlobalState.peers }
    const returnState = mapStateToProps(mockGlobalState)

    expect(returnState).toEqual(mockState)
  })
})
