// import { GlobalState } from 'types'
import { mapStateToProps } from '../newsContainer'

import { mockGlobalState } from '__mock__/globalstate.mock'

describe('mapToPropsState in News container', () => {
  it('should return the initial state', () => {
    mockGlobalState.news = []

    expect(mapStateToProps(mockGlobalState).newsItems).toEqual([])
  })

  it('should update newsItems with new state data', () => {
    const newsData = mockGlobalState.news

    expect(mapStateToProps(mockGlobalState)).toEqual({ newsItems: newsData })
  })
})
