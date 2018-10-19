import Label from 'label.styles'
import React from 'react'

import QuoteWrapper, { quoteClass } from './quote.styles'
import { QuoteProps } from './types'
// import classNames from 'classnames';

const numberFormat = (num: number) =>
    Math.abs(num).toLocaleString(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    })

class Quote extends React.PureComponent<QuoteProps, {}> {
    public componentWillUnmount() {
        this.props.unsubscribe()
    }

    public render() {
        const { price, change, changePercent } = this.props.quote
        return (
            <QuoteWrapper>
                <Label className={quoteClass}>
                    <sup>$</sup>
                    {`${numberFormat(price)} `}
                </Label>

                <Label className={quoteClass} red={change < 0} green={change >= 0}>
                    {change < 0 && <sup>&darr;</sup>}
                    {change >= 0 && <sup>&uarr;</sup>}
                    {numberFormat(change)} | {numberFormat(changePercent)}
                    <sup>%</sup>
                </Label>

            </QuoteWrapper>
        )
    }
}

export default Quote
