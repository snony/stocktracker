import { GlobalState } from 'types'

import { mapStateToProps } from 'overview/overviewContainer'
import { mockAaplOverviewData } from './__mock__/mockData'

describe('overview container', () => {
  it('should map state to props correctly', () => {
    const state = {
      overview: mockAaplOverviewData
    }
    expect(mapStateToProps(state as GlobalState).overview).toEqual(mockAaplOverviewData)
  })
})
