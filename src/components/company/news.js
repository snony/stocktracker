import React from 'react'

const News = ({ news }) => {
  return (
    <div>
      {news.map(newsData => {
        return (
          <div key={newsData.url}>
            <h5>
              <a href={newsData.url}>{newsData.headline}</a>
            </h5>
            {newsData.datetime}
            <br />
            {newsData.source}
          </div>
        )
      })}
    </div>
  )
}

export default News
