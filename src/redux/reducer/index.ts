import { combineReducers } from 'redux'
import { StoreState } from '../../interfaces/store.interfaces'
import RepoReducer from './repositories.reducer'

import UserReducer from './user.reducer'

const rootReducer = combineReducers<StoreState>({
  Repositories: RepoReducer,
  User: UserReducer,
})

export default rootReducer
