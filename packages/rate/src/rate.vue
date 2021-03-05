<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
  <el-rate
    v-bind="$attrs"
    :value="value"
    :colors="colors"
    :show-text="showText"
    :allow-half="allowHalf"
    @input="onInput"
    @change="onChange"
  >
  </el-rate>
  </el-form-item>
</template>

<script>
  import submitMixin from '../../../src/mixins/submit'
  export default {
    name: "BocRate",
    props: {
      value: {
        type: String | Number
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
      colors: {
        type: Array,
        default() {
          return ['#99A9BF', '#F7BA2A', '#FF9900']
        }
      },
      allowHalf: {
        type: Boolean,
        default: true
      },
      'show-text': {
        type: Boolean,
        default: true
      },
      'iconClasses': {
        type: Array,
        default() {
          return ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']
        }
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
