import axios from 'axios'
import config from 'config.env'

const requestConfig = (config) => {
  return Object.assign({}, config, {
    url: config.dev.baseUrl + config.url
  })
}

axios.interceptors.request.use(requestConfig)

export default axios
