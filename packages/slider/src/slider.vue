<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
  <el-slider
    :value="value"
    v-bind="$attrs"
    :show-input="showInput"
    @input="onInput"
    @change="onChange"
  >
  </el-slider>
  </el-form-item>
</template>

<script>
  import submitMixin from '../../../src/mixins/submit'
  export default {
    name: "BocSlider",
    props: {
      value: {
        type: Number
      },
      'show-input': {
        type: Boolean,
        default: true
      },
      label: {
        type: String,
      },
      prop: {
        type: String
      },
      'label-width': {
        type: String
      }
    },
    mixins: [submitMixin],
    methods: {
      onInput(val) {
        this.$emit('input', val)
      },
      onChange(val) {
        const {onKeydown} = this
        if(onKeydown) {
          onKeydown()
        }
        this.$emit('change', val)
      }
    }
  }
</script>

<style scoped>

</style>
