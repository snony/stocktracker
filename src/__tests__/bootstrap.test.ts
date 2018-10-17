import { mockApi, mockFailedApi } from '__mock__/api.mock'
import { getCompanySymbols, mockCompanySymbols } from '__mock__/companySymbols.mock'
import { mockGlobalState } from '__mock__/globalstate.mock'
import { generateMockStore } from '__mock__/mockStore.mock'
import {
  COMPANY_SYMBOLS_FETCH_FAIL_ACTION,
  COMPANY_SYMBOLS_RECEIVED_ACTION,
  CompanySymbolsAction,
  getCompanySymbolsData,
  receiveCompanySymbolsAction,
  setFailFetchCompanySymbolsAction
} from 'bootstrapActions'
import { MockStore } from 'redux-mock-store'

describe('Bootstrap', () => {
  describe('synchronous action', () => {
    it('receiveCompanySymbolsAction should create a company receive symbol action ', () => {
      const companySymbols = getCompanySymbols(5)
      const expectedAction: CompanySymbolsAction = {
        type: COMPANY_SYMBOLS_RECEIVED_ACTION,
        companySymbols
      }
      expect(receiveCompanySymbolsAction(companySymbols)).toEqual(expectedAction)
    })

    it('setFailFetchCompanySymbolsAction should create a companySymbol fetch fail action', () => {
      expect(setFailFetchCompanySymbolsAction()).toEqual({
        type: COMPANY_SYMBOLS_FETCH_FAIL_ACTION
      })
    })
  })

  describe('asynchronous action', () => {
    let store: MockStore<{}>

    afterEach(() => {
      store.clearActions()
    })

    it('getCompanySymbolsData should dispatch an async companySymbol receive action ', async () => {
      const expectedAction = {
        type: COMPANY_SYMBOLS_RECEIVED_ACTION,
        companySymbols: {
          companySymbols: mockCompanySymbols.companySymbols,
          fetchStatus: mockCompanySymbols.fetchStatus
        }
      }
      store = generateMockStore(mockGlobalState, mockApi)
      await store.dispatch(getCompanySymbolsData() as any)
      expect(store.getActions()).toEqual([expectedAction])
    })

    it('getCompanySymbolsData should dispatch an async companySymbol fetch fail action ', async () => {
      store = generateMockStore(mockGlobalState, mockFailedApi)

      await store.dispatch(getCompanySymbolsData() as any)
      expect(store.getActions()).toEqual([{ type: COMPANY_SYMBOLS_FETCH_FAIL_ACTION }])
    })
  })
})
