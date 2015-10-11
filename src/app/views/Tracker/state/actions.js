import axios from 'axios'

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

export const fetchPosts = () => {
  return (dispatch) => {

    // dispatch comes from the thunk middleware
    dispatch(requestTrackers())

    return axios
  }
}

export const TRACKER_SUBMITTED = 'TRACKER_SUBMITTED'

export function submitTracker (tracker) {
  return {
    type: TRACKER_SUBMITTED,
    payload: {
      newTracker: tracker
    }
  }
}
