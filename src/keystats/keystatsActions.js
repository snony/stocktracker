export const STATS_RECIEVED_ACTION = 'STATS_RECIEVED_ACTION'

export const getKeyStatsData = symbol => (dispatch, _, api) => {
  api.getKeyStats(symbol).then(keystats => {
    return dispatch({ type: STATS_RECIEVED_ACTION, keystats })
  })
}
