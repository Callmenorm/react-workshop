import React, {PropTypes} from 'react'
import Flexbox from 'obj.Flexbox'

const AddTrackerForm = React.createClass({
  getInitialState () {
    return {
      inputValue: ''
    }
  },

  propTypes: {
    onUpdate: PropTypes.func.isRequired
  },

  updateInput (inputValue) {
    this.setState({
      inputValue
    })
  },

  onChange (e) {
    this.updateInput(e.target.value)
  },

  // TODO: We actually want to do some validation here
  onSubmit () {
    let {inputValue} = this.state
    let {onUpdate} = this.props
    this.updateInput('')
    onUpdate(inputValue)
  },

  render () {
    let {onSubmit, onChange} = this
    let {inputValue} = this.state

    return (
      <Flexbox
        tag='form' { ...{onSubmit}}
        direction='column'
        justify='center' align='center'>
        <input onChange={onChange} value={inputValue}/>
        <div>
          <button onSubmit={onSubmit}>Create New Tracker</button>
        </div>
      </Flexbox>
    )
  }

})

export default AddTrackerForm
