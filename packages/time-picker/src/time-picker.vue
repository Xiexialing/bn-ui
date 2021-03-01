<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
    <el-time-select
      v-if="select"
      :value="value"
      v-bind="$attrs"
      :value-format="valueFormat"
      :picker-options="pickerOptions"
      :placeholder="placeholder"
      @input="onInput"
      @change="onChange"
    />
    <el-time-picker
      v-else
      :value="value"
      v-bind="$attrs"
      :value-format="valueFormat"
      :picker-options="pickerOptions"
      :placeholder="placeholder"
      @input="onInput"
      @change="onChange"
    />
  </el-form-item>

</template>

<script>
  import submitMixin from '@/mixins/submit'
  export default {
    name: "BnTimePicker",
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
      select: {
        type: Boolean
      },
      'value-format': {
        type: String,
        default: 'HH:mm:ss'
      },
      'picker-options': {
        type: Object
      },
      placeholder: {
        type: String,
        default: '请选择时间'
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
