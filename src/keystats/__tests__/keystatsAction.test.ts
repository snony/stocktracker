import { mockApi, mockFailedApi } from '__mock__/api.mock'
import { mockFailedGlobalState, mockGlobalState } from '__mock__/globalstate.mock'
import { generateMockStore } from '__mock__/mockStore.mock'
import { getKeyStatsData, KEYSTATS_ACTION_TYPES, KeyStatsActions } from 'keystats/keystatsActions'
import { MockStore } from 'redux-mock-store'

const mockSymbol = 'aapl'

describe('Keystats Actions', () => {
  let store: MockStore<{}>

  const mockData = mockGlobalState.keystats
  describe('Success', () => {
    beforeEach(() => {
      store = generateMockStore(mockGlobalState, mockApi)
      store.clearActions()
    })

    const expectedAction = {
      type: KEYSTATS_ACTION_TYPES.STATS_RECEIVED,
      keystats: mockData
    }

    it('should generate STATS_RECEIVED_DATA action', () => {
      const action = KeyStatsActions.statsReceived(mockData)
      expect(action).toEqual(expectedAction)
    })

    it('should dispatch the STATS_RECEIVED_DATA action when fetch is successful', async () => {
      await store.dispatch<any>(getKeyStatsData(mockSymbol))

      expect(store.getActions()[0]).toEqual(expectedAction)
    })
  })

  describe('Fail', () => {
    beforeEach(() => {
      store = generateMockStore(mockFailedGlobalState, mockFailedApi)
      store.clearActions()
    })

    const expectedAction = {
      type: KEYSTATS_ACTION_TYPES.STATS_ERROR
    }

    it('should generate STATS_RECEIVED_ERROR action', () => {
      const action = KeyStatsActions.statsError()
      expect(action).toEqual(expectedAction)
    })

    it('should dispatch the STATS_RECEIVED_ERROR action when fetch is successful', async () => {
      await store.dispatch<any>(getKeyStatsData(mockSymbol))

      expect(store.getActions()[0]).toEqual(expectedAction)
    })
  })
})
