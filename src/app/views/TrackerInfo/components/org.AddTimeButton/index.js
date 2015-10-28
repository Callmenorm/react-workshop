import React, {PropTypes} from 'react'
import View from 'react-flexbox'

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
