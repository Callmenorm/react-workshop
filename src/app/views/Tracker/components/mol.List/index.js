import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules'
import Flexbox from 'obj.Flexbox'


let List = React.createClass({
  propTypes: {
    trackers: PropTypes.array
  },

  render() {
    let {trackers} = this.props

    return (
      <div>
        <Flexbox tag='ul' direction='column' wrap='wrap' align='center'>
          {trackers.map((tracker, idx) => {
            return <li style={styles.item} key={idx}>{tracker}</li>
          })}
        </Flexbox>
      </div>
    );
  }

})

let styles = {
  item: {listStyle: 'none', fontSize: 14, color: 'navy'}
};

export default List;
