import api from './api'
import rootReducer from './reducer'

export type API = typeof api
export type CompanyState = ReturnType<typeof rootReducer>