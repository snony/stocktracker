export const NEWS_RECEIVED_ACTION = 'NEWS_RECEIVED_ACTION'

export const getNewsData = symbol => (dispatch, _, api) => {
  api.getNews(symbol).then(news => {
    return dispatch({ type: NEWS_RECEIVED_ACTION, news })
  })
}
