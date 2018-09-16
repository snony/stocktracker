import { createStore } from 'redux'
// import { rootReducer } from './index';

import rootReducer from './reducers'

const store = createStore(rootReducer)

export default store
