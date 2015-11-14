import {NEW_TIME, NEW_TIME_STATUS} from './actions'
import {combineReducers} from 'redux'
const initialState = {
  isFetching: false,
  times: []
}

const trackerInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_TIME:
      return Object.assign({}, state, {
        isFetching: true,
        times: [...state.times, action.time]
      })
    case NEW_TIME_STATUS:
      if (action.status === 'success') {
        return state
      }
      return Object.assign({}, state, {
        isFetching: true,
        times: state.times.filter((item) => item !== action.time)
      })
    default:
      return state
  }
}

export const trackerInfo = combineReducers({trackerInfoReducer})
