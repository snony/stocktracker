import { GlobalState } from 'types'
import { mapStateToProps } from '../keystatsContainer'
import { mockKetStats } from './mockData'

describe('test for the mapStateToProps', () => {
  it('should return the keystats state', () => {
    const mockData = { keystats: mockKetStats }
    const returnState = mapStateToProps(mockData as GlobalState) 

    expect(returnState).toEqual(mockData)
  })
})