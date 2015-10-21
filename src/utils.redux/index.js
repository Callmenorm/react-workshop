
/**
 * @desc Utility function that lets us express reducers as an
 * object mapping from action types to handlers instead of a
 * traditional switch statement pattern.
 */
export function createReducer (initialState, handlers) {
  return function reducer (state = initialState, action) {

    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

