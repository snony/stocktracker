import React from 'react'

import { KeyStatsContainerStateProps } from './keystatsContainer'
import { KeyStats } from './types'
import { numberConvertor, statsMap } from './util'

const KeyStats: React.SFC<KeyStatsContainerStateProps> = ({ keystats }) => {
  const convertedKeyStats = numberConvertor(keystats.keystats)
  const status = keystats.fetchStatus
  return (
    <div className="keystats-container">
      {keystats.fetchStatus === 'SUCCESS' ?
        Object.entries(statsMap(convertedKeyStats)).map(([label, value]) => {
          return (
            <div className="keystats-container__stat" key={label}>
              <span className="label label--small">{label}</span>
              <span className="label">{value}</span>
            </div>
          )
        })
        : 
        <span className="label">{status}</span>
      }
    </div>
  )
}
export default KeyStats
