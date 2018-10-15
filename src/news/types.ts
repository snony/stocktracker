export enum FetchStatus {
  PENDING,
  SUCESS,
  FAIL
}
export interface News {
  readonly url: string
  readonly headline: string
  readonly datetime: string
  readonly source: string
}

export interface NewsItemsProps {
  readonly fetchStatus?: FetchStatus
  readonly newsItems: News[]
}
export interface NewsProps {
  readonly newsData: News
}
