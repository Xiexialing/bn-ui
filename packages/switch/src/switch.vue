<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
    <el-switch
      :value="value"
      v-bind="$attrs"
      :active-text="activeText"
      :inactive-text="inactiveText"
      @change="onChange"
      @input="onInput"
    >
    </el-switch>
  </el-form-item>
</template>

<script>
  import submitMixin from '@/mixins/submit'
  export default {
    name: "BnSwitch",
    props: {
      value: {
        type: Boolean
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
      'active-text': {
        type: String,
        default: 'ON'
      },
      'inactive-text': {
        type: String,
        default: 'OFF'
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
