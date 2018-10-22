import { getMockNews, mockNews } from '__mock__/news.mock'
// import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import NewsItems, { News } from 'news/news'
import { FetchStatus, NewsItemsProps, NewsProps } from 'news/types'
import React from 'react'

describe('NewsItems Component', () => {
  it('renders correctly news pending', () => {
    const newsItems = { fetchStatus: FetchStatus.PENDING } as NewsItemsProps
    const tree = shallow(<NewsItems {...newsItems} />)// renderer.create(<NewsItems {...newsItems} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly on fetch status of success and display newsItems', () => {
    const newsItems: NewsItemsProps = mockNews
    const tree = shallow(<NewsItems {...newsItems} />)// renderer.create(<NewsItems {...newsItems} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly on fetch status of fail', () => {
    const newsItems: NewsItemsProps = { newsItems: [], fetchStatus: FetchStatus.FAIL }
    const tree = shallow(<NewsItems {...newsItems} />)// renderer.create(<NewsItems {...newsItems} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('News Component', () => {
  it('renders correctly the newsData', () => {
    const newsData: NewsProps = { newsData: getMockNews(1)[0] }
    const tree = shallow(<News {...newsData} />)// renderer.create(<News {...newsData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
