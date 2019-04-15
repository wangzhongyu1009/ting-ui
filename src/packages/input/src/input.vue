<template>
  <div class="input">
    <span class="label" :style="labelStyle">{{label}}：</span>
    <el-input :value="value" @input="inputFun" :placeholder="placeholder"></el-input>
  </div>
</template>

<script>
  export default {
    name: 'TInput',
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
        default: '请输入内容'
      },
      label: {
        type: String,
        required: false,
        default: '文本框'
      },
      value: {
        type: String,
        required: false,
        default: ''
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
.input /deep/ .el-input__inner {
 height: 34px;
 line-height: 34px;
 font-size: 12px;
}
.input {
  & > span {
    font-size: 12px;
    color: #666;
  }
  & > .el-input {
    display: inline-block;
    width: auto;
    min-width: 173px;
  }
  .label {
    display: inline-block;
    width: 60px;
    text-align: right;
    vertical-align: middle;
  }
}
</style>
