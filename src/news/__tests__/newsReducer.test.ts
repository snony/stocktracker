import { NEWS_RECEIVED_ACTION, NewsReceivedAction } from '../newsActions'
import newsReducer, { initialState } from '../newsReducer'

import { mockGlobalState } from '__mock__/globalstate.mock'

describe('news container reducer', () => {
  it('should return the initial state', () => {
    expect(newsReducer(undefined, {} as NewsReceivedAction)).toEqual(initialState)
  })

  it('should handle NEWS_RECEIVED_ACTION', () => {
    const newsItems = mockGlobalState.news
    const action: NewsReceivedAction = { 
      type: NEWS_RECEIVED_ACTION, 
      newsItems 
    }

    expect(newsReducer(initialState, action)).toEqual(newsItems)
  })
})
