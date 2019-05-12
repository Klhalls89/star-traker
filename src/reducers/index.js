import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer'
import { userReducer } from './userReducer'
import { hasErroredReducer } from './hasErroredReducer'
import { isLoadingReducer } from './isLoadingReducer'
import { redirectReducer } from './redirectReducer'
export const rootReducer = combineReducers({
  movies: movieReducer,
  user: userReducer,
  hasErrored: hasErroredReducer,
  isLoading: isLoadingReducer,
  redirect: redirectReducer
})

