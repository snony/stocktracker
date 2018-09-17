import React from 'react'

const Peers = ({ peers }) => {
  const peersData = peers.join(', ')

  return <span>{peersData}</span>
}

export default Peers
