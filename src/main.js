import Vue from 'vue'
import App from './App.vue'

import TingUI from './packages/index.js'
import {
  Table,
  TableColumn,
  Button,
  Pagination,
  Input,
  Select,
  Option
} from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(TingUI).use(Table).use(TableColumn).use(Button).use(Pagination)
Vue.use(Input).use(Select).use(Option)

new Vue({
  el: '#app',
  render: h => h(App)
})
