import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import { Company } from '../../types'
import SearchResults, { Result, ResultProps, SearchResultProps } from '../result'

const getDefaultSearchResultsProps = (overide: Partial<SearchResultProps>): SearchResultProps => ({
  results: [],
  onClickResult: jest.fn(),
  ...overide
})

const getResultProps = (overide: Partial<ResultProps>): ResultProps => ({
  company: { name: 'Apple Inc', symbol: 'aapl' },
  onClickResult: jest.fn(),
  ...overide
})

describe('Search Results Component', () => {
  it('renders correctly with empty result passed to it', () => {
    const tree = renderer.create(<SearchResults {...getDefaultSearchResultsProps({})} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with Results passed into it', () => {
    const results: Company[] = [
      { name: 'Apple Inc', symbol: 'aapl' },
      { name: 'Alphabet Inc', symbol: 'goog' }
    ]
    const tree = renderer
      .create(<SearchResults {...getDefaultSearchResultsProps({ results })} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Result Component', () => {
  it('renders correctly ', () => {
    const tree = renderer.create(<Result {...getResultProps({})} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should be able to click company', () => {
    const onClickResult = jest.fn()
    const result = getResultProps({ onClickResult })
    const element = mount(<Result {...result} />)
    element.find('li').simulate('click')
    expect(onClickResult).toHaveBeenCalledWith(result.company)
  })
})
