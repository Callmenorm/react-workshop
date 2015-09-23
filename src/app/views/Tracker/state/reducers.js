import {TRACKER_SUBMITTED} from './actions'

export function trackers (state = [{
  name: 'something'
}, {
  name: 'something else'
}, {
  name: 'sad monkey'
}], action) {
  switch (action.type) {
    case TRACKER_SUBMITTED:
      return [...state, {name: action.payload.newTracker.name}];
    default:
      return state
  }
}
