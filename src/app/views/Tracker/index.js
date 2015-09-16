import style from './style'
import React, { PropTypes} from 'react'
import Flexbox from 'obj.Flexbox'
import View from 'react-flexbox'
import List from './components/mol.List'
import {connect} from 'react-redux'
import {submitTracker} from './state/actions'
import AddTrackerForm from './components/org.AddTrackerForm'

const TrackerView = React.createClass({

  propTypes: {
  },

  onUpdate (newActivity) {

  },

  render() {
    return (
      <View column justify='center' style={styles.container}>
        <List trackers={beginnerTrackers} />
        <AddTrackerForm />
      </View>
    );
  }
})

let beginnerTrackers = [
  'something',
  'something else',
  'crap',
  'stuff'
]

let styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
  }
}

function selector(state) {
  return {
    trackers: state.trackers
  };
}

function boundActions (dispatch) {
  return {
    addTracker: name => dispatch(submitTracker(name))
  };
}

export default connect(
  selector,
  boundActions
)(TrackerView)
