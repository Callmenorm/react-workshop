import axios from 'config.axios'
import config from 'config.env'

export const REQUEST_TRACKERS = 'REQUEST_TRACKERS'
const requestTrackers = () => ({
    type: REQUEST_TRACKERS
})

export const RECEIVE_TRACKERS = 'RECEIVE_TRACKERS'
const receiveTrackers = (json, status) => ({
    type: RECEIVE_TRACKERS,
    trackers: json,
    status,
    receivedAt: Date.now()
})

export const fetchTrackers = () => {
  return (dispatch) => {

    // dispatch comes from the thunk middleware
    dispatch(requestTrackers())

    return axios.get('/trackers')
      .then(response => response.json)
      .then(json => dispatch(receiveTrackers(json, 'success')))
      .catch(json => dispatch(receiveTrackers(json, 'error')))
  }
}

export const NEW_TRACKER = 'NEW_TRACKER'
const newTracker = name => ({
    type: NEW_TRACKER,
    name: name
})

export const CANCEL_NEW_TRACKER = 'CANCEL_NEW_TRACKER'
const cancelNewTracker = name => ({
    type: CANCEL_NEW_TRACKER,
    name: name
})

export const postTracker = trackerName => {
  return (dispatch) => {
    dispatch(newTracker(trackerName))

    return axios.post('/tracker', {
      name: trackerName
    })
      .catch(err => dispatch(cancelNewTracker(trackerName)))
  }
}
