export const PEERS_RECEIVED_ACTION = 'PEERS_RECEIVED_ACTION'

export const getPeersData = symbol => (dispatch, _, api) => {
  api.getPeers(symbol).then(peers => {
    return dispatch({ type: PEERS_RECEIVED_ACTION, peers })
  })
}
