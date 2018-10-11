import { getCompanySymbols } from '../__mock__/companySymbols.mock'
import { COMPANY_SYMBOLS_RECEIVED_ACTION, CompanySymbolsReceiveAction } from '../bootstrap'
import bootstrapReducer from '../bootstrapReducer'

describe('Bootstrap Reducer', () => {
  it('should return initial state', () => {
    const companySymbolAction = {} as CompanySymbolsReceiveAction
    expect(bootstrapReducer([], companySymbolAction)).toEqual([])
  })

  it('should handle company symbol receive action', () => {
    const companySymbols = getCompanySymbols(10)
    const companyReceiveAction: CompanySymbolsReceiveAction = {
      type: COMPANY_SYMBOLS_RECEIVED_ACTION,
      companySymbols
    }
    expect(bootstrapReducer([], companyReceiveAction)).toEqual(companySymbols)
  })
})
