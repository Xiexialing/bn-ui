<template>
  <el-progress
    v-bind="$attrs"
    :type="type"
    :percentage="percentage"
    :text-inside="type === 'line' ? textInside : false"
    :strokeWidth="strokeWidth"
  ></el-progress>
</template>

<script>
  export default {
    name: "BnProgress",
    props: {
      percentage: {
        type: Number
      },
      type: {
        type: String,
        default: 'line'
      },
      textInside: {
        type: Boolean,
        default: true,
      },
      strokeWidth: {
        type: Number,
        default: 16
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
