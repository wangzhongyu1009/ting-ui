import TimePicker from './src/timePicker'

TimePicker.install = function (Vue) {
  Vue.component(TimePicker.name, TimePicker)
}

export default TimePicker