import { mapStateToProps } from 'overview/overviewContainer'
import { GlobalState } from 'types'

import { mockAaplOverviewData } from './__mock__/mockData'

describe('overview container', () => {
  it('should map state to props correctly', () => {
    const state = {
      overview: mockAaplOverviewData
    } as GlobalState
    expect(mapStateToProps(state).overview).toEqual(mockAaplOverviewData)
  })
})
