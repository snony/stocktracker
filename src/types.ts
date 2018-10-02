<<<<<<< HEAD
import api from './api'
import rootReducer from './reducer'

export type API = typeof api
export type GlobalState = ReturnType<typeof rootReducer>
=======
import rootReducer from './reducer'

export type GlobalState = ReturnType<typeof rootReducer>
>>>>>>> origin/master
