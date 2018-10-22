import styled, { css } from 'react-emotion'

import { Theme } from './theme'

interface ModifierProps {
  grey?: boolean
  green?: boolean
  red?: boolean
  big?: boolean
  small?: boolean
  italic?: boolean
  link?: boolean
  theme?: Theme
}

const modifier = (props: ModifierProps) => {
  const grey = css`
    color: ${props.theme.secondaryColour};
  `

  const green = css`
    color: ${props.theme.goodColour};
  `

  const red = css`
    color: ${props.theme.badColour};
  `

  const big = css`
    font-size: 1.4rem;
  `

  const small = css`
    font-size: 0.9rem;
  `

  const italic = css`
    font-style: italic;
  `

  const link = css`
    text-decoration: none;

    &:hover {
      color: ${props.theme.linkHoverColour};
    }
  `

  return css`
    ${props.grey ? grey : null};
    ${props.green ? green : null};
    ${props.red ? red : null};
    ${props.big ? big : null};
    ${props.small ? small : null};
    ${props.italic ? italic : null};
    ${props.link ? link : null};
  `
}

export const Label = styled('span')`
  color: white;
  display: block;
  margin-bottom: 0.3rem;
  ${modifier};
`
