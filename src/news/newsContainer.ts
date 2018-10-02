import { connect } from 'react-redux'
import { CompanyState } from '../types'
import News from './news'


const mapStateToProps = (state: CompanyState) => ({
  newsItems: state.news
})

export default connect(mapStateToProps)(News)
