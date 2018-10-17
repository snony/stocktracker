import { mockGlobalState } from '__mock__/globalstate.mock'
import { mapStateToProps } from 'news/newsContainer'
import { initState } from 'news/newsReducer'

import { GlobalState } from '../../types'

describe('mapToPropsState in News container', () => {
  it('should return the initial state', () => {
    const initialState = { news: initState } as GlobalState
    expect(mapStateToProps(initialState)).toEqual(initState)
  })

  it('should update newsItems and fetchStatus as news state changes', () => {
    const newState = mockGlobalState
    expect(mapStateToProps(newState)).toEqual(newState.news)
  })
})
