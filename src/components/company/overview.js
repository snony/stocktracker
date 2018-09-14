import React from 'react'
import { getOverview } from './../../api'

class OverViewContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overview: null
    }
  }

  getOverviewData = () => {
    const symbol = this.props.symbol
    getOverview(symbol).then(overviewData => this.setState({ overview: overviewData }))
  }

  componentDidUpdate(prevProps) {
    if (this.props.symbol !== prevProps.symbol) {
      this.getOverviewData()
    }
  }

  render() {
    const overview = this.state.overview
    return overview === null ? null : <AboutCompany overview={overview} />
  }
}

const AboutCompany = ({ overview }) => (
  <div>
    <span className="company-title">
      {overview.companyName} {overview.symbol}
    </span>
    <a href={overview.website} className="company-link">
      {overview.website}
    </a>
    <span className="company-desc">{overview.description}</span>
  </div>
)

export default OverViewContainer
