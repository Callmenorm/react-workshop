import React, { PropTypes } from 'react'
import View from 'react-flexbox'
import List from './components/mol.List'
import { connect } from 'react-redux'
import { postTracker, fetchTrackers } from './state/actions'
import AddTrackerForm from './components/org.AddTrackerForm'

const TrackerView = React.createClass({
  propTypes: {
    trackers: PropTypes.array.isRequired,
    addTracker: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  componentDidMount () {
    const {dispatch} = this.props
    dispatch(fetchTrackers())
  },

  onUpdate (newActivity) {
    console.log(newActivity)
    const {addTracker, dispatch} = this.props
    dispatch(addTracker(newActivity))
  },

  render () {
    let { trackers } = this.props
    let { onUpdate } = this

    return (
      <View column justify='center' style={styles.container}>
          <List trackers={ trackers } />
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
  console.log(state.trackers.tracker.trackers)
  return {
    trackers: state.trackers.tracker.trackers,
    addTracker: postTracker
  }
}

export default connect(
  mapStateToProps
)(TrackerView)
