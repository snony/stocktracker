import React from 'react'
import socketIo, { QUOTE } from '../socket'
import { QuoteProps } from './quoteContainer'

const initState = { lastSalePrice: 0, lastSaleSize: 0, marketPercent: 0 }

class Quote extends React.PureComponent<QuoteProps, QUOTE> {

    constructor(props: QuoteProps) {
        super(props)
        this.state = initState
    }

    public componentWillMount() {
        socketIo.connectSocket(this.props.company.symbol)
        socketIo.listenOnMessage(this.setQuote)
    }

    public componentDidUpdate(prevProps: QuoteProps) {
        if (prevProps.company.symbol !== this.props.company.symbol) {
            socketIo.emitUnsubscribe(prevProps.company.symbol)
            socketIo.emitSubscribeSymbol(this.props.company.symbol)
        }
    }

    public componentWillUnmount() {
        socketIo.emitUnsubscribe(this.props.company.symbol)
        socketIo.disconnectSocket()
    }

    public render() {
        return (
            <div className='search_container___quote_wrapper'>
                <span className='label'>{this.state.lastSalePrice} </span>
                <span className='label'> {this.state.lastSaleSize} </span>
                <span className='label'> {this.state.marketPercent} </span>
            </div>
        )
    }

    private setQuote = (data: QUOTE) => {
        this.setState({ ...data })
    }
}


export default Quote