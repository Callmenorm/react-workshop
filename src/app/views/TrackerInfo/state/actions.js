import { dev } from 'config.env'
import fetch from 'isomorphic-fetch'

export const NEW_TIME = 'NEW_TIME'
const newTime = (trackerId) => ({
  type: NEW_TIME,
  trackerId,
  time: Date.now()
})

export const NEW_TIME_STATUS = 'NEW_TIME_STATUS'
const newTimeStatus = (trackerId, time, status) => ({
  type: NEW_TIME_STATUS,
  trackerId,
  time,
  status
})

export const postNewTime = (trackerId, time) => {
  return (dispatch) => {
    dispatch(newTime(trackerId))

    return fetch(`${dev.baseURl}/tracker/time`, {
      method: 'POST',
      headers: {
        Accept: 'applicaton/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        trackerId: trackerId,
        time
      })
    })
    .then(() => dispatch(newTimeStatus(trackerId, time, 'success')))
    .catch(err => {
      console.log(err)
      dispatch(newTimeStatus(trackerId, time, 'success'))
    })
  }
}
