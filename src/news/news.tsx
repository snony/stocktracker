import React from 'react'
import Truncate from 'react-truncate'

import { NewsItemsProps, NewsProps } from './types'

export const News: React.SFC<NewsProps> = ({ newsData }) => (
  <div>
    <a href={newsData.url} className="label label--link">
      <Truncate lines={2} trimWhitespace>
        {newsData.headline}
      </Truncate>
    </a>
    <span className="label label--small">
      {newsData.datetime} - {newsData.source}
    </span>
  </div>
)

const NewsItems: React.SFC<NewsItemsProps> = ({ newsItems }) => (
  <div className="news-container">
    {newsItems.map(newsData => (
      <News key={newsData.url} newsData={newsData} />
    ))}
  </div>
)

export default NewsItems
