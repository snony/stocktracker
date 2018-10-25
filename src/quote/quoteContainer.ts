import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { QUOTE } from 'socket'
import { API, GlobalState } from 'types'

import Quote from './quote'
import { SymbolSubscriptionActions, unSubscribeSymbol } from './quoteActions'

export const processQuote = (quote: QUOTE, previousClose: number) => ({
    price: quote.lastSalePrice,
    change: quote.lastSalePrice - previousClose,
    changePercent: (Math.abs(quote.lastSalePrice - previousClose) / previousClose) * 100
})

export const mapStateToProps = (state: GlobalState) => ({
    quote: processQuote(state.quote, state.symbol.previousClose),
    fetchStatus: state.quote.fetchStatus
})

export type ThunkDispatchAction = ThunkDispatch<GlobalState, API, SymbolSubscriptionActions>
export const mapDispatchToProps = (dispatch: ThunkDispatchAction) => ({
    unsubscribe: () => dispatch(unSubscribeSymbol())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Quote)
