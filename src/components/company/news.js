import React from 'react'

const News = ({ news }) => (
  <div>
    {news.map(newsData => {
      return (
        <div key={newsData.url}>
          <a href={newsData.url} className="label label--link">
            {newsData.headline}
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
