import { shallow } from 'enzyme'
import FilterButton from 'histories/filterButton'
import Button from 'histories/filterButton.styles'
import { filters, filterType } from 'histories/historyConst'
import { FilterButtonProps } from 'histories/types'
import React from 'react'
import renderer from 'react-test-renderer'

describe('filterButton component', () => {
  const mockFilterButtonProps: FilterButtonProps = {
    type: filterType.PRICE,
    value: filters.OPEN,
    selected: false,
    onClick: jest.fn()
  }

  it('should render unselected filter button correctly', () => {
    const tree = renderer.create(<FilterButton {...mockFilterButtonProps} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render selected filter button correctly', () => {
    const tree = renderer.create(<FilterButton {...mockFilterButtonProps} selected />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should call onClick method when button is clicked', () => {
    const wrapper = shallow(<FilterButton {...mockFilterButtonProps} />)
    wrapper.find(Button).simulate('click')

    expect(mockFilterButtonProps.onClick).toHaveBeenCalledTimes(1)
  })
})
