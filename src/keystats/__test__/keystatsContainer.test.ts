import { GlobalState } from 'types'
import { mapStateToProps } from '../keystatsContainer'
import { mockKeyStats } from './__mock__/mockData'

describe('test for the mapStateToProps', () => {
  it('should return the keystats state', () => {
    const mockData = { keystats: mockKeyStats }
    const returnState = mapStateToProps(mockData as GlobalState) 

    expect(returnState).toEqual(mockData)
  })
})