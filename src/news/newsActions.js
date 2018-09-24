export const NEWS_RECEIVED_ACTION = 'NEWS_RECEIVED_ACTION'

const newsReceivedAction = news => ({ type: NEWS_RECEIVED_ACTION, news })

export const getNewsData = symbol => (dispatch, _, api) => {
  api.getNews(symbol).then(news => {
    return dispatch(newsReceivedAction(news))
  })
}
