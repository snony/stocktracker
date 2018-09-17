import React from 'react'

const Peers = ({ peers }) => {
  const peersData = peers.join(', ')

  return <span className="label label--small">{peersData}</span>
}

export default Peers
