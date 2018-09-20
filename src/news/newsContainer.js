import { connect } from 'react-redux'
import News from './news'

const mapStateToProps = state => ({
  news: state.news
})

export default connect(mapStateToProps)(News)
