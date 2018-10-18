import React from 'react'
import { QuoteProps } from './types'


class Quote extends React.PureComponent<QuoteProps, {}> {

    public componentWillUnmount() {
        this.props.unsubscribe()
    }

    public render() {
        const { lastSalePrice, lastSaleSize, marketPercent } = this.props.quote
        return (
            <div className='search_container___quote_wrapper'>
                <span className='label'>{lastSalePrice} </span>
                <span className='label'> {lastSaleSize} </span>
                <span className='label'> {marketPercent} </span>
            </div>
        )
    }

}


export default Quote