import React, { PureComponent } from 'react'

import Button from './filterButton.styles'
import { FilterButtonProps } from './types'

export default class FilterButton extends PureComponent<FilterButtonProps> {
  public render() {
    const { value, selected } = this.props
    const label = value.toUpperCase()

    return (
      <Button selected={selected} key={value} onClick={this.onClick}>
        {label}
      </Button>
    )
  }

  private readonly onClick = () => {
    const { onClick, type, value } = this.props
    onClick(type, value)
  }
}
