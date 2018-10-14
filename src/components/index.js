import Box from './Box'
import Section from './Section'

const components = [
  Box,
  Section
]

const install = (Vue, opts = {}) => {
  if (install.installed) {
    return
  }

  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  Box,
  Section
}
