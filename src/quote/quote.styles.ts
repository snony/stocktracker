import styled, { css } from 'react-emotion'

export default styled('span')`
  white-space: nowrap;
  border-bottom: ${props => props.theme.searchBarHeading};
  padding: 0.7rem 0;
`

export const quoteClass = css`
  margin-bottom: 0;
  display: inline-block;
`
