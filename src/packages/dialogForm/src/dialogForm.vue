<template>
  <div style="display:inline-block">
    <t-button :text="buttonText" :type="buttonType" :larger="larger" @click="openModal"></t-button>
    <Modal
      v-model="modal"
      :mask-closable="false"
      >
      <p slot="header" class="dialog_header">
        <span>{{title}}</span>
      </p>
      <div :class="labelClass">
        <div v-if="subTitle" class="sub_title">{{subTitle}}</div>
        <i-form ref="oForm" :model="formValidate" :rules="ruleValidate" :label-width="labelWidth" :label-position="labelPosition">
          <Form-item :label="item.label" :prop="item.key" v-for="(item,index) in items" :key="index" :class="item.type">

              <i-input v-if="item.type=='input'" v-model="formValidate[item.key]" :placeholder="item.placeholder"></i-input>

              <t-time-picker v-if="item.type=='time'" v-model="formValidate[item.key]" :placeholder="item.placeholder" label=""></t-time-picker>

              <i-select v-if="item.type=='select'" v-model="formValidate[item.key]" :placeholder="item.placeholder" :filterable="item.filterable">
                <i-option v-for="(option,optionIndex) in item.options" :key="optionIndex" :value="option.value">{{option.label}}</i-option>
              </i-select>

              <Checkbox-group v-if="item.type=='checkbox'" v-model="formValidate[item.key]">
                <Checkbox v-for="(checkbox,checkboxIndex) in item.checkboxs" :key="checkboxIndex" :label="checkbox.value">{{checkbox.label}}</Checkbox>
              </Checkbox-group>

              <i-input v-if="item.type=='textarea'" v-model="formValidate[item.key]" :placeholder="item.placeholder" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></i-input>

              <t-car-no
               v-if="item.type === 'carno'"
               ref="carNo"
               @car-no-change="carNoChange"
               :labelWidth="106"
               :itemKey="item.key"
               :provinceProp="''"
               :numberProp="''"
              ></t-car-no>

              <Upload
                ref="upload"
                v-if="item.type === 'uploadfile'"
                v-model="formValidate[item.key]"
                :show-upload-list="false"
                action="http"
                :before-upload="handleBeforeUpload"
              >
                <t-button :text="uploadBtnText" type="plain" @click="uploadClick(item.key)"></t-button>
              </Upload>
              <img
                v-if="item.type === 'uploadfile'"
                class="company_img"
                :src="formValidate[item.key]"
              >

              <t-tree ref="tree" v-if="item.type === 'tree'" :itemKey="item.key" :treeData="item.data" checkbox @onCheckChange="onCheckChange"></t-tree>

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
import { Modal, Form, FormItem, Input, Select, Option, CheckboxGroup, Checkbox, Upload, Tree } from 'iview'
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
      Checkbox,
      Upload,
      Tree
    },
    data () {
      return {
        modal: false,
        formValidate: {},
        ruleValidate: {},
        carNo: {},
        tree: {},
        currentKey: ''
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
      },
      uploadBtnText: {
        type: String,
        required: false,
        default: '上传图片'
      },
      subTitle: {
        type: String,
        required: false,
        default: ''
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
        return this.labelPosition === 'right' ? 110 : null
      },
      labelClass () {
        return this.labelPosition === 'right' ? 'label_right' : 'label_top'
      }
    },
    methods: {
      openModal () {
        if (this.$refs.carNo) {
          this.$refs.carNo.forEach(item => {
            item.province = ''
            item.number = ''
            item.provinceProp = ''
            item.numberProp = ''
          })
        }
        if (this.$refs.tree) {
          this.$refs.tree.forEach(item => {
            item.treeDataProp = JSON.parse(JSON.stringify(item.treeDataClone))
          })
        }
        this.carNo = {}
        this.tree = {}
        this.$refs['oForm'].resetFields()
        this.modal = true
      },
      submit () {
        this.$refs['oForm'].validate((valid) => {
          if (valid) {
            this.$emit('submit', Object.assign(this.formValidate,this.carNo,this.tree))
            this.modal = false
          }
        })
      },
      cancel () {
        this.modal = false
      },
      onCheckChange (val) {
        Object.assign(this.tree,val)
      },
      carNoChange (val) {
        Object.assign(this.carNo,val)
      },
      uploadClick (val) {
        this.currentKey = val
      },
      async handleBeforeUpload (file) {
        this.formValidate[this.currentKey] = await this.createFileReader(file)
        return false
      },
      createFileReader (file) {
        return new Promise((resolve) => {
          let reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = function () {
            resolve(this.result)
          }
          reader.onerror = function () {
            resolve(null)
          }
        })
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
.label_right /deep/ .carno {
  & > div {
    margin-left: 0 !important;
  }
}
.carno /deep/ .label {
  padding: 10px 12px 10px 0;
}
.carno /deep/ .select {
  line-height: 16px;
}
.uploadfile /deep/ .ivu-form-item-content {
  line-height: 10px;
}
.company_img {
  margin-top: 10px;
  width: 274px;
}
.sub_title {
  margin: 10px 0 20px;
}
</style>
