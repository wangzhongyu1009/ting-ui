<template>
  <div class="table">
    <Table
      :data="tableData"
      :columns="columnsProp"
      :border="true"
      @on-selection-change="handleSelectionChange"
      >
      
      <template v-for="operate in operateData" slot-scope="{row,index}" :slot="operate.slot">
        <span>
          <t-button
          :class="item['type']"
           v-for="(item,index) in operate.operate"
           :key="index"
           @click="handleClick(row, item.method)"
           type="text"
           :text="item.label"
           :disabled="row[item.disabled]"
          ></t-button>
        </span>
      </template>

    </Table>
    
    <div class="pagination" v-if="pagination">
      <Page
        @on-page-size-change="handleSizeChange"
        @on-change="handleCurrentChange"
        :current="paginationOption.pageNum"
        :page-size-opts="paginationOption.pageSizes"
        :page-size="paginationOption.pageSize"
        show-elevator
        show-sizer
        show-total
        size="small"
        :total="paginationOption.total">
      </Page>
    </div>

    <div class="export_btn">
      <t-button
        :class="item['type']"
        v-for="(item,index) in operate"
        :key="index"
        type="text"
        :text="item.label"
        @click="exportExcel(item)"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .ivu-btn-text.disabled, .ivu-btn-text.disabled.active, .ivu-btn-text.disabled:active, .ivu-btn-text.disabled:focus, .ivu-btn-text.disabled:hover, .ivu-btn-text[disabled], .ivu-btn-text[disabled].active, .ivu-btn-text[disabled]:active, .ivu-btn-text[disabled]:focus, .ivu-btn-text[disabled]:hover, fieldset[disabled] .ivu-btn-text, fieldset[disabled] .ivu-btn-text.active, fieldset[disabled] .ivu-btn-text:active, fieldset[disabled] .ivu-btn-text:focus, fieldset[disabled] .ivu-btn-text:hover {
  background-color: rgba(0,0,0,0);
  color: #CCC;
}
</style>
<style lang="scss" scoped>
.primary /deep/ .ivu-btn-text {
  color: #108EE9;
}
.danger /deep/ .ivu-btn-text {
  color: #F04134;
}
.table {
  position: relative;
  .export_btn {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.table /deep/ .ivu-table-header {
  th {
    border-right: none;
    background-color: #F7F7F7;
    color: #000;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    height: 50px;
    text-align: center;
  }
}
.table /deep/ .ivu-table-wrapper {
  border: 1px solid #ECECEC;
  border-right: 0;
  border-bottom: 0;
  border-radius: 4px 4px 0 0;
}
.table /deep/ .ivu-table-body {
  .ivu-table-cell {
    color: rgba(0,0,0,0.65);
    font-size: 12px;
    text-align: center;
  }
}
.table /deep/ .ivu-table-cell {
  padding: 0;
}
.table /deep/ .ivu-table th {
  height: 50px;
  text-align: center;
  border-bottom: 1px solid #ECECEC;
}
.table /deep/ .ivu-table-cell {
  text-align: center;
}

.pagination {
  text-align: right;
  margin: 10px 20px;
}
</style>

<script>
import { Table, Page } from 'iview'
export default {
  name: 'TTable',
  data () {
    return {

    }
  },
  components: {
    Table,
    Page
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
    operate: {
      type: Array,
      required: false,
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
      type: Object,
      required: false,
      default: () => {}
    }
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
    },
    operateData () {
      let arr = []
      this.columns.forEach(item => {
        if (item.operate) arr.push(item)
      })
      return arr
    },
    columnsProp () {
      if (this.multiple && this.columns.length > 0 && this.columns[0].type != 'selection') {
        this.columns.unshift({
          type: 'selection',
          align: 'center',
          width: 50
        })
      }
      return this.columns
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.$emit('multiple-select', val)
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
    },
    exportExcel (item) {
      this.$emit(item.method)
    }
  }
}
</script>
