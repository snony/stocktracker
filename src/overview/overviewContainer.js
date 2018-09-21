import { connect } from 'react-redux'
import Overview from './overview'

const mapStateToProps = state => ({
  overview: state.old.overview
})

export default connect(mapStateToProps)(Overview)
