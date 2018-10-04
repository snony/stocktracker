import React from 'react'
import { peersContainerState } from './peersContainer';

type PeersProps = peersContainerState

const Peers: React.SFC<PeersProps> = ({ peers }) => {
  const peersData = peers.join(', ')

  return <span className="label label--small">{peersData}</span>
}

export default Peers
