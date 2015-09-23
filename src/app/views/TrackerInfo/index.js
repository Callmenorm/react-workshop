import React, { PropTypes} from 'react'
import View from 'react-flexbox'
import {connect} from 'react-redux'

const TrackerInfo = React.createClass({

  propTypes: {
    params: PropTypes.object.isRequired,
    trackers: PropTypes.array.isRequired
  },

  render() {
    let id = this.props.params.id
    let tracker = this.props.trackers[id]

    return (
      <View column justify='center' style={styles.container}>
        {JSON.stringify(tracker)}
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

export default connect(
  selector
)(TrackerInfo)
