import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import FilterButton from 'history/filterButton'

import { filters, filterType } from '../historyConst'
import { FilterButtonProps } from '../types'

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
    wrapper.find('button').simulate('click')

    expect(mockFilterButtonProps.onClick).toHaveBeenCalledTimes(1)
  })
})
