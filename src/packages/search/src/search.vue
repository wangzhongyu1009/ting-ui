<template>
  <div class="search">
    <div class="searchInput" v-for="(item,index) in optionsProp" :key="index">

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
       filterable
       :placeholder="item.placeholder"
       :labelWidth="item.labelWidth"
       v-model="item['value']"
       :options="item.options"
      ></t-select>

      <t-date-picker
       v-if="item.type === 'date'"
       ref="datePicker"
       :label="item.label"
       :labelWidth="item.labelWidth"
       :startValue="item['startValue']"
       :endValue="item['endValue']"
       :startKey="item['startKey']"
       :endKey="item['endKey']"
       @getDate="getDate"
      ></t-date-picker>

      <t-car-no
       v-if="item.type === 'carno'"
       ref="carNo"
       @car-no-change="carNoChange"
       :labelWidth="item.labelWidth"
       :itemKey="item['key']"
       :provinceProp="''"
       :numberProp="''"
      ></t-car-no>
      
      <t-time-picker
       v-if="item.type === 'time'"
       :label="item.label"
       :labelWidth="item.labelWidth"
       :placeholder="item.placeholder"
       v-model="item['value']"
      ></t-time-picker>
    </div>

    <t-button text="重置" @click="reset"></t-button>
    <t-button text="筛选" @click="search"></t-button>

    <t-button v-for="(item,index) in operate" :key="item.method" :text="item.text" @click="searchMethods(item)"></t-button>
  </div>
</template>

<style lang="scss" scoped>
.search {
  margin-bottom: 10px;
  padding-bottom: 15px;
  background-color: #F7F7F7;
  border-radius: 4px;
  border: 1px solid #ECECEC;
  & > div {
    display: inline-block;
    margin: 15px 15px 0 0;
  }
}
</style>

<script>
  export default {
    name: 'TSearch',
    data () {
      return {
        optionsProp: this.options,
        optionsClone: '',
        dateObj: {},
        carNo: {}
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
          if (item.type != 'date') {
            params[item.key] = item.value ? item.value : ''
          }
        })
        this.$emit('table-search', Object.assign(params, this.dateObj, this.carNo))
      },
      reset () {
        if (this.$refs.datePicker) {
          this.$refs.datePicker.forEach(item => {
            item.startValue = ''
            item.endValue = ''
          })
        }
        if (this.$refs.carNo) {
          this.$refs.carNo.forEach(item => {
            item.province = ''
            item.number = ''
            item.provinceProp = ''
            item.numberProp = ''
          })
        }
        this.carNo = {}
        this.dateObj = {}
        this.optionsProp = JSON.parse(this.optionsClone)
      },
      searchMethods (item) {
        this.$emit(item.method)
      },
      getDate (item) {
        Object.assign(this.dateObj,item)
      },
      carNoChange (val) {
        this.carNo = val
      }
    }
  }
</script>
