import { connect } from 'react-redux'
import KeyStats from './keystats'

const mapStateToProps = state => ({
  keystats: state.old.keystats
})

export default connect(mapStateToProps)(KeyStats)
