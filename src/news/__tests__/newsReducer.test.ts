import { mockNews } from '__mock__/news.mock'
import { NEWS_FETCH_FAILED, NEWS_RECEIVED_ACTION, NewsReceivedAction } from 'news/newsActions'
import newsReducer, { initState } from 'news/newsReducer'
import { FetchStatus, NewsItemsProps } from 'news/types'

describe('news container reducer', () => {
  it('should return the initial state', () => {
    expect(newsReducer(initState, {} as NewsReceivedAction)).toEqual(initState)
  })

  it('should handle NEWS_RECEIVED_ACTION', () => {
    const expectedState = mockNews
    expect(
      newsReducer(initState, { type: NEWS_RECEIVED_ACTION, newsItems: mockNews.newsItems })
    ).toEqual(expectedState)
  })

  it('should handle NEWS_FETCH_fAIL', () => {
    const expectedState: NewsItemsProps = { fetchStatus: FetchStatus.FAIL, newsItems: [] }
    expect(newsReducer(initState, { type: NEWS_FETCH_FAILED })).toEqual(expectedState)
  })
})
