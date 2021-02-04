<template>
  <el-tag
    v-bind="$attrs"
    :size="size"
    @click="onClick"
    @close="onClose"
  >
    <slot v-if="$slots.default"/>
    <span v-else>{{label}}</span>
  </el-tag>
</template>

<script>
  export default {
    name: "BnTag",
    props: {
      label: {
        type: String,
      },
      size: {
        type: String,
        default: 'small'
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
