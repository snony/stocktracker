import React, { PureComponent } from 'react'

import { FilterButtonProps } from './types'

export default class FilterButton extends PureComponent<FilterButtonProps> {
  public render() {
    const { value, selected } = this.props
    const label = value.toUpperCase()
    const buttonClass = `filter-button ${selected ? 'filter-button--selected' : ''}`

    return (
      <button className={buttonClass} key={value} onClick={this.onClick}>
        {label}
      </button>
    )
  }

  private readonly onClick = () => {
    const { onClick, type, value } = this.props
    onClick(type, value)
  }
}
