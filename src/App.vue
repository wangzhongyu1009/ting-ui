<template>
  <div id="app">
    <t-search @table-search="search" :options="searchOptions" :operate="searchOperate" @exportExcel="exportExcel" @add="add"></t-search>
    <t-table theme="light" multiple @aaa="aaa" @bbb="bbb" :tableData="tableData" pagination :columns="columns" @pagination-change="paginationChange" :paginationOption="paginationOption"></t-table>
  </div>
</template>

<script>
import AppMixins from './App.mixins'
export default {
  mixins: [AppMixins],
  name: 'app',
  data () {
    return {
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
    }
  }
}
</script>
