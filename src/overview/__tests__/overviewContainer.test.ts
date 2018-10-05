import { GlobalState } from 'types'

import { mapStateToProps } from '../overviewContainer'
import { mockAaplOverviewData } from './mockData'

describe('overview container', () => {
  it('should map state to props correctly', () => {
    const state = {
      overview: mockAaplOverviewData
    }
    expect(mapStateToProps(state as GlobalState).overview).toEqual(mockAaplOverviewData)
  })
})
