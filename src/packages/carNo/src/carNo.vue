<template>
  <div class="NumberPlate">
    <t-select
     style="display:inline-block"
     label="车牌号"
     placeholder="全部"
     :labelWidth="labelWidth"
     v-model="province"
     :options="areaList"
     @on-change="selectOnChange"
    ></t-select>
    <t-input
     style="display:inline-block;margin-left:-4px"
     placeholder="请输入车牌号"
     :maxlength="7"
     label=""
     v-model="number"
     @on-keyup="inputOnKeyUp"
     @on-change="inputOnChange"
    ></t-input>
  </div>
</template>

<script>
import IndexConfig from './index.config.json'
export default {
  name: 'TCarNo',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    provinceProp: {
      type: String,
      required: false,
      default: ''
    },
    numberProp: {
      type: String,
      required: false,
      default: ''
    },
    itemKey: {
      type: String,
      required: false,
      default: 'carNo'
    },
    labelWidth: {
      type: Number,
      required: false,
      default: 80
    }
  },
  computed: {
    areaList () {
      return IndexConfig.NumberPlate
    }
  },
  data () {
    return {
      province: this.provinceProp,
      number: this.numberProp
    }
  },
  watch: {
    
  },
  methods: {
    inputOnKeyUp () {
      this.number = this.number.replace(/[^a-zA-Z0-9]/g, '')
    },
    selectOnChange (item) {
      this.province = item
      this.outEmit()
    },
    inputOnChange (val) {
      this.number = val
      this.outEmit()
    },
    outEmit () {
      let params = {}
      if (this.province && this.number) {
        params[this.itemKey] = this.province + this.number
      } else {
        params[this.itemKey] = ''
      }
      this.$emit('car-no-change', params)
    }
  }
}
</script>

<style lang="scss" scoped>
.NumberPlate /deep/ .ivu-select-placeholder {
  height: 28px;
  line-height: 28px;
}
.NumberPlate /deep/ .ivu-select-selected-value {
  height: 28px;
  line-height: 28px;
  text-indent: 6px;
}
.NumberPlate /deep/ .ivu-select {
  width: 60px !important;
}
.NumberPlate /deep/ .ivu-select-selection {
  border-radius: 4px 0 0 4px;
  border-color: #dcdee2;
  box-shadow: none;
}
.NumberPlate /deep/ .ivu-select-selection:focused {
  border-color: #dcdee2;
}
.NumberPlate /deep/ .ivu-select-selection:hover {
  border-color: #dcdee2;
}
.NumberPlate /deep/ .ivu-select-visible {
  border-color: #dcdee2;
}
.NumberPlate /deep/ .ivu-input-wrapper {
  min-width: 113px !important;
  width: 113px !important;
}
.NumberPlate /deep/ .ivu-input {
  border-radius: 0 4px 4px 0;
  margin-left: -1px;
}
.NumberPlate /deep/ .ivu-select-dropdown-list {
  width: 276px;
  min-width: 264px;
  padding: 0 5px;
}
.NumberPlate /deep/ .ivu-select-item {
  clear: none;
  float: left;
  padding: 0;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 4px;
  border: 1px solid #ECECEC;
}
.NumberPlate /deep/ .ivu-select-item-selected, .ivu-select-item-selected:hover {
  color: #108EE9;
  border: 1px solid #108EE9;
}
.NumberPlate /deep/ .ivu-select-item:hover {
  color: #108EE9;
  background-color: #fff;
}
.NumberPlate /deep/ .ivu-select-item-focus {
  background-color: #fff;
}
.NumberPlate /deep/ .ivu-select-dropdown {
  max-height: 230px;
}
</style>
