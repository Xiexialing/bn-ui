<template>
  <el-backtop
    v-bind="$attrs"
    :target="target"
    @click="onClick"
  ></el-backtop>
</template>

<script>
  export default {
    name: "BocBacktop",
    props: {
      target: {
        type: String,
        default: '.page-component__scroll .el-scrollbar__wrap'
      }
    },
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>
