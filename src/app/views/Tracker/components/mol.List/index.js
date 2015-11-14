import React, {PropTypes} from 'react'
import Flexbox from 'obj.Flexbox'
import { Link } from 'react-router'

let List = React.createClass({
  propTypes: {
    trackers: PropTypes.array.isRequired
  },

  render () {
    let {trackers} = this.props

    return (
      <div>
        <Flexbox tag='ul' direction='column' wrap='wrap' align='center'>
          {trackers.map((tracker, idx) => {
            return (
              <li style={styles.item} key={idx}>
                <Link to={`/tracker/${tracker.id}`}>{tracker.name}</Link>
              </li>
            )
          })}
        </Flexbox>
      </div>
    )
  }

})

let styles = {
  item: {listStyle: 'none', fontSize: 14, color: 'navy'}
}

export default List
