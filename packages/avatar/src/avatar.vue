<template>
  <el-avatar
    v-bind="$attrs"
    :icon="icon"
    :size="size"
    :src="src"
    @error="onError"
  >
    <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
  </el-avatar>
</template>

<script>
  export default {
    name: "BnAvatar",
    props: {
      icon: {
        type: String
      },
      src: {
        type: String,
        default: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      },
      size: {
        type: Number,
        default: 50
      }
    },
    methods: {
      onError() {
        this.$emit('error')
      }
    }
  }
</script>

<style scoped>

</style>
