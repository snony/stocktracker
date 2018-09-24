export const OVERVIEW_RECEIVED_ACTION = 'OVERVIEW_RECEIVED_ACTION'

const overviewReceivedAction = overview => ({
  type: OVERVIEW_RECEIVED_ACTION,
  overview
})

export const getOverviewData = symbol => (dispatch, _, api) => {
  api.getOverview(symbol).then(overview => {
    return dispatch(overviewReceivedAction(overview))
  })
}
