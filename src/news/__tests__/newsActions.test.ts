import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import { ThunkDispatch } from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'
import { API, GlobalState } from 'types';
import api from '../../api';
import { getNewsData, NEWS_RECEIVED_ACTION, NewsReceivedAction, receiveNewsAction } from '../newsActions'
import { News } from '../types'


describe('actions', () => {

    describe('synchronous actions', () => {
        it('receiveNewsAction should create a news received action', () => {
            const newsItems: News[] = [{ url: '', headline: '', datetime: '', source: '' }];
            const expectedAction = {
                type: NEWS_RECEIVED_ACTION,
                newsItems
            }

            expect(receiveNewsAction(newsItems)).toEqual(expectedAction)
        })
    })

    describe('asynchronous actions', () => {
        const fetch = require('jest-fetch-mock');
        jest.setMock('node-fetch', fetch);
        type ThunkDispatchNewsReceivedAction = ThunkDispatch<GlobalState, API, NewsReceivedAction>
        type Store = GlobalState | ThunkDispatchNewsReceivedAction

        afterEach(() => {
            fetchMock.reset()
            fetchMock.restore()
        })

        it('getNewsData should  dpstach an async news received action', () => {
            const newsData = { url: 'us', headline: 'us', datetime: 'us', source: 'us' };
            // TODO ML 05/10 should move this one to api.test.ts for example 
            fetchMock.getOnce('https://api.iextrading.com/1.0/stock/aapl/news/last/5', { body: { news: [newsData] }, headers: { 'content-type': 'application/json' } });
            const expectedAction = [{
                type: NEWS_RECEIVED_ACTION,
                newsItems: { news: [newsData] }
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

    // TODO ML 05/10 should create a test that check for fail action for async
})

