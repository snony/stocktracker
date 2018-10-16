import React from 'react'

import { peersContainerState } from './peersContainer'

type PeersProps = peersContainerState

const Peers: React.SFC<PeersProps> = ({ peers: { peers, error } }) => {
  if(peers.length !== 0 && error !== true) {
    const peersData = peers.join(', ')
    return <span className="label label--small">{peersData}</span>
  } else if(peers.length === 0 && error !== true) {
    return <p className="label label--small">Loading...</p>
  } else {
    return <p className="label label--small">Error</p>
  }
}

export default Peers
