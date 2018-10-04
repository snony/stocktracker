import { connect } from 'react-redux'

import { GlobalState } from '../types'
import KeyStats from './keystats'

const mapStateToProps = (state: GlobalState) => ({
  keystats: state.keystats
})

export type KeyStatsContainerStateProps = ReturnType<typeof mapStateToProps>
export default connect(mapStateToProps)(KeyStats)
