import React from 'react'

const AboutCompany = ({ overview }) =>
  overview === null ? null : (
    <div>
      <span className="label label--big label--newline">
        {overview.companyName} {overview.symbol}
      </span>
      <a href={overview.website} className="label label--small label--link">
        {overview.website}
      </a>
      <span className="label">{overview.description}</span>
    </div>
  )

export default AboutCompany
