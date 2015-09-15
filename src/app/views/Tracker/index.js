import style from './style'
import React, { PropTypes} from 'react'
import Flexbox from 'obj.Flexbox'
import List from './components/mol.List'

const TrackerView = React.createClass({

  propTypes: {
  },

  onUpdate (newActivity) {

  },

  render() {
    return (
      <Flexbox tag='div' style={styles.container} justify='center'>
        <List trackers={beginnerTrackers} />
      </Flexbox>
    );
  }
  // <AddTrackerForm />
})
      //<Flexbox tag='div' style={style.container} justify='center'>
      //</Flexbox>

let beginnerTrackers = [
  'something',
  'something else',
  'crap',
  'stuff'
]

let styles = {
  container: { }
}
export default TrackerView
