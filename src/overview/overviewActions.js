export const OVERVIEW_RECEIVED_ACTION = 'OVERVIEW_RECEIVED_ACTION'

export const getOverviewData = symbol => (dispatch, _, api) => {
  api.getOverview(symbol).then(overview => {
    return dispatch({ type: OVERVIEW_RECEIVED_ACTION, overview })
  })
}
