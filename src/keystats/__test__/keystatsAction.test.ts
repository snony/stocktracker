import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { getKeyStatsData, STATS_RECEIVED_ACTION, statsReceivedAction } from '../keystatsActions'
import mockApi from './mockAPI'
import { mockKeyStats } from './mockData'


const middleware = [thunk.withExtraArgument(mockApi)]
const mockStore = configureMockStore(middleware)

const mockSymbol = 'aapl'
const mockData = mockKeyStats  
const expectedAction = {
  type: STATS_RECEIVED_ACTION,
  keystats: mockData
}

describe('test for keystats action', () => {
  describe('test for receive action', () => {
    it('should generate STATS_RECEIVED_ACTION action', () => {
      const action = statsReceivedAction(mockData)

      expect(action).toEqual(expectedAction)
    })
  })

  describe('test for async get thunk action', () => {
    it('should dispatch the STATS_RECEIVED_ACTION action when fetch is successful', () => {
      const store = mockStore({ keystats: mockData })
      const mockDispatch = store.dispatch

      mockDispatch<any>(getKeyStatsData(mockSymbol)).then(() => {
        const mockStoreActions = store.getActions()

        expect(mockStoreActions[0]).toEqual(expectedAction)
      })
    })
  })
})