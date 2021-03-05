<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
    <el-transfer
      v-bind="$attrs"
      :value="value"
      :data="options"
      @input="onInput"
      @change="onChange"
      :titles="title"
    >
    </el-transfer>
  </el-form-item>
</template>

<script>
  import submitMixin from '../../../src/mixins/submit'
  export default {
    name: "BocTransfer",
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
      options: {
        type: Array,
        default() {
          return []
        }
      },
      title: {
        type: Array,
        default() {
          return ['Source', 'Target']
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
