import { GlobalState } from 'types'
import { mockKeyStats } from '../../__mock__/apiData.mock'
import { mapStateToProps } from '../keystatsContainer'

describe('test for the mapStateToProps', () => {
  it('should return the keystats state', () => {
    const mockData = { keystats: mockKeyStats }
    const returnState = mapStateToProps(mockData as GlobalState) 

    expect(returnState).toEqual(mockData)
  })
})