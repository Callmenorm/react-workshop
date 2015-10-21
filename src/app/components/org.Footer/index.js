import style from './style'
import React from 'react'
import CSSModules from 'react-css-modules'
import Flexbox from 'obj.Flexbox'
import { Link } from 'react-router'
import Router from 'utils.routing'

const links = [
  {
    to: 'tracker',
    name: 'Contact'
  },
  {
    to: 'tracker',
    name: 'About'
  }
]

const Nav = React.createClass({
  renderNavItem(item, i) {
    return (
    <li styleName='item' key={i}>
        <Link styleName='link' to={item.to}>
          { item.name }
        </Link>
      </li>
    )
  },

  render() {
    return (
    <Flexbox tag='header' styleName='root' justify='center'>

        <Flexbox tag='ul' justify='space-between'>

          {links.map(this.renderNavItem)}

        </Flexbox>
      </Flexbox>
    )
  }
})

export default CSSModules(Nav, style)
