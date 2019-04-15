<template>
  <div class="element-table">
    <el-table
      :data="tableData"
      :border="true"
      :show-header="true"
      :header-cell-class-name="themeClass"
      cell-class-name="headerTitleColor"
      @selection-change="handleSelectionChange"
      style="width:100%">

      <el-table-column
        type="selection"
        v-if="multiple"
      >
      </el-table-column>

      <el-table-column
        v-for="(item,index) in columns"
        :prop="item.value"
        :label="item.label"
        :key="index"
        class-name="commonColor"
        :min-width="item.width"
        >
        <template slot-scope="scope">
          <span v-if="!item.value">
            <el-button
             v-for="(operate,index) in item['operate']"
             :key="index"
             @click="handleClick(scope.row, operate.method)"
             type="text"
             size="small"
            >{{operate.label}}</el-button>
          </span>
          <span v-else>{{scope.row[item.value]}}</span>
        </template>
      </el-table-column>

    </el-table>
    
    <div class="pagination" v-if="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="paginationOption.pageNum"
        :page-sizes="paginationOption.pageSizes"
        :page-size="paginationOption.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="paginationOption.total">
      </el-pagination>
    </div>
  </div>
</template>

<style lang="scss">
.element-table {
  & > div {
    border-radius: 4px 4px 0 0;
  }
}
.titleColor{
  color: #0486FE;
}
.commonColor {
  color: rgba(0,0,0,0.65);
}
.header_color_normal {
  background-color: #f7f7f7 !important;
  color: #000;
  font-weight: 400;
  font-size: 12px;
}
.header_color_dark {
  background-color: #909399 !important;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
}
.header_color_brand {
  background-color: #409EFF !important;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
}
.title_border {
  border-right: none !important;
}
.el-table th>.cell{
  display: flex;
  justify-content: center;
}
.el-table .cell, .el-table th div{
  display: flex;
  justify-content: center;
}
.pagination {
  text-align: right;
  margin: 10px 20px;
}
</style>

<script>
  export default {
    name: 'TTable',
    data () {
      return {
        
      }
    },
    props: {
      columns: {
        type: Array,
        required: true,
        default: () => []
      },
      tableData: {
        type: Array,
        required: true,
        default: () => []
      },
      theme: {
        type: String,
        required: false,
        default: 'light'
      },
      multiple: {
        type: Boolean,
        required: false,
        default: false
      },
      titleBorder: {
        type: Boolean,
        required: false,
        default: false
      },
      pagination : {
        type: Boolean,
        required: false,
        default: false
      },
      paginationOption: {
        required: false,
        default: {
          total: 0,
          pageNum: 1,
          pageSize: 10,
          pageSizes: [10, 20, 30, 40]
        }
      },
    },
    computed: {
      themeClass () {
        let themeObj = {
          'light': 'header_color_normal',
          'dark': 'header_color_dark',
          'brand': 'header_color_brand'
        }
        if (!this.titleBorder) {
          themeObj = {
            'light': 'header_color_normal title_border',
            'dark': 'header_color_dark title_border',
            'brand': 'header_color_brand title_border'
          }
        }
        return themeObj[this.theme]
      }
    },
    methods: {
      handleSelectionChange () {

      },
      handleClick (item, method) {
        this.$emit(method, item)
      },
      handleSizeChange (val) {
        this.paginationOption.pageSize = val
        this.$emit('pagination-change', {
          pageNum: this.paginationOption.pageNum,
          pageSize: val
        })
      },
      handleCurrentChange (val) {
        this.paginationOption.pageNum = val
        this.$emit('pagination-change', {
          pageNum: val,
          pageSize: this.paginationOption.pageSize
        })
      }
    }
  }
</script>
