import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { QUOTE } from 'socket'
import { GlobalState } from '../types'
import Quote from './quote'
import { SymbolSubscriptionActions, unSubscribeSymbol } from './quoteActions'


export const mapStateToProps = (state: GlobalState) => ({
    quote: state.quote
})



export type ThunkDispatchAction = ThunkDispatch<GlobalState, any, SymbolSubscriptionActions>
export const mapDispatchToProps = (dispatch: ThunkDispatchAction) => ({
    unsubscribe: () => dispatch(unSubscribeSymbol())
})


export interface QuoteProps {
    quote: QUOTE
    unsubscribe: () => void
}
export default connect(mapStateToProps, mapDispatchToProps)(Quote)
