<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
    <el-input-number
      :value="value"
      controls-position="right"
      v-bind="$attrs"
      :min="min || 0"
      @input="onInput"
      @change="onChange"
      @blur="onBlur"
      @keydown.native.enter="onKeydown"
    />
  </el-form-item>
</template>

<script>
  import submitMixin from '../../../src/mixins/submit'
  export default {
    name: "BocInputNumber",
    props: {
      value: {
        type: Number
      },
      label: {
        type: String,
      },
      prop: {
        type: String
      },
      'label-width': {
        type: String
      },
      min: {
        type: Number
      }
    },
    mixins: [submitMixin],
    methods: {
      onInput(value) {
        this.$emit('input', value)
      },
      onChange(value) {
        this.$emit('change', value)
      },
      onBlur(value) {
        this.$emit('blur', value)
      }
    }
  }
</script>

<style scoped>

</style>
