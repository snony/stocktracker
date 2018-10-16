import styled from 'react-emotion'

export const UnlistedList = styled('ul')`
list-style-type: none;
padding-left: 0;
z-index: 1;
position: absolute;
width: calc(100% - 2 * 1.5rem);
background: ${props => props.theme.bgSearch};
`

export const Li = styled('li')`
  outline: none;
  padding: 1.5rem 1rem;
  color: white;
  &:hover {
    color: ${props => props.theme.linkHoverColour};
  }
  transition: 0.2s ease;
`