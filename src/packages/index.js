import Table from './table/index.js'
import Switch from './switch/index.js'
import Button from './button/index.js'
import Search from './search/index.js'
import Input from './input/index.js'
import Select from './select/index.js'

const components = [
  Table,
  Switch,
  Button,
  Search,
  Input,
  Select
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
  Table,
  Switch,
  Button,
  Search,
  Input,
  Select
}
