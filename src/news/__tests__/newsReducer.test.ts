import { NEWS_FETCH_FAILED, NEWS_RECEIVED_ACTION, NewsReceivedAction } from '../newsActions'
import newsReducer from '../newsReducer'
import { FetchStatus, News, NewsItemsProps } from '../types'

describe('news container reducer', () => {
  it('should return the initial state', () => {
    const initState: NewsItemsProps = { newsItems: [], fetchStatus: FetchStatus.PENDING }
    expect(newsReducer(initState, {} as NewsReceivedAction)).toEqual(initState)
  })

  it('should handle NEWS_RECEIVED_ACTION', () => {
    const newsItems: News[] = [
      { url: 'apple', headline: 'lang', datetime: '05/10/2018', source: 'Washington Post' }
    ]
    const expectedState: NewsItemsProps = { newsItems, fetchStatus: FetchStatus.SUCESS }
    expect(newsReducer({} as NewsItemsProps, { type: NEWS_RECEIVED_ACTION, newsItems })).toEqual(expectedState)
  })

  it('should handle NEWS_FETCH_fAIL', () => {

    const expectedState: NewsItemsProps = { fetchStatus: FetchStatus.FAIL } as NewsItemsProps
    expect(newsReducer({} as NewsItemsProps, { type: NEWS_FETCH_FAILED })).toEqual(expectedState)
  })
})
