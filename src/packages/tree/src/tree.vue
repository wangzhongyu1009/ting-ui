<template>
  <div class="tree">
    <Tree ref="oTree" :class="treeClass" :data="treeDataProp" :show-checkbox="checkbox" @on-check-change="onCheckChange"></Tree>
  </div>
</template>

<script>
import { Tree } from 'iview'
export default {
  name: 'TTree',
  components: {
    Tree
  },
  props: {
    treeData: {
      type: Array,
      required: false,
      default: () => []
    },
    itemKey: {
      type: String,
      required: false,
      default: 'tree'
    },
    checkbox: {
      type: Boolean,
      required: false,
      default: false
    },
    select: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      treeDataProp: this.treeData,
      treeDataClone: JSON.parse(JSON.stringify(this.treeData))
    }
  },
  computed: {
    treeClass () {
      return this.select ? 'normal_form_tree' : 'form_tree'
    }
  },
  methods: {
    onCheckChange (val) {
      let params = {}
      let idArr = []
      val.forEach(item => {
        idArr.push(item.id)
      })
      params[this.itemKey] = idArr
      this.$emit('onCheckChange', params)
    }
  }
}
</script>

<style lang="scss" scoped>
.form_tree /deep/ li {
  margin: 0;
}
.normal_form_tree /deep/ li {
  margin: 0;
}
.form_tree /deep/ .ivu-tree-title-selected {
  background-color: rgba(0,0,0,0);
}
.form_tree /deep/ .ivu-tree-title-selected:hover {
  background-color: rgba(0,0,0,0);
}
.form_tree /deep/ .ivu-tree-title:hover {
  background-color: rgba(0,0,0,0);
}
</style>
