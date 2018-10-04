import { Company } from './search/types'

interface CompanyUpdateAction {
  type: string
  company: Company
}
export const GET_COMPANY_ACTION = 'GET_COMPANY_ACTION'

const initialState: Company = null

export default (state = initialState, action: CompanyUpdateAction) => {
  switch (action.type) {
    case GET_COMPANY_ACTION:
      return { ...action.company }
    default:
      return state
  }
}
