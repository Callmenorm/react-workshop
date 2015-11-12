import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { devTools } from 'redux-devtools'
import rootReducer from 'redux.reducers'

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
  return createStoreWithMiddleware(rootReducer, initialState)
}
