import React from 'react'

import Label from 'label.styles'
import { PeersContainerState } from './peersContainer'

type PeersProps = PeersContainerState

const Peers: React.SFC<PeersProps> = ({ peers: { peers, error } }) => {
  if(peers.length !== 0 && error !== true) {
    const peersData = peers.join(', ')
    return <Label small grey>{peersData}</Label>
  } else {
    return <Label small grey>Loading...</Label>
  }
}

export default Peers
