export const GET_COMPANY_ACTION = 'GET_COMPANY_ACTION'

const initialState = null

export default (state = initialState, { type, company }) => {
  switch (type) {
    case GET_COMPANY_ACTION:
      return company
    default:
      return state
  }
}
