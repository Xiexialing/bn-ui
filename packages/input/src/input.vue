<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
    <el-input
      v-bind="$attrs"
      :value="value"
      :clearable="clearable"
      :type="type"
      :show-password="type === 'password'"
      :autosize="autosize"
      :placeholder="placeholder"
      @input="onInput"
      @change="onChange"
      @keydown.native.enter="onKeydown"
    >
      <span v-if="$slots.prepend" slot="prepend"><slot name="prepend"/></span>
      <span v-if="$slots.append" slot="append"><slot name="append"/></span>
      <span v-if="$slots.suffix" slot="suffix"><slot name="suffix"/></span>
      <span v-if="$slots.prefix" slot="prefix"><slot name="prefix"/></span>
    </el-input>
  </el-form-item>
</template>

<script>
  import submitMixin from 'bn-ui/src/mixins/submit'

  export default {
    name: "BnInput",
    props: {
      value: {
        type: String
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
      type: {
        type: String
      },
      placeholder: {
        type: String,
        default: '请输入'
      },
      autosize: {
        type: Object,
        default() {
          return {
            minRows: 2, maxRows: 4
          }
        }
      },
      max: {
        type: Number | String
      }
    },
    mixins: [submitMixin],
    methods: {
      onInput(value) {
        const {max} = this
        if (max) value = value.slice(0, Number(max))
        this.$emit('input', value)
      },
      onChange(value) {
        value = value.trim()
        this.onInput(value)
        this.$emit('change', value)
      }
    }
  }
</script>

<style scoped>

</style>
