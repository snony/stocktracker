import { connect } from 'react-redux'
import KeyStats from './keystats'

const mapStateToProps = state => ({
  keystats: state.companyInfo.keystats
})

export default connect(mapStateToProps)(KeyStats)
