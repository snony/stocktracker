import React from 'react'

import Label from 'label.styles'
import styled from 'react-emotion'
import { NewsItemsProps, NewsProps } from './types'
// TODO ML 28/09, these were needed previously but cannot be imported in typescript cause of lack of
// types. We have to think about how to handle this later.
// import LinesEllipsis from 'react-lines-ellipsis'
// import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
// const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)
// {/* <ResponsiveEllipsis text={newsData.headline} maxLine="2" ellipsis="..." trimRight /> */}

const NewsDivContainer = styled('div')`
  display: grid;
  grid-gap: 1.2rem;
  grid-template-columns: 1;
  text-align: justify;
`
export const News: React.SFC<NewsProps> = ({ newsData }) => (
  <div>
    <a href={newsData.url}>
      <Label link>
        {newsData.headline}
      </Label>
    </a>
    <Label small>
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
