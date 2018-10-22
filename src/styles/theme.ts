import { colours } from './colours'

export const theme = {
  ...colours,
  bg: `linear-gradient(127deg, ${colours.bgStartColour}, ${colours.bgMiddleColour}, 69%, ${
    colours.bgEndColour
    })`,
  bgSearch: `linear-gradient(to bottom, ${colours.bgSearchStartColour}, ${
    colours.bgSearchEndColour
    })`,
  heading: `solid 0.1rem ${colours.primaryColour}`,
  searchBarHeading: `solid 0.1rem ${colours.searchBarColour}`,
  separator: `solid 0.1rem ${colours.separatorColour}`
}

export type Theme = typeof theme
