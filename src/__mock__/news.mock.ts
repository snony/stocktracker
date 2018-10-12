import { News } from "news/types"

export const mockNews: News[] = [
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

export const getMockNews = (total: number = 5) => mockNews.slice(0, total)
