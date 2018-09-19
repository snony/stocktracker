import React from 'react'
import { getNews } from './../../api'
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

class NewsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: []
    }
  }

  getNewsData = () => {
    const symbol = this.props.symbol
    getNews(symbol).then(newsData => this.setState({ news: newsData }))
  }

  componentDidUpdate(prevProps) {
    if (this.props.symbol !== prevProps.symbol) {
      this.getNewsData()
    }
  }

  render() {
    const { news } = this.state
    return news && news.length ? <News news={news} /> : null
  }
}

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

export default NewsContainer
