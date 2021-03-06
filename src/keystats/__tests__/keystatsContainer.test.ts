import { mockGlobalState } from '__mock__/globalstate.mock'
import { mapStateToProps } from 'keystats/keystatsContainer'
import { GlobalState } from 'types'

describe('test for the mapStateToProps', () => {
  it('should return the keystats state', () => {
    const mockState = { keystats: mockGlobalState.keystats }
    const returnState = mapStateToProps(mockGlobalState as GlobalState)

    expect(returnState).toEqual(mockState)
  })
})
