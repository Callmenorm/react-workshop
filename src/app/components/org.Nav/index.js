import style from './style'
import React from 'react'
import { Link } from 'react-router'
import Router from 'utils.routing'
import CSSModules from 'react-css-modules'
import Flexbox from 'obj.Flexbox'

const links = [
  {
    name: 'Tracked Activities',
    to: 'wildPokemon'
  },
  {
    name: 'New Tracker',
    to: 'simpleForm'
  },
  {
    name: 'Tracker',
    to: 'tracker'
  }
]

const Nav = React.createClass({

  renderNavItem (item, i) {
    return (
      <li styleName='item' key={i}>
        <Link styleName='link' to={item.to}>
          { item.name }
        </Link>
      </li>
    )
  },

  render () {

    return (
      <Flexbox tag='header' styleName='container' justify='center'>

        <Flexbox tag='ul' justify='space-between'>

          {links.map(this.renderNavItem)}

        </Flexbox>
      </Flexbox>
    )
  }
})

export default CSSModules(Nav, style)

