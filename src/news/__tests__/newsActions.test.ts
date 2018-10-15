import configureMockStore from 'redux-mock-store'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { API, GlobalState } from 'types'

import apiFail from '../__mocks__/api.fail.mock'
import api from '../__mocks__/api.mock'
import { getMockNews } from '../__mocks__/news'
import {
  getNewsData,
  getNewsFetchFailedAction,
  NEWS_FETCH_FAILED,
  NEWS_RECEIVED_ACTION,
  NewsAction,
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

    it('getNewsFetchFailedAction should create a news fetch fail action', () => {
      expect(getNewsFetchFailedAction()).toEqual({ type: NEWS_FETCH_FAILED })
    })
  })

  describe('asynchronous actions', () => {
    type ThunkDispatchNewsReceivedAction = ThunkDispatch<GlobalState, API, NewsAction>
    type Store = GlobalState | ThunkDispatchNewsReceivedAction
    it('getNewsData should dispatch an async news received action', async () => {
      const newsData = getMockNews()
      const expectedAction = [
        {
          type: NEWS_RECEIVED_ACTION,
          newsItems: newsData
        }
      ]

      const middlewares = [thunkMiddleware.withExtraArgument(api)]
      const mockStore: Store = configureMockStore(middlewares)
      const store = mockStore(jest.fn())

      await store.dispatch(getNewsData('aapl'))
      expect(store.getActions()).toEqual(expectedAction)
    })

    it('getNewsData should dispatch an async news fetch fail action', async () => {
      const middlewares = [thunkMiddleware.withExtraArgument(apiFail)]
      const mockStore: Store = configureMockStore(middlewares)
      const store = mockStore(jest.fn())

      await store.dispatch(getNewsData('aapl'))
      expect(store.getActions()).toEqual([{ type: NEWS_FETCH_FAILED }])
    })
  })
})
