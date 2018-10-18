import Label from 'label.styles'
import React from 'react'

import QuoteWrapper, { quoteClass } from './quote.styles'
import { QuoteProps } from './types'

const numberFormat = (num: number) =>
  num.toLocaleString(undefined, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  })

class Quote extends React.PureComponent<QuoteProps, {}> {
  public componentWillUnmount() {
    this.props.unsubscribe()
  }

  public render() {
    const { lastSalePrice, lastSaleSize, marketPercent } = this.props.quote

    return (
      <QuoteWrapper>
        <Label className={quoteClass}>
          <sup>$</sup>
          {`${numberFormat(lastSalePrice)} `}
        </Label>
        <Label className={quoteClass} red>
          <sup>&darr;</sup>
          {lastSaleSize} | {numberFormat(marketPercent * 100)}
          <sup>%</sup>
        </Label>
      </QuoteWrapper>
    )
  }
}

export default Quote
