<template>
  <el-alert
    v-bind="$attrs"
    :title="title"
    :type="type"
    :show-icon="showIcon"
    @close="onClose"
  >
    <slot v-if="$slots.default"></slot>
    <slot v-if="$slots.title" name="title"></slot>
  </el-alert>
</template>

<script>
  export default {
    name: "BocAlert",
    props: {
      type: {
        type: String,
        default: 'warning'
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      title: {
        type: String
      }
    },
    methods: {
      onClose() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>

</style>
