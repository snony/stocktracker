import { css } from 'react-emotion'
import styled from 'styled'
export default styled('span')`
  display: flex;
  flex-direction: column nowrap;
  border-bottom: ${props => props.theme.searchBarHeading};
  padding: 0.7rem 0.5rem;
  width: 25rem;
  justify-content: space-evenly;
`

export const quoteClass = css`
  margin-bottom: 0;
  display: inline-block;
`
