import configureMockStore, { MockStore } from 'redux-mock-store'
import thunk from 'redux-thunk'
import { API } from 'types'

export const generateMockStore = (state: {}, api: API): MockStore => {
  const middleware = [thunk.withExtraArgument(api)]
  const mockStore = configureMockStore(middleware)
  const store = mockStore(state)

  store.clearActions()
  return store
}
