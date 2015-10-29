import React, {PropTypes} from 'react'
import View from 'react-flexbox'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  item: {
    flex: '0 0 auto'
  }
}

const TrackerTimeList = React.createClass({
  propTypes: {
    times: PropTypes.array.isRequired
  },

  render () {
    let times = this.props.times
    if (times.length > 0) {
      return (
        <View column width='100%' styles={style.container}>
          <ul>
            {times.map((time) => {
              return <li styles={style.item}>time</li>
            })}
          </ul>
        </View>
      )
    } else {
      return (
        <span styles={style.item}>There aren't any times here</span>
      )
    }
  }
})

export default TrackerTimeList
