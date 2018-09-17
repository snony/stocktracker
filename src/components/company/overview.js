import React from 'react'

const AboutCompany = ({ overview }) => (
  <div>
    {overview.companyName} {overview.symbol}
    <br />
    <a href={overview.website}>{overview.website}</a>
    <br />
    {overview.description}
  </div>
)

export default AboutCompany
