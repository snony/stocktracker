import { MockStore } from 'redux-mock-store'
import { getPeersData, PEERS_RECEIVED_ACTION, PeersReceivedAction, peersReceivedAction } from '../peersActions'
import api from './mockAPI'
import mockPeersData from './mockData'
import { generateMockStore } from './mockStore'

const mockSymbol = 'aapl'

const expectedAction: PeersReceivedAction = {
  type: PEERS_RECEIVED_ACTION,
  peers: mockPeersData.examplePeers
}

describe('test for peers action', () => {
  let store: MockStore<{}>

  beforeEach(() => {
    store = generateMockStore({ peers: mockPeersData.emptyPeers }, api)
    store.clearActions()
  })
  
  it('should create new PEERS_RECEIVED_ACTION object', () => {
    const action = peersReceivedAction(mockPeersData.examplePeers)
    expect(action).toEqual(expectedAction)
  })

  it('should dispatch PEERS_RECEIVED_ACTION when the fetch is successful', () => {
    const mockDispatch = store.dispatch
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
