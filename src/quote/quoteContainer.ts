import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { API, GlobalState } from 'types'
import Quote from './quote'
import { SymbolSubscriptionActions, unSubscribeSymbol } from './quoteActions'


export const mapStateToProps = (state: GlobalState) => ({
    quote: state.quote
})



export type ThunkDispatchAction = ThunkDispatch<GlobalState, API, SymbolSubscriptionActions>
export const mapDispatchToProps = (dispatch: ThunkDispatchAction) => ({
    unsubscribe: () => dispatch(unSubscribeSymbol())
})

export default connect(mapStateToProps, mapDispatchToProps)(Quote)
