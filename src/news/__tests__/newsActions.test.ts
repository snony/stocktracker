import configureMockStore from 'redux-mock-store'
import { ThunkDispatch } from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'
import { API, GlobalState } from 'types';
import api from '../__mocks__/api.mock';
import { getMockNews } from '../__mocks__/news';
import { getNewsData, NEWS_RECEIVED_ACTION, NewsReceivedAction, receiveNewsAction } from '../newsActions'


describe('actions', () => {

    describe('synchronous actions', () => {
        it('receiveNewsAction should create a news received action', () => {
            const newsItems = getMockNews();
            const expectedAction = {
                type: NEWS_RECEIVED_ACTION,
                newsItems
            }

            expect(receiveNewsAction(newsItems)).toEqual(expectedAction)
        })
    })

    describe('asynchronous actions', () => {
        type ThunkDispatchNewsReceivedAction = ThunkDispatch<GlobalState, API, NewsReceivedAction>
        type Store = GlobalState | ThunkDispatchNewsReceivedAction
        it('getNewsData should  dispatch an async news received action', () => {
            const newsData = getMockNews()
            const expectedAction = [{
                type: NEWS_RECEIVED_ACTION,
                newsItems: newsData
            }]

            // Setup the mock store
            const middlewares = [thunkMiddleware.withExtraArgument(api)]
            const mockStore: Store = configureMockStore(middlewares)
            const store = mockStore(jest.fn())

            return store.dispatch(getNewsData('aapl')).then(() => {
                expect(store.getActions()).toEqual(expectedAction)
            })
        })
    })

})

