<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
    <el-radio-group :value="value" @input="onInput" v-bind="$attrs" @change="onChange">
      <template v-if="!button">
        <el-radio
          v-for="opt in options"
          :key="opt.value"
          :label="opt.value"
          :disabled="opt.disabled"
          :border="border"
        >{{opt.label}}
        </el-radio>
      </template>
      <template v-else>
        <el-radio-button
          v-for="opt in options"
          :key="opt.value"
          :label="opt.value"
          :disabled="opt.disabled"
          border>{{opt.label}}
        </el-radio-button>
      </template>
    </el-radio-group>
  </el-form-item>
</template>

<script>
  import submitMixin from '../../../src/mixins/submit'
  export default {
    name: "BocRadio",
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
      button: {
        type: Boolean // true为按钮模式  false为普通模式
      },
      border: {
        type: Boolean
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
