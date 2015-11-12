import {combineReducers} from 'redux'
import merge from 'lodash/object/merge'
import {trackers} from '../app/views/Tracker/state/reducers'
import {trackerInfo} from '../app/views/TrackerInfo/state/reducers'

const initialState = {
  trackers: {},
  users: {}
}

const entities = (state = initialState, action) => action.entities ? merge({}, state, action.entities) : state

const rootReducer = combineReducers({
  trackers,
  trackerInfo,
  entities
})

export default rootReducer
