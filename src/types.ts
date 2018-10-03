import api from './api'
import rootReducer from './reducer'

export type API = typeof api
export interface Company { name: string, symbol: string }
export type GlobalState = ReturnType<typeof rootReducer>