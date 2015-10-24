import { REQUEST_TRACKERS, RECEIVE_TRACKERS, CANCEL_NEW_TRACKER, NEW_TRACKER } from './actions'
import { combineReducers } from 'redux'

const tracker = (state = {
  isFetching: false,
  trackers: []
}, action) => {
  switch (action.type) {
    case REQUEST_TRACKERS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_TRACKERS:
      console.log(action)
      return Object.assign({}, state, {
        trackers: action.trackers
      })
    case CANCEL_NEW_TRACKER:
      return Object.assign({}, state, {
        trackers: state.trackers.filter(tracker => tracker.name !== action.name)
      })
    case NEW_TRACKER:
      return Object.assign({}, state, {
        trackers: [...state.trackers, action.name]
      })
    default:
      return state
  }
}

export const trackers = combineReducers({tracker})
