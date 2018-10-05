import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { getPeersData, PEERS_RECEIVED_ACTION, peersReceivedAction } from '../peersActions'
import peers from './fixtures'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('test for peers action', () => {
  test('should receieve peers action object', () => {
    const expectedAction = {
      type: PEERS_RECEIVED_ACTION,
      peers: peers[0]
    }
    expect(peersReceivedAction(peers[0])).toEqual(expectedAction)
  })
})
  