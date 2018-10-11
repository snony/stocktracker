import { GlobalState } from '../../types'
import { mapStateToProps } from '../newsContainer'

describe('mapToPropsState in News container', () => {
  it('should return the initial state', () => {
    const initState: GlobalState = { news: [] } as GlobalState

    expect(mapStateToProps(initState).newsItems).toEqual([])
  })

  it('should update newsItems with new state data', () => {
    const newState: GlobalState = {
      news: [{ url: 'aapl', headline: 'aapl', datetime: '', source: '' }]
    } as GlobalState
    expect(mapStateToProps(newState).newsItems).toEqual(newState.news)
  })
})
