import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FilterButton from 'history/filterButton'
import React from 'react'
import renderer from 'react-test-renderer'

import { mockFilterButtonProps, mockSelectedFilterButtonProps } from './mockData'

Enzyme.configure({ adapter: new Adapter() })

describe('filterButton component', () => {
  it('should render unselected filter button correctly', () => {
    const tree = renderer.create(<FilterButton {...mockFilterButtonProps} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render selected filter button correctly', () => {
    const tree = renderer.create(<FilterButton {...mockSelectedFilterButtonProps} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should call onClick method when button is clicked', () => {
    const mockOnClick = jest.fn()
    const filterButton = shallow(
      <FilterButton {...mockSelectedFilterButtonProps} onClick={mockOnClick} />
    )

    filterButton.find('button').simulate('click')
    expect(mockOnClick.mock.calls.length).toBe(1)
  })
})
