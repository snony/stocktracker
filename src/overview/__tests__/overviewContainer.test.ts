import { mapStateToProps } from 'overview/overviewContainer'

import { mockGlobalState } from '__mock__/globalstate.mock'

describe('overview container', () => {
  it('should map state to props correctly', () => {
    const overviewData = mockGlobalState.overview

    expect(mapStateToProps(mockGlobalState)).toEqual({ overview: overviewData })
  })
})
