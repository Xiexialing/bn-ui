<template>
  <el-link
    v-bind="$attrs"
    :type="type"
    :underline="underline"
    @click="onClick"
  >
    <slot/>
  </el-link>
</template>

<script>
  export default {
    name: "BnLink",
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      underline: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped>

</style>
