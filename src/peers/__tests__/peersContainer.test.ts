import { GlobalState } from 'types'

import { mapStateToProps } from '../peersContainer'
import mockPeersData from './mockData'

describe('test for mapStateToProps from peersContainer', () => {
  it('should return the correct initial state', () => {
    const stateInitial = { peers: mockPeersData.emptyPeers }
    const stateFromMapStateToProps = mapStateToProps(stateInitial as GlobalState)

    expect(stateFromMapStateToProps).toEqual({ peers: mockPeersData.emptyPeers })
  })

  it('should return the correct populated state', () => {
    const statePopulated = { peers: mockPeersData.examplePeers }
    const stateFromMapStateToProps = mapStateToProps(statePopulated as GlobalState)

    expect(stateFromMapStateToProps).toEqual({ peers: mockPeersData.examplePeers })
  })
})
