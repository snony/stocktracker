import { connect } from 'react-redux'
import Overview from './overview'

const mapStateToProps = state => ({
  overview: state.overview
})

export default connect(mapStateToProps)(Overview)
