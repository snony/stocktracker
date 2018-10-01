interface News{
    readonly  url: string;
    readonly  headline: string;
    readonly  datetime: string;
    readonly  source: string;
}

export type NewsItemsProps = {readonly newsItems:News[]}
export type NewsProps = {readonly newsData:News}
