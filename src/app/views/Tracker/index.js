import style from './style'
import React, { PropTypes} from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import Flexbox from 'obj.Flexbox'

const TrackerView = React.createClass({

  propTypes: {
    activities: PropTypes.array,
    findAct: PropTypes.func
  },

  onUpdate (newActivity) {

  },

  render() {
    return (
      <Flexbox tag='div' styleName='container' justify='center'>
        stuff
      </Flexbox>
    )
  }
})

export default CSSModules(TrackerView, style)
