<template>
  <div class="input">
    <span v-if="label" class="label" :style="labelStyle">{{label}}：</span>
    <Input :value="value" @input="inputFun" :placeholder="placeholder" :maxlength="maxlength" @on-change="onChange"></Input>
  </div>
</template>

<script>
import { Input } from 'iview'
  export default {
    name: 'TInput',
    data () {
      return {
        labelStyle: {
          width: this.labelWidth + 'px'
        }
      }
    },
    components: {
      Input
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
        default: 80
      },
      maxlength: {
        type: Number,
        required: false,
        default: 10000
      }
    },
    computed: {
      
    },
    methods: {
      inputFun ($event) {
        this.$emit('input', $event)
      },
      onChange ($event) {
        this.$emit('on-change', $event.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
.input /deep/ .ivu-input {
 height: 28px;
 line-height: 28px;
 font-size: 12px;
}
.input {
  & > span {
    font-size: 12px;
    color: #666;
  }
  & > .ivu-input-wrapper {
    display: inline-block;
    width: auto;
    min-width: 173px;
  }
  .label {
    display: inline-block;
    width: 80px;
    text-align: right;
    vertical-align: middle;
  }
}
</style>
