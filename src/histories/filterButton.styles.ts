import { css } from 'react-emotion'

import styled from 'styled'
import { Theme } from 'styles'

interface ColourProps {
  selected?: boolean
  theme?: Theme
}

const colour = (props: ColourProps) => {
  const selected = css`
    color: white;
  `

  return css`
    color: ${props.theme.secondaryColour};
    ${props.selected ? selected : null};
  `
}

export default styled('button')`
  background-color: transparent;
  border-color: transparent;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  font-size: 0.9rem;
  margin: 0 0.3rem;
  ${colour};
`
