import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from '../app'
import WildPokemonView from '../app/views/WildPokemon'
import TrackerView from '../app/views/Tracker'

var routes = (
  <Route handler={App} >
    <Route name='wildPokemon' path='/wild' handler={WildPokemonView} />
    <Route name='tracker' path='/tracker' handler={TrackerView} />
    <DefaultRoute handler={WildPokemonView} />
  </Route>
)

export default routes
