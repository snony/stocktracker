const mapStateToProps = state => {
  return {
    company: state.company,
    companyInfo: {
      history: state.companyInfo.history,
      news: state.companyInfo.news,
      overview: state.companyInfo.overview,
      peers: state.companyInfo.peers,
      keystats: state.companyInfo.keystats
    },
    filters: state.filters,
    companiesDB: state.companiesDB
  }
}

export default mapStateToProps
