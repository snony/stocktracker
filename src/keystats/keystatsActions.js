export const STATS_RECEIVED_ACTION = 'STATS_RECEIVED_ACTION'

const statsReceivedAction = keystats => ({ type: STATS_RECEIVED_ACTION, keystats })

export const getKeyStatsData = symbol => (dispatch, _, api) => {
  api.getKeyStats(symbol).then(keystats => {
    return dispatch(statsReceivedAction(keystats))
  })
}
