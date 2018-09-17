import React from 'react'
import { getPeers } from './../../api'

class Peers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      peers: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.symbol !== prevProps.symbol) {
      this.getPeersData()
    }
  }

  getPeersData = () => {
    const symbol = this.props.symbol
    getPeers(symbol).then(peersData => this.setState({ peers: peersData }))
  }

  render() {
    const peersData = this.state.peers.join(', ')

    return <span className="label label--small">{peersData}</span>
  }
}

export default Peers
