import * as React from 'react'

interface OverviewProps {
  readonly overview: {
    readonly companyName: string
    readonly symbol: string
    readonly website: string
    readonly description: string
  }
}

const Overview: React.SFC<OverviewProps> = ({ overview }) =>
  overview === null ? null : (
    <div className="overview-container">
      <span className="label label--big">
        {overview.companyName} ({overview.symbol})
      </span>
      <a href={overview.website} className="label label--small label--link">
        {overview.website}
      </a>
      <span className="label">{overview.description}</span>
    </div>
  )

export default Overview
