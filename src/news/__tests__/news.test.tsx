import { getMockNews, mockNews } from '__mock__/news.mock'
import NewsItems, { News } from 'news/news'
import { FetchStatus, NewsItemsProps, NewsProps } from 'news/types'
import React from 'react'
import renderer from 'react-test-renderer'



describe('NewsItems Component', () => {
  it('renders correctly news pending', () => {
    const newsItems = { fetchStatus: FetchStatus.PENDING } as NewsItemsProps
    const tree = renderer.create(<NewsItems {...newsItems} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly on fetch status of success and display newsItems', () => {
    const newsItems: NewsItemsProps = mockNews
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
    const newsData: NewsProps = { newsData: getMockNews(1)[0] }
    const tree = renderer.create(<News {...newsData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
