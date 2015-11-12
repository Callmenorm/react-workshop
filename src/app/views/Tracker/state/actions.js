import { dev } from 'config.env'
import fetch from 'isomorphic-fetch'
import {trackersSchema} from 'schema'
import {normalize, arrayOf} from 'normalizr'

export const REQUEST_TRACKERS = 'REQUEST_TRACKERS'
const requestTrackers = () => ({
  type: REQUEST_TRACKERS
})

export const RECEIVE_TRACKERS = 'RECEIVE_TRACKERS'
const receiveTrackers = (trackers, status) => ({
  type: RECEIVE_TRACKERS,
  trackers,
  status,
  receivedAt: Date.now()
})

export const fetchTrackers = () => {
  return (dispatch) => {
    // dispatch comes from the thunk middleware
    dispatch(requestTrackers())

    return fetch(`${dev.baseUrl}/tracker`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(trackers => {
        console.log('trackers', trackers)
        const normalized = normalize(trackers, arrayOf(trackersSchema))
        console.log('normalized trackers', normalized)
        dispatch(receiveTrackers(trackers, 'success'))
      })
      .catch(err => {
        console.log('fetch trackers catch', err)
        dispatch(receiveTrackers([], 'error'))
      })
  }
}

export const NEW_TRACKER = 'POST_TRACKER'
const newTracker = name => ({
  type: NEW_TRACKER,
  name
})

export const NEW_TRACKER_STATUS = 'NEW_TRACKER_STATUS'
const newTrackerStatus = (name, status) => ({
  type: NEW_TRACKER_STATUS,
  name,
  status
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
        name: trackerName,
        owner: 'My scummy feet'
      })
    })
      .then(() => dispatch(newTrackerStatus(trackerName, 'success')))
      .catch(err => {
        console.log(err)
        dispatch(newTrackerStatus(trackerName, 'failure'))
      })
  }
}
