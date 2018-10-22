import Label from 'label.styles'
import React from 'react'
import styled from 'styled'

import { KeyStatsContainerStateProps } from './keystatsContainer'
import { KeyStats } from './types'
import { numberConvertor, statsMap } from './util'

const KeyStatsContainer = styled('div')`
  display: grid;
  grid-gap: 0.7rem 1.6rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const StatsLabelContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.4rem;
  border-bottom: ${({ theme }) => theme.separator};
`

const KeyStats: React.SFC<KeyStatsContainerStateProps> = ({ keystats }) => {
  const convertedKeyStats = numberConvertor(keystats.keystats)
  const status = keystats.fetchStatus
  return (
    <KeyStatsContainer>
      {keystats.fetchStatus === 'SUCCESS' ? (
        Object.entries(statsMap(convertedKeyStats)).map(([label, value]) => {
          return (
            <StatsLabelContainer key={label}>
              <Label small grey>
                {label}
              </Label>
              <Label>{value}</Label>
            </StatsLabelContainer>
          )
        })
      ) : (
          <Label>{status}</Label>
        )}
    </KeyStatsContainer>
  )
}
export default KeyStats
