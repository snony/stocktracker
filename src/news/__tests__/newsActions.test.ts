import { mockApi } from '__mock__/api.mock'
import { mockGlobalState } from '__mock__/globalstate.mock'
import { generateMockStore } from '__mock__/mockStore.mock'
import {
  getNewsData,
  NEWS_RECEIVED_ACTION,
  NewsReceivedAction,
  receiveNewsAction
} from 'news/newsActions'
import { MockStore } from 'redux-mock-store'

describe('actions', () => {
  let store: MockStore<{}>
  const newsItems = mockGlobalState.news
  const expectedAction: NewsReceivedAction = {
    type: NEWS_RECEIVED_ACTION,
    newsItems
  }

  beforeEach(() => {
    store = generateMockStore(mockGlobalState, mockApi)
    store.clearActions()
  })

  describe('synchronous actions', () => {
    it('receiveNewsAction should create a news received action', () => {
      expect(receiveNewsAction(newsItems)).toEqual(expectedAction)
    })
  })

  describe('asynchronous actions', () => {
    it('getNewsData should  dispatch an async news received action', async () => {
      await store.dispatch(getNewsData('aapl') as any)
      expect(store.getActions()).toEqual([expectedAction])
    })
  })
})
