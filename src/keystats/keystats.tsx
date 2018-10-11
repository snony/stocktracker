import React from 'react'

import { KeyStatsContainerStateProps } from './keystatsContainer'
import { KeyStats } from './types'
import { numberConvertor, statsMap } from './util'

const KeyStats: React.SFC<KeyStatsContainerStateProps> = ({ keystats }) => {
  const convertedKeyStats = numberConvertor(keystats)
  return (
    <div className="keystats-container">
      {Object.entries(statsMap(convertedKeyStats)).map(([label, value]) => {
        return (
          <div className="keystats-container__stat" key={label}>
            <span className="label label--small">{label}</span>
            <span className="label">{value}</span>
          </div>
        )
      })}
    </div>
  )
}
export default KeyStats
