import {Schema, arrayOf} from 'normalizr'

let trackers = new Schema('trackers')
let user = new Schema('user')

user.define({
  trackers: arrayOf(trackers)
})

trackers.define({
  user: user
})

export const userSchema = user
export const trackersSchema = trackers
