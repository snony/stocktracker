import React from 'react'
import { getNews } from './../../api'

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
  <div>
    {news.map(newsData => {
      return (
        <div key={newsData.url}>
          <a href={newsData.url} className="label label--link label--newline">
            {newsData.headline}
          </a>
          <span className="label label--small label--blue">
            {newsData.datetime} - {newsData.source}
          </span>
        </div>
      )
    })}
  </div>
)

export default NewsContainer
