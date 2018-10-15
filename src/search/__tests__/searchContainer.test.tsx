import { mockGlobalState } from '__mock__/globalstate.mock'
import { GET_COMPANY_ACTION } from 'companyReducer'
import {
  CompanyGetAction,
  getCompanyAction,
  mapDispatchToProps,
  mapStateToProps,
  ThunkDispatchContainerAction
} from 'search/searchContainer'

describe('Search Container', () => {
  const companySymbol = { name: 'Apple Inc', symbol: 'aapl' }

  describe('mapStateToProps', () => {
    it('should return companySymbols', () => {
      const state = mockGlobalState
      expect(mapStateToProps(state)).toEqual({ companySymbols: state.companySymbols })
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch', () => {
      const dispatch: ThunkDispatchContainerAction = jest.fn()
      mapDispatchToProps(dispatch).getInfo(companySymbol)
      expect(dispatch).toBeCalled()
    })
  })

  describe('Actions', () => {
    it('getCompanyAction should create a GET_COMPANY_ACTION', () => {
      const expectedAction: CompanyGetAction = {
        type: GET_COMPANY_ACTION,
        company: companySymbol
      }
      expect(getCompanyAction(companySymbol)).toEqual(expectedAction)
    })
  })
})
