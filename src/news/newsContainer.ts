import { connect } from 'react-redux'
import { GlobalState } from '../types'
import News from './news'


const mapStateToProps = (state: GlobalState) => ({
  newsItems: state.news
})

export default connect(mapStateToProps)(News)
