<template>
  <el-popover
    v-bind="$attrs"
    :content="content"
    :placement="placement"
    :trigger="trigger"
  >
    <slot />
    <template slot="reference">
      <slot name="reference"></slot>
    </template>
  </el-popover>
</template>

<script>
  export default {
    name: "BocPopover",
    props: {
      content: {
        type: String
      },
      placement: {
        type: String,
        default: 'right'
      },
      trigger: {
        type: String,
        default: 'hover'
      }
    }
  }
</script>

<style scoped>

</style>
