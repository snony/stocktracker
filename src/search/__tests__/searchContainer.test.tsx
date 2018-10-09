import { GET_COMPANY_ACTION } from '../../companyReducer'
import { GlobalState } from '../../types'
import { CompanyGetAction, getCompanyAction, mapDispatchToProps, mapStateToProps, ThunkDispatchContainerAction } from '../searchContainer'

describe('Search Container', () => {
    describe('mapStateToProps', () => {

        it('should show previous state', () => {
            const state = {} as GlobalState
            expect(mapStateToProps(state)).toEqual({});
        })

        it('should update companySymbols', () => {

            const state: GlobalState = { companySymbols: [{ name: 'Apple', symbol: 'aapl' }] } as GlobalState
            expect(mapStateToProps(state)).toEqual({ companySymbols: state.companySymbols });
        })

    })

    describe('mapDispatchToProps', () => {
        it('should call dispatch', () => {
            const dispatch: ThunkDispatchContainerAction = jest.fn()
            mapDispatchToProps(dispatch).getInfo({ symbol: 'Aapl', name: 'Aaple' })
            expect(dispatch).toBeCalled();
        })
    })

    describe('Actions', () => {

        it('getCompanyAction should create a GET_COMPANY_ACTION', () => {
            const expectedAction: CompanyGetAction = {
                type: GET_COMPANY_ACTION,
                company: { name: 'Apple Inc', symbol: 'aapl' }
            }
            expect(getCompanyAction({ name: 'Apple Inc', symbol: 'aapl' })).toEqual(expectedAction);
        })
    })

})