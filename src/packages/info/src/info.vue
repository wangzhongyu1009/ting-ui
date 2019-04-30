<template>
  <div class="info">

    <div :class="operate.length ? 'haveBtn' : 'noBtn'">
      <div class="container" v-for="(items,index) in formData" :key="index">
        <div v-for="(item,itemIndex) in items" :key="itemIndex">
          <span class="label">{{item.label}}：</span>
          <span class="value">{{item.value}}</span>
        </div>
      </div>
    </div>

    <div style="margin-left:50px" :style="{'width': operateWidth + 'px'}" v-if="operate.length">
      <t-button v-for="(item,index) in operate" :key="index" :text="item.label" :type="item.type" style="margin-right: 8px" @click="outputEmit(item)"></t-button>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.info {
  margin-bottom: 10px;
  padding: 20px 50px;
  background-color: #F7F7F7;
  border-radius: 4px;
  border: 1px solid #ECECEC;
  .label {
    color: rgba(0,0,0,0.65);
    display: inline-block;
    width: 90px;
    text-align: right;
  }
  .value {
    font-weight: 400;
    display: inline-block;
    width: 150px;
    text-align: left;
  }
  & > div {
    display: inline-block;
    vertical-align: middle;
  }
  .container {
    & > div {
      display: inline-block;
      margin: 5px 0;
    }
  }
  .container:last-child {
    margin-bottom: 0;
  }
}
.haveBtn {
  max-width:calc(100% - 260px);
}
.noBtn {
  max-width:100%;
}
</style>

<script>
  export default {
    name: 'TInfo',
    data () {
      return {
        
      }
    },
    props: {
      formData: {
        type: Array,
        required: false,
        default: () => []
      },
      operate: {
        type: Array,
        required: false,
        default: () => []
      },
      operateWidth: {
        type: Number,
        required: false,
        default: 160
      }
    },
    created () {

    },
    methods: {
      outputEmit (item) {
        this.$emit(item.method)
      }
    }
  }
</script>
