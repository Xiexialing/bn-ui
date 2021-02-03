<template>
  <el-badge
    v-bind="$attrs"
    :value="value"
  >
    <slot></slot>
  </el-badge>
</template>

<script>
  export default {
    name: "BnBadge",
    props: {
      value: {
        type: Number | String
      }
    },
    methods: {
      onInput(val) {
        this.$emit('input', val)
      },
      onChange(val) {
        this.$emit('change', val)
      }
    }
  }
</script>

<style scoped>

</style>
