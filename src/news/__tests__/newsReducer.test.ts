import { NEWS_RECEIVED_ACTION, NewsReceivedAction } from '../newsActions'
import newsReducer from '../newsReducer'
import { News, NewsItemsProps } from '../types'

describe('news container reducer', () => {
  it('should return the initial state', () => {
    expect(newsReducer({} as NewsItemsProps, {} as NewsReceivedAction)).toEqual([])
  })

  it('should handle NEWS_RECEIVED_ACTION', () => {
    const newsItems: News[] = [
      { url: 'apple', headline: 'lang', datetime: '05/10/2018', source: 'Washington Post' }
    ]
    const action: NewsReceivedAction = { type: NEWS_RECEIVED_ACTION, newsItems }
    expect(newsReducer({} as NewsItemsProps, action)).toEqual(newsItems)
  })
})
