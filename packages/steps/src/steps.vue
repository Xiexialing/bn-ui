<template>
  <el-steps
    v-bind="$attrs"
    :active="value"
    :finish-status="finishStatus"
    :align-center="alignCenter"
    :direction="direction"
    :simple="simple"
  >
    <el-step
      v-for="step in data"
      :key="step.value"
      :title="step.label"
      :description="step.description"
      :icon="step.icon"
    ></el-step>
  </el-steps>
</template>

<script>
  export default {
    name: "BnSteps",
    props: {
      value: {
        type: Number,
        default: 0
      },
      data: {
        type: Array,
        default() {
          return [
            {label: '', value: ''}
          ]
        }
      },
      finishStatus: {
        type: String,
        default: 'success'
      },
      alignCenter: {
        type: Boolean,
        default: true
      },
      simple: {
        type: Boolean,
        default: true
      },
      direction: {
        type: String,
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
