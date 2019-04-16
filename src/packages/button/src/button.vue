<template>
  <div>
     <!-- 按钮
     * @type {primary:主要按钮}
     * @type {success:成功按钮}
     * @type {info:信息按钮}
     * @type {warning:警告按钮}
     * @type {danger:危险按钮}
     * @type {text:文字按钮}
     * @plain {true:朴素模式}
     -->
    <el-button
     :type="type"
     :plain="plain"
     :disabled="disabled"
     :loading="loading"
     @click="click"
    >{{text}}</el-button>
  </div>
</template>

<script>
  export default {
    name: 'TButton',
    data () {
      return {}
    },
    props: {
      type: {
        type: String,
        required: false,
        default: 'primary'
      },
      plain: {
        type: Boolean,
        required: false,
        default: false
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
      }
    },
    computed: {
      
    },
    methods: {
      click () {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
.el-button {
 font-size: 12px;
 font-weight: 400;
 padding: 0px 21px;
 height: 28px;
}
</style>
