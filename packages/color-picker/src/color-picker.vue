<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
    <el-color-picker
      v-bind="$attrs"
      :value="value"
      @input="onInput"
      @change="onChange"
    >
    </el-color-picker>
  </el-form-item>
</template>

<script>
  import submitMixin from '@/mixins/submit'
  export default {
    name: "BnColorPicker",
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
