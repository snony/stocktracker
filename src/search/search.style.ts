import styled from 'react-emotion'

export const SearchInput = styled('input')`
  height: 100%;
  width: 100%;
  background: transparent;
  border: transparent;
  color: white;
  font-size: 1.9rem;
  font-weight: 100;
  outline: transparent;
`

export const SearchIcon = styled('span')`
  padding: 0.4rem 1rem 0.4rem 0;
  color: ${props => props.theme.primaryColour}
`

export const SearchInputWrappper = styled('div')`
  display: -ms-flexbox; /* IE10 */
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.7rem 0;
  border-bottom: ${props => props.theme.heading};
  `