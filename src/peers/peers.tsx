import fetchStatus from 'fetchStatus'
import Label from 'label.styles'
import React from 'react'

import { PeersContainerState } from './peersContainer'

type PeersProps = PeersContainerState

const Peers: React.SFC<PeersProps> = ({ peers: { peers, status } }) => {
  if (status === fetchStatus.SUCCESS) {
    const peersData = peers.join(', ')
    return (
      <Label small grey>
        {peersData}
      </Label>
    )
  } else if (status === fetchStatus.FAILED) {
    return (
      <Label small grey>
        Failed
      </Label>
    )
  } else {
    return (
      <Label small grey>
        Loading...
      </Label>
    )
  }
}

export default Peers
