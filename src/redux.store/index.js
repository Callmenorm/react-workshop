import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { devTools } from 'redux-devtools'
import * as reducers from 'redux.reducers'

const reducer = combineReducers(reducers)
const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware
  ),
  devTools(),
  createStore
)

/**
 * Creates a preconfigured store.
 */
export default function configureStore (initialState) {
  return createStoreWithMiddleware(reducer, initialState)
}
