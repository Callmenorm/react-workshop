import React, {PropTypes} from 'react'

const AddTimeButton = React.createClass({
  propTypes: {
    postNewTime: PropTypes.func.isRequired
  },
  render () {
    let postNewTime = this.props.postNewTime
    return (
      <button onClick={postNewTime}>Add Time</button>
    )
  }
})

export default AddTimeButton
