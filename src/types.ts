import api from './api'
import rootReducer from './reducer'
export type API = typeof api
export type GlobalState = ReturnType<typeof rootReducer>