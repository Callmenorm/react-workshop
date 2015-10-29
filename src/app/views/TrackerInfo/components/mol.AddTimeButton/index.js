import React, {PropTypes} from 'react'

const AddTimeButton = React.createClass({
  propTypes: {
    onSubmit: PropTypes.func.isRequired
  },
  render () {
    return (
      <button>Button to add Time</button>
    )
  }
})

export default AddTimeButton
