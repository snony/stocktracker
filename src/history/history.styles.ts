import styled from 'styled'

export const HistoryFiltersDiv = styled('div')`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    align-items: flex-end;
    flex-direction: column;
  }
`

export const HistoryFilterGroupDiv = styled('div')`
  & + & {
    margin-left: 1.5rem;
  }
`

export const HistoryChartDiv = styled('div')`
  height: 420px;
  width: 99% !important;
`
