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
    trackers: PropTypes.array,
    addTracker: PropTypes.func
  },

  onUpdate (newActivity) {
    const {addTracker} = this.props
    addTracker({
      name: newActivity
    })
  },

  render() {
    let {trackers} = this.props
    let {onUpdate} = this

    return (
      <View column justify='center' style={styles.container}>
        <List trackers={trackers} />
        <AddTrackerForm onUpdate={this.onUpdate} />
      </View>
    );
  }
})

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
