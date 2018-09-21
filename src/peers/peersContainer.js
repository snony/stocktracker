import { connect } from 'react-redux'
import Peers from './peers'

const mapStateToProps = state => ({
  peers: state.old.peers
})

export default connect(mapStateToProps)(Peers)
