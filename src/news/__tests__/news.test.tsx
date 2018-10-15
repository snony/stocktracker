import React from 'react'
import renderer from 'react-test-renderer'

import getMockNews from '../__mocks__/news'
import NewsItems, { News } from '../news'
import { FetchStatus, NewsItemsProps, NewsProps } from '../types'


describe('NewsItems Component', () => {
  it('renders correctly news pending', () => {
    const newsItems: NewsItemsProps = { newsItems: [], fetchStatus: FetchStatus.PENDING }
    const tree = renderer.create(<NewsItems {...newsItems} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly on fetch status of success and display newsItems', () => {
    const newsData = getMockNews(5)
    const newsItems: NewsItemsProps = { newsItems: newsData, fetchStatus: FetchStatus.SUCESS }
    const tree = renderer.create(<NewsItems {...newsItems} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly on fetch status of fail', () => {
    const newsItems: NewsItemsProps = { newsItems: [], fetchStatus: FetchStatus.FAIL }
    const tree = renderer.create(<NewsItems {...newsItems} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('News Component', () => {
  it('renders correctly the newsData', () => {
    const newsData: NewsProps = {
      newsData: {
        url: 'www.apple.com/news/apple_strategy',
        headline: 'Apple strategy is to win the electronic world war',
        datetime: '5/10/2018',
        source: 'The New York Post'
      }
    }
    const tree = renderer.create(<News {...newsData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
