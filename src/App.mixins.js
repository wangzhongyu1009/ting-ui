export default {
  data () {
    return {
      // table
      columns: [{
        title: '日期',
        key: 'date',
        minWidth: 120
      },{
        title: '日期',
        key: 'date',
        minWidth: 120
      },{
        title: '日期',
        key: 'date',
        minWidth: 120
      },{
        title: '日期',
        key: 'date',
        minWidth: 120
      },{
        title: '日期',
        key: 'date',
        minWidth: 120
      },{
        title: '日期',
        key: 'date',
        minWidth: 120
      },{
        title: '日期',
        key: 'date',
        minWidth: 120
      },{
        title: '操作',
        width: 150,
        fixed: 'right',
        slot: 'operate',
        operate: [{
          label: '查看',
          method: 'aaa',
          disabled: 'detailDisabled'
        },{
          label: '编辑',
          method: 'bbb',
          disabled: 'editDisabled'
        }]
      }],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        detailDisabled: true,
        editDisabled: true
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        detailDisabled: false,
        editDisabled: true
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        detailDisabled: true,
        editDisabled: false
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        detailDisabled: false,
        editDisabled: false
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      // 分页
      paginationOption: {
        // 总数
        total: 100,
        // 当前页码
        pageNum: 1,
        // 每页显示个数
        pageSize: 10,
        pageSizes: [10, 20, 30, 40]
      },
      operate: [{
        label: '导出所有',
        method: 'ExportAll',
        type: 'danger'
      },{
        label: '导出所选',
        method: 'ExportSelect',
        type: 'primary'
      }],
      formOperate: [{
        label: '下载',
        method: 'download',
        type: 'error'
      },{
        label: '下载',
        method: 'download2'
      }],
      formData: [[
        {
          label: '所属名称',
          value: '北京第一公交公司'
        },
        {
          label: '所属名称',
          value: '北京第一公交公司'
        },
        {
          label: '所属名称',
          value: '北京第一公交公司'
        },
        {
          label: '所属名称',
          value: '北京第一公交公司'
        },
        {
          label: '所属名称',
          value: '北京第一公交公司'
        },
        {
          label: '所属名称',
          value: '北京第一公交公司'
        },
        {
          label: '所属名称',
          value: '北京第一公交公司'
        }
      ],[
        {
          label: '所属名称',
          value: '北京第一公交公司'
        },
        {
          label: '所属名称',
          value: '北京第一公交公司'
        },
        {
          label: '所属名称',
          value: '北京第一公交公司'
        },
        {
          label: '所属名称',
          value: '北京第一公交公司'
        }
      ]]
    }
  }
}