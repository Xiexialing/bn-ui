<template>
  <el-popconfirm
    v-bind="$attrs"
    :title="title"
    :icon-color="iconColor"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <template slot="reference">
      <slot/>
    </template>
  </el-popconfirm>
</template>

<script>
  export default {
    name: "BnPopconfirm",
    props: {
      title: {
        type: String
      },
      iconColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      onConfirm() {
        this.$emit('confirm')
      },
      onCancel() {
        this.$emit('cancel')
      }
    }
  }
</script>

<style scoped>

</style>
