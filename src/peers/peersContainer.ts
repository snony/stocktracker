import { connect } from 'react-redux'
import { GlobalState } from 'types'

import Peers from './peers'

export const mapStateToProps = (state: GlobalState) => ({
  peers: state.peers
})

export type PeersContainerState = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(Peers)
