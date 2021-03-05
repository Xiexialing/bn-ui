<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
    <el-date-picker
      :value="value"
      v-bind="$attrs"
      align="right"
      :type="isRange ? 'datetimerange' : 'datetime'"
      placeholder="选择日期"
      :value-format="valueFormat"
      :range-separator="rangeSeparator"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      @input="onInput"
      @change="onChange"
    >
    </el-date-picker>
  </el-form-item>
</template>

<script>
  import submitMixin from '../../../src/mixins/submit'
  export default {
    name: "BocDateTimePicker",
    props: {
      value: {
        type: String | Date
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
      type: {
        type: String,
        default: 'date'
      },
      'is-range': {
        type: Boolean,
        default: true
      },
      placeholder: {
        type: String,
        default: '请选择日期'
      },
      'value-format': {
        type: String,
        default: 'yyyy-MM-dd HH:mm:ss'
      },
      'range-separator': {
        type: String,
        default: "至"
      },
      'start-placeholder': {
        type: String,
        default: "开始日期"
      },
      'end-placeholder': {
        type: String,
        default: "结束日期"
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
