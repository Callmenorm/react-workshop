import React, {PropTypes} from 'react'
import View from 'react-flexbox'
import moment from 'moment'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  item: {
    flex: '0 0 auto',
    listStyleType: 'none'
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
        <View column width='100%' style={styles.item}>
          <ul style={styles.container}>
            {times.map((time, idx) => {
              return <li style={styles.item} key={idx}>{moment(time).fromNow()}</li>
            })}
          </ul>
        </View>
      )
    } else {
      return (
        <span style={styles.item}>There aren't any times here</span>
      )
    }
  }
})

export default TrackerTimeList
