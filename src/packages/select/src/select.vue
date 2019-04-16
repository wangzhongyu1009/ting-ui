<template>
  <div class="select">
    <span class="label" :style="labelStyle">{{label}}：</span>
    <el-select :value="value" @input="inputFun" size="mini" filterable :placeholder="placeholder">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    name: 'TSelect',
    data () {
      return {
        labelStyle: {
          width: this.labelWidth + 'px'
        }
      }
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
        default: 60
      }
    },
    computed: {

    },
    methods: {
      inputFun ($event) {
        this.$emit('input', $event)
      }
    }
  }
</script>

<style lang="scss" scoped>
.select /deep/ .el-input__inner {
 font-size: 12px;
 height: 28px;
 line-height: 28px;
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
