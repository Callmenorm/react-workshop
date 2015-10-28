import React, { PropTypes} from 'react'
import View from 'react-flexbox'
import {connect} from 'react-redux'
import AddTimeButton from './components/org.AddTimeButton'

let styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  time: {
    flex: '0 0 auto'
  }
}

// TODO: This should be a smart component, so I need to move the time list into a dumb list
const TrackerInfo = React.createClass({

  propTypes: {
    params: PropTypes.object.isRequired,
    trackers: PropTypes.array.isRequired
  },

  render () {
    let id = this.props.params.id
    let tracker = this.props.trackers.filter(item => item.name === id)

    if (tracker && tracker.times && tracker.times.length > 0) {
      return (
        <View column width='100%' style={styles.container}>
          {tracker[0].times.map(time => {
            return (
              <div style={styles.time}>{time}</div>
            )
          })}
        </View>
      )
    } else {
      // TODO: I need to make a component which displays this neatly
      return (
        <View colum style={styles.container}>
          <div style={styles.time}>
            No times have been recorded for this tracker
          </div>
          <AddTimeButton onSubmit={() => {}}/>
        </View>
      )
    }
  }
})

function selector (state) {
  return {
    trackers: state.trackers.tracker.trackers
  }
}

export default connect(
  selector
)(TrackerInfo)
