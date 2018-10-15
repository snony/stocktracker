export const getNews = (_: string) => {
    return Promise.reject(new Error('fail'))
}

export default { getNews }
export const mockApiFailFetch = {
    getCompanySymbols: jest.fn().mockRejectedValueOnce(new Error('Cannot fetch data')),
    getHistory: jest.fn().mockRejectedValueOnce(new Error('Cannot fetch data')),
    getNews: jest.fn().mockRejectedValueOnce(new Error('Cannot fetch data')),
    getKeyStats: jest.fn().mockRejectedValueOnce(new Error('Cannot fetch data')),
    getOverview: jest.fn().mockRejectedValueOnce(new Error('Cannot fetch data')),
    getPeers: jest.fn().mockRejectedValueOnce(new Error('Cannot fetch data'))
}