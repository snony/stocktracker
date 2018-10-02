import { connect } from 'react-redux'

import rootReducer from '../reducer'
import Peers from './peers'

type GlobalState = ReturnType<typeof rootReducer>

const mapStateToProps = (state: GlobalState) => ({
  peers: state.peers
})

export type peersContainerState = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(Peers)
