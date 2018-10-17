import Label from 'label.styles'
import React from 'react'
import styled from 'react-emotion'
import Truncate from 'react-truncate'

import { FetchStatus, NewsItemsProps, NewsProps } from './types'

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

const NewsItems: React.SFC<NewsItemsProps> = ({ newsItems, fetchStatus }) => {
  switch (fetchStatus) {
    case FetchStatus.SUCCESS:
      return (
        <NewsDivContainer>
          {newsItems.map(newsData => (
            <News key={newsData.url} newsData={newsData} />
          ))}
        </NewsDivContainer>
      )
    case FetchStatus.FAIL:
      return (
        <Label small grey>
          Cannot load data, check internet connection
        </Label>
      )
    case FetchStatus.PENDING:
      return (
        <Label small grey>
          ...Loading...
        </Label>
      )
    default:
      return (
        <Label small grey>
          No data
        </Label>
      )
  }
}

export default NewsItems
