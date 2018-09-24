export const PEERS_RECEIVED_ACTION = 'PEERS_RECEIVED_ACTION'

const peersReceivedAction = peers => ({ type: PEERS_RECEIVED_ACTION, peers })

export const getPeersData = symbol => (dispatch, _, api) => {
  api.getPeers(symbol).then(peers => {
    return dispatch(peersReceivedAction(peers))
  })
}
