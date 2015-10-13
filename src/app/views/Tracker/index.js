import style from './style'
import React, { PropTypes } from 'react'
import Flexbox from 'obj.Flexbox'
import View from 'react-flexbox'
import List from './components/mol.List'
import { connect } from 'react-redux'
import { postTracker, fetchTrackers } from './state/actions'
import AddTrackerForm from './components/org.AddTrackerForm'

const TrackerView = React.createClass({
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchTrackers())
  },

  onUpdate(newActivity) {
    const {addTracker} = this.props
    addTracker({
      name: newActivity
    })
  },

  render() {
    let { trackers } = this.props
    let { onUpdate } = this

    return (
    <View column justify='center' style={styles.container}>
        <List trackers={ trackers } />
        <AddTrackerForm onUpdate={this.onUpdate} />
      </View>
    )
  }
})

TrackerView.propTypes = {
  trackers: PropTypes.array.isRequired,
  addTracker: PropTypes.func.isRequired
}

let styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
  }
}

const mapStateToProps = (state) => {
  return {
    trackers: state.trackers.tracker.trackers,
    addTracker: postTracker
  }
}

export default connect(
  mapStateToProps
)(TrackerView)
