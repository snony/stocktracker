import * as React from 'react'

interface FilterButtonProps {
  readonly type: string
  readonly value: string
  readonly selected: boolean
  onClick(type: string, value: string): void
}

export default class FilterButton extends React.PureComponent<FilterButtonProps> {
  public render(): React.ReactNode {
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
