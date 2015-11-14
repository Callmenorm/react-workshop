import React, { PropTypes } from 'react'
import View from 'react-flexbox'
import List from './components/mol.List'
import { connect } from 'react-redux'
import { postTracker, fetchTrackers } from './state/actions'
import AddTrackerForm from './components/org.AddTrackerForm'

const TrackerView = React.createClass({
  propTypes: {
    trackerIds: PropTypes.array.isRequired,
    trackers: PropTypes.object.isRequired,
    addTracker: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  componentDidMount () {
    const {dispatch} = this.props
    dispatch(fetchTrackers())
  },

  onUpdate (newActivity) {
    const {addTracker, dispatch} = this.props
    dispatch(addTracker(newActivity))
  },

  render () {
    const {trackerIds, trackers} = this.props
    const { onUpdate } = this

    const trackersToList = trackerIds.map((id) => trackers[id])
    return (
      <View column justify='center' style={styles.container}>
          <List trackers={ trackersToList } />
          <AddTrackerForm onUpdate={onUpdate} />
      </View>
    )
  }
})

let styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center'
  }
}

const mapStateToProps = (state) => {
  return {
    trackerIds: state.trackers.trackers,
    trackers: state.entities.trackers,
    addTracker: postTracker
  }
}

export default connect(
  mapStateToProps
)(TrackerView)
