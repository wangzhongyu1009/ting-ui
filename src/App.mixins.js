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
          method: 'aaa'
        },{
          label: '编辑',
          method: 'bbb'
        }]
      }],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
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
      }
    }
  }
}