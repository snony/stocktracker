const mapStateToProps = state => {
  return {
    company: state.company,
    companyInfo: {
      charts: state.companyInfo.charts,
      news: state.companyInfo.news,
      overview: state.companyInfo.overview,
      peers: state.companyInfo.peers,
      keystats: state.companyInfo.keystats
    },
    companiesDB: state.companiesDB
  }
}

export default mapStateToProps
