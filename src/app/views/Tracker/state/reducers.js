import { REQUEST_TRACKERS, RECEIVE_TRACKERS, NEW_TRACKER_STATUS, NEW_TRACKER } from './actions'
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
        trackers: action.trackers,
        isFetching: false
      })
    case NEW_TRACKER_STATUS:
      return action.status === 'failure' ? Object.assign({}, state, {
        trackers: state.trackers.filter(tracker => tracker.name !== action.name)
      }) : state
    case NEW_TRACKER:
      return Object.assign({}, state, {
        trackers: [...state.trackers, {name: action.name, owner: 'My scummy feet', times: []}]
      })
    default:
      return state
  }
}

export const trackers = combineReducers({tracker})
