<template>
  <div>
    <div class="btn">这是一个按钮</div>

    <button class="button">我是一个按钮</button>
  </div>
</template>

<script>
  export default {
    name: 'TButton',
    data () {
      return {}
    },
    props: {
      
    },
    computed: {
      
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
.btn {
  color: red;
  font-size: 12px;
}
.button {
  padding: 5px;
  background-color: blue;
  color: #fff;
}
</style>
