import { css } from 'react-emotion'
import styled from 'styled'
export const SearchInputWrapper = styled('div')`
  color: white;
  display: -ms-flexbox; /* IE10 */
  display: flex;
  border-bottom: ${props => props.theme.searchBarHeading};
  padding: 0.7rem 0;
`

export const SearchInputClass = css`
  height: 100%;
  width: 100%;
  background: transparent;
  border: transparent;
  outline: transparent;
`

export const SearchIcon = styled('span')`
  font-size: 1rem;
  padding: 0.4rem 1rem 0.4rem 0;
  color: ${props => props.theme.primaryColour};
`
export const QuoteWrapper = styled('div')``
