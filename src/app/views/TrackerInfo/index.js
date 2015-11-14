import React, { PropTypes} from 'react'
import View from 'react-flexbox'
import {connect} from 'react-redux'
import AddTimeButton from './components/mol.AddTimeButton'
import TrackerTimeList from './components/org.TrackerTimeList'
import {postNewTime, fetchTimes} from './state/actions'
import {fetchTrackers} from '../Tracker/state/actions'
import moment from 'moment'

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
    trackers: PropTypes.array.isRequired,
    postNewTime: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  componentDidMount () {
    let {dispatch} = this.props
    if (this.props.trackers.length === 0) {
      dispatch(fetchTrackers())
    } else {
      let {times, id} = this.props.trackers[this.props.params.id]
      if (times.length === 0) {
        dispatch(fetchTimes(id))
      }
    }
  },

  onSubmit () {
    let {postNewTime, dispatch} = this.props
    let trackerId = this.props.params.id
    dispatch(postNewTime(trackerId, moment().format()))
  },

  render () {
    const trackerId = this.props.params.id
    console.log('trackerId', trackerId)
    const tracker = this.props.trackers[trackerId]
    console.log('tracker', tracker)

    return (
      <View column width='100%' style={styles.container}>
        <TrackerTimeList times={tracker.times}/>
        <AddTimeButton postNewTime={this.onSubmit} />
      </View>
    )
  }
})

function selector (state) {
  return {
    trackers: state.entities.trackers,
    postNewTime
  }
}

export default connect(
  selector
)(TrackerInfo)
