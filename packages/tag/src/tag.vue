<template>
  <el-tag
    v-bind="$attrs"
    :effect="effect"
    @click="onClick"
    @close="onClose"
  >{{label}}
  </el-tag>
</template>

<script>
  export default {
    name: "BnTag",
    props: {
      label: {
        type: String,
      },
      effect: {
        type: String,
        default: 'dark'
      }
    },
    methods: {
      onClick() {
        this.$emit('click')
      },
      onClose() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>

</style>
