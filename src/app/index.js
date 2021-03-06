import './styles/main'
import React, { PropTypes } from 'react'
import { RouteHandler } from 'react-router'
import { connect } from 'react-redux'
import Nav from './components/org.Nav'
import Footer from './components/org.Footer'

const App = React.createClass({
  propTypes: {
    dispatch: PropTypes.func
  },

  componentDidMount() {
    const { dispatch } = this.props
  },

  render() {
    return (
      <div>
        <Nav />
          <RouteHandler />
        <Footer />
      </div>
    )
  }

})

export default connect()(App)
