import { getCompanySymbols } from '__mock__/companySymbols.mock'
import { COMPANY_SYMBOLS_FETCH_FAIL_ACTION, COMPANY_SYMBOLS_RECEIVED_ACTION, CompanySymbolsAction } from 'bootstrapActions'
import bootstrapReducer, { CompanySymbolState, initialState } from 'bootstrapReducer'
import FetchStatus from 'fetchStatus';

describe('Bootstrap Reducer', () => {
  it('should return initial state', () => {
    const companySymbolAction = {} as CompanySymbolsAction
    expect(bootstrapReducer(undefined, companySymbolAction)).toEqual(initialState)
  })

  it('should handle company symbol receive action on success', () => {
    const companySymbols = getCompanySymbols(10)
    const companyReceiveAction: CompanySymbolsAction = {
      type: COMPANY_SYMBOLS_RECEIVED_ACTION,
      companySymbols
    }
    const expectedState = { companySymbols, fetchStatus: FetchStatus.SUCCESS }
    expect(bootstrapReducer(initialState, companyReceiveAction)).toEqual(expectedState)
  })

  it('should handle COMPANY SYMBOLS FETCH FAIL ACTION', () => {
    const expectedState: CompanySymbolState = {
      companySymbols: [],
      fetchStatus: FetchStatus.FAILED
    }
    expect(bootstrapReducer(initialState, { type: COMPANY_SYMBOLS_FETCH_FAIL_ACTION })).toEqual(expectedState)
  })
})
