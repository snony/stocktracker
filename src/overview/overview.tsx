import React from 'react'

import { OverviewContainerStateProps } from './overviewContainer'

const Overview: React.SFC<OverviewContainerStateProps> = ({ overview }) => {
  switch (overview.fetchStatus) {
    case 'LOADING':
      return <p className="label label--small">Loading...</p>
    case 'SUCCESS':
      return (
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
    case 'FAILED':
      return <p className="label label--small">Failed to fetch company overview</p>
    default:
      return null
  }
}

export default Overview
