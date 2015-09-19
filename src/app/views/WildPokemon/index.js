import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWildPokemon } from './state/actions'

let fetchInterval = {}
function fetchCycle (action, timeout) {
  fetchInterval = setInterval(() => {
    action(getRandomIntInclusive(1, 150))
  }, timeout)
}

function getRandomIntInclusive (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const WildPokemonView = React.createClass({

  getInitialState () {
    return {
      size: {
        w: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 50,
        h: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 50
      }
    }
  },

  propTypes: {
    wildPokemon: PropTypes.object,
    fetchWildPokemon: PropTypes.func
  },

  componentDidMount () {
    const { fetchWildPokemon } = this.props
    fetchCycle(fetchWildPokemon, 500)
  },

  componentWillUnmount () {
    clearInterval(fetchInterval);
  },

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.wildPokemon.current.id !== this.props.wildPokemon.current.id
  },

  render () {
    const { size } = this.state
    const { wildPokemon } = this.props
    const { current } = wildPokemon
    let img
    return (
      <div>
        <div style={{
          position: 'absolute',
          top: getRandomIntInclusive(0, size.h),
          left: getRandomIntInclusive(0, size.w)
        }}>
          { img = current ? <img src={`http://pokeapi.co${current.image}`} /> : null }
        </div>
      </div>
    )
  }

})

export default connect(selector, boundActions)(WildPokemonView)

function selector (state) {

  const { wildPokemon } = state
  return {
    wildPokemon
  }
}

function boundActions (dispatch) {
  return {
    fetchWildPokemon: name => dispatch(fetchWildPokemon(name))
  }
}
