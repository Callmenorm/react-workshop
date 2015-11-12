import { dev } from 'config.env'
import fetch from 'isomorphic-fetch'

export const NEW_TIME = 'NEW_TIME'
const newTime = (trackerId, time) => ({
  type: NEW_TIME,
  trackerId,
  time
})

export const NEW_TIME_STATUS = 'NEW_TIME_STATUS'
const newTimeStatus = (trackerId, time, status) => ({
  type: NEW_TIME_STATUS,
  trackerId,
  time,
  status
})

export const GET_TIMES = 'GET_TIMES'
const getTimes = (trackerId) => ({
  type: GET_TIMES,
  trackerId
})

export const GET_TIMES_STATUS = 'GET_TIMES_STATUS'
const getTimesStatus = (trackerId, times, status) => ({
  type: GET_TIMES_STATUS,
  trackerId,
  times,
  status
})

export const fetchTimes = (trackerId) => {
  return (dispatch) => {
    dispatch(getTimes(trackerId))

    return fetch(`${dev.baseUrl}/tracker/${trackerId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((times) => dispatch(getTimesStatus(trackerId, times, 'success')))
    .catch(err => {
      console.log(err)
      dispatch(getTimesStatus(trackerId, [], 'failure'))
    })
  }
}

export const postNewTime = (trackerId, time) => {
  return (dispatch) => {
    dispatch(newTime(trackerId, time))
    let body = {
      trackerId,
      time
    }

    return fetch(`${dev.baseUrl}/tracker/time`, {
      method: 'POST',
      headers: {
        Accept: 'applicaton/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(() => dispatch(newTimeStatus(trackerId, time, 'success')))
    .catch(err => {
      console.log(err)
      dispatch(newTimeStatus(trackerId, time, 'failure'))
    })
  }
}
