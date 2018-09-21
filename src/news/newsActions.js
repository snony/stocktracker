export const NEWS_RECIEVED_ACTION = 'NEWS_RECIEVED_ACTION'

export const getNewsData = symbol => (dispatch, _, api) => {
  api.getNews(symbol).then(news => {
    return dispatch({ type: NEWS_RECIEVED_ACTION, news })
  })
}
