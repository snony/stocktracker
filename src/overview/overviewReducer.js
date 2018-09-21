import { OVERVIEW_RECEIVED_ACTION } from './overviewActions'

const initialState = null

export default (state = initialState, { type, overview }) => {
  switch (type) {
    case OVERVIEW_RECEIVED_ACTION:
      return overview
    default:
      return state
  }
}
