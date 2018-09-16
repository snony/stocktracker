import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../redux/index'

const News = ({ companyInfo: { news } }) => {
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

export default connect(mapStateToProps)(News)
