<template>
  <el-divider v-bind="$attrs">
    <slot v-if="$slots.default"></slot>
  </el-divider>
</template>

<script>
  export default {
    name: "BnDivider"
  }
</script>
