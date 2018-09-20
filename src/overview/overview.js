import React from 'react'

const Overview = ({ overview }) =>
  overview === null ? null : (
    <div className="overview-container">
      <span className="label label--big">
        {overview.companyName} {overview.symbol}
      </span>
      <a href={overview.website} className="label label--small label--link">
        {overview.website}
      </a>
      <span className="label">{overview.description}</span>
    </div>
  )

export default Overview
