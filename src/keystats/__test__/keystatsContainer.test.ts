import { GlobalState } from 'types'
import { mapStateToProps } from '../keystatsContainer'
import { mockKetStats } from './mockData'

describe('test for the mapStateToProps', () => {
  it('should return the keystats state', () => {
    const mockKeyStats = { keystats: mockKetStats }
    const returnState = mapStateToProps(mockKeyStats as GlobalState) 

    expect(returnState).toEqual(mockKetStats)
  })
})