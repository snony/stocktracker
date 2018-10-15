import { mockApi } from '__mock__/api.mock'
import { getCompanySymbols } from '__mock__/companySymbols.mock'
import { mockGlobalState } from '__mock__/globalstate.mock'
import { generateMockStore } from '__mock__/mockStore.mock'
import {
  COMPANY_SYMBOLS_RECEIVED_ACTION,
  CompanySymbolsReceiveAction,
  getCompanySymbolsData,
  receiveCompanySymbolsAction
} from 'bootstrap'
import { MockStore } from 'redux-mock-store'

describe('Bootstrap', () => {
  let store: MockStore<{}>

  beforeEach(() => {
    store = generateMockStore(mockGlobalState, mockApi)
    store.clearActions()
  })

  describe('synchronous action', () => {
    it('receiveCompanySymbolsAction should create a company receive symbol action ', () => {
      const companySymbols = getCompanySymbols(5)
      const expectedAction: CompanySymbolsReceiveAction = {
        type: COMPANY_SYMBOLS_RECEIVED_ACTION,
        companySymbols
      }
      expect(receiveCompanySymbolsAction(companySymbols)).toEqual(expectedAction)
    })
  })

  describe('asynchronous action', () => {
    it('getCompanySymbolsData should dispatch an async company receive action ', async () => {
      const companySymbols = getCompanySymbols(25)

      const expectedAction: CompanySymbolsReceiveAction = {
        type: COMPANY_SYMBOLS_RECEIVED_ACTION,
        companySymbols
      }

      await store.dispatch(getCompanySymbolsData() as any)
      expect(store.getActions()).toEqual([expectedAction])
    })
  })
})
