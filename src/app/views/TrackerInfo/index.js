import React, { PropTypes} from 'react'
import View from 'react-flexbox'
import {connect} from 'react-redux'
import AddTimeButton from './components/mol.AddTimeButton'
import TrackerTimeList from './components/org.TrackerTimeList'
import {postNewTime} from './state/actions'
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

  onSubmit () {
    let {postNewTime, dispatch} = this.props
    let trackerName = this.props.params.id
    let rethinkKey = this.props.trackers.filter(item => item.name === trackerName)
    dispatch(postNewTime(rethinkKey[0].id, moment().format()))
  },

  render () {
    let id = this.props.params.id
    let tracker = this.props.trackers.filter(item => item.name === id)

    return (
      <View column width='100%' style={styles.container}>
        <TrackerTimeList times={tracker.length > 0 ? tracker[0].times : []} />
        <AddTimeButton postNewTime={this.onSubmit} />
      </View>
    )
  }
})

function selector (state) {
  return {
    trackers: state.trackers.tracker.trackers,
    postNewTime
  }
}

export default connect(
  selector
)(TrackerInfo)
