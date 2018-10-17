import { FetchStatus, News, NewsItemsProps } from "news/types"
export const mockNewsList: News[] = [
  {
    url: 'www.apple.com/news/1',
    headline: 'Not Fake News',
    datetime: '20/10/2018',
    source: 'Seeking beta'
  },
  {
    url: 'www.apple.com/news/2',
    headline: 'All eyes on treasury',
    datetime: '20/10/2018',
    source: 'SeekingAlpha'
  },
  {
    url: 'www.apple.com/news/3',
    headline: 'Apple won the fight against Apple',
    datetime: '20/10/2018',
    source: 'Seeking beta'
  },
  {
    url: 'www.apple.com/news/4',
    headline: 'Apple won the fight against Apple',
    datetime: '20/10/2018',
    source: 'Seeking beta'
  },
  {
    url: 'www.apple.com/news/5',
    headline: 'Apple won the fight against Apple',
    datetime: '20/10/2018',
    source: 'Seeking beta'
  },
  {
    url: 'www.apple.com/news/6',
    headline: 'Apple won the fight against Apple',
    datetime: '20/10/2018',
    source: 'Seeking beta'
  },
  {
    url: 'www.apple.com/news/7',
    headline: 'Apple won the fight against Apple',
    datetime: '20/10/2018',
    source: 'Seeking beta'
  },
  {
    url: 'www.apple.com/news/8',
    headline: 'Apple won the fight against Apple',
    datetime: '20/10/2018',
    source: 'Seeking beta'
  }
]
export const getMockNews = (total: number = 5) => mockNewsList.slice(0, total)

export const mockNews: NewsItemsProps = {
  newsItems: getMockNews(5),
  fetchStatus: FetchStatus.SUCCESS
}