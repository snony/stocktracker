import React from 'react'

import { FetchStatus, NewsItemsProps, NewsProps } from './types'

// TODO ML 28/09, these were needed previously but cannot be imported in typescript cause of lack of
// types. We have to think about how to handle this later.
// import LinesEllipsis from 'react-lines-ellipsis'
// import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
// const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)
// {/* <ResponsiveEllipsis text={newsData.headline} maxLine="2" ellipsis="..." trimRight /> */}

export const News: React.SFC<NewsProps> = ({ newsData }) => (
  <div>
    <a href={newsData.url} className="label label--link">
      {newsData.headline}
    </a>
    <span className="label label--small">
      {newsData.datetime} - {newsData.source}
    </span>
  </div>
)

const NewsItems: React.SFC<NewsItemsProps> = ({ newsItems, fetchStatus }) => {
  switch (fetchStatus) {
    case FetchStatus.SUCCESS:
      return (
        <div className="news-container">
          {newsItems.map(newsData => (
            <News key={newsData.url} newsData={newsData} />
          ))}
        </div>
      )
    case FetchStatus.FAIL:
      return <div className="news-container">Cannot load data, check internet connection</div>
    case FetchStatus.PENDING:
      return <div className="news-container">...Loading...</div>
    default:
      return <div className="news-container">No data</div>

  }
}

export default NewsItems
