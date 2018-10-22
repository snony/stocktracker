import { css } from 'react-emotion'
import styled from 'styled'
export default styled('span')`
  white-space: nowrap;
  border-bottom: ${props => props.theme.searchBarHeading};
  padding: 0.7rem 0;
`

export const quoteClass = css`
  margin-bottom: 0;
  display: inline-block;
`
