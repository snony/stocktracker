const colours = {
  primaryColour: '#7fb3ff',
  secondaryColour: '#beccdc',
  linkHoverColour: '#e0be86',
  bgStartColour: '#012861',
  bgMiddleColour: '#021738',
  bgEndColour: '#021025',
  bgSearchStartColour: '#001330',
  bgSearchEndColour: 'rgba(0, 8, 19, 0.8)',
  separatorColour: '#54606d80'
}

const theme = {
  ...colours,
  bg: `linear-gradient(127deg, ${colours.bgStartColour}, ${colours.bgMiddleColour}, 69%, ${
    colours.bgEndColour
  })`,
  bgSearch: `linear-gradient(to bottom, ${colours.bgSearchStartColour}, ${
    colours.bgSearchEndColour
  })`,
  heading: `solid 0.1rem ${colours.primaryColour}`,
  separator: `solid 0.1rem ${colours.separatorColour}`
}

export type Theme = typeof theme

export default theme
