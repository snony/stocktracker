import { connect } from 'react-redux'

import { GlobalState } from '../types';
import Peers from './peers'

const mapStateToProps = (state: GlobalState) => ({
  peers: state.peers
})

export type peersContainerState = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(Peers)
