import { connect } from 'react-redux'
import Peers from './peers'

const mapStateToProps = state => ({
  peers: state.peers
})

export default connect(mapStateToProps)(Peers)
