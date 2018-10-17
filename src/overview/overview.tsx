import fetchStatus from 'fetchStatus'
import Label from 'label.styles'
import React from 'react'

import { OverviewContainerStateProps } from './overviewContainer'

const Overview: React.SFC<OverviewContainerStateProps> = ({ overview }) => {
  switch (overview.fetchStatus) {
    case fetchStatus.INITIAL:
      return <Label small>Loading...</Label>
    case fetchStatus.SUCCESS:
      return (
        <>
          <Label big>
            {overview.companyName} ({overview.symbol})
          </Label>
          <a href={overview.website}>
            <Label small grey italic link>
              {overview.website}
            </Label>
          </a>
          <Label>{overview.description}</Label>
        </>
      )
    case fetchStatus.FAILED:
      return <Label small>Failed to fetch company overview</Label>
    default:
      return null
  }
}

export default Overview
