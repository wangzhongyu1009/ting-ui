<template>
  <div style="display:inline-block">
    <t-button :text="buttonText" :larger="larger" @click="openModal"></t-button>
    <Modal
      v-model="modal"
      :mask-closable="false"
      >
      <p slot="header" class="dialog_header">
        <span>{{title}}</span>
      </p>
      <div :class="labelClass">
        <i-form ref="oForm" :model="formValidate" :rules="ruleValidate" :label-width="labelWidth" :label-position="labelPosition">
          <Form-item :label="item.label" :prop="item.key" v-for="(item,index) in items" :key="index">

              <i-input v-if="item.type=='input'" v-model="formValidate[item.key]" :placeholder="item.placeholder"></i-input>

              <i-select v-if="item.type=='select'" v-model="formValidate[item.key]" :placeholder="item.placeholder">
                <i-option v-for="(option,optionIndex) in item.options" :key="optionIndex" :value="option.value">{{option.label}}</i-option>
              </i-select>

              <Checkbox-group v-if="item.type=='checkbox'" v-model="formValidate[item.key]">
                <Checkbox v-for="(checkbox,checkboxIndex) in item.checkboxs" :key="checkboxIndex" :label="checkbox.value">{{checkbox.label}}</Checkbox>
              </Checkbox-group>

              <i-input v-if="item.type=='textarea'" v-model="formValidate[item.key]" :placeholder="item.placeholder" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></i-input>

          </Form-item>
        </i-form>
      </div>
      <div slot="footer">
        <t-button :text="cancelText" type="plain" @click="cancel"></t-button>
        <t-button :text="submitText" @click="submit"></t-button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { Modal, Form, FormItem, Input, Select, Option, CheckboxGroup, Checkbox } from 'iview'
  export default {
    name: 'TDialogForm',
    components: {
      Modal,
      IForm: Form,
      FormItem,
      IInput: Input,
      ISelect: Select,
      IOption: Option,
      CheckboxGroup,
      Checkbox
    },
    data () {
      return {
        modal: false,
        formValidate: {},
        ruleValidate: {}
      }
    },
    props: {
      items: {
        type: Array,
        required: false,
        default: () => []
      },
      buttonText: {
        type: String,
        required: false,
        default: '对话框'
      },
      larger: {
        type: Boolean,
        required: false,
        default: false
      },
      title: {
        type: String,
        required: false,
        default: '标题'
      },
      cancelText: {
        type: String,
        required: false,
        default: '取消'
      },
      submitText: {
        type: String,
        required: false,
        default: '确认'
      },
      labelPosition: {
        type: String,
        required: false,
        default: 'right'
      }
    },
    created () {
      const obj = {
        input: 'blur',
        select: 'change',
        checkbox: 'change'
      }
      let formObj = {}
      this.items.forEach(item => {
        formObj[item.key] = item.type == 'checkbox' ? [] : ""
        if (item.required) {
          if (item.type === 'checkbox') {
            this.ruleValidate[item.key] = [{
              required: true,
              message: item.minMessage ? item.minMessage : item.message,
              trigger: obj[item.type],
              type: 'array',
              min: item.min ? item.min : ''
            },{
              required: true,
              message: item.maxMessage ? item.maxMessage : item.message,
              trigger: obj[item.type],
              type: 'array',
              max: item.max ? item.max : ''
            }]
          } else {
            this.ruleValidate[item.key] = [{
              required: true,
              message: item.message,
              trigger: obj[item.type]
            }]
          }
        }
      })
      this.formValidate = formObj
    },
    computed: {
      labelWidth () {
        return this.labelPosition === 'right' ? 100 : null
      },
      labelClass () {
        return this.labelPosition === 'right' ? 'label_right' : 'label_top'
      }
    },
    methods: {
      openModal () {
        this.$refs['oForm'].resetFields()
        this.modal = true
      },
      submit () {
        this.$refs['oForm'].validate((valid) => {
          if (valid) {
            this.$emit('submit', this.formValidate)
            this.modal = false
          }
        })
      },
      cancel () {
        this.modal = false
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
.label_top {
  padding: 0 20px 0 20px;
}
.label_right {
  padding: 0 100px 0 20px;
}
</style>
