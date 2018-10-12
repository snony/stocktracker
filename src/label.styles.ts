import { Theme } from 'colours'
import styled, { css } from 'react-emotion'

interface ModifierProps {
  grey?: boolean
  big?: boolean
  small?: boolean
  link?: boolean
  theme?: Theme
}

const modifier = (props: ModifierProps) => {
  const grey = css`
    color: ${props.theme.secondaryColour};
  `

  const big = css`
    font-size: 1.4rem;
  `

  const small = css`
    ${grey};
    font-size: 0.9rem;
  `

  const link = css`
    text-decoration: none;

    &:hover {
      color: ${props.theme.linkHoverColour};
    }
  `

  return css`
    ${props.grey ? grey : null};
    ${props.big ? big : null};
    ${props.small ? small : null};
    ${props.link ? link : null};
  `
}

export default styled('span')`
  color: white;
  display: block;
  margin-bottom: 0.3rem;
  ${modifier};
`
