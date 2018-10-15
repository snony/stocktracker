import { connect } from 'react-redux'
import { GlobalState } from '../types'
import Quote from './quote'

export const mapStateToProps = (state: GlobalState) => ({
    company: state.company
})

export type QuoteProps = ReturnType<typeof mapStateToProps>
export default connect(mapStateToProps)(Quote)
