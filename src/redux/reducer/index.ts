import { combineReducers } from 'redux'
import { StoreState } from '../../interfaces/store.interfaces'
import CountriesReducer from './countries.reducer'

import UserReducer from './user.reducer'

const rootReducer = combineReducers<StoreState>({
  Countries: CountriesReducer,
  User: UserReducer,
})

export default rootReducer
