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
    <span className="label label--big label--newline">
      {overview.companyName} {overview.symbol}
    </span>
    <a
      href={overview.website}
      className="label label--small label--blue label--link label--newline"
    >
      {overview.website}
    </a>
    <span className="label">{overview.description}</span>
  </div>
)

export default OverViewContainer
