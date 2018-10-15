import React from 'react'
import renderer from 'react-test-renderer'

import NewsItems, { News } from 'news/news'
import { NewsItemsProps, NewsProps } from 'news/types'

import { getMockNews } from '__mock__/news.mock'

const news = getMockNews(1)

describe('NewsItems Component', () => {
  it('renders correctly with empty newsItems passed to it', () => {
    const newsItems: NewsItemsProps = { newsItems: [] }
    const tree = renderer.create(<NewsItems {...newsItems} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with newsItem of length one passed to it', () => {
    const newsItems: NewsItemsProps = { newsItems: news }
    const tree = renderer.create(<NewsItems {...newsItems} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('News Component', () => {
  it('renders correctly the newsData', () => {
    const newsData: NewsProps = { newsData: news[0] }
    const tree = renderer.create(<News {...newsData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
