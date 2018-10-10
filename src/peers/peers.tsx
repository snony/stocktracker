import React from 'react'

import { peersContainerState } from './peersContainer'

type PeersProps = peersContainerState

const Peers: React.SFC<PeersProps> = ({ peers }) => {
  if(peers.length !== 0) {
    const peersData = peers.join(', ')
    return <span className="label label--small">{peersData}</span>
  } else {
    return <p className="label label--small">Loading...</p>
  }
}

export default Peers
