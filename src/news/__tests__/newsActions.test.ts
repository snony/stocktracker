import configureMockStore from 'redux-mock-store'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { API, GlobalState } from 'types'

import api from '../__mocks__/api.mock'
import { getMockNews } from '../__mocks__/news'
import {
  getNewsData,
  NEWS_RECEIVED_ACTION,
  NewsReceivedAction,
  receiveNewsAction
} from '../newsActions'

describe('actions', () => {
  describe('synchronous actions', () => {
    it('receiveNewsAction should create a news received action', () => {
      const newsItems = getMockNews()
      const expectedAction = {
        type: NEWS_RECEIVED_ACTION,
        newsItems
      }

      expect(receiveNewsAction(newsItems)).toEqual(expectedAction)
    })
  })

  describe('asynchronous actions', () => {
    it('getNewsData should  dispatch an async news received action', async () => {
      type ThunkDispatchNewsReceivedAction = ThunkDispatch<GlobalState, API, NewsReceivedAction>
      type Store = GlobalState | ThunkDispatchNewsReceivedAction
      const newsData = getMockNews()
      const expectedAction = [
        {
          type: NEWS_RECEIVED_ACTION,
          newsItems: newsData
        }
      ]

      // Setup the mock store
      const middlewares = [thunkMiddleware.withExtraArgument(api)]
      const mockStore: Store = configureMockStore(middlewares)
      const store = mockStore(jest.fn())

      await store.dispatch(getNewsData('aapl'))
      expect(store.getActions()).toEqual(expectedAction)
    })
  })
})
