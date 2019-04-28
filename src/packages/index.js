import Table from './table/index.js'
import Switch from './switch/index.js'
import Button from './button/index.js'
import Search from './search/index.js'
import Input from './input/index.js'
import Select from './select/index.js'
import DatePicker from './datePicker/index.js'
import CarNo from './carNo/index.js'
import Info from './info/index.js'
import Dialog from './dialog/index.js'
import DialogForm from './dialogForm/index.js'
import Step from './step/index.js'
import 'iview/dist/styles/iview.css'
const components = [
  Table,
  Switch,
  Button,
  Search,
  Input,
  Select,
  DatePicker,
  CarNo,
  Info,
  Dialog,
  DialogForm,
  Step
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
  Select,
  DatePicker,
  CarNo,
  Info,
  Dialog,
  DialogForm,
  Step
}
