import Vue from 'vue'
import App from './App.vue'

import TingUI from './packages/index.js'

Vue.use(TingUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
