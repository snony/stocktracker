import React from 'react'

import { OverviewContainerStateProps } from './overviewContainer'

const Overview: React.SFC<OverviewContainerStateProps> = ({ overview }) => (
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
