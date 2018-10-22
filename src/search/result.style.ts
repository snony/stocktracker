import { stockTrackerPadding } from 'index.styles'
import styled from 'styled'

export const Ul = styled('ul')`
  list-style-type: none;
  padding-left: 0;
  z-index: 1;
  position: absolute;
  width: calc(100% - 2 * ${stockTrackerPadding});
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
  font-size: 1rem;
`
