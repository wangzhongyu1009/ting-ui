<template>
  <div class="input">
    <span v-if="label" class="label" :style="labelStyle">{{label}}：</span>
    <TimePicker :value="value" type="time" @input="inputFun" :placeholder="placeholder" @on-change="onChange"></TimePicker>
  </div>
</template>

<script>
import { TimePicker } from 'iview'
  export default {
    name: 'TTimePicker',
    data () {
      return {
        labelStyle: {
          width: this.labelWidth + 'px'
        }
      }
    },
    components: {
      TimePicker
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
      }
    },
    computed: {
      
    },
    methods: {
      inputFun ($event) {
        this.$emit('input', $event)
      },
      onChange (val) {
        this.$emit('on-change', val)
      }
    }
  }
</script>

<style lang="scss" scoped>
.input /deep/ .ivu-input {
 height: 28px;
 line-height: 28px;
 font-size: 12px;
 width: 178px;
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
.input /deep/ i {
  line-height: 28px;
}
</style>
