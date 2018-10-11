import React from 'react';
import renderer from 'react-test-renderer';
import { News, NewsItems } from '../news'
import { NewsItemsProps, NewsProps } from '../types'


describe('NewsItems Component', () => {

    it('renders correctly with empty newsItems passed to it', () => {
        const newsItems: NewsItemsProps = { newsItems: [] }
        const tree = renderer
            .create(<NewsItems {...newsItems} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders correctly with newsItem of length one passed to it', () => {
        const newsData: NewsProps = { newsData: { url: 'www.apple.com/news/apple_strategy', headline: 'Apple strategy is to win the electronic world war', datetime: '5/10/2018', source: 'The New York Post' } }
        const newsItems: NewsItemsProps = { newsItems: [newsData.newsData] }
        const tree = renderer
            .create(<NewsItems {...newsItems} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    })
})


describe('News Component', () => {

    it('renders correctly the newsData', () => {
        const newsData: NewsProps = { newsData: { url: 'www.apple.com/news/apple_strategy', headline: 'Apple strategy is to win the electronic world war', datetime: '5/10/2018', source: 'The New York Post' } }
        const tree = renderer
            .create(<News {...newsData} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    })
})