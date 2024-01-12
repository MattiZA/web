import ancestorMetaData from './ancestorMetaData'
import config from './config'
import navigation from './navigation'

const runtime = {
  namespaced: true,
  modules: {
    ancestorMetaData
  }
}

export default {
  modules: {
    config,
    navigation,
    runtime
  }
}
