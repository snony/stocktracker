import { getCompanySymbols } from '__mock__/companySymbols.mock'
import companyReducer, { CompanyUpdateAction, GET_COMPANY_ACTION } from 'companyReducer'

describe('Company Reducer', () => {
  it('should handle initial state', () => {
    const updateAction = {} as CompanyUpdateAction
    expect(companyReducer(null, updateAction)).toBeNull()
  })

  it('should handle company update action', () => {
    const company = getCompanySymbols(1)[0]
    const companyUpdateAction: CompanyUpdateAction = {
      type: GET_COMPANY_ACTION,
      company
    }
    expect(companyReducer(null, companyUpdateAction)).toEqual(company)
  })
})
