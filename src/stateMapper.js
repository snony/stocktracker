const mapStateToProps = state => {
    return {company: state.company,
            companyInfo:{
                news:state.companyInfo.news,
                overview:state.companyInfo.overview,
                peers:state.companyInfo.peers,
                keystats:state.companyInfo.keystats
            }
            
        };
}


export default mapStateToProps;