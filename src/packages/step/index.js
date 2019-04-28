import Step from './src/step'

Step.install = function (Vue) {
  Vue.component(Step.name, Step)
}

export default Step