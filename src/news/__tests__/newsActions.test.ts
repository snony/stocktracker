import { mockApiFailFetch } from '__mock__/api.fail.mock'
import { mockApi } from '__mock__/api.mock'
import { mockGlobalState } from '__mock__/globalstate.mock'
import { generateMockStore } from '__mock__/mockStore.mock'
import { mockNews } from '__mock__/news.mock'
import {
  getNewsData,
  getNewsFetchFailedAction,
  NEWS_FETCH_FAILED,
  NEWS_RECEIVED_ACTION,
  NewsReceivedAction,
  receiveNewsAction
} from 'news/newsActions'
import { MockStore } from 'redux-mock-store'

describe('actions', () => {

  describe('synchronous actions', () => {
    it('receiveNewsAction should create a news received action', () => {
      const newsItems = mockGlobalState.news
      const expectedAction: NewsReceivedAction = {
        type: NEWS_RECEIVED_ACTION,
        newsItems: newsItems.newsItems
      }
      expect(receiveNewsAction(expectedAction.newsItems)).toEqual(expectedAction)
    })

    it('getNewsFetchFailedAction should create a news fetch fail action', () => {
      expect(getNewsFetchFailedAction()).toEqual({ type: NEWS_FETCH_FAILED })
    })
  })

  describe('asynchronous actions', () => {
    let store: MockStore<{}>
    afterEach(() => {
      store.clearActions()
    })
    it('getNewsData should dispatch an async news received action', async () => {
      const newsMock = mockNews
      const expectedAction = [
        {
          type: NEWS_RECEIVED_ACTION,
          newsItems: {
            newsItems: newsMock.newsItems,
            fetchStatus: newsMock.fetchStatus
          }
        }
      ]

      store = generateMockStore(mockGlobalState, mockApi)
      await store.dispatch<any>(getNewsData('aapl'))
      expect(store.getActions()).toEqual(expectedAction)
    })

    it('getNewsData should dispatch an async news fetch fail action', async () => {
      store = generateMockStore(mockGlobalState, mockApiFailFetch)
      await store.dispatch<any>(getNewsData('aapl'))
      expect(store.getActions()).toEqual([{ type: NEWS_FETCH_FAILED }])
    })
  })
})
