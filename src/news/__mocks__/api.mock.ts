import getMockNews from '../__mocks__/news'

const mockFetch = (data: object) => new Promise(resolve => {
    return resolve(data)
})

export const getNews = (_: string) => {
    const news = getMockNews(5)
    return mockFetch(news)
}

export default { getNews }