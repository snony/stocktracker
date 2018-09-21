export const STATS_RECEIVED_ACTION = 'STATS_RECEIVED_ACTION'

export const getKeyStatsData = symbol => (dispatch, _, api) => {
  api.getKeyStats(symbol).then(keystats => {
    return dispatch({ type: STATS_RECEIVED_ACTION, keystats })
  })
}
