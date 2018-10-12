import Label from 'label.styles'
import React from 'react'

import { OverviewContainerStateProps } from './overviewContainer'

const Overview: React.SFC<OverviewContainerStateProps> = ({ overview }) => (
  <div className="overview-container">
    <Label big>
      {overview.companyName} ({overview.symbol})
    </Label>
    <a href={overview.website} className="label label--small label--link">
      {overview.website}
    </a>
    <span className="label">{overview.description}</span>
  </div>
)

export default Overview
