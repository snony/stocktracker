import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { getPeersData, PEERS_RECEIVED_ACTION, PeersReceivedAction, peersReceivedAction } from '../peersActions'
import api from './mockAPI'
import mockPeersData from './mockData'

const mockSymbol = 'aapl'
const middleware = [thunk.withExtraArgument(api)]
const mockStore = configureMockStore(middleware)
const store = mockStore({ peers: mockPeersData.emptyPeers })
const expectedAction: PeersReceivedAction = {
  type: PEERS_RECEIVED_ACTION,
  peers: mockPeersData.examplePeers
}

describe('test for peers action', () => {
  const mockDispatch = store.dispatch

  it('should create new PEERS_RECEIVED_ACTION object', () => {
    const action = peersReceivedAction(mockPeersData.examplePeers)
    expect(action).toEqual(expectedAction)
  })

  it('should dispatch PEERS_RECEIVED_ACTION when the fetch is successful', () => {
    mockDispatch<any>(getPeersData(mockSymbol)).then(() => {
        const mockStoreAction = store.getActions()
        expect(mockStoreAction[0] as object[]).toEqual(expectedAction)
      })
  })
})

describe('test for peers action without mock-redux-store', () => {
  const mockDispatch = jest.fn()
  const result = getPeersData(mockSymbol)
  return result(mockDispatch, null, api).then(() => {
    expect(mockDispatch.mock.calls).toMatchSnapshot()
  })
})
