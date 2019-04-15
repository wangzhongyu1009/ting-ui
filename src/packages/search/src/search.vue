<template>
  <div class="search">
    <div v-for="(item,index) in optionsProp" :key="index">

      <t-input
      v-if="item.type === 'input'"
       :label="item.label"
       :placeholder="item.placeholder"
       :labelWidth="item.labelWidth"
       v-model="item['value']"
      ></t-input>

      <t-select
      v-if="item.type === 'select'"
       :label="item.label"
       :placeholder="item.placeholder"
       :labelWidth="item.labelWidth"
       v-model="item['value']"
       :options="item.options"
      ></t-select>

    </div>

    <t-button text="重置" @click="reset"></t-button>
    <t-button text="搜索" @click="search"></t-button>

    <t-button v-for="(item,index) in operate" :key="item.method" :text="item.text" @click="searchMethods(item)"></t-button>
  </div>
</template>

<style lang="scss" scoped>
.search {
  margin: 10px;
  & > div {
    display: inline-block;
    margin: 10px 20px 10px 0;
  }
}
</style>

<script>
  export default {
    name: 'TSearch',
    data () {
      return {
        optionsProp: this.options,
        optionsClone: ""
      }
    },
    props: {
      options: {
        type: Array,
        required: false,
        default: () => []
      },
      operate: {
        type: Array,
        required: false,
        default: () => []
      }
    },
    created () {
      this.optionsClone = JSON.stringify(this.options)
    },
    methods: {
      search () {
        let params = {}
        this.optionsProp.forEach(item => {
          params[item.key] = item.value
        })
        this.$emit('table-search', params)
      },
      reset () {
        this.optionsProp = JSON.parse(this.optionsClone)
      },
      searchMethods (item) {
        this.$emit(item.method)
      }
    }
  }
</script>
