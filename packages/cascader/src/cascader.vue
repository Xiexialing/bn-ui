<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
  <el-cascader
    v-bind="$attrs"
    :value="value"
    :options="options"
    :clearable="clearable"
    :filterable="filterable"
    @input="onInput"
    @change="onChange"
    @blur="onBlur"
    @focus="onFocus"
    @expand-change="onExpandChange"
    @visible-change="onVisibleChange"
    ref="cascader"
  >
    <template slot-scope="{ node, data }" v-if="total">
      <span>{{ data.label }}</span>
      <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
    </template>
  </el-cascader>
  </el-form-item>
</template>

<script>
  import submitMixin from '@/mixins/submit'
  export default {
    name: "BnCascader",
    props: {
      value: '',
      options: {
        type: Array,
        default() {
          return [
            {label: '', value: ''}
          ]
        }
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
      clearable: {
        type: Boolean,
        default: true
      },
      filterable: {
        type: Boolean,
        default: true
      },
      total: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      popperAppendToBody: {
        type: Boolean,
        default: true
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
      },
      onFocus(event) {
        this.$emit('focus', event)
      },
      onBlur(event) {
        this.$emit('blur', event)
      },
      onExpandChange(arr) {
        this.$emit('expand-change', arr)
      },
      onVisibleChange(bool) {
        this.$emit('visible-change', bool)
      },
      onRemoveTag(tag) {
        this.$emit('visible-change', tag)
      },
      getCheckedNodes(bool = false) {
        return this.$refs.cascader.getCheckedNodes(bool)
      }
    }
  }
</script>

<style scoped>

</style>
