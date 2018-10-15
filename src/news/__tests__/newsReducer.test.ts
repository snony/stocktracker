import { mockGlobalState } from '__mock__/globalstate.mock'
import { NEWS_RECEIVED_ACTION, NewsReceivedAction } from 'news/newsActions'
import newsReducer, { initialState } from 'news/newsReducer'

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
