import { dev } from 'config.env'
import fetch from 'isomorphic-fetch'

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

    return fetch(`${dev.baseUrl}/tracker`)
      .then(response => {
        console.log('inside fetch')
        return response.json
      })
      .then(json => dispatch(receiveTrackers(json, 'success')))
      .catch(err => {
        console.log('fetch trackers catch', err)
        dispatch(receiveTrackers([], 'error'))
      })
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

    return fetch(`${dev.baseUrl}/tracker`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: trackerName
      })
    })
      .then(response => dispatch(newTracker(trackerName)))
      .catch(err => {
        console.log(err)
        dispatch(cancelNewTracker(trackerName))
      })
  }
}
