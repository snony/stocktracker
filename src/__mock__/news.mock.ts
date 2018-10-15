import { FetchStatus, News, NewsItemsProps } from "news/types"

export const getMockNews = (total: number = 5) => mockNewsList.slice(0, total)

export const mockNews: NewsItemsProps = {
  newsItems: [],
  fetchStatus: FetchStatus.PENDING
}

export const mockNewsList: News[] = [
  {
    url: 'www.apple.com/news',
    headline: 'Not Fake News',
    datetime: '20/10/2018',
    source: 'Seeking beta'
  },
  {
    url: 'www.apple.com/news',
    headline: 'All eyes on treasury',
    datetime: '20/10/2018',
    source: 'SeekingAlpha'
  },
  {
    url: 'www.apple.com/news',
    headline: 'Apple won the fight against Apple',
    datetime: '20/10/2018',
    source: 'Seeking beta'
  },
  {
    url: 'www.apple.com/news',
    headline: 'Apple won the fight against Apple',
    datetime: '20/10/2018',
    source: 'Seeking beta'
  },
  {
    url: 'www.apple.com/news',
    headline: 'Apple won the fight against Apple',
    datetime: '20/10/2018',
    source: 'Seeking beta'
  },
  {
    url: 'www.apple.com/news',
    headline: 'Apple won the fight against Apple',
    datetime: '20/10/2018',
    source: 'Seeking beta'
  },
  {
    url: 'www.apple.com/news',
    headline: 'Apple won the fight against Apple',
    datetime: '20/10/2018',
    source: 'Seeking beta'
  },
  {
    url: 'www.apple.com/news',
    headline: 'Apple won the fight against Apple',
    datetime: '20/10/2018',
    source: 'Seeking beta'
  }
]

