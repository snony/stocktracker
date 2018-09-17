import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../redux/index'

const AboutCompany = ({ companyInfo: { overview } }) => (
  <div>
    {overview.companyName} {overview.symbol}
    <br />
    <a href={overview.website}>{overview.website}</a>
    <br />
    {overview.description}
  </div>
)

export default connect(mapStateToProps)(AboutCompany)
