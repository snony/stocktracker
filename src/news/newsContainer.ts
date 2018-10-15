import { connect } from 'react-redux'

import { GlobalState } from '../types'
import News from './news'

export const mapStateToProps = (state: GlobalState) => ({
  newsItems: state.news.newsItems,
  fetchStatus: state.news.fetchStatus
})

export default connect(mapStateToProps)(News)