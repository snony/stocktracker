import { connect } from 'react-redux'
import News from './news'

const mapStateToProps = state => ({
  news: state.companyInfo.news
})

export default connect(mapStateToProps)(News)
