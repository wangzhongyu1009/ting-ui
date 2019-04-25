<template>
  <div style="display:inline-block">
    <t-button :text="buttonText" :type="buttonType" :larger="larger" @click="modal=true"></t-button>
    <Modal
      v-model="modal"
      :mask-closable="false"
      width="450"
      >
      <p slot="header" class="dialog_header">
        <span>{{title}}</span>
      </p>
      <div class="dialog_content">
        {{contentText}}
      </div>
      <div slot="footer">
        <t-button :text="cancelText" type="plain" @click="modal=false"></t-button>
        <t-button :text="submitText" @click="submit"></t-button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { Modal } from 'iview'
  export default {
    name: 'TDialog',
    data () {
      return {
        modal: false
      }
    },
    components: {
      Modal
    },
    props: {
      buttonText: {
        type: String,
        required: false,
        default: '弹窗'
      },
      buttonType: {
        type: String,
        required: false,
        default: 'primary'
      },
      larger: {
        type: Boolean,
        required: false,
        default: false
      },
      title: {
        type: String,
        required: false,
        default: '提示'
      },
      cancelText: {
        type: String,
        required: false,
        default: '取消'
      },
      submitText: {
        type: String,
        required: false,
        default: '确定'
      },
      contentText: {
        type: String,
        required: false,
        default: '这是一个确认的弹窗！'
      }
    },
    computed: {
      
    },
    methods: {
      submit () {
        this.modal = false
        this.$emit('submit')
      }
    }
  }
</script>

<style lang="scss" scoped>
.dialog_header {
  color: #666666;
  font-weight: 400;
  font-size: 14px;
}
.dialog_content {
  margin: 10px 40px 10px 35px;
  color: #333;
  font-size: 14px;
  text-align: center;
}
</style>
