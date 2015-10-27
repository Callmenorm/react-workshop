import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from '../app'
import TrackerView from '../app/views/Tracker'
import TrackerInfo from '../app/views/TrackerInfo'

let routes = (
  <Route handler={App} path='/'>
    <Route name='tracker' path='tracker' handler={TrackerView} />
    <Route name='trackerById' path='tracker/:id' handler={TrackerInfo} />
    <DefaultRoute handler={TrackerView} />
  </Route>
)

export default routes
