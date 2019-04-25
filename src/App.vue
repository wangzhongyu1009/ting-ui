<template>
  <div id="app">
    <t-search @table-search="search" :options="searchOptions" :operate="searchOperate" @exportExcel="exportExcel" @add="add"></t-search>

    <t-table multiple @multiple-select="multipleSelect" @aaa="aaa" @bbb="bbb" :tableData="tableData" pagination :columns="columns" @pagination-change="paginationChange" :paginationOption="paginationOption" :operate="operate"></t-table>
    
    <t-info :formData="formData" :operate="formOperate"></t-info>

    <t-dialog-form :items="items" buttonText="新增" larger title="添加车队" @submit="submit" labelPosition="right"></t-dialog-form>

    <t-dialog buttonText="提示" larger title="提示" @submit="submit" :contentText="contentText"></t-dialog>
  </div>
</template>

<script>
import AppMixins from './App.mixins'
export default {
  mixins: [AppMixins],
  name: 'app',
  data () {
    return {
      contentText: '您正在进行设备【12345】注销操作，该操作会导致相关联的设备和系统无法使用，是否要矩形这项操作？',
      items: [{
        type: 'input',
        key: 'name',
        placeholder: '请输入',
        label: '姓名：',
        required: true,
        message: '姓名不可为空'
      },{
        type: 'select',
        key: 'city',
        placeholder: '请输入',
        label: '城市：',
        required: true,
        message: '城市不能为空',
        options: [{
          label: '北京市',
          value: 'beijing'
        },{
          label: '上海市',
          value: 'shanghai'
        },{
          label: '广州市',
          value: 'guangzhou'
        }]
      },{
        type: 'checkbox',
        key: 'fruit',
        label: '报警提示种类：',
        required: true,
        message: '勾选种类',
        min: 1,
        minMessage: '最少勾选一个',
        max: 2,
        maxMessage: '最多勾选两个',
        checkboxs: [{
          label: 'hahah',
          value: 1
        },{
          label: 'asdasd',
          value: 2
        },{
          label: 'zxzxc',
          value: 3
        }]
      },{
        type: 'textarea',
        key: 'des',
        placeholder: '请输入',
        label: 'hahahaha：',
        required: true,
        message: '姓名不可为空'
      },{
        type: 'carno',
        key: 'carnoaa'
      },{
        type: 'carno',
        key: 'carnobb'
      },{
        type: 'uploadfile',
        key: 'img',
        label: '上传行驶证：',
        required: true,
        message: '请上传图片'
      },{
        type: 'uploadfile',
        key: 'img2',
        label: '上传行驶证：',
        required: true,
        message: '请上传图片'
      }],
      searchOptions: [{
        type: 'input',
        key: 'value1',
        value: '1',
        label: '测试',
        placeholder: '请输入操作人',
        labelWidth: 60
      },{
        type: 'select',
        key: 'value2',
        value: '',
        label: '操作人啊dd',
        placeholder: '请输入操作人',
        labelWidth: 80,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]
      },{
        type: 'input',
        key: 'value3',
        value: ''
      },{
        type: 'select',
        key: 'value4',
        value: ''
      },{
        type: 'input',
        key: 'value5',
        value: ''
      },{
        type: 'select',
        key: 'value6',
        value: ''
      },{
        type: 'input',
        key: 'value5',
        value: ''
      },{
        type: 'select',
        key: 'value6',
        value: ''
      },{
        type: 'carno',
        key: 'value9',
        value: ''
      },{
        type: 'date',
        label: '入网时间',
        labelWidth: 80,
        startKey: 'value7',
        startValue: '',
        endKey: 'value8',
        endValue: ''
      }],
      searchOperate: [{
        text: '导出',
        method: 'exportExcel'
      },{
        text: '新增',
        method: 'add'
      }]
    }
  },
  methods: {
    aaa (item) {
      console.log(item)
    },
    bbb (item) {
      console.log(item)
    },
    paginationChange (params) {
      console.log(params)
    },
    search (item) {
      console.log(item)
    },
    exportExcel () {
      console.log('自定义按钮---导出')
    },
    add () {
      console.log('自定义按钮---新增')
    },
    multipleSelect (val) {
      console.log(val, '已选条目')
    },
    submit (formData) {
      console.log(formData)
    }
  }
}
</script>
