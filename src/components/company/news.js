import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

const News = ({ news }) => (
  <div className="news-container">
    {news.map(newsData => {
      return (
        <div key={newsData.url}>
          <a href={newsData.url} className="label label--link">
            <ResponsiveEllipsis text={newsData.headline} maxLine="2" ellipsis="..." trimRight />
          </a>
          <span className="label label--small">
            {newsData.datetime} - {newsData.source}
          </span>
        </div>
      )
    })}
  </div>
)

export default News
