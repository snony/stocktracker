import { connect } from 'react-redux'

import { GlobalState } from '../types'
import Overview from './overview'

const mapStateToProps = (state: GlobalState) => ({
  overview: state.overview
})

export type OverviewContainerStateProps = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(Overview)
