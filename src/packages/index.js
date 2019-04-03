import Switch from './switch/index.js'
import Button from './button/index.js'

const components = [
  Switch,
  Button
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Switch,
  Button
}
