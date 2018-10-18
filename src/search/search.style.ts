import styled, { css } from 'react-emotion'

export const SearchInputWrapper = styled('div')`
  color: white;
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
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
