import style from './style'
import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import Flexbox from 'obj.Flexbox'

const links = [
  {
    name: 'Tracked Activities',
    to: 'tracker'
  },
  {
    name: 'Tracker',
    to: 'tracker'
  }
]

const renderNavItem = (item, idx) => {
  return (
    <li styleName='item' key={idx}>
      <Link styleName='link' to={item.to}>
        {item.name}
      </Link>
    </li>
  )
}

const Nav = React.createClass({
  render () {
    return (
      <Flexbox tag='header' styleName='container' justify='center'>
        <Flexbox tag='ul' justify='space-between'>
          {links.map(renderNavItem)}
        </Flexbox>
      </Flexbox>
    )
  }
})

export default CSSModules(Nav, style)
