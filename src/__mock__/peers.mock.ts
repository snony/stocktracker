import fetchStatus from 'fetchStatus'
import { Peers, PeersState } from 'peers/types'

export const mockPeers: Peers = ['peers1', 'peers2', 'peers3', 'peers4']

export const mockPeersState: PeersState = {
  peers: mockPeers,
  status: fetchStatus.SUCCESS
}

export const mockFailedPeersState: PeersState = {
  peers: [],
  status: fetchStatus.FAILED
}
