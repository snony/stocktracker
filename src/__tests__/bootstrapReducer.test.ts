import { mockCompanySymbols } from '__mock__/companySymbols.mock'
import { CompanySymbolsAction, receiveCompanySymbolsAction, setFailFetchCompanySymbolsAction } from 'bootstrapActions'
import bootstrapReducer, { CompanySymbolState, initialState } from 'bootstrapReducer'
import FetchStatus from 'fetchStatus';

describe('Bootstrap Reducer', () => {
  it('should return initial state', () => {
    expect(
      bootstrapReducer(undefined, {} as CompanySymbolsAction)
    ).toEqual(initialState)
  })

  it('should handle company symbol receive action on success', () => {
    expect(
      bootstrapReducer(initialState, receiveCompanySymbolsAction(mockCompanySymbols.companySymbols))
    )
      .toEqual(mockCompanySymbols)
  })

  it('should handle COMPANY SYMBOLS FETCH FAIL ACTION', () => {
    const expectedState: CompanySymbolState = {
      companySymbols: [],
      fetchStatus: FetchStatus.FAILED
    }
    expect(
      bootstrapReducer(initialState, setFailFetchCompanySymbolsAction())
    )
      .toEqual(expectedState)
  })
})
