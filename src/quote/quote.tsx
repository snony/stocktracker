import React from 'react'
import { QuoteProps } from './quoteContainer'


class Quote extends React.PureComponent<QuoteProps, {}> {

    public componentWillUnmount() {
        this.props.unsubscribe()
    }

    public render() {
        return (
            <div className='search_container___quote_wrapper'>
                <span className='label'>{this.props.quote.lastSalePrice} </span>
                <span className='label'> {this.props.quote.lastSaleSize} </span>
                <span className='label'> {this.props.quote.marketPercent} </span>
            </div>
        )
    }

}


export default Quote