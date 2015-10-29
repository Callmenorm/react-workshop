import React, { PropTypes} from 'react'
import View from 'react-flexbox'
import {connect} from 'react-redux'
import AddTimeButton from './components/mol.AddTimeButton'
import TrackerTimeList from './components/org.TrackerTimeList'

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

const TrackerInfo = React.createClass({

  propTypes: {
    params: PropTypes.object.isRequired,
    trackers: PropTypes.array.isRequired
  },

  onSubmit () {
  },

  render () {
    let id = this.props.params.id
    let tracker = this.props.trackers.filter(item => item.name === id)

    return (
      <View column width='100%' style={styles.container}>
        <TrackerTimeList times={tracker.length > 0 ? tracker[0] : []} />
        <AddTimeButton onSubmit={this.onSubmit} />
      </View>
    )
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
