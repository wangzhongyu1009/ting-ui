<template>
  <div style="display:inline-block">
     <!-- 按钮
     * @type {primary:主要按钮}
     * @type {success:成功按钮}
     * @type {info:信息按钮}
     * @type {warning:警告按钮}
     * @type {error:危险按钮}
     * @type {text:文字按钮}
     * @type {plain:朴素模式}
     -->
    <Button
     v-if="typeProp"
     :type="typeProp"
     :disabled="disabled"
     :size="sizeProp"
     :loading="loading"
     @click="click"
    >{{text}}</Button>

    <Button
     v-if="!typeProp"
     :disabled="disabled"
     :size="sizeProp"
     :loading="loading"
     @click="click"
    >{{text}}</Button>
  </div>
</template>

<script>
import { Button } from 'iview'
  export default {
    name: 'TButton',
    data () {
      return {}
    },
    components: {
      Button
    },
    props: {
      type: {
        type: String,
        required: false,
        default: 'primary'
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      },
      loading: {
        type: Boolean,
        required: false,
        default: false
      },
      text: {
        type: String,
        required: false,
        default: '系统按钮'
      },
      larger: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    computed: {
      typeProp () {
        if (this.type === 'plain') {
          return ""
        } else {
          return this.type
        }
      },
      sizeProp () {
        if (this.larger) {
          return 'large'
        } else {
          return 'small'
        }
      }
    },
    methods: {
      click () {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
.ivu-btn {
 font-size: 12px;
 font-weight: 400;
 padding: 0px 21px;
 height: 28px;
 letter-spacing: 1px;
}
.ivu-btn-text {
  color: #0486FE;
  padding: 0 5px;
  font-weight: 500;
  letter-spacing: 1px;
  min-width: 10px;
}
.ivu-btn-text:focus {
  box-shadow: none;
}
.ivu-btn-text:hover {
  background: none;
}
.ivu-btn-large {
  height: 40px !important;
  font-size: 14px !important;
  min-width: 100px !important;
}
.ivu-btn-error {
  background-color: #F04134;
  border-color: #F04134;
}
</style>
