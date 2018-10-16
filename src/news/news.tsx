import React from 'react'
import Truncate from 'react-truncate'

import Label from 'label.styles'
import styled from 'react-emotion'
import { NewsItemsProps, NewsProps } from './types'

const NewsDivContainer = styled('div')`
  display: grid;
  grid-gap: 1.2rem;
  grid-template-columns: 1;
`
export const News: React.SFC<NewsProps> = ({ newsData }) => (
  <div>
    <a href={newsData.url}>
      <Label link>
        <Truncate lines={2} trimWhitespace>
          {newsData.headline}
        </Truncate>
      </Label>
    </a>
    <Label small grey>
      {newsData.datetime} - {newsData.source}
    </Label>
  </div>
)

const NewsItems: React.SFC<NewsItemsProps> = ({ newsItems }) => (
  <NewsDivContainer>
    {newsItems.map(newsData => (
      <News key={newsData.url} newsData={newsData} />
    ))}
  </NewsDivContainer>
)

export default NewsItems
