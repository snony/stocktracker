import { Peers, PeersState } from "peers/types"

export const mockPeers: Peers = ['peers1', 'peers2', 'peers3', 'peers4']

export const mockPeersState: PeersState = {
  peers: mockPeers,
  error: false
}

export const mockFailedPeersState: PeersState = {
  peers: [],
  error: true
}