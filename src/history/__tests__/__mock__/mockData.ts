import { filters, filterType } from 'history/historyConst'
import { FilterButtonProps } from 'history/types'

export const mockFilterButtonProps: FilterButtonProps = {
  type: filterType.PRICE,
  value: filters.OPEN,
  selected: false,
  onClick: jest.fn()
}

