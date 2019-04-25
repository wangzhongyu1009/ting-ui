<template>
  <div class="select">
    <span v-if="label" class="label" :style="labelStyle">{{label}}：</span>
    <Select :value="value" @input="inputFun" :filterable="filterable" :placeholder="placeholder" @on-change="onChange">
      <Option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </Option>
    </Select>
  </div>
</template>

<script>
import { Select, Option } from 'iview'
  export default {
    name: 'TSelect',
    data () {
      return {
        labelStyle: {
          width: this.labelWidth + 'px'
        }
      }
    },
    components: {
      Select,
      Option
    },
    props: {
      placeholder: {
        type: String,
        required: false,
        default: '请选择'
      },
      label: {
        type: String,
        required: false,
        default: '下拉框'
      },
      value: {
        type: String,
        required: false,
        default: ''
      },
      options: {
        type: Array,
        required: false,
        default: () => []
      },
      labelWidth: {
        type: Number,
        required: false,
        default: 80
      },
      filterable: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    computed: {

    },
    methods: {
      inputFun ($event) {
        this.$emit('input', $event)
      },
      onChange (item) {
        this.$emit('on-change', item)
      }
    }
  }
</script>

<style lang="scss" scoped>
.select /deep/ .ivu-select-selection {
 font-size: 12px;
 height: 28px;
 line-height: 28px;
}
.select /deep/ .ivu-select-input {
 font-size: 12px;
 height: 28px;
 line-height: 28px;
}
.select /deep/ .ivu-select {
 width: 173px;
}
.select {
  & > span {
    font-size: 12px;
    color: #666;
  }
  .label {
    display: inline-block;
    text-align: right;
    vertical-align: middle;
  }
}
</style>
