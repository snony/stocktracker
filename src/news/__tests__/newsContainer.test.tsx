import { FetchStatus } from 'news/types';
import { GlobalState } from '../../types'
import { mapStateToProps } from '../newsContainer'

describe('mapToPropsState in News container', () => {
  it('should return the initial state', () => {
    const initState: GlobalState = { news: { newsItems: [], fetchStatus: FetchStatus.PENDING } } as GlobalState

    expect(mapStateToProps(initState)).toEqual({ newsItems: [], fetchStatus: FetchStatus.PENDING })
  })

  it('should update newsItems and fetchStatus as news state changes', () => {
    const newState: GlobalState = {
      news: { newsItems: [{ url: 'aapl', headline: 'aapl', datetime: '', source: '' }], fetchStatus: FetchStatus.SUCESS }
    } as GlobalState
    expect(mapStateToProps(newState)).toEqual(newState.news)
  })
})
