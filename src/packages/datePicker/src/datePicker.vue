<template>
  <div class="date_picker">
    <span v-if="label" class="label" :style="labelStyle">{{label}}：</span>
    <Date-picker v-model="startValue" type="date" format="yyyy-MM-dd" placement="bottom-end" :placeholder="placeholder[0]" style="width: 173px" :options="startOptions" @on-open-change="openStartDate" @on-change="startDateChange"></Date-picker>
    -
    <Date-picker v-model="endValue" type="date" format="yyyy-MM-dd" placement="bottom-end" :placeholder="placeholder[1]" style="width: 173px" :options="endOptions" @on-open-change="openEndDate" @on-change="endDateChange"></Date-picker>
  </div>
</template>

<script>
import { DatePicker } from 'iview'
  export default {
    name: 'TDatePicker',
    data () {
      return {
        labelStyle: {
          width: this.labelWidth + 'px'
        },
        startValue: this.startValueProp,
        endValue: this.endValueProp,
        startOptions: {},
        endOptions: {}
      }
    },
    components: {
      DatePicker
    },
    props: {
      placeholder: {
        type: Array,
        required: false,
        default: () => ['开始时间', '结束时间']
      },
      label: {
        type: String,
        required: false,
        default: '查询时间'
      },
      labelWidth: {
        type: Number,
        required: false,
        default: 80
      },
      startValueProp: {
        type: String,
        required: false,
        default: ''
      },
      endValueProp: {
        type: String,
        required: false,
        default: ''
      },
      startKey: {
        type: String,
        required: false,
        default: 'startDate'
      },
      endKey: {
        type: String,
        required: false,
        default: 'endDate'
      }
    },
    computed: {
      
    },
    methods: {
      openStartDate (val) {
        if (!val) return
        if (!this.endValue) {
          this.startOptions = {}
          return
        }
        let that = this
        this.startOptions = {
          disabledDate (date) {
            return date.valueOf() > that.endValue.valueOf()
          }
        }
      },
      openEndDate (val) {
        if (!val) return
        if (!this.startValue) {
          this.endOptions = {}
          return
        }
        let that = this
        this.endOptions = {
          disabledDate (date) {
            return date.valueOf() < that.startValue.valueOf()
          }
        }
      },
      startDateChange (val) {
        let params = {}
        params[this.startKey] = val
        this.$emit('getDate', params)
      },
      endDateChange (val) {
        let params = {}
        params[this.endKey] = val
        this.$emit('getDate', params)
      }
    }
  }
</script>

<style lang="scss" scoped>
.date_picker /deep/ .ivu-input-suffix i {
  line-height: 28px;
}
.date_picker /deep/ .ivu-input {
  height: 28px;
}
.label {
  display: inline-block;
  width: 80px;
  text-align: right;
  vertical-align: middle;
  color: #666;
}
</style>
