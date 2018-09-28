import { connect } from 'react-redux'
import News from './news'

const mapStateToProps = state => ({
  newsItems: state.news
})

export default connect(mapStateToProps)(News)
