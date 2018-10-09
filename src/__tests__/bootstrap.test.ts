import configureMockStore from 'redux-mock-store'
import { ThunkDispatch } from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'
import api from '../__mock__/api.mock'
import { getCompanySymbols } from '../__mock__/companySymbols.mock'
import { COMPANY_SYMBOLS_RECEIVED_ACTION, CompanySymbolsReceiveAction, getCompanySymbolsData, receiveCompanySymbolsAction } from '../bootstrap'
import { API, GlobalState } from '../types';

describe('Bootstrap', () => {

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
        type ThunkDispatchNewsReceivedAction = ThunkDispatch<GlobalState, API, CompanySymbolsReceiveAction>
        type Store = GlobalState | ThunkDispatchNewsReceivedAction

        it('getCompanySymbolsData should dispatch an async company receive action ', () => {

            const middlewares = [thunkMiddleware.withExtraArgument(api)]
            const mockStore: Store = configureMockStore(middlewares)
            const store = mockStore(jest.fn())
            const companySymbols = getCompanySymbols(25)

            const expectedAction: CompanySymbolsReceiveAction = {
                type: COMPANY_SYMBOLS_RECEIVED_ACTION,
                companySymbols
            }
            return store.dispatch(getCompanySymbolsData()).then(() => {
                expect(store.getActions()).toEqual([expectedAction])
            })
        })
    })
})